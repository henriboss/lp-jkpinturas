import React from 'react';

const steps = [
  { num: '01', title: 'Prepare la superficie', desc: 'Limpieza completa y remoción de residuos, polvo y partes sueltas.' },
  { num: '02', title: 'Aplique la Goma Líquida', desc: 'Aplicación uniforme con rodillo o pincel según recomendación técnica.' },
  { num: '03', title: 'Aguarde el secado', desc: 'Secado estimado en hasta 72 horas para curado completo de la membrana.' },
  { num: '04', title: 'Superficie protegida', desc: 'Barrera impermeabilizante activa y durable contra agua, sol e intemperie.' },
];

const Mechanism: React.FC = () => {
  return (
    <section className="bg-industrial-dark py-10 md:py-section-padding">
      <div className="container-section">
        <div className="text-center mb-8 md:mb-[50px]">
          <div className="section-label">Cómo funciona</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Tecnología que<br /><span className="text-accent">protege de verdad</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-start mt-8 md:mt-[50px]">
          <div>
            <p className="text-body-lg text-[#aaa] leading-relaxed mb-6">
              Al ser aplicada, la Goma Líquida forma una membrana impermeabilizante flexible de alta adherencia que bloquea la entrada de agua y protege la superficie contra exposición climática y desgaste continuo.
            </p>
            <p className="text-body-lg text-[#aaa] leading-relaxed mb-6">
              Con nanotecnología, las partículas penetran profundamente en la superficie, creando una barrera que acompaña los movimientos sin agrietarse ni despegarse.
            </p>
            <div className="grid grid-cols-2 gap-2.5 mt-7">
              {['Nanotecnología', 'Super flexible', 'Anti moho', 'Anti bacterias', 'No tóxico', 'Sin olor fuerte', 'Lavable', 'Acabado uniforme'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-industrial-white before:content-['✓'] before:text-industrial-green before:font-black before:text-[15px]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 py-6 border-b border-[#1e1e1e] last:border-b-0">
                <div className="font-display text-3xl md:text-[48px] font-black text-[#1e1e1e] leading-none shrink-0 w-10 md:w-14">
                  {step.num}
                </div>
                <div>
                  <h4 className="font-display text-lg font-extrabold text-industrial-white mb-1">{step.title}</h4>
                  <p className="text-body-sm text-[#666]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mechanism;
