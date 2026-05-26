import React from 'react';

const items = [
  { icon: '☀️', title: 'Alta Resistencia UV', desc: 'Protección máxima contra radiación solar' },
  { icon: '🔬', title: 'Nanotecnología', desc: 'Penetración profunda y adherencia superior' },
  { icon: '🌊', title: 'Base Agua', desc: 'Fórmula sin olor fuerte, no tóxica' },
  { icon: '⚡', title: 'Directo al Metal', desc: 'Sin necesidad de preparación especial' },
  { icon: '🦠', title: 'Anti Bacterias', desc: 'Protege contra proliferación de microorganismos' },
  { icon: '🍄', title: 'Anti Moho', desc: 'Inhibe el crecimiento de hongos en la superficie' },
  { icon: '⏱️', title: 'Secado 72h', desc: 'Tiempo estimado para curado completo' },
  { icon: '🎨', title: '6 Colores', desc: 'Blanco, Gris, Gris Plomo, Negro, Rojo, Verde' },
];

const Credibility: React.FC = () => {
  return (
    <section className="bg-industrial-black py-section-padding border-t border-[#1a1a1a]">
      <div className="container-section">
        <div className="text-center mb-[50px]">
          <div className="section-label">Performance técnica</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Especificaciones que<br /><span className="text-primary">generan confianza.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {items.map((item) => (
            <div key={item.title} className="bg-industrial-dark-2 p-7 pb-5 text-center">
              <div className="text-[32px] mb-2.5">{item.icon}</div>
              <h4 className="font-display text-base font-extrabold text-primary mb-1">{item.title}</h4>
              <p className="text-xs text-[#666]">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <a href="#" className="btn-secondary">Ver Ficha Técnica</a>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
