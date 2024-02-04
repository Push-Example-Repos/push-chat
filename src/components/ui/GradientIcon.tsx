import React, { ReactElement } from "react";

interface GradientIconProps {
  icon: ReactElement;
  isHovered: boolean | undefined;
  fill?: boolean | undefined;
}

const GradientIcon: React.FC<GradientIconProps> = ({
  icon,
  isHovered,
  fill,
}) => {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#FF94A6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#8247E5", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>

      {React.cloneElement(icon, {
        stroke: fill ? "none" : isHovered ? "url(#gradient)" : "#000",
        fill: fill ? (isHovered ? "url(#gradient)" : "#000") : "none",
      })}
    </svg>
  );
};

export default GradientIcon;
