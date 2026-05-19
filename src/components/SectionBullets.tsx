import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatIcon from "@mui/icons-material/Chat";
import { useGTMEvent } from "../hooks/useGTMEvent";

const SectionBullets: React.FC = () => {
  const { trackWhatsAppClick } = useGTMEvent();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('section_bullets');
  };
  return (
    <section className="py-section-padding-desktop bg-surface-cream/30">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl industrial-border p-8 md:p-12">
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="text-primary mt-1 flex-shrink-0" />
              <span className="text-body-lg text-on-surface">
                Sella filtraciones de forma real, no solo superficial
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="text-primary mt-1 flex-shrink-0" />
              <span className="text-body-lg text-on-surface">
                Resistencia de hasta 30 MPa
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="text-primary mt-1 flex-shrink-0" />
              <span className="text-body-lg text-on-surface">
                Aplicación en múltiples superficies
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="text-primary mt-1 flex-shrink-0" />
              <span className="text-body-lg text-on-surface">
                Reduce el calor hasta en un 30%
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon className="text-primary mt-1 flex-shrink-0" />
              <span className="text-body-lg text-on-surface">
                Fácil aplicación (rodillo, brocha o airless)
              </span>
            </li>
          </ul>
          
          <div className="mt-8 text-center">
            <a href="https://wa.me/595982518467" onClick={handleWhatsAppClick} className="bg-whatsapp text-on-whatsapp px-10 py-5 rounded-md font-display text-button-text hover:bg-whatsapp/90 transition-all flex items-center justify-center gap-3 group shadow-md mx-auto">
              <ChatIcon className="group-hover:rotate-12 transition-transform" />
              Quiero saber cuánto necesito
            </a>
            <p className="font-body text-sm text-on-surface-variant mt-4">
              Te respondemos rápido con recomendación y cantidad exacta para tu caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBullets;