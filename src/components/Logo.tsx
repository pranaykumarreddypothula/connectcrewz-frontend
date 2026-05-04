import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="leftHalf">
          <rect x="0" y="0" width="250" height="500" />
        </clipPath>
        <clipPath id="rightHalf">
          <rect x="250" y="0" width="250" height="500" />
        </clipPath>
      </defs>

      {/* House Frame - Navy Left, Orange Right */}
      <g>
        {/* Navy Left Side */}
        <path 
          d="M250 100 L 100 215 V 350 H 250 V 100Z" 
          fill="#001833" 
        />
        {/* Orange Right Side */}
        <path 
          d="M250 100 L 400 215 V 350 H 250 V 100Z" 
          fill="#ff7300" 
        />
        {/* Chimney */}
        <rect x="315" y="130" width="40" height="80" fill="#001833" />
      </g>

      {/* White Interior for the tools to sit in */}
      <path 
        d="M250 140 L 130 230 V 350 H 370 V 230 L 250 140Z" 
        fill="white" 
      />

      {/* Windows */}
      <g fill="#001833">
        <rect x="230" y="165" width="18" height="18" />
        <rect x="252" y="165" width="18" height="18" />
        <rect x="230" y="187" width="18" height="18" />
        <rect x="252" y="187" width="18" height="18" />
      </g>

      {/* Crossed Tools */}
      <g>
        {/* Navy Wrench (Top-Left to Bottom-Right) */}
        <g transform="rotate(-45 250 260)">
          <rect x="240" y="220" width="20" height="80" fill="#001833" rx="4" />
          <path d="M230 220 C 230 200, 270 200, 270 220 L 260 220 L 260 225 L 240 225 L 240 220 Z" fill="#001833" />
          <circle cx="250" cy="290" r="8" fill="white" />
        </g>

        {/* Orange Tool (Top-Right to Bottom-Left) */}
        <g transform="rotate(45 250 260)">
          <rect x="240" y="220" width="20" height="80" fill="#ff7300" rx="4" />
          {/* Stylized head */}
          <path d="M230 220 C 230 200, 270 200, 270 220 L 260 220 L 260 225 L 240 225 L 240 220 Z" fill="#ff7300" />
          {/* Stripes on handle */}
          <rect x="242" y="250" width="16" height="2" fill="white" />
          <rect x="242" y="256" width="16" height="2" fill="white" />
          <rect x="242" y="262" width="16" height="2" fill="white" />
        </g>
      </g>

      {/* Ground Horizon Curve */}
      <path 
        d="M100 370 Q 250 340 400 370 L 400 380 Q 250 350 100 380 Z" 
        fill="#001833" 
      />
    </svg>
  );
};

export default Logo;
