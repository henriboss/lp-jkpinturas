import React, { useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import ChatIcon from "@mui/icons-material/Chat";
import { useGrapheneCanvas } from "../hooks/useGrapheneCanvas";
import { useGTMEvent } from "../hooks/useGTMEvent";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { updateMouse } = useGrapheneCanvas(canvasRef);
  const { trackWhatsAppClick } = useGTMEvent();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      updateMouse(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  const handleMouseLeave = () => {
    updateMouse(-1000, -1000);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero');
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center pt-24 lg:pt-32 pb-24 lg:pb-0 overflow-hidden bg-surface-cream/30"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Graphene Canvas Layer - Behind content */}
      <canvas
        ref={canvasRef}
        className="graphene-canvas"
        style={{ zIndex: 1 }}
      />

      {/* Background Animated Liquid Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 pointer-events-none">
        <div className="absolute top-[5%] -left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 blur-[80px] md:blur-[100px] liquid-blob"></div>
        <div
          className="absolute bottom-[-10%] -right-[10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-secondary/15 blur-[100px] md:blur-[120px] liquid-blob"
          style={{ animationDelay: "-6s" }}
        ></div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <div
          className="lg:col-span-7 flex flex-col gap-8 lg:gap-10 scroll-reveal"
          id="hero-content"
        >
          <div className="technical-badge self-start">Tecnología Duratec</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-display-lg text-primary leading-[1.15] tracking-tight">
            Impermeabilización <br className="hidden sm:block" />
            <span className="text-deep-navy">
              <u>definitiva</u>
            </span>{" "}
            con goma líquida de alta resistencia
          </h1>
          <p className="font-body text-body-md md:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Solución profesional para filtraciones en losas, techos, paredes y
            superficies difíciles. Membrana elástica que sella de raíz y resiste
            sol, lluvia y movimiento estructural.
          </p>
          <p className="font-body text-sm text-on-surface-variant">
            Te respondemos rápido con recomendación y cantidad exacta para tu
            caso.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-md industrial-border">
              <CheckCircleIcon className="text-primary scale-110" />
              <span className="font-tech text-label-tech text-on-surface">
                30 MPa Resistencia
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-md industrial-border">
              <ThermostatIcon className="text-primary scale-110" />
              <span className="font-tech text-label-tech text-on-surface">
                -30% Reducción Térmica
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <a
              href="https://wa.me/595982518467"
              onClick={handleWhatsAppClick}
              className="bg-whatsapp text-on-whatsapp px-12 py-5 rounded-md font-display text-button-text hover:bg-whatsapp/90 transition-all flex items-center justify-center gap-3 group shadow-md"
            >
              <ChatIcon className="group-hover:rotate-12 transition-transform" />
              Solicitar asesoramiento ahora - WhatsApp
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg mb-12 lg:mb-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
            <img
              alt="Balde Duratec Goma Líquida"
              className="w-full h-auto drop-shadow-2xl floating relative z-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB03EIWYF2G0JwLE5QzQzU4V5j4_jNAo6zkaMPqIGBAUGk3LoYrRK6ATc45H2dAsM_uqdfD274jQU3b6qTmkulMzNCsGEZFDEofguqPBQE6z0cWKZNhPkrQ8e1Sp2A6mgvRfTTRgsK5Jw2oy55V_zqkvv4STvZMXawYzAac8qnFGavZqUK9RsDPg_d_ec2WO9OH95iip-lwcjp6P3r9YtiZorgMRCOltcske6p1WiYzMkAA4mt2rXX8IgDHt5JXNLgZBSDNcZPkWPU"
            />
            <div className="absolute bottom-0 lg:-bottom-10 lg:-left-16 glass-card p-8 rounded-lg z-20 max-w-[260px] shadow-2xl">
              <p className="font-tech text-[10px] text-primary mb-2 uppercase tracking-widest">
                Durabilidad Industrial
              </p>
              <p className="font-display text-5xl text-on-surface mb-2"></p>
              <p className="font-body text-body-md text-on-surface-variant leading-tight"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[10px] uppercase tracking-[0.2em] font-tech text-on-surface">
          Precision Focus
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
