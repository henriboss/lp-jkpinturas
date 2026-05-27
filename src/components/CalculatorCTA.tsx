import React, { useState } from 'react';

const CalculatorCTA: React.FC = () => {
  const [area, setArea] = useState('');
  const [result, setResult] = useState<{ kg: string; baldes18: number; baldes36: number } | null>(null);

  const calcular = () => {
    const num = parseFloat(area);
    if (!num || num <= 0) {
      alert('Por favor, ingrese un área válida en m².');
      return;
    }
    const kg = (num * 0.6).toFixed(1);
    const baldes18 = Math.ceil((num * 0.6) / 16);
    const baldes36 = Math.ceil((num * 0.6) / 3.2);
    setResult({ kg, baldes18, baldes36 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') calcular();
  };

  return (
    <section className="bg-industrial-dark py-10 md:py-section-padding" id="calculadora">
      <div className="container-section">
        <div className="text-center mb-8 md:mb-[50px]">
          <div className="section-label">Calculadora</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Descubra cuánto<br /><span className="text-accent">necesita.</span>
          </h2>
        </div>
        <div className="max-w-[600px] mx-auto bg-industrial-dark-2 border border-[#2a2a2a] p-6 md:p-12">
          <h3 className="font-display text-[28px] font-black text-industrial-white mb-2">Calcule su necesidad</h3>
          <p className="text-sm text-[#666] mb-7">Ingrese el área total a impermeabilizar</p>
          <div className="flex mb-5 min-w-0">
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ej: 50"
              min="1"
              className="flex-1 bg-industrial-black border border-[#333] border-r-0 text-industrial-white font-display text-2xl font-bold px-5 py-4 outline-none"
            />
            <div className="bg-[#1e1e1e] border border-[#333] text-[#666] font-display text-base font-bold px-5 py-4 uppercase tracking-wider">m²</div>
          </div>
          <button onClick={calcular} className="w-full bg-accent text-on-primary font-display font-black text-xl uppercase tracking-wider py-4 hover:bg-industrial-yellow-bright transition-colors border-none cursor-pointer">
            CALCULAR AHORA →
          </button>
          {result && (
            <div className="mt-5 p-5 bg-industrial-black border border-[#2a2a2a]">
              <div className="text-xs uppercase tracking-wider text-[#666] mb-2">Estimación para su área</div>
              <div className="font-display text-4xl font-black text-accent mb-3">{result.kg} kg de Goma Líquida</div>
              <div className="text-sm text-[#aaa]">
                Equivale a aproximadamente <strong>{result.baldes18} balde(s) de 18L</strong> o <strong>{result.baldes36} lata(s) de 3,6L</strong>.<br />
                <a href="https://wa.me/595983891601" className="text-accent font-semibold no-underline">Solicitar presupuesto personalizado →</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalculatorCTA;
