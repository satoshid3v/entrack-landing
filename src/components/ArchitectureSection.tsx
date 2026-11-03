// Desarrollado por: Vertice Codeium (Apple Design System & Zero-Trust Architecture)
import { useState, type FC } from 'react';
import { 
  Cpu, Shield, Database, Smartphone, Zap, 
  CheckCircle2, Layers
} from 'lucide-react';

export const ArchitectureSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'layers'>('flow');

  const architectureLayers = [
    {
      id: 'frontend',
      badge: 'Capa 1: Cliente & Campo',
      title: 'PWA Offline-First & Escáner Nativo',
      tech: 'React 19 + TypeScript Estricto + TailwindCSS + Zod',
      icon: Smartphone,
      color: 'blue',
      description: 'Interfaz responsiva diseñada para uso en patios de mantenimiento y talleres de instalación, operando con o sin conexión a internet.',
      points: [
        'Soporte 100% Offline: Sincronización transparente con IndexedDB al recuperar conectividad.',
        'Escáner Integrado: Decodificación de códigos de barras y DataMatrix por cámara web/móvil sin latencia.',
        'Validación en Frontera: Esquemas Zod que garantizan integridad de datos antes del envío.',
        'Zero Storage Tokens: Prohibido almacenar credenciales en localStorage (solo cookies HttpOnly).'
      ]
    },
    {
      id: 'edge',
      badge: 'Capa 2: Perímetro & Sesiones',
      title: 'Seguridad Zero-Trust & Rate Limiting',
      tech: 'Redis (Token Bucket) + OWASP Security Headers + Cookies Opacas',
      icon: Shield,
      color: 'amber',
      description: 'Escudo perimetral que autentica, restringe tasas de uso y sanitiza todo el tráfico HTTP antes de tocar la lógica central.',
      points: [
        'Rate Limiting por IP: Algoritmo Token Bucket en memoria para mitigar ataques de fuerza bruta y DoS (HTTP 429).',
        'Sesiones Opacas: Identificadores criptográficos aleatorios de alta entropía con banderas Secure, SameSite=Strict.',
        'Cabeceras OWASP Helmet: Políticas estrictas de Content-Security-Policy, X-Frame-Options: DENY y nosniff.',
        'Aislamiento Perimetral: Bloqueo de peticiones con payload malicioso o campos desconocidos en JSON.'
      ]
    },
    {
      id: 'backend',
      badge: 'Capa 3: Núcleo de Alto Rendimiento',
      title: 'Golang Core & Clean Architecture',
      tech: 'Go 1.23+ + Router Nativo + go-playground/validator + ReBAC',
      icon: Cpu,
      color: 'emerald',
      description: 'Backend compilado a binario nativo, diseñado bajo Clean Architecture para respuestas en microsegundos y control de acceso relacional.',
      points: [
        'Rendimiento Extremo: Latencias de respuesta menores a 4ms y mínimo consumo de memoria RAM.',
        'Validación Estricta: DTOs deserializados con DisallowUnknownFields() y tipado estricto en Go.',
        'Autorización ReBAC: Verificación Sujeto-Relación-Objeto (Técnico - Sede - Dispositivo IMEI) antes de procesar.',
        'Criptografía Robusta: Hasheo de contraseñas y credenciales con Argon2id de alto costo computacional.'
      ]
    },
    {
      id: 'data',
      badge: 'Capa 4: Datos & Aislamiento',
      title: 'PostgreSQL Multi-Tenant con RLS & sqlc',
      tech: 'PostgreSQL 16 + Row-Level Security (RLS) + sqlc + Driver pgx',
      icon: Database,
      color: 'purple',
      description: 'Persistencia relacional con blindaje a nivel de fila y consultas precompiladas en SQL puro sin la sobrecarga de un ORM.',
      points: [
        'Row-Level Security (RLS): Políticas forzadas a nivel de motor SQL; cada sede solo puede leer su propio inventario.',
        'Inyección de Sesión pgx: SET LOCAL app.current_tenant_id activo en cada transacción atómica.',
        'sqlc (Type-Safe SQL): Cero sentencias dinámicas propensas a SQL Injection; compilación directa a structs de Go.',
        'Hoja de Vida Inmutable: Tabla de auditoría con registro cronológico de cada movimiento de hardware por IMEI.'
      ]
    }
  ];

  return (
    <section id="architecture" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Ingeniería & Seguridad Vertice Codeium</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
          Arquitectura Zero-Trust y Rendimiento Extremo
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-[#86868b] leading-relaxed">
          EntrackSystem no es un software web convencional. Está estructurado como una suite operativa de misión crítica construida en <strong>Golang</strong>, <strong>PostgreSQL con RLS nativo</strong> y <strong>PWA Offline-First</strong>.
        </p>

        {/* View Toggle */}
        <div className="mt-6 inline-flex p-1 rounded-full bg-white border border-[#e5e5ea] shadow-xs text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('flow')}
            className={`px-5 py-1.5 rounded-full transition-all ${
              activeTab === 'flow'
                ? 'bg-[#0066cc] text-white shadow-sm'
                : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            Flujo de Datos en Tiempo Real
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('layers')}
            className={`px-5 py-1.5 rounded-full transition-all ${
              activeTab === 'layers'
                ? 'bg-[#0066cc] text-white shadow-sm'
                : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
          >
            Detalle por Capas
          </button>
        </div>
      </div>

      {/* Tab 1: Real-time Data Flow Pipeline */}
      {activeTab === 'flow' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Visual Data Flow Diagram */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e5e5ea] shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#86868b] mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#0066cc]" />
              Trazabilidad de una Solicitud: Desde el Patio de Instalación hasta la BD
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col justify-between relative group hover:border-[#0066cc]/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0066cc] flex items-center justify-center font-bold text-sm mb-3">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">Escaneo en Patio</h4>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    El técnico lee el DataMatrix del GPS. Zod valida el IMEI en milisegundos en el dispositivo móvil del técnico.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e5e5ea] text-[10px] font-mono text-[#0066cc]">
                  PWA (Offline-ready)
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col justify-between relative group hover:border-amber-500/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm mb-3">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">Filtro Perimetral</h4>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    Redis valida el Token Opaco de sesión en Cookie segura y verifica que la IP no exceda el Rate Limit permitido.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e5e5ea] text-[10px] font-mono text-amber-700">
                  Redis Token Bucket
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col justify-between relative group hover:border-emerald-500/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">Lógica en Go</h4>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    Handler deserializa DTO seguro, valida reglas ReBAC y orquesta la transacción de custodia o traspaso de inventario.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e5e5ea] text-[10px] font-mono text-emerald-700">
                  Golang Clean Core
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex flex-col justify-between relative group hover:border-purple-500/50 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm mb-3">
                    04
                  </div>
                  <h4 className="text-sm font-bold text-[#1d1d1f] mb-1">Aislamiento RLS</h4>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    PostgreSQL ejecuta la query generada por sqlc inyectando el ID de sede en la sesión pgx. Cero riesgo de fuga multi-tenant.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e5e5ea] text-[10px] font-mono text-purple-700">
                  PostgreSQL RLS + sqlc
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Detailed Layers Breakdown */}
      {activeTab === 'layers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {architectureLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div 
                key={layer.id}
                className="bg-white rounded-3xl p-8 border border-[#e5e5ea] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066cc] bg-[#0066cc]/10 px-3 py-1 rounded-full">
                      {layer.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#f5f5f7] text-[#1d1d1f] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0066cc]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">
                    {layer.title}
                  </h3>
                  <p className="text-xs font-mono text-[#86868b] mb-4">
                    {layer.tech}
                  </p>
                  <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed mb-6">
                    {layer.description}
                  </p>

                  <ul className="space-y-2.5">
                    {layer.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#1d1d1f]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Key Architectural Metrics Grid */}
      <div className="mt-10 p-8 rounded-3xl bg-white border border-[#e5e5ea] shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-[#0066cc] block tracking-tight">
            &lt; 4ms
          </span>
          <span className="text-xs font-medium text-[#86868b] mt-1 block">
            Latencia Core en Go
          </span>
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 block tracking-tight">
            100%
          </span>
          <span className="text-xs font-medium text-[#86868b] mt-1 block">
            Disponibilidad Offline PWA
          </span>
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-purple-600 block tracking-tight">
            Zero-Trust
          </span>
          <span className="text-xs font-medium text-[#86868b] mt-1 block">
            Sesiones Opacas + RLS
          </span>
        </div>

        <div>
          <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 block tracking-tight">
            0% ORM
          </span>
          <span className="text-xs font-medium text-[#86868b] mt-1 block">
            sqlc Type-Safe SQL Puro
          </span>
        </div>
      </div>

    </section>
  );
};
