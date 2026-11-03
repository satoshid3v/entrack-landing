// Desarrollado por: Vertice Codeium
import type { FC } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/BrandLogo';

export const Terms: FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] py-12 px-6 text-[#1d1d1f]">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#e5e5ea] shadow-sm">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e5e5ea]">
          <div className="flex items-center gap-2">
            <BrandLogo size={24} />
            <span className="font-bold text-lg">Entrack • Términos de Servicio</span>
          </div>
          <Link to="/" className="text-xs text-[#0066cc] hover:underline flex items-center gap-1 font-semibold">
            <ArrowLeft className="w-3.5 h-3.5" /> Volver al Inicio
          </Link>
        </div>

        <div className="prose text-xs sm:text-sm text-[#424245] space-y-4 leading-relaxed">
          <p>Desarrollado por <strong>Vertice Codeium</strong>.</p>
          <h2 className="text-base font-bold text-[#1d1d1f]">1. Aceptación de los Términos</h2>
          <p>Al acceder a este portal informativo y utilizar la calculadora de retorno de inversión, usted acepta las directrices estipuladas por Vertice Codeium.</p>
          <h2 className="text-base font-bold text-[#1d1d1f]">2. Licencia y Uso del Software</h2>
          <p>EntrackSystem es una solución SaaS propietaria desarrollada por Vertice Codeium bajo estándares de arquitectura limpia y zero-trust.</p>
        </div>
      </div>
    </div>
  );
};
