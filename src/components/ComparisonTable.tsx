import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckIcon from '@mui/icons-material/Check';
import { useGTMEvent } from '../hooks/useGTMEvent';

const ComparisonTable: React.FC = () => {
  const { trackCTAClick } = useGTMEvent();

  const handleCTAClick = () => {
    trackCTAClick('comparison');
  };
  return (
    <section className="bg-primary py-section-padding-mobile md:py-section-padding-desktop relative overflow-hidden" id="comparativo">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-gutter relative z-10 scroll-reveal">
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center gap-4">
          <span className="technical-badge bg-secondary text-on-background">Benchmark de rendimiento</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl text-white">Por qué no es lo mismo que una pintura impermeabilizante</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12 flex flex-col gap-8 md:gap-10 opacity-60 hover:opacity-100 transition-all">
            <div className="flex justify-between items-center border-b border-white/10 pb-6">
              <h3 className="font-headline text-white/50 text-xl md:text-2xl">Pintura Tradicional</h3>
              <CloseIcon className="text-white/30 text-3xl md:text-4xl" />
            </div>
            <ul className="space-y-6 md:space-y-8">
              <li className="flex items-center gap-5 text-white/60 font-body text-sm md:text-base">
                <span className="w-2 h-2 rounded-sm bg-white/20"></span>
                Solo repele el agua
              </li>
              <li className="flex items-center gap-5 text-white/60 font-body text-sm md:text-base">
                <span className="w-2 h-2 rounded-sm bg-white/20"></span>
                Se agrieta con el tiempo
              </li>
              <li className="flex items-center gap-5 text-white/60 font-body text-sm md:text-base">
                <span className="w-2 h-2 rounded-sm bg-white/20"></span>
                Menor durabilidad
              </li>
              <li className="flex items-center gap-5 text-white/60 font-body text-sm md:text-base">
                <span className="w-2 h-2 rounded-sm bg-white/20"></span>
                Limitada a mampostería
              </li>
              <li className="flex items-center gap-5 text-white/60 font-body text-sm md:text-base">
                <span className="w-2 h-2 rounded-sm bg-white/20"></span>
                Absorbe calor solar
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 md:p-12 flex flex-col gap-8 md:gap-10 shadow-2xl relative transform lg:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-background px-6 py-1 rounded-sm font-tech text-[10px] tracking-widest uppercase">RECOMENDADO</div>
            <div className="flex justify-between items-center border-b border-primary/10 pb-6">
              <h3 className="font-headline text-primary text-xl md:text-2xl">Goma Líquida Duratec</h3>
              <VerifiedIcon className="text-primary text-3xl md:text-4xl" />
            </div>
            <ul className="space-y-6 md:space-y-8">
              <li className="flex items-center gap-5 text-on-surface group">
                <span className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckIcon sx={{ fontSize: 20 }} />
                </span>
                <span className="font-body font-bold text-base md:text-lg">Sella filtraciones desde la raíz</span>
              </li>
              <li className="flex items-center gap-5 text-on-surface group">
                <span className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckIcon sx={{ fontSize: 20 }} />
                </span>
                <span className="font-body font-bold text-base md:text-lg">Alta elasticidad, no se quiebra</span>
              </li>
              <li className="flex items-center gap-5 text-on-surface group">
                <span className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckIcon sx={{ fontSize: 20 }} />
                </span>
                <span className="font-body font-bold text-base md:text-lg">Mayor resistencia (30 MPa)</span>
              </li>
              <li className="flex items-center gap-5 text-on-surface group">
                <span className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckIcon sx={{ fontSize: 20 }} />
                </span>
                <span className="font-body font-bold text-base md:text-lg">Multisuperficie</span>
              </li>
              <li className="flex items-center gap-5 text-on-surface group">
                <span className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <CheckIcon sx={{ fontSize: 20 }} />
                </span>
                <span className="font-body font-bold text-base md:text-lg">Escudo Térmico Reflectante</span>
              </li>
            </ul>
             <a href="https://wa.me/595983891601" onClick={handleCTAClick} className="w-full py-5 bg-primary text-white rounded-md font-display text-button-text hover:bg-deep-navy transition-all mt-6 shadow-lg shadow-primary/20 block text-center">
               Ver si es lo que necesito
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
