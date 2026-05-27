import React from 'react';
import logoImg from '../assets/logo/Logo-1.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-10">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <img src={logoImg} alt="Duratec" className="h-8 w-auto" />
          <div className="flex gap-6 flex-wrap justify-center w-full md:flex-1">
            {['Especificaciones Técnicas', 'Certificaciones', 'WhatsApp', 'Política Comercial', 'Contacto'].map((link) => (
              <a key={link} href="#" className="text-[#555] text-xs no-underline uppercase tracking-wider hover:text-accent transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="text-xs text-[#333] text-center mt-6">© 2026 Duratec Goma Líquida. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
