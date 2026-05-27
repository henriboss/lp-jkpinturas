import React from 'react';
import { useGTMEvent } from '../hooks/useGTMEvent';
import WhatsApp from '@mui/icons-material/WhatsApp';

const FinalCTA: React.FC = () => {
  const { trackWhatsAppClick } = useGTMEvent();

  return (
    <>
      <section className="bg-industrial-black py-section-padding-lg text-center relative overflow-hidden" id="presupuesto">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[220px] font-black text-[rgba(255,255,255,0.015)] tracking-[-10px]">DURATEC</span>
        </div>
        <div className="container-section relative z-[1]">
          <h2 className="text-display-section text-industrial-white font-black mb-4 max-w-3xl mx-auto">
            Cuanto más espera,<br /><em className="text-accent not-italic">mayor es el costo de la reparación.</em>
          </h2>
          <p className="text-body-lg text-[#666] mb-10 max-w-[560px] mx-auto relative z-[1]">
            Proteja su estructura antes de que la filtración, humedad y desgaste generen un perjuicio mucho mayor. Solicite un presupuesto ahora.
          </p>
          <a
            href="https://wa.me/595983891601"
            onClick={() => trackWhatsAppClick('final_cta')}
            className="btn-primary bg-accent text-[22px] py-5 px-12"
          >
            SOLICITAR PRESUPUESTO →
          </a>
          <div className="mt-6">
            <a href="https://wa.me/595983891601" className="text-[#555] text-sm no-underline uppercase tracking-wider"><WhatsApp sx={{ fontSize: 16, verticalAlign: 'middle', mr: 0.3 }} /> O hable por WhatsApp</a>
          </div>
        </div>
      </section>
      <div className="stripe-bar" />
    </>
  );
};

export default FinalCTA;
