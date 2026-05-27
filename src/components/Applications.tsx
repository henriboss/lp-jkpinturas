import React from 'react';
import Roofing from '@mui/icons-material/Roofing';
import Fence from '@mui/icons-material/Fence';
import Construction from '@mui/icons-material/Construction';
import Window from '@mui/icons-material/Window';
import Shower from '@mui/icons-material/Shower';
import Deck from '@mui/icons-material/Deck';

const apps = [
  { icon: Roofing, title: 'Techos', desc: 'Protección total contra filtración y desgaste climático. Aplicación directa y adherencia superior.' },
  { icon: Fence, title: 'Paredes externas', desc: 'Barrera eficiente contra humedad y acción continua de lluvia y sol.' },
  { icon: Construction, title: 'Estructuras metálicas', desc: 'Aplicación directa sobre metal con alta resistencia a la corrosión e intemperie.' },
  { icon: Window, title: 'Vidrios', desc: 'Protección con excelente adherencia y acabado uniforme en superficies lisas.' },
  { icon: Shower, title: 'Cerámica y azulejo', desc: 'Impermeabilización precisa con acabado uniforme y sin alteración estética.' },
  { icon: Deck, title: 'Madera', desc: 'Capa flexible de protección durable que acompaña el movimiento natural de la madera.' },
];

const Applications: React.FC = () => {
  return (
    <section className="bg-industrial-dark py-section-padding">
      <div className="container-section">
        <div className="text-center mb-[50px]">
          <div className="section-label">Versatilidad</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Una solución para<br /><span className="text-accent">diferentes superficies</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#222] border border-[#222]">
          {apps.map((app) => (
            <div key={app.title} className="bg-industrial-dark-2 p-7 pb-6 relative hover:bg-[#1e1e1e] transition-colors">
              <app.icon className="absolute top-6 right-6" sx={{ fontSize: 28, opacity: 0.4 }} />
              <div className="w-8 h-0.5 bg-accent mb-4" />
              <h3 className="text-heading-card text-industrial-white font-extrabold mb-2">{app.title}</h3>
              <p className="text-body-sm text-[#888] leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
