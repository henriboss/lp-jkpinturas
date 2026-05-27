import React, { useRef } from 'react';
import { useGrapheneCanvas } from '../hooks/useGrapheneCanvas';
import { useGTMEvent } from '../hooks/useGTMEvent';
import gomaImg from '../assets/product-original.png';
import bgImg from '../assets/bgs/bg-1.png';

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
      className="bg-industrial-dark relative overflow-hidden py-10 md:py-[80px] md:pb-[60px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={bgImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.6] pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_80%_50%,rgba(212,196,23,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-[60px] items-center max-w-container-max mx-auto px-gutter relative z-10">
        <div className="hero-content order-2 lg:order-1">
          <div className="inline-block bg-accent text-on-primary font-display text-xs font-black uppercase tracking-wider px-3 py-1 mb-5">
            Goma Líquida · Base Agua · Nanotecnología
          </div>
          <h1 className="text-[clamp(32px,8vw,48px)] md:text-display-hero text-industrial-white mb-3">
            Acabe con las<br />infiltraciones con<br /><em className="text-accent not-italic">una única solución.</em>
          </h1>
          <p className="font-body text-body-lg font-semibold text-industrial-white leading-relaxed mb-7 max-w-[520px]">
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
            <a href="https://wa.me/595983891601" onClick={handleOrcamento} className="btn-primary bg-accent text-sm md:text-base px-4 md:px-8 py-2.5 md:py-4">
              Solicitar Presupuesto →
            </a>
            <a href="#calculadora" onClick={handleCalculadora} className="btn-secondary text-sm md:text-base px-4 md:px-8 py-2.5 md:py-3.5">
              Calcular cuánto necesito
            </a>
          </div>
          <p className="mt-6 text-xs text-[#666] uppercase tracking-wider">
            Más protección · Menos retrabajo · Menos mantenimiento
          </p>
        </div>
        <div className="flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-[250px] md:max-w-[450px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent/5 rounded-full blur-[100px] -z-10" />
            <img
              alt="Balde Duratec Goma Líquida"
              className="w-full h-auto drop-shadow-2xl animate-float relative z-10 scale-100 md:scale-125"
              src={gomaImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
