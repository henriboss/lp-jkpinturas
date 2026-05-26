import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-10">
      <div className="container-section">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="font-display text-[22px] font-black uppercase tracking-wider text-industrial-white">
            DURA<span className="text-primary">TEC</span>
          </div>
          <div className="flex gap-6 flex-wrap">
            {['Ficha Técnica', 'Certificaciones', 'WhatsApp', 'Política Comercial', 'Contacto'].map((link) => (
              <a key={link} href="#" className="text-[#555] text-xs no-underline uppercase tracking-wider hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="text-xs text-[#333]">© 2026 Duratec Goma Líquida. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
