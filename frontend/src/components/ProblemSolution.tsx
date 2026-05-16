import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import HomeIcon from "@mui/icons-material/Home";
import WaterIcon from "@mui/icons-material/Water";
import ChatIcon from "@mui/icons-material/Chat";

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-section-padding-desktop relative bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 relative group scroll-reveal">
            <div className="absolute -inset-2 bg-primary/5 rounded-lg transform rotate-2 group-hover:rotate-0 transition-all duration-700"></div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-xl industrial-border">
              <img
                alt="Humedad en techo"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS5PnOtUVN4JPguaxnH01FJtWIbMeDoREhkuZODguRyuZfeJ-QrBuzS4iAOQL8wtlSWlON2f7xjsjyypPkBfS0x1fuXrzzdap6RzAOqjcgYzaaKv9z_6-WI4KYGBkTdGvdRExMG-Z3k9650ZXuT6BWHay6l0PLo5LxpRprRg_z4XqTOa4jeCexvXyK5JG5zBtxIvk3brFODmlpV1dkfUiYk06k-IHQAWa0ZgFWeptwk2ddBxV0-MUR8HysEm1NSo-ySUSVNn6LrII"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-lg shadow-2xl industrial-border hidden md:block max-w-[240px]">
              <WarningIcon className="text-industrial-red text-4xl mb-3" />
              <p className="font-body text-sm font-bold text-on-surface">
                Goteras en losa o techo, humedad en paredes.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-10 lg:pl-16 scroll-reveal">
            <div className="flex flex-col gap-4">
              <span className="technical-badge bg-industrial-red/10 text-industrial-red self-start">
                Factores de Riesgo
              </span>
              <h2 className="font-display text-4xl lg:text-5xl text-primary leading-[1.15]">
                Si ya probaste pintura impermeabilizante,{" "}
                <span className="text-industrial-red">
                  sabés que no alcanza
                </span>
              </h2>
            </div>
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
              La mayoría de las soluciones comunes solo repelen el agua por un
              tiempo. El problema vuelve porque no existe una{" "}
              <span className="text-primary font-bold">verdadera barrera.</span>
              La goma líquida Duratec funciona diferente: forma una membrana
              continua que acompaña la estructura y ayuda a bloquear la
              filtración desde el origen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="group p-8 bg-surface-cream/30 hover:bg-white rounded-lg transition-all duration-300 border border-transparent hover:border-outline/20 hover:shadow-xl">
                <WaterDropIcon className="text-industrial-red mb-4 block text-3xl" />
                <p className="font-headline font-bold mb-2">
                  Filtraciones Recurrentes
                </p>
                <p className="font-body text-sm text-on-surface-variant">
                  Filtraciones que vuelven después de cada lluvia.
                </p>
              </div>
              <div className="group p-8 bg-surface-cream/30 hover:bg-white rounded-lg transition-all duration-300 border border-transparent hover:border-outline/20 hover:shadow-xl">
                <HomeIcon className="text-industrial-red mb-4 block text-3xl" />
                <p className="font-headline font-bold mb-2">Goteras en losa o techo</p>
                <p className="font-body text-sm text-on-surface-variant">
                  Agua que gotea desde el techo en cada lluvia.
                </p>
              </div>
              <div className="group p-8 bg-surface-cream/30 hover:bg-white rounded-lg transition-all duration-300 border border-transparent hover:border-outline/20 hover:shadow-xl">
                <WaterIcon className="text-industrial-red mb-4 block text-3xl" />
                <p className="font-headline font-bold mb-2">Humedad en paredes</p>
                <p className="font-body text-sm text-on-surface-variant">
                  Manchas de humedad que aparecen en las paredes.
                </p>
              </div>
              <div className="group p-8 bg-surface-cream/30 hover:bg-white rounded-lg transition-all duration-300 border border-transparent hover:border-outline/20 hover:shadow-xl">
                <BrokenImageIcon className="text-industrial-red mb-4 block text-3xl" />
                <p className="font-headline font-bold mb-2">Fisuras que se abren con el tiempo</p>
                <p className="font-body text-sm text-on-surface-variant">
                  Grietas que se abren con los movimientos estructurales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a href="https://wa.me/595982518467" className="bg-whatsapp text-on-whatsapp px-8 py-5 rounded-md font-display text-button-text hover:bg-whatsapp/90 transition-all flex items-center justify-center gap-3 group shadow-md">
            <ChatIcon className="group-hover:rotate-12 transition-transform" />
            Quiero resolver esto definitivamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
