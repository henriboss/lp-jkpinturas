import React from 'react';
import FormatPaint from '@mui/icons-material/FormatPaint';
import Grain from '@mui/icons-material/Grain';
import Settings from '@mui/icons-material/Settings';
import TrendingDown from '@mui/icons-material/TrendingDown';
import Thermostat from '@mui/icons-material/Thermostat';
import MoneyOff from '@mui/icons-material/MoneyOff';

const pains = [
  { icon: FormatPaint, text: 'Pintura descascarándose y paredes con aspecto deteriorado' },
  { icon: Grain, text: 'Mohos y humedad comprometiendo salud y estructura' },
  { icon: Settings, text: 'Óxido en estructuras metálicas y componentes' },
  { icon: TrendingDown, text: 'Desgaste prematuro con retrabajo recurrente' },
  { icon: Thermostat, text: 'Malestar térmico y mayor consumo de energía' },
  { icon: MoneyOff, text: 'Perjuicio estructural que solo crece con el tiempo' },
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
              <pain.icon className="shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
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
