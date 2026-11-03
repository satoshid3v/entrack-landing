// Desarrollado por: Vertice Codeium (Apple Design System Standard)
import type { FC } from 'react';
import { 
  ArrowRight, CheckCircle2, Search, AlertOctagon, Wrench, 
  RefreshCw, Sparkles, ExternalLink, HelpCircle
} from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { ROICalculator } from '../components/ROICalculator';
import { VideoShowcase } from '../components/VideoShowcase';
import { ArchitectureSection } from '../components/ArchitectureSection';

interface HomeProps {
  appUrl?: string;
}

export const Home: FC<HomeProps> = ({ 
  appUrl = "https://app.entrack.co" 
}) => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased selection:bg-[#0066cc]/20">
      
      {/* 1. Frosted Apple Navigation Bar */}
      <header className="sticky top-0 left-0 right-0 h-16 bg-white/75 backdrop-blur-xl border-b border-[#e5e5ea] z-40 px-6 flex items-center justify-between transition-all">
        <div className="flex items-center gap-3">
          <BrandLogo size={26} className="text-[#0066cc]" />
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg tracking-tight text-[#1d1d1f]">Entrack</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#86868b]">
          <a href="#video-presentation" className="hover:text-[#1d1d1f] transition-colors">Video</a>
          <a href="#roi-calculator" className="hover:text-[#1d1d1f] transition-colors">Calculadora ROI</a>
          <a href="#features" className="hover:text-[#1d1d1f] transition-colors">Funcionalidades</a>
          <a href="#architecture" className="hover:text-[#1d1d1f] transition-colors">Arquitectura</a>
          <a href="#faq" className="hover:text-[#1d1d1f] transition-colors">Preguntas Frecuentes</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full bg-[#0066cc] hover:bg-[#0077ed] text-white text-xs font-semibold shadow-sm shadow-[#0066cc]/25 transition-all inline-flex items-center gap-1.5 group"
          >
            <span>Ir a EntrackSystem</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-20 pb-24 px-6 max-w-6xl mx-auto text-center overflow-hidden">
        {/* Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#0066cc]/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5ea] shadow-sm text-xs font-semibold text-[#1d1d1f] mb-8 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#0066cc]" />
          <span>Desarrollado por <strong>Vertice Codeium</strong></span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] max-w-4xl mx-auto leading-[1.08]">
          Reduce pérdidas de telemetría en un <span className="text-[#0066cc]">35%</span> y audita cada GPS en tiempo real.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#86868b] max-w-2xl mx-auto leading-relaxed">
          La plataforma definitiva de control físico y trazabilidad de hardware telemático con estándar Apple. Elimina el descontrol en maleteros técnicos, concilia SIM cards y gestiona retornos FDU sin fricción.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0066cc] hover:bg-[#0077ed] text-white text-sm font-semibold shadow-lg shadow-[#0066cc]/30 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Acceder a EntrackSystem</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#roi-calculator"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#f2f2f7] border border-[#e5e5ea] text-[#1d1d1f] text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Calcular Ahorro de Flota</span>
          </a>
        </div>

        {/* Micro-Trust Badges */}
        <div className="mt-14 pt-8 border-t border-[#e5e5ea]/80 flex flex-wrap items-center justify-center gap-8 text-xs text-[#86868b] font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero-Trust Architecture en Go</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Trazabilidad Nominal de IMEI</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Soporte PWA 100% Offline</span>
          </div>
        </div>
      </section>

      {/* 2.5 Video Presentation Showcase (Brag Skill) */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <VideoShowcase appUrl={appUrl} />
      </section>

      {/* 3. Interactive ROI Calculator */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <ROICalculator appUrl={appUrl} />
      </section>

      {/* 4. Core Features Showcase */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0066cc] bg-[#0066cc]/10 px-3 py-1 rounded-full">
            Pilares Tecnológicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f] mt-3">
            Cuatro pilares para blindar tu inventario de flotas
          </h2>
          <p className="text-xs sm:text-sm text-[#86868b] mt-2">
            Diseñado especialmente para resolver los cuellos de botella de directores de operaciones y jefes de taller en transporte de carga y telemetría satelital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: FDU */}
          <div className="bg-white rounded-3xl p-8 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
              Gestión de Unidades Defectuosas (FDU)
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-4">
              Cada equipo desmontado en patio ingresa automáticamente al flujo de diagnóstico de laboratorio. Clasifica si requiere cambio de batería, trámite de garantía RMA con el fabricante o reintegro a stock.
            </p>
            <ul className="space-y-2 text-xs text-[#1d1d1f] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Cero dispositivos olvidados en maleteros de técnicos.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Conciliación automática de tarjetas SIM activas.
              </li>
            </ul>
          </div>

          {/* Card 2: IMEI Traceability */}
          <div className="bg-white rounded-3xl p-8 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066cc] flex items-center justify-center mb-6">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
              Trazabilidad Nominal de IMEI
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-4">
              Historial completo del dispositivo en microsegundos: recepción en bodega principal, despacho a cuadrilla móvil, vehículo placa instalado y último técnico responsable con firma digital.
            </p>
            <ul className="space-y-2 text-xs text-[#1d1d1f] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Escáner de código de barras / DataMatrix integrado.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hoja de vida inmutable de cada terminal.
              </li>
            </ul>
          </div>

          {/* Card 3: Tool Custody */}
          <div className="bg-white rounded-3xl p-8 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
              Custodia Nominal de Herramientas
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-4">
              Asigna multímetros, soldadores, arneses y sensores con acta digital de entrega. Si un técnico renuncia o se traslada de sede, el sistema emite el paz y salvo de inventario al instante.
            </p>
            <ul className="space-y-2 text-xs text-[#1d1d1f] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Control del consumo de insumos (arneses, relés, cinta).
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Auditorías ciegas para cuadrillas tercerizadas.
              </li>
            </ul>
          </div>

          {/* Card 4: Red Zones */}
          <div className="bg-white rounded-3xl p-8 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <AlertOctagon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
              Alertas de Zonas Rojas
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-4">
              Mapeo de cuadrantes de alto riesgo y alertas operativas para resguardar a los instaladores de campo y prevenir hurtos de hardware en corredores logísticos vulnerables.
            </p>
            <ul className="space-y-2 text-xs text-[#1d1d1f] font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Geocercas preventivas configurables por sede.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Notificaciones toast en la PWA móvil del técnico.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Zero-Trust Architecture Section */}
      <ArchitectureSection />

      {/* 6. FAQ Section */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0066cc] bg-[#0066cc]/10 px-3 py-1 rounded-full">
            Dudas Comunes
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mt-3">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-[#e5e5ea]">
            <h3 className="text-sm font-bold text-[#1d1d1f] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0066cc]" />
              ¿Entrack reemplaza mi plataforma de monitoreo GPS existente (Satrack, Wialon, etc.)?
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] mt-2 leading-relaxed">
              No. Entrack complementa tu plataforma de rastreo en la parte que ninguna cubre: **el control físico del inventario**. Administra qué técnico tiene cada serial, qué equipo fue desinstalado en patio, garantías con proveedores y estado de las líneas SIM.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e5e5ea]">
            <h3 className="text-sm font-bold text-[#1d1d1f] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0066cc]" />
              ¿Funciona si mis técnicos están en patios sin conexión a internet?
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] mt-2 leading-relaxed">
              Sí. Entrack está desarrollado como una Progressive Web App (PWA) con arquitectura offline-first. Los técnicos pueden escanear IMEIs, generar actas y registrar desmontes sin señal; los datos se sincronizan automáticamente al recuperar conectividad.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#e5e5ea]">
            <h3 className="text-sm font-bold text-[#1d1d1f] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0066cc]" />
              ¿Qué tan rápido se implementa en mi empresa?
            </h3>
            <p className="text-xs sm:text-sm text-[#86868b] mt-2 leading-relaxed">
              El despliegue toma menos de 48 horas. Se realiza una carga masiva de inventario existente por archivo Excel/CSV y las cuadrillas técnicas reciben su acceso inmediato con cero curvas de aprendizaje.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Banner */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#0066cc] to-[#004b99] text-white rounded-3xl p-10 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
              Despliegue Inmediato
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ¿Listo para auditar y recuperar el control de tu inventario?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-3 leading-relaxed">
              Ingresa a EntrackSystem y conoce cómo detener la fuga silenciosa de hardware hoy mismo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#0066cc] hover:bg-gray-100 text-xs font-bold shadow-lg transition-all"
              >
                Abrir EntrackSystem
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="py-12 border-t border-[#e5e5ea] px-6 text-center text-xs text-[#86868b]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BrandLogo size={18} className="text-[#0066cc]" />
            <span className="font-semibold text-[#1d1d1f]">Entrack</span>
            <span>• Desarrollado por <strong>Vertice Codeium</strong></span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-[#1d1d1f] transition-colors">Términos de Servicio</a>
            <a href="/privacy" className="hover:text-[#1d1d1f] transition-colors">Política de Privacidad</a>
            <a href={appUrl} target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f] transition-colors">EntrackSystem</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
