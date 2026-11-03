// Desarrollado por: Vertice Codeium (Apple Design System Standard)
import { useState, useRef, type FC } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface VideoShowcaseProps {
  appUrl?: string;
}

export const VideoShowcase: FC<VideoShowcaseProps> = ({ 
  appUrl = "https://app.entrack.co" 
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasEnded, setHasEnded] = useState<boolean>(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasEnded(false);
      }).catch((e) => {
        console.error("Playback error:", e);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
      setHasEnded(false);
    });
  };

  return (
    <div id="video-presentation" className="relative max-w-5xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#0066cc]/20 via-blue-400/10 to-indigo-500/20 blur-3xl -z-10 rounded-[40px] opacity-70 pointer-events-none" />

      {/* Header of Video Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Presentación Oficial de Producto</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f]">
          Descubre Entrack en 18 Segundos
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#86868b]">
          Mira cómo nuestra arquitectura elimina la fuga invisible de capital y automatiza el ciclo de vida del hardware telemático.
        </p>
      </div>

      {/* Apple-style Matte Frame Container */}
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl sm:rounded-[32px] p-3 sm:p-4 border border-[#e5e5ea] shadow-2xl shadow-blue-950/10 overflow-hidden">
        
        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-[#e5e5ea]/80 mb-3 text-xs text-[#86868b]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-[#1d1d1f] font-medium hidden sm:inline">
              entrack-presentation.mp4
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px]">
            <BrandLogo size={14} className="text-[#0066cc]" />
            <span className="font-semibold text-[#1d1d1f]">Entrack 2.4</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
              1080p 30fps
            </span>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div 
          className="relative aspect-video rounded-2xl sm:rounded-[24px] overflow-hidden bg-black group cursor-pointer shadow-inner"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src="/entrack-presentation.mp4"
            className="w-full h-full object-cover"
            playsInline
            muted={isMuted}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setIsPlaying(false);
              setHasEnded(true);
            }}
          />

          {/* Overlay Play/Pause Button when hovering or paused */}
          <div className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (hasEnded) {
                  handleRestart();
                } else {
                  togglePlay();
                }
              }}
              className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-[#0066cc] flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95"
              aria-label={hasEnded ? "Reiniciar video" : isPlaying ? "Pausar video" : "Reproducir video"}
            >
              {hasEnded ? (
                <RotateCcw className="w-8 h-8 ml-0.5" />
              ) : isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1 fill-current" />
              )}
            </button>
          </div>

          {/* Quick HUD bar at bottom */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs opacity-90 transition-opacity">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="hover:text-[#0066cc] transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="hover:text-[#0066cc] transition-colors"
                title={isMuted ? "Activar audio" : "Silenciar"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-300" /> : <Volume2 className="w-4 h-4 text-emerald-300" />}
              </button>
              
              <span className="text-[11px] font-mono text-gray-300">
                {isMuted ? "Audio silenciado (clic para activar)" : "Audio estéreo activo"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-200">
                Duración: 18s
              </span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid Below Video */}
        <div className="mt-4 pt-4 border-t border-[#e5e5ea]/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-100/80 text-[#0066cc] shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1d1d1f]">Fuga de Capital Cero</p>
              <p className="text-[11px] text-[#86868b] leading-tight mt-0.5">
                Localiza dispositivos FDU y SIMs inactivas antes de que generen sobrecostos.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-100/80 text-emerald-700 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1d1d1f]">Trazabilidad Nominal</p>
              <p className="text-[11px] text-[#86868b] leading-tight mt-0.5">
                Custodia física por IMEI con actas de entrega, fotos y firmas digitales.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-[#f5f5f7] border border-[#e5e5ea] flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-100/80 text-purple-700 shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1d1d1f]">Estándar Vertice Codeium</p>
              <p className="text-[11px] text-[#86868b] leading-tight mt-0.5">
                Rendimiento extremo con backend Go y diseño Apple Glassmorphism.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link to Software */}
        <div className="mt-4 pt-3 flex items-center justify-between px-2 text-xs">
          <span className="text-[#86868b]">
            ¿Listo para auditar tu operación en vivo?
          </span>
          <a
            href={appUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0066cc] hover:text-[#0077ed] transition-colors"
          >
            <span>Explorar EntrackSystem en Vivo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
