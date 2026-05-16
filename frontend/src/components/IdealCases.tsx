import React from 'react';
import HouseIcon from '@mui/icons-material/House';
import RoofingIcon from '@mui/icons-material/Roofing';
import TextureIcon from '@mui/icons-material/Texture';
import FactoryIcon from '@mui/icons-material/Factory';
import ShowerIcon from '@mui/icons-material/Shower';
import DomainIcon from '@mui/icons-material/Domain';
import ChatIcon from '@mui/icons-material/Chat';

const IdealCases: React.FC = () => {
  const cases = [
    { icon: <HouseIcon className="text-4xl text-primary transition-all group-hover:scale-110" />, label: 'Losas' },
    { icon: <RoofingIcon className="text-4xl text-primary transition-all group-hover:scale-110" />, label: 'Techos' },
    { icon: <TextureIcon className="text-4xl text-primary transition-all group-hover:scale-110" />, label: 'Paredes' },
    { icon: <FactoryIcon className="text-4xl text-primary transition-all group-hover:scale-110" />, label: 'Metálicas' },
    { icon: <ShowerIcon className="text-4xl text-primary transition-all group-hover:scale-110" />, label: 'Baños' },
    { icon: <DomainIcon className="text-4xl text-primary transition-all group-hover:scale-110" />, label: 'Fachadas' },
  ];

  return (
    <section className="py-section-padding-desktop bg-white overflow-hidden" id="casos">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        <div className="flex flex-col gap-4 mb-20 items-center">
          <span className="technical-badge">Campo de Aplicación</span>
          <h2 className="font-display text-4xl lg:text-6xl text-primary scroll-reveal">Versatilidad en cada aplicación</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 scroll-reveal">
          {cases.map((c, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6 group cursor-pointer">
              <div className="w-24 h-24 rounded-lg bg-surface-cream/50 flex items-center justify-center border border-outline/5 group-hover:border-primary group-hover:bg-primary/5 transition-all group-hover:-translate-y-2 group-hover:shadow-xl">
                {c.icon}
              </div>
              <p className="font-tech text-[10px] uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors">{c.label}</p>
            </div>
))}
        </div>
        <div className="mt-16 text-center">
          <a href="https://wa.me/595982518467" className="bg-whatsapp text-on-whatsapp px-6 py-5 rounded-md font-display text-button-text hover:bg-whatsapp/90 transition-all flex items-center justify-center gap-3 group shadow-md mx-auto">
            <ChatIcon className="group-hover:rotate-12 transition-transform" />
            Tengo uno de estos problemas
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdealCases;
