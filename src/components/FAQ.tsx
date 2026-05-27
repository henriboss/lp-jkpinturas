import React from 'react';

const faqs = [
  { q: '¿Sirve para metal?', a: 'Sí. Permite aplicación directa en superficies metálicas sin necesidad de preparación especial.' },
  { q: '¿Aguanta lluvia y sol?', a: 'Sí. Posee alta resistencia climática, protección UV y fue desarrollado para uso externo.' },
  { q: '¿Tiene olor fuerte?', a: 'No. La fórmula es base agua, sin olor fuerte y no tóxica.' },
  { q: '¿Se puede usar en área externa?', a: 'Sí. Desarrollado especialmente para alta performance en exposición climática constante.' },
  { q: '¿Es tóxico?', a: 'No. Fórmula no tóxica, segura para uso residencial y comercial.' },
  { q: '¿Es flexible?', a: 'Sí. Desarrollado para acompañar movimientos de la superficie sin agrietarse ni despegarse.' },
  { q: '¿Sirve para uso residencial?', a: 'Sí. Ideal tanto para uso residencial como para aplicaciones comerciales e industriales.' },
  { q: '¿En cuántas manos aplicar?', a: 'Generalmente 2 manos para protección completa. El equipo técnico puede orientar según el caso.' },
];

const FAQ: React.FC = () => {
  return (
    <section className="bg-industrial-black py-section-padding">
      <div className="container-section">
        <div className="text-center mb-[50px]">
          <div className="section-label">Dudas frecuentes</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Preguntas<br /><span className="text-accent">frecuentes.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-industrial-dark-2 p-6 pb-5 cursor-pointer hover:bg-[#1e1e1e] transition-colors">
              <div className="font-display text-lg font-bold text-industrial-white mb-2 flex items-center gap-2.5 before:content-['?'] before:inline-flex before:items-center before:justify-center before:w-[22px] before:h-[22px] before:bg-accent before:text-on-primary before:text-xs before:font-black before:shrink-0">
                {faq.q}
              </div>
              <div className="text-body-sm text-[#777] leading-relaxed pl-8">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
