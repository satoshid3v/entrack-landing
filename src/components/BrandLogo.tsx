// Desarrollado por: Vertice Codeium
import type { FC } from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

export const BrandLogo: FC<BrandLogoProps> = ({ size = 24, className = "text-[#0066cc]" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M 8 9 L 2 13 L 8 19 L 12 3 L 16 19 L 22 13 L 16 9" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
};
