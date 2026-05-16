import { useState, useEffect, useCallback, useMemo } from 'react';

interface HexPosition {
  id: number;
  x: number;
  y: number;
}

const HEX_SIZE = 12;
const HEX_WIDTH = Math.sqrt(3) * HEX_SIZE;
const HEX_HEIGHT = HEX_SIZE * 2;
const SPACING = 18;
const CLOSE_THRESHOLD = 50;
const MEDIUM_THRESHOLD = 100;
const MIN_WIDTH = 800;
const MIN_HEIGHT = 600;

type HexDistance = 'close' | 'medium' | 'far';

export const useGrapheneRipples = (sectionRef: React.RefObject<HTMLElement | null>) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);

  const hexPositions = useMemo(() => {
    const width = sectionSize.width || MIN_WIDTH;
    const height = sectionSize.height || MIN_HEIGHT;
    
    const positions: HexPosition[] = [];
    const cols = Math.ceil(width / SPACING) + 4;
    const rows = Math.ceil(height / (HEX_HEIGHT * 0.75)) + 4;
    
    let id = 0;
    for (let row = -2; row < rows; row++) {
      for (let col = -2; col < cols; col++) {
        const xOffset = row % 2 === 0 ? HEX_WIDTH / 2 : 0;
        const x = col * SPACING + xOffset;
        const y = row * (HEX_HEIGHT * 0.75);
        
        if (x >= -50 && x <= width + 50 && y >= -50 && y <= height + 50) {
          positions.push({ id: id++, x, y });
          if (positions.length >= 150) break;
        }
      }
      if (positions.length >= 150) break;
    }
    return positions;
  }, [sectionSize]);

  useEffect(() => {
    const updateSize = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionSize({ width: rect.width, height: rect.height });
        setIsReady(true);
      }
    };

    updateSize();
    setTimeout(updateSize, 100);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [sectionRef]);

  const getHexDistance = useCallback((hexX: number, hexY: number): HexDistance => {
    const dx = hexX - mousePos.x;
    const dy = hexY - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < CLOSE_THRESHOLD) return 'close';
    if (distance < MEDIUM_THRESHOLD) return 'medium';
    return 'far';
  }, [mousePos]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, [sectionRef]);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  return {
    hexPositions,
    getHexDistance,
    handleMouseMove,
    handleMouseLeave,
    isReady,
  };
};