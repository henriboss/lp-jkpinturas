import React from 'react';

const testimonials = [
  {
    text: '"Aplicamos en una cubierta con filtración recurrente desde hace años y el resultado fue excelente. Sin retrabajo desde entonces."',
    author: 'Ricardo M. — Constructor',
  },
  {
    text: '"Excelente adherencia y aplicación simple. Resolvió exactamente lo que necesitábamos en estructura metálica expuesta al tiempo."',
    author: 'Carlos A. — Ingeniero Civil',
  },
  {
    text: '"Producto con excelente acabado y performance en área externa. Recomiendo para cualquier profesional de la construcción."',
    author: 'Fernanda L. — Arquitecta',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-industrial-black py-section-padding">
      <div className="container-section">
        <div className="text-center mb-[50px]">
          <div className="section-label">Prueba social</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Quien lo usa,<br /><span className="text-primary">lo recomienda.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-industrial-dark-2 p-8 pb-7">
              <div className="text-primary text-base tracking-wider mb-4">★★★★★</div>
              <p className="text-[15px] text-[#ccc] leading-relaxed mb-5 italic">{t.text}</p>
              <div className="font-display text-base font-bold uppercase tracking-wider text-[#777]">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
