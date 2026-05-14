"use client";

import React from "react";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  onClick?: () => void;
}

interface DockIcon {
  src: string;
  alt: string;
  onClick?: () => void;
}

const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  onClick,
}) => {
  const glassStyle: React.CSSProperties = {
    boxShadow: "0 6px 12px rgba(0,0,0,0.25), 0 0 24px rgba(0,0,0,0.12)",
    transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
    ...style,
  };

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden text-white cursor-pointer transition-all duration-300 active:scale-[0.97] ${className}`}
      style={glassStyle}
      onClick={onClick}
    >
      {/* Blur + distortion layer */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      {/* Tint layer */}
      <div
        className="absolute inset-0 z-10 rounded-[inherit]"
        style={{ background: "rgba(255,255,255,0.12)" }}
      />
      {/* Inner border highlight */}
      <div
        className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
        style={{
          boxShadow:
            "inset 1.5px 1.5px 1px 0 rgba(255,255,255,0.45), inset -1px -1px 1px 0 rgba(255,255,255,0.2)",
        }}
      />
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const GlassDock: React.FC<{ icons: DockIcon[]; href?: string }> = ({
  icons,
  href,
}) => (
  <GlassEffect
    href={href}
    className="rounded-3xl p-3 hover:p-4"
  >
    <div className="flex items-center justify-center gap-2 py-0 px-0.5 overflow-hidden">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="w-16 h-16 transition-transform duration-300 hover:scale-110 cursor-pointer"
          style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
          onClick={icon.onClick}
        />
      ))}
    </div>
  </GlassEffect>
);

const GlassButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}> = ({ children, href, onClick, className = "", target }) => (
  <GlassEffect
    href={href}
    target={target}
    onClick={onClick}
    className={`rounded-full px-7 py-3 overflow-hidden ${className}`}
  >
    <div className="relative z-30">{children}</div>
  </GlassEffect>
);

const GlassIconButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}> = ({ children, href, onClick, className = "" }) => (
  <GlassEffect
    href={href}
    onClick={onClick}
    className={`rounded-full p-3 overflow-hidden ${className}`}
  >
    {children}
  </GlassEffect>
);

const GlassFilter: React.FC = () => (
  <svg
    style={{ display: "none", position: "absolute" }}
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.001 0.005"
          numOctaves="1"
          seed="17"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lightingColor="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="200"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

export { GlassEffect, GlassDock, GlassButton, GlassIconButton, GlassFilter };
