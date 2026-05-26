import React from 'react';

const BeforeAfter: React.FC = () => {
  return (
    <section className="bg-industrial-dark py-section-padding">
      <div className="container-section">
        <div className="text-center mb-[50px]">
          <div className="section-label">Resultados</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Resultado que usted<br /><span className="text-primary">puede ver.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-[50px] relative">
          <div className="bg-[linear-gradient(135deg,#1a1008_0%,#2a1f0a_100%)] border border-[#2a2000] min-h-[280px] flex items-end p-6 relative overflow-hidden">
            <div className="absolute top-6 left-6 right-6 z-[2]">
              <p className="text-sm text-[#888] leading-relaxed">Filtración, grietas, moho y desgaste continuo sin protección adecuada.</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-[80px] opacity-[0.08] pointer-events-none">💧</div>
            <div className="font-display text-[32px] font-black uppercase tracking-wider text-[#ff6b35] z-[2] relative">ANTES</div>
          </div>
          <div className="bg-[linear-gradient(135deg,#0a1a10_0%,#0f2a1a_100%)] border border-[#002a10] min-h-[280px] flex items-end p-6 relative overflow-hidden">
            <div className="absolute top-6 left-6 right-6 z-[2]">
              <p className="text-sm text-[#888] leading-relaxed">Superficie completamente protegida con membrana impermeabilizante durable.</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-[80px] opacity-[0.08] pointer-events-none">✓</div>
            <div className="font-display text-[32px] font-black uppercase tracking-wider text-industrial-green z-[2] relative">DESPUÉS</div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-on-primary font-display text-sm font-black uppercase px-4 py-2 z-10 whitespace-nowrap">
            GOMA LÍQUIDA DURATEC
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
