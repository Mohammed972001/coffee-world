import React from 'react';
type DividerVariant = 'wave' | 'coffee-stain' | 'diagonal' | 'organic-blob';
interface SectionDividerProps {
  variant?: DividerVariant;
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  className?: string;
}
export function SectionDivider({
  variant = 'wave',
  topColor = '#FAF8F5',
  bottomColor = '#D7CCC8',
  flip = false,
  className = ''
}: SectionDividerProps) {
  const transform = flip ? 'scaleY(-1)' : undefined;
  if (variant === 'wave') {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{
          marginTop: -2,
          marginBottom: -2
        }}>
        
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{
            transform
          }}
          preserveAspectRatio="none">
          
          <rect width="1440" height="120" fill={bottomColor} />
          <path
            d="M0,0 L0,60 Q180,120 360,70 Q540,20 720,60 Q900,100 1080,50 Q1260,0 1440,40 L1440,0 Z"
            fill={topColor} />
          
        </svg>
      </div>);

  }
  if (variant === 'coffee-stain') {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{
          marginTop: -2,
          marginBottom: -2
        }}>
        
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{
            transform
          }}
          preserveAspectRatio="none">
          
          <rect width="1440" height="100" fill={bottomColor} />
          <path
            d="M0,0 L0,40 C120,80 240,20 360,50 C480,80 540,30 720,45 C900,60 1020,15 1140,40 C1260,65 1380,25 1440,35 L1440,0 Z"
            fill={topColor} />
          
          <circle cx="300" cy="50" r="25" fill={topColor} opacity="0.3" />
          <circle cx="900" cy="60" r="18" fill={topColor} opacity="0.2" />
          <circle cx="1200" cy="40" r="12" fill={topColor} opacity="0.25" />
        </svg>
      </div>);

  }
  if (variant === 'diagonal') {
    return (
      <div
        className={`relative w-full overflow-hidden ${className}`}
        style={{
          marginTop: -2,
          marginBottom: -2
        }}>
        
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{
            transform
          }}
          preserveAspectRatio="none">
          
          <rect width="1440" height="80" fill={bottomColor} />
          <polygon points="0,0 1440,0 1440,30 0,80" fill={topColor} />
        </svg>
      </div>);

  }
  // organic-blob
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        marginTop: -2,
        marginBottom: -2
      }}>
      
      <svg
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full block"
        style={{
          transform
        }}
        preserveAspectRatio="none">
        
        <rect width="1440" height="130" fill={bottomColor} />
        <path
          d="M0,0 L0,50 C100,90 200,30 350,65 C500,100 550,40 700,55 C850,70 950,25 1100,50 C1250,75 1350,35 1440,45 L1440,0 Z"
          fill={topColor} />
        
        <ellipse
          cx="250"
          cy="70"
          rx="60"
          ry="20"
          fill={topColor}
          opacity="0.15" />
        
        <ellipse
          cx="800"
          cy="80"
          rx="45"
          ry="15"
          fill={topColor}
          opacity="0.12" />
        
        <ellipse
          cx="1150"
          cy="65"
          rx="35"
          ry="12"
          fill={topColor}
          opacity="0.18" />
        
      </svg>
    </div>);

}