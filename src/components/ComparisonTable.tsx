import React from 'react';

const comparisons = [
  { traditional: 'Protección solo superficial', duratec: 'Impermeabilización real y durable' },
  { traditional: 'Puede agrietarse con movimiento', duratec: 'Alta flexibilidad y memoria elástica' },
  { traditional: 'Menor resistencia al clima', duratec: 'Alta resistencia UV e intemperie' },
  { traditional: 'Exige retrabajo frecuente', duratec: 'Protección durable, menos mantenimiento' },
  { traditional: 'Aplicación limitada a pocas superficies', duratec: 'Multi-superficies: metal, vidrio, cerámica, madera' },
];

const ComparisonTable: React.FC = () => {

  return (
    <section className="bg-industrial-black py-section-padding">
      <div className="container-section">
        <div className="text-center mb-[50px]">
          <div className="section-label">Comparativo</div>
          <h2 className="text-display-section text-industrial-white font-black mt-3">
            Por qué elegir<br /><span className="text-accent">Goma Líquida?</span>
          </h2>
        </div>
        <table className="w-full border-collapse font-body">
          <thead>
            <tr>
              <th className="font-display text-xl font-extrabold uppercase text-left py-[18px] px-6 border-b-2 border-[#222]">
                Soluciones tradicionales
              </th>
              <th className="font-display text-xl font-extrabold uppercase text-left py-[18px] px-6 border-b-2 border-primary bg-[rgba(212,196,23,0.05)] text-accent">
                Goma Líquida Duratec
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, i) => (
              <tr key={i}>
                <td className="py-4 px-6 border-b border-[#1a1a1a] text-[15px] text-[#555] before:content-['✗'] before:text-[#444] before:mr-2.5">
                  {row.traditional}
                </td>
                <td className="py-4 px-6 border-b border-[#1a1a1a] text-[15px] text-industrial-white font-semibold bg-[rgba(212,196,23,0.03)] before:content-['✓'] before:text-industrial-green before:mr-2.5">
                  {row.duratec}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
