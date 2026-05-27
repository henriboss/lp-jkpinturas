import React from 'react';
import CloudOutlined from '@mui/icons-material/CloudOutlined';
import ShieldOutlined from '@mui/icons-material/ShieldOutlined';
import CleaningServices from '@mui/icons-material/CleaningServices';
import Stars from '@mui/icons-material/Stars';
import img1 from '../assets/img-1.png';
import img2 from '../assets/img-2.png';
import img3 from '../assets/img-3.png';
import img4 from '../assets/img-4.png';
import img5 from '../assets/img-5.png';
import img6 from '../assets/img-6.png';

const surfaces = [
  { title: 'Concreto', image: img1 },
  { title: 'Metal', image: img2 },
  { title: 'Tejas', image: img3 },
  { title: 'Azulejos', image: img4 },
  { title: 'Vidrio', image: img5 },
  { title: 'Madera', image: img6 },
];

const features = [
  { icon: CloudOutlined, title: 'ALTA RESISTENCIA', subtitle: 'al sol y la lluvia' },
  { icon: ShieldOutlined, title: 'IMPERMIABILIZANTE', subtitle: 'súper flexible' },
  { icon: CleaningServices, title: 'SÚPER LAVABLE', subtitle: 'y anti moho' },
  { icon: Stars, title: 'ACABAMENTO', subtitle: 'y duradero' },
];

const SurfaceCards: React.FC = () => {
  return (
    <section className="bg-industrial-black py-10 md:py-section-padding">
      <div className="container-section">
        <div className="text-center mb-8 md:mb-[50px]">
          <h2 className="text-display-section text-industrial-white font-black">
            Aplicable en<br /><span className="text-accent">múltiples superficies</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {surfaces.map(({ title, image }) => (
            <div
              key={title}
              className="bg-industrial-dark-2 border border-outline-variant rounded-sm overflow-hidden relative hover:border-primary transition-colors group scroll-reveal aspect-[3/4]"
            >
              <img src={image} alt={title} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-4 md:pt-8 pb-3 px-4">
                <span className="font-display text-sm font-bold uppercase tracking-wider text-industrial-white text-center block leading-tight">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {features.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="text-center scroll-reveal">
              <div className="w-14 h-14 rounded-full bg-industrial-dark-2 border border-outline-variant flex items-center justify-center mx-auto mb-4">
                <Icon className="text-accent" sx={{ fontSize: 28 }} />
              </div>
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-industrial-white mb-1">{title}</h4>
              <p className="text-body-sm text-[#888] leading-relaxed">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurfaceCards;
