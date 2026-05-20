import React from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import FunctionsIcon from '@mui/icons-material/Functions';
import { useGTMEvent } from '../hooks/useGTMEvent';

const CalculatorCTA: React.FC = () => {
  const { trackCTAClick } = useGTMEvent();

  const handleCTAClick = () => {
    trackCTAClick('calculator');
  };
  return (
    <section className="py-section-padding-desktop bg-white overflow-hidden" id="calculadora">
      <div className="max-w-5xl mx-auto px-gutter scroll-reveal">
        <div className="bg-primary rounded-lg p-10 lg:p-24 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[100px]"></div>
          <div className="relative z-10 max-w-2xl">
            <CalculateIcon sx={{ fontSize: 80 }} className="text-secondary mb-10 block mx-auto opacity-80" />
            <h2 className="font-display text-4xl lg:text-6xl text-white mb-8 leading-tight">Optimiza tu inversión</h2>
            <p className="font-body text-white/70 text-lg mb-8 leading-relaxed">
              Evitá desperdicios o falta de material. Nuestro equipo técnico realiza el cálculo exacto según tu tipo de superficie y estado estructural.
            </p>
            <div className="mb-14 text-left mx-auto max-w-sm">
              <p className="font-body text-white/80 text-base mb-4">Indicá el área aproximada y te decimos:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Cuántos kilos usar
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Cuántas capas aplicar
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Cómo lograr el mejor resultado
                </li>
              </ul>
            </div>
             <a href="https://wa.me/595983891601" onClick={handleCTAClick} className="bg-whatsapp text-on-whatsapp px-8 py-5 rounded-md font-display text-button-text hover:bg-whatsapp/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 mx-auto">
               <FunctionsIcon />
               Calcular ahora gratis
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;
