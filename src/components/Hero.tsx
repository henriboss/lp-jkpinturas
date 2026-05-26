import React, { useRef } from 'react';
import { useGrapheneCanvas } from '../hooks/useGrapheneCanvas';
import { useGTMEvent } from '../hooks/useGTMEvent';
import gomaImg from '../assets/goma-2.png';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { updateMouse } = useGrapheneCanvas(canvasRef);
  const { trackWhatsAppClick } = useGTMEvent();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      updateMouse(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    updateMouse(-1000, -1000);
  };

  const handleOrcamento = () => {
    trackWhatsAppClick('hero_orcamento');
  };

  const handleCalculadora = () => {
    trackWhatsAppClick('hero_calculadora');
  };

  return (
    <section
      ref={sectionRef}
      className="bg-industrial-dark relative overflow-hidden py-[80px] pb-[60px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_80%_50%,rgba(212,196,23,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[60px] items-center max-w-container-max mx-auto px-gutter relative z-10">
        <div className="hero-content">
          <div className="inline-block bg-primary text-on-primary font-display text-xs font-black uppercase tracking-wider px-3 py-1 mb-5">
            Goma Líquida · Base Agua · Nanotecnología
          </div>
          <h1 className="text-display-hero text-industrial-white mb-3">
            Acabe con las<br />infiltraciones con<br /><em className="text-primary not-italic">una única solución.</em>
          </h1>
          <p className="font-body text-body-lg text-[#aaa] leading-relaxed mb-7 max-w-[520px]">
            La Goma Líquida Duratec crea una membrana flexible de alta protección contra agua, sol e intemperie — ideal para techos, paredes, metales, cerámicas, vidrios y más.
          </p>
          <ul className="list-none flex flex-wrap gap-x-[18px] gap-y-2 mb-9">
            {['Impermeabiliza y protege', 'Alta resistencia UV y lluvia', 'Múltiples superficies', 'Base agua, sin olor fuerte', 'Flexible, lavable y durable', 'Anti moho y anti bacterias'].map((item) => (
              <li key={item} className="text-sm font-semibold text-industrial-white flex items-center gap-1.5 before:content-['✓'] before:text-industrial-green before:font-black before:text-base">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-3.5 flex-wrap items-center">
            <a href="https://wa.me/595983891601" onClick={handleOrcamento} className="btn-primary">
              Solicitar Presupuesto →
            </a>
            <a href="#calculadora" onClick={handleCalculadora} className="btn-secondary">
              Calcular cuánto necesito
            </a>
          </div>
          <p className="mt-6 text-xs text-[#666] uppercase tracking-wider">
            Más protección · Menos retrabajo · Menos mantenimiento
          </p>
        </div>
        <div className="bg-industrial-dark-2 border border-[#2a2a2a] p-9 pb-6 text-center hidden lg:block">
          <div className="bg-industrial-dark border-b border-[#222] px-4 py-3 text-left -mt-9 -mx-6 mb-6">
            <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#555]">Goma Líquida · 16kg</span>
          </div>
          <div className="relative w-full max-w-[280px] mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <img
              alt="Balde Duratec Goma Líquida"
              className="w-full h-auto drop-shadow-2xl animate-float relative z-10"
              src={gomaImg}
            />
          </div>
          <div className="grid grid-cols-2 gap-px mt-5 bg-[#2a2a2a] border-t border-[#2a2a2a]">
            {[
              { label: 'Acabado', value: 'Satinado' },
              { label: 'Secado', value: '72 horas' },
              { label: 'Tecnología', value: 'Nano' },
              { label: 'Contenido', value: '3,6L / 18L' },
            ].map((spec) => (
              <div key={spec.label} className="bg-industrial-dark-2 px-3 py-2.5 text-left">
                <div className="text-[10px] uppercase tracking-wider text-[#666]">{spec.label}</div>
                <div className="font-display text-base font-bold text-primary">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
