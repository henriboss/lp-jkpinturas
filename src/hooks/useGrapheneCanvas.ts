import { useRef, useEffect, useCallback } from 'react';

interface Hexagon {
  originalX: number;
  originalY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
}

const HEX_RADIUS = 14;
const SPACING = 20;
const CLOSE_THRESHOLD = 60;
const MEDIUM_THRESHOLD = 120;
const INFLUENCE_RADIUS = 80;
const MAX_DISPLACEMENT = 40;
const SPRING_STRENGTH = 0.08;
const DAMPING = 0.85;
const IDLE_TIMEOUT = 2000;
const FADE_SPEED = 0.02;

export const useGrapheneCanvas = (canvasRef: React.RefObject<HTMLCanvasElement | null>) => {
  const hexagons = useRef<Hexagon[]>([]);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const animationFrame = useRef<number>(0);
  const lastMouseMoveTime = useRef<number>(0);
  const isActive = useRef<boolean>(false);
  const animateRef = useRef<() => void>(() => {});

  useEffect(() => {
    lastMouseMoveTime.current = Date.now();
  }, []);

  const initHexagons = useCallback((width: number, height: number) => {
    const hexes: Hexagon[] = [];
    const hexHeight = HEX_RADIUS * 1.5;
    const cols = Math.ceil(width / SPACING) + 2;
    const rows = Math.ceil(height / hexHeight) + 2;

    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const offset = row % 2 === 0 ? 0 : SPACING / 2;
        const x = col * SPACING + offset;
        const y = row * hexHeight;
        hexes.push({
          originalX: x, originalY: y,
          x, y, vx: 0, vy: 0,
          alpha: 0, targetAlpha: 0,
        });
      }
    }
    hexagons.current = hexes;
  }, []);

  const drawHexagon = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, alpha: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const hx = x + radius * Math.cos(angle);
      const hy = y + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();

    const grayValue = 100 + (alpha * 80);
    const strokeColor = `rgba(${grayValue}, ${grayValue}, ${grayValue + 10}, ${alpha})`;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    if (alpha > 0.5) {
      ctx.shadowColor = `rgba(${grayValue}, ${grayValue}, ${grayValue + 10}, ${alpha * 0.8})`;
      ctx.shadowBlur = 8 * alpha;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const timeSinceMove = Date.now() - lastMouseMoveTime.current;
    isActive.current = timeSinceMove < IDLE_TIMEOUT;

    hexagons.current.forEach(hex => {
      const dx = hex.originalX - mousePos.current.x;
      const dy = hex.originalY - mousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let baseAlpha = 0;
      if (dist < CLOSE_THRESHOLD) {
        baseAlpha = 0.8 + (1 - dist / CLOSE_THRESHOLD) * 0.2;
      } else if (dist < MEDIUM_THRESHOLD) {
        const ratio = (dist - CLOSE_THRESHOLD) / (MEDIUM_THRESHOLD - CLOSE_THRESHOLD);
        baseAlpha = 0.8 - ratio * 0.7;
      }

      if (!isActive.current) {
        hex.targetAlpha = Math.max(hex.targetAlpha - FADE_SPEED, 0);
      } else {
        hex.targetAlpha = baseAlpha;
      }

      const springX = (hex.originalX - hex.x) * SPRING_STRENGTH;
      const springY = (hex.originalY - hex.y) * SPRING_STRENGTH;

      if (dist < INFLUENCE_RADIUS) {
        const influence = 1 - (dist / INFLUENCE_RADIUS);
        const pullStrength = influence * influence * MAX_DISPLACEMENT;
        const dirX = dx / dist || 0;
        const dirY = dy / dist || 0;
        hex.vx += dirX * pullStrength * 0.1;
        hex.vy += dirY * pullStrength * 0.1;
      }

      hex.vx += springX;
      hex.vy += springY;
      hex.vx *= DAMPING;
      hex.vy *= DAMPING;
      hex.x += hex.vx;
      hex.y += hex.vy;
      hex.alpha += (hex.targetAlpha - hex.alpha) * 0.12;

      if (hex.alpha > 0.01) {
        drawHexagon(ctx, hex.x, hex.y, HEX_RADIUS, hex.alpha);
      }
    });

    animationFrame.current = requestAnimationFrame(() => animateRef.current?.());
  }, [canvasRef, drawHexagon]);

  useEffect(() => {
    animateRef.current = animate;
  }, [animate]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    initHexagons(rect.width, rect.height);
    animateRef.current?.();

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, [canvasRef, initHexagons, animate]);

  const updateMouse = useCallback((x: number, y: number) => {
    mousePos.current = { x, y };
    lastMouseMoveTime.current = Date.now();
    isActive.current = true;
  }, []);

  return { updateMouse };
};
