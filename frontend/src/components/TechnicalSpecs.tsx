import React from 'react';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const TechnicalSpecs: React.FC = () => {
  return (
    <section className="bg-on-background py-section-padding-mobile md:py-section-padding-desktop text-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Text Side */}
        <div className="lg:col-span-5 flex flex-col gap-10 scroll-reveal">
          <div className="technical-badge self-start bg-secondary text-white">
            Performance Industrial
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary leading-[1.1]">
            Ingeniería en cada gota: 30 MPa
          </h2>
          <p className="font-body text-body-lg text-white/70 leading-relaxed">
            La resistencia de 30 Megapascales certifica que la membrana Duratec cumple con los estándares industriales más riguerosos de adhesión y cohesión estructural.
          </p>
          <div className="space-y-8">
            {[
              { num: '01', title: 'Presión Hidrostática', desc: 'Evita desprendimientos incluso ante presión negativa extrema.' },
              { num: '02', title: 'Anti-Ampollas', desc: 'No genera burbujas ni se separa del sustrato con el calor del mediodía.' },
              { num: '03', title: 'Transitabilidad', desc: 'Permite el mantenimiento regular sin dañar la película protectora.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-sm border border-secondary/30 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-on-background transition-all font-tech text-lg">
                  {item.num}
                </div>
                <p className="font-body text-white/80">
                  <span className="text-white font-bold block mb-1">{item.title}:</span> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Card Side */}
        <div className="lg:col-span-7 scroll-reveal w-full">
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[80px] -z-10"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
              <div className="flex flex-col gap-2">
                <span className="text-secondary font-tech text-[10px] tracking-[0.3em] uppercase">Data Sheet</span>
                <h3 className="text-3xl md:text-4xl font-display">Certificación ISO 9001</h3>
              </div>
              <ArchitectureIcon sx={{ fontSize: 64 }} className="text-white/10 hidden md:block" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/40 text-[10px] font-tech uppercase mb-2 tracking-widest">Base Química</p>
                <p className="font-display text-xl">Polímeros de Alta Densidad</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/40 text-[10px] font-tech uppercase mb-2 tracking-widest">Elongación Máxima</p>
                <p className="font-display text-xl">400%</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/40 text-[10px] font-tech uppercase mb-2 tracking-widest">Secado al tacto</p>
                <p className="font-display text-xl">2 - 4 Horas</p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <p className="text-white/40 text-[10px] font-tech uppercase mb-2 tracking-widest">Rango pH</p>
                <p className="font-display text-xl">4.0 - 10.0 Resistente</p>
              </div>
            </div>

            <div className="mt-16 flex justify-between items-center">
              <div className="font-tech text-[10px] text-white/30 uppercase tracking-tighter">
                Ref: Duratec-G20-Specs
              </div>
              <img 
                alt="Sello de Calidad" 
                className="h-10 md:h-12 opacity-50 grayscale invert brightness-200" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmzdEHb4mrxNAVFzlIVJodJGqR8lQroMtlfLonlSYoJAom_vJc4vZ9VYWuk8Hs9D2V2zNLiaNH2iPYFhdDY11pXyUPsOKP1tK6f39U3lNLc97IPShefFYEdak9YFX4y8VoF-KyXzJLYhy7g15rFMZZH92wCaUm_veEgrqenYM4TI4PjEf5jDC6FWrdfOzS9CJOvQos-rwCZVsPaXbxYLAtKGSh1P-ZdK0l-dE54fKMQKQE4L6SsLd8lfQDDOfP8RzrH31qp5Y3Dno" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
