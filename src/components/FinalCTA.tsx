import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { useGTMEvent } from '../hooks/useGTMEvent';

const FinalCTA: React.FC = () => {
  const { trackWhatsAppClick } = useGTMEvent();

  const handlePresupuestoClick = () => {
    trackWhatsAppClick('final_presupuesto');
  };

  const handleAsesorClick = () => {
    trackWhatsAppClick('final_asesor');
  };

  const handleSolucionClick = () => {
    trackWhatsAppClick('final_solucion');
  };
  return (
    <section className="py-section-padding-desktop bg-surface-cream relative overflow-hidden" id="contato">
      <div className="max-w-container-max mx-auto px-gutter text-center relative z-10 scroll-reveal">
        <span className="technical-badge bg-industrial-red/10 text-industrial-red mb-10">
          Acción inmediata recomendada
        </span>
        <h2 className="font-display text-4xl lg:text-7xl text-primary mb-10 max-w-5xl mx-auto leading-[1.05]">
          Cada lluvia <span className="text-industrial-red underline decoration-1 underline-offset-8">empeora</span> el daño estructural
        </h2>
        <p className="font-body text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed">
          No esperes a que el daño sea irreversible. Protege tu patrimonio hoy mismo con la tecnología líder en ingeniería de superficies.
        </p>
        <p className="font-body text-sm text-on-surface-variant mb-14">
          Respuesta rápida y sin compromiso.
        </p>
         <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
           <a href="https://wa.me/595983891601" onClick={handlePresupuestoClick} className="w-full md:w-auto bg-primary text-white px-12 py-6 rounded-md font-display text-xl shadow-lg hover:bg-deep-navy hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
             <VerifiedIcon />
             Quiero mi presupuesto
           </a>
           <a href="https://wa.me/595983891601" onClick={handleAsesorClick} className="w-full md:w-auto bg-whatsapp text-on-whatsapp px-12 py-6 rounded-md font-display text-xl shadow-lg hover:bg-whatsapp/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
             <PersonSearchIcon />
             Hablar con Asesor
           </a>
           <a href="https://wa.me/595983891601" onClick={handleSolucionClick} className="w-full md:w-auto bg-industrial-red text-white px-12 py-6 rounded-md font-display text-xl shadow-lg hover:bg-industrial-red/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
             <WaterDropIcon />
             Quiero solución para mi filtración
           </a>
         </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
    </section>
  );
};

export default FinalCTA;
