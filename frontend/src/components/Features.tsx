import React from 'react';
import ShieldIcon from '@mui/icons-material/Shield';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import BoltIcon from '@mui/icons-material/Bolt';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LayersIcon from '@mui/icons-material/Layers';
import ChatIcon from '@mui/icons-material/Chat';

const Features: React.FC = () => {
  return (
    <section className="py-section-padding-desktop bg-surface" id="beneficios">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col gap-4 mb-16 text-center">
          <span className="technical-badge self-center">Prestaciones Técnicas</span>
          <h2 className="font-display text-4xl lg:text-5xl text-primary">Una sola aplicación, múltiples soluciones</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-lg flex flex-col gap-6 industrial-border hover:shadow-xl transition-all duration-500 scroll-reveal">
            <div className="w-16 h-16 rounded-md bg-primary/5 flex items-center justify-center">
              <ShieldIcon className="text-4xl text-primary" />
            </div>
            <h3 className="font-headline text-2xl text-on-surface">Blindaje Hidrófugo</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Sella cada poro y fisura creando un escudo impenetrable que resiste incluso agua estancada.</p>
          </div>
          <div className="bg-white p-10 rounded-lg flex flex-col gap-6 industrial-border hover:shadow-xl transition-all duration-500 scroll-reveal">
            <div className="w-16 h-16 rounded-md bg-primary/5 flex items-center justify-center">
              <SettingsInputComponentIcon className="text-4xl text-primary" />
            </div>
            <h3 className="font-headline text-2xl text-on-surface">Ultra Flexibilidad</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Capacidad de estiramiento superior. Ideal para juntas de dilatación y estructuras dinámicas.</p>
          </div>
          <div className="bg-white p-10 rounded-lg flex flex-col gap-6 industrial-border hover:shadow-xl transition-all duration-500 scroll-reveal">
            <div className="w-16 h-16 rounded-md bg-primary/5 flex items-center justify-center">
              <BoltIcon className="text-4xl text-primary" />
            </div>
            <h3 className="font-headline text-2xl text-on-surface">Resistencia UV</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">No se reseca ni se vuelve quebradiza con la radiación solar intensa. Mantiene su elasticidad.</p>
          </div>
          <div className="bg-white p-10 rounded-lg flex flex-col gap-6 industrial-border hover:shadow-xl transition-all duration-500 scroll-reveal">
            <div className="w-16 h-16 rounded-md bg-primary/5 flex items-center justify-center">
              <ThermostatIcon className="text-4xl text-primary" />
            </div>
            <h3 className="font-headline text-2xl text-on-surface">Eficiencia Energética</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">Reduce drásticamente la temperatura interna de las edificaciones, ahorrando energía en climatización.</p>
          </div>
          <div className="bg-primary text-white p-10 rounded-lg flex flex-col gap-6 lg:col-span-2 relative overflow-hidden group scroll-reveal shadow-lg">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
              <LayersIcon sx={{ fontSize: 120 }} />
            </div>
            <h3 className="font-headline text-3xl relative z-10">Adherencia Universal</h3>
            <p className="font-body text-white/80 text-lg leading-relaxed relative z-10 max-w-lg">Aplicación directa y perfecta sobre hormigón, metal, madera, fibrocemento y cerámicas sin necesidad de remover el material existente.</p>
            <div className="flex gap-4 relative z-10 mt-4">
              <span className="bg-white/20 px-4 py-1 rounded-sm text-[10px] font-tech uppercase tracking-widest">Losa</span>
              <span className="bg-white/20 px-4 py-1 rounded-sm text-[10px] font-tech uppercase tracking-widest">Chapa</span>
              <span className="bg-white/20 px-4 py-1 rounded-sm text-[10px] font-tech uppercase tracking-widest">Madera</span>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
            <a href="https://wa.me/595982518467" className="bg-secondary text-white px-10 py-5 rounded-md font-display text-button-text hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 group shadow-md mx-auto">
              <ChatIcon className="group-hover:rotate-12 transition-transform" />
              Quiero aplicarlo en mi caso
            </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
