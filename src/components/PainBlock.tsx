import React from 'react';

const pains = [
  { icon: '🎨', text: 'Pintura descascarándose y paredes con aspecto deteriorado' },
  { icon: '🦠', text: 'Mohos y humedad comprometiendo salud y estructura' },
  { icon: '🔩', text: 'Óxido en estructuras metálicas y componentes' },
  { icon: '📉', text: 'Desgaste prematuro con retrabajo recurrente' },
  { icon: '🌡️', text: 'Malestar térmico y mayor consumo de energía' },
  { icon: '💸', text: 'Perjuicio estructural que solo crece con el tiempo' },
];

const PainBlock: React.FC = () => {

  return (
    <section className="bg-[#0d0d0d] py-section-padding border-t border-[#1e1e1e]">
      <div className="container-section">
        <h2 className="text-display-section text-industrial-white font-black mb-2.5">
          La infiltración nunca<br />empieza <em className="text-primary not-italic">cara.</em><br />Se vuelve cara.
        </h2>
        <p className="text-body-lg text-[#888] mb-10 max-w-[560px]">
          Lo que comienza con una pequeña mancha puede convertirse en un problema mucho mayor — y mucho más caro.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
          {pains.map((pain) => (
            <div key={pain.text} className="bg-industrial-dark-2 p-5 flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">{pain.icon}</span>
              <p className="text-sm text-[#ccc] leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 p-5 bg-[rgba(212,196,23,0.07)] border-l-[3px] border-primary text-body-lg font-semibold text-industrial-white">
          ⚠️ Esperar a que el problema empeore casi siempre cuesta mucho más que prevenir ahora.
        </div>
      </div>
    </section>
  );
};

export default PainBlock;
