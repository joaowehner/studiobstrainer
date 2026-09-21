import React from 'react';

interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
  showText?: boolean;
  textClassName?: string;
}

/**
 * Componente da Logo Oficial do STUDIO BS TRAINER
 * Baseado diretamente na arte oficial do perfil @studiobstrainer
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "flex items-center gap-3",
  imageClassName = "h-11 w-auto object-contain",
  showText = true,
  textClassName = ""
}) => {
  return (
    <div className={className}>
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Logo Oficial BS Trainer Studio"
        className={`shrink-0 drop-shadow-[0_2px_10px_rgba(0,114,206,0.3)] transition-transform duration-200 hover:scale-105 ${imageClassName}`}
        loading="eager"
        width={48}
        height={85}
      />
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <span className="font-black text-lg sm:text-xl tracking-tight text-white font-['Outfit'] uppercase leading-none">
            BS Trainer
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-400 font-bold mt-0.5">
            Studio Personal
          </span>
        </div>
      )}
    </div>
  );
};
