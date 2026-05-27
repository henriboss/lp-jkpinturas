import React from 'react';
import { useGTMEvent } from '../hooks/useGTMEvent';
import logoImg from '../assets/logo/Logo-1.png';

const NavBar: React.FC = () => {
  const { trackWhatsAppClick } = useGTMEvent();

  const handleCTA = () => {
    trackWhatsAppClick('nav');
  };

  return (
    <>
      <nav className="bg-industrial-black border-b border-[#222] sticky top-0 z-50">
        <div className="max-w-container-max mx-auto px-gutter flex items-center justify-between py-3.5">
          <img src={logoImg} alt="Duratec" className="h-8 w-auto" />
          <a
            href="https://wa.me/595983891601"
            onClick={handleCTA}
            className="bg-accent text-on-primary font-display font-extrabold text-sm uppercase tracking-wider px-5.5 py-2.5 hover:bg-industrial-yellow-bright transition-colors"
            style={{ padding: '10px 22px', fontSize: '14px', letterSpacing: '1px' }}
          >
            Solicitar Presupuesto →
          </a>
        </div>
      </nav>
      <div className="stripe-bar" />
    </>
  );
};

export default NavBar;
