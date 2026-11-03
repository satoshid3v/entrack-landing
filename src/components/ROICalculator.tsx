// Desarrollado por: Vertice Codeium (Apple Design System Standard)
import { useState } from 'react';
import type { FC } from 'react';
import { Calculator, Sparkles, ArrowRight } from 'lucide-react';

interface ROICalculatorProps {
  appUrl?: string;
}

export const ROICalculator: FC<ROICalculatorProps> = ({ 
  appUrl = "https://app.entrack.co" 
}) => {
  const [fleetSize, setFleetSize] = useState<number>(500);
  const [monthlyRotationRate, setMonthlyRotationRate] = useState<number>(6); // %
  const [hardwareCost, setHardwareCost] = useState<number>(320000); // COP

  const monthlyUnitsRotated = Math.round(fleetSize * (monthlyRotationRate / 100));
  const monthlyLossEstimated = monthlyUnitsRotated * hardwareCost * 0.45; // 45% se extravía sin auditoría
  const annualLossEstimated = monthlyLossEstimated * 12;
  const recoveredSavingsAnnual = Math.round(annualLossEstimated * 0.85); // 85% recuperado con Entrack

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div id="roi-calculator" className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e5e5ea] shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0066cc]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold mb-3">
          <Calculator className="w-3.5 h-3.5" />
          Calculadora Interactiva de Fuga de Capital Oculta
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f]">
          ¿Cuánto dinero pierde tu empresa en hardware telemático extraviado?
        </h2>
        <p className="text-xs sm:text-sm text-[#86868b] mt-2">
          Calcula en tiempo real las pérdidas por unidades desinstaladas (FDU) olvidadas en talleres y SIM cards huérfanas activas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Input Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Fleet Size */}
          <div className="p-4 rounded-2xl bg-[#f5f5f7]/80 border border-[#e5e5ea]/60">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-[#1d1d1f]">
                Tamaño de la Flota / Dispositivos Activos:
              </label>
              <span className="text-sm font-bold text-[#0066cc] bg-[#0066cc]/10 px-2.5 py-0.5 rounded-full">
                {fleetSize.toLocaleString('es-CO')} vehículos
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={fleetSize}
              onChange={(e) => setFleetSize(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#86868b] mt-1 font-medium">
              <span>50 vehículos</span>
              <span>5.000 vehículos</span>
            </div>
          </div>

          {/* Slider 2: Rotation / Replacements */}
          <div className="p-4 rounded-2xl bg-[#f5f5f7]/80 border border-[#e5e5ea]/60">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-[#1d1d1f]">
                Tasa de Rotación / Desinstalaciones Mensuales:
              </label>
              <span className="text-sm font-bold text-[#0066cc] bg-[#0066cc]/10 px-2.5 py-0.5 rounded-full">
                {monthlyRotationRate}% (~{monthlyUnitsRotated} equipos/mes)
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="20"
              step="1"
              value={monthlyRotationRate}
              onChange={(e) => setMonthlyRotationRate(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#86868b] mt-1 font-medium">
              <span>2% (Operación estable)</span>
              <span>20% (Alta rotación)</span>
            </div>
          </div>

          {/* Slider 3: Hardware Unit Cost */}
          <div className="p-4 rounded-2xl bg-[#f5f5f7]/80 border border-[#e5e5ea]/60">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-[#1d1d1f]">
                Costo promedio por GPS + SIM M2M + Arnés:
              </label>
              <span className="text-sm font-bold text-[#0066cc] bg-[#0066cc]/10 px-2.5 py-0.5 rounded-full">
                {formatCOP(hardwareCost)}
              </span>
            </div>
            <input
              type="range"
              min="150000"
              max="600000"
              step="10000"
              value={hardwareCost}
              onChange={(e) => setHardwareCost(Number(e.target.value))}
              className="w-full accent-[#0066cc] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#86868b] mt-1 font-medium">
              <span>$150.000 (GPS Básico)</span>
              <span>$600.000 (Telemetría CAN/MDVR)</span>
            </div>
          </div>

        </div>

        {/* Projected Financial Impact Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#1d1d1f] to-[#2c2c2e] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868b] block mb-1">
              Diagnóstico Financiero Anual
            </span>
            <span className="text-xs text-rose-400 font-semibold block">
              Pérdida anual oculta sin auditoría:
            </span>
            <div className="text-3xl font-extrabold text-white mt-1 mb-4">
              {formatCOP(annualLossEstimated)}
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md mt-4">
              <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Ahorro Proyectado con Entrack:
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                +{formatCOP(recoveredSavingsAnnual)}
              </div>
              <span className="text-[11px] text-gray-300 block mt-1">
                Recuperación del 85% del inventario en limbo durante los primeros 90 días.
              </span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <a
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-full bg-[#0066cc] hover:bg-[#0077ed] text-white text-xs font-bold transition-all text-center block shadow-md shadow-[#0066cc]/40 flex items-center justify-center gap-2 group"
            >
              <span>Detener Fuga de Inventario en EntrackSystem</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
