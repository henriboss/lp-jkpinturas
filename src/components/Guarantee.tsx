import React from 'react';
import { useGTMEvent } from '../hooks/useGTMEvent';
import ShieldOutlined from '@mui/icons-material/ShieldOutlined';

const Guarantee: React.FC = () => {
  const { trackWhatsAppClick } = useGTMEvent();

  return (
    <section className="bg-industrial-dark py-10 md:py-section-padding">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center bg-industrial-dark-2 border border-[#2a2a2a] p-6 md:p-12">
          <ShieldOutlined sx={{ fontSize: { xs: 48, md: 72 }, opacity: 0.8 }} />
          <div>
            <h3 className="font-display text-[32px] font-black text-industrial-white mb-3">Compra técnica exige<br />soporte técnico.</h3>
            <p className="text-body-md text-[#888] leading-relaxed mb-6">
              Nuestro equipo puede orientar la aplicación ideal para su escenario e indicar la mejor solución según la superficie y la necesidad específica del proyecto.
            </p>
            <a href="https://wa.me/595983891601" onClick={() => trackWhatsAppClick('guarantee')} className="btn-primary bg-accent text-sm md:text-base px-4 md:px-8 py-2.5 md:py-4">
              Hablar con especialista →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
