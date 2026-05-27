import React from 'react';
import { useGTMEvent } from '../hooks/useGTMEvent';

const StickyCTA: React.FC = () => {
  const { trackWhatsAppClick } = useGTMEvent();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex flex-col md:hidden">
      <a
        href="https://wa.me/595983891601"
        onClick={() => trackWhatsAppClick('sticky_mobile')}
        className="bg-accent text-on-primary text-center font-display font-black text-lg uppercase tracking-wider py-[18px] pb-[max(18px,env(safe-area-inset-bottom))] no-underline block"
      >
        SOLICITAR PRESUPUESTO →
      </a>
    </div>
  );
};

export default StickyCTA;
