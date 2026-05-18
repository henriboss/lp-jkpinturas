import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Footer: React.FC = () => {
  return (
    <footer className="bg-on-background text-white pt-32 pb-16 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-start">
          <div className="md:col-span-4 flex flex-col gap-8">
            <img
              alt="JK Pinturas Logo"
              className="h-9 filter brightness-0 invert self-start"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmzdEHb4mrxNAVFzlIVJodJGqR8lQroMtlfLonlSYoJAom_vJc4vZ9VYWuk8Hs9D2V2zNLiaNH2iPYFhdDY11pXyUPsOKP1tK6f39U3lNLc97IPShefFYEdak9YFX4y8VoF-KyXzJLYhy7g15rFMZZH92wCaUm_veEgrqenYM4TI4PjEf5jDC6FWrdfOzS9CJOvQos-rwCZVsPaXbxYLAtKGSh1P-ZdK0l-dE54fKMQKQE4L6SsLd8lfQDDOfP8RzrH31qp5Y3Dno"
            />
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm">
              Líderes en ingeniería de superficies y soluciones hidrófugas de
              alta performance. Protegiendo el futuro estructural con tecnología
              Duratec.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-on-background transition-all"
                href="#"
              >
                <ShareIcon sx={{ fontSize: 16 }} />
              </a>
              <a
                className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-on-background transition-all"
                href="https://www.google.com/maps/place/JK+PINTURAS+S.A/@-25.4986263,-54.6675836,17z/data=!3m1!4b1!4m6!3m5!1s0x94f685bb21616507:0x6551cddcb8d89f6e!8m2!3d-25.4986312!4d-54.6650087!16s%2Fg%2F1pzr5_zl_?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon sx={{ fontSize: 16 }} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-secondary">
              Información
            </h4>
            <ul className="space-y-4 font-body text-white/40 md:text-sm">
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#beneficios"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition-colors"
                  href="#calculadora"
                >
                  Calculadora
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 flex flex-col gap-6">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-secondary">
              Soporte
            </h4>
            <ul className="space-y-4 font-body text-white/40 md:text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Técnico
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Garantías
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Certificaciones
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-secondary">
              Contacto
            </h4>
            <div className="bg-white/[0.03] p-6 rounded-md border border-white/5 relative overflow-hidden group">
              <p className="font-tech text-[9px] text-white/20 mb-5 uppercase tracking-[0.25em]">
                Atención Técnica
              </p>

              <a
                href="mailto:contacto@jkpinturas.com"
                className="flex items-center gap-4 text-white font-body hover:text-secondary transition-all"
              >
                <div className="bg-secondary text-on-background p-2.5 rounded-sm shrink-0">
                  <AlternateEmailIcon sx={{ fontSize: 18 }} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-tech md:text-[10px] text-white/30 uppercase tracking-tighter">
                    Email Corporativo
                  </span>
                  <span className="text-xs md:text-sm font-bold tracking-tight truncate">
                    contacto@jkpinturas.com
                  </span>
                </div>
              </a>

              <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
                <span className="font-tech md:text-[10px] text-white/30 uppercase tracking-widest">
                  Respuesta en 24h hábiles
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-tech md:text-xs text-white/30 uppercase tracking-[0.2em]">
            © 2026 JK Pinturas e Impermeabilizaciones - Duratec Goma Líquida.
          </p>
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            <p className="font-tech md:text-xs text-white/40 uppercase tracking-widest">
              Todos los derechos reservados a JK Pinturas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
