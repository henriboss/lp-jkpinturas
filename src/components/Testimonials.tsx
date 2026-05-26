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
  {
    text: '"Lo usamos en toda la fachada de un edificio y el resultado superó expectativas. Fácil aplicación, sin olor y un acabado impecable."',
    author: 'Sofía G. — Maestra Mayor de Obra',
  },
  {
    text: '"Desde que usamos Duratec no volvimos a tener reclamos por filtraciones. Es el producto que recomendamos siempre."',
    author: 'Miguel R. — Director de Obra',
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
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[380px] shrink-0 bg-industrial-dark-2 p-8 pb-7 mx-[0.5px]">
                <div className="text-primary text-base tracking-wider mb-4">★★★★★</div>
                <p className="text-[15px] text-[#ccc] leading-relaxed mb-5 italic">{t.text}</p>
                <div className="font-display text-base font-bold uppercase tracking-wider text-[#777]">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
