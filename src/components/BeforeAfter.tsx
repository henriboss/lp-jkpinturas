import React, { useCallback, useEffect, useRef, useState } from 'react';
import antesImg from '../assets/after-before/img-1.png';
import depoisImg from '../assets/after-before/img-2.png';
import antesImgWebp from '../assets/after-before/img-1.webp';
import depoisImgWebp from '../assets/after-before/img-2.webp';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  }, []);

  const startDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    updatePosition(clientX);
  }, [updatePosition]);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };
    const onStop = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onStop);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onStop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onStop);
    };
  }, [isDragging, updatePosition]);

  return (
    <section className="bg-industrial-dark py-10 md:py-section-padding">
      <div className="container-section">
        <div className="text-center mb-8 md:mb-[50px]">
          <div className="section-label">Resultados</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Resultado que usted<br /><span className="text-accent">puede ver.</span>
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-lg mt-8 md:mt-[50px] select-none bg-industrial-dark"
          style={{
            cursor: isDragging ? 'ew-resize' : 'col-resize',
            height: 'clamp(280px, 45vw, 550px)',
          }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <picture>
            <source srcSet={antesImgWebp} type="image/webp" />
            <img
              src={antesImg}
              alt="Antes"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </picture>

          <picture>
            <source srcSet={depoisImgWebp} type="image/webp" />
            <img
              src={depoisImg}
              alt="Depois"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              draggable={false}
            />
          </picture>

          {/* Handle */}
          <div
            className="absolute inset-y-0 z-10 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute inset-y-0 -translate-x-1/2 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5 pointer-events-auto cursor-col-resize hover:scale-110 transition-transform duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#333" style={{ transform: 'scaleX(-1)' }}>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#333">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="bg-black/60 text-[#ff6b35] font-display text-base md:text-lg font-black uppercase tracking-wider px-3 py-1 rounded">
              ANTES
            </span>
          </div>
          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <span className="bg-black/60 text-industrial-green font-display text-base md:text-lg font-black uppercase tracking-wider px-3 py-1 rounded">
              DESPUÉS
            </span>
          </div>

          {/* Badge */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-on-primary font-display text-sm font-black uppercase px-4 py-2 z-20 whitespace-nowrap rounded pointer-events-none">
            GOMA LÍQUIDA DURATEC
          </div>
        </div>

        {/* Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-6">
          <div className="p-4 bg-[rgba(255,107,53,0.05)] border border-[#2a2000] rounded">
            <p className="text-sm text-[#888] leading-relaxed">Filtración, grietas, moho y desgaste continuo sin protección adecuada.</p>
          </div>
          <div className="p-4 bg-[rgba(0,200,83,0.05)] border border-[#002a10] rounded">
            <p className="text-sm text-[#888] leading-relaxed">Superficie completamente protegida con membrana impermeabilizante durable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
