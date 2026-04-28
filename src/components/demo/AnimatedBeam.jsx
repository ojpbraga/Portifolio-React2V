"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../ui/animated-beam";

const Circle = forwardRef(({ className, children, label }, ref) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 border-white/20 bg-[#232323] p-2.5 shadow-[0_0_20px_-6px_rgba(255,255,255,0.15)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-[10px] font-semibold text-[#888] tracking-wide uppercase">
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null); // HTML5
  const div2Ref = useRef(null); // TypeScript
  const div3Ref = useRef(null); // GitHub
  const div4Ref = useRef(null); // React (centro)
  const div5Ref = useRef(null); // Tailwind
  const div6Ref = useRef(null); // Figma
  const div7Ref = useRef(null); // Python

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg xl:h-[48vh] h-[39vh]"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} label="HTML5">
            <Icons.html />
          </Circle>
          <Circle ref={div5Ref} label="Tailwind">
            <Icons.tailwind />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref} label="TypeScript">
            <Icons.typescript />
          </Circle>
          <Circle ref={div4Ref} className="size-16 border-white/30 shadow-[0_0_30px_-4px_rgba(97,218,251,0.4)]" label="React">
            <Icons.react />
          </Circle>
          <Circle ref={div6Ref} label="Figma">
            <Icons.figma />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref} label="GitHub">
            <Icons.github />
          </Circle>
          <Circle ref={div7Ref} label="Python">
            <Icons.python />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={75} endYOffset={10} reverse />
    </div>
  );
}

const Icons = {
  react: () => (
    <svg viewBox="-11.5 -10.232 23 20.463" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),

  typescript: () => (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" rx="40" fill="#3178C6" />
      <path
        fill="#fff"
        d="M87.4 237.3v35.7h37.8v107.1h40.7V273h38v-35.7H87.4zm175 71.6c4.7 7.9 11.6 14 20.6 18.1 9 4.1 19.2 6.2 30.4 6.2 10.5 0 20-1.9 28.3-5.6 8.4-3.7 15-9.2 19.8-16.4 4.8-7.2 7.2-15.8 7.2-25.5 0-9.1-1.7-16.9-5.2-23.4-3.5-6.5-8.8-12.1-16.1-16.9-7.2-4.8-16.7-9.3-28.4-13.6-8.5-3.2-14.8-6-19-8.4-4.1-2.4-7-4.9-8.6-7.5-1.6-2.6-2.4-5.6-2.4-9.2 0-3.1.8-5.9 2.5-8.2 1.6-2.3 4-4.1 7-5.4 3.1-1.3 6.7-1.9 10.8-1.9 4.1 0 7.9.7 11.5 2.1 3.6 1.4 6.7 3.5 9.4 6.4 2.6 2.9 4.6 6.4 5.9 10.7l35.7-10.4c-2.7-10.5-7.5-19.3-14.4-26.4-6.9-7.1-15.3-12.4-25.4-16-10-3.6-21-5.4-32.9-5.4-11.9 0-22.6 2.1-32 6.3-9.4 4.2-16.8 10.2-22.2 18-5.4 7.8-8.1 17.1-8.1 27.9 0 13.4 3.9 24.5 11.7 33.4 7.8 8.9 20.4 16.4 37.9 22.5 7.8 2.8 14.1 5.5 18.7 8.1 4.7 2.6 8 5.3 10 8.2 2 2.9 3 6.2 3 10 0 3.6-.9 6.9-2.8 9.7-1.9 2.8-4.6 5-8.2 6.6-3.6 1.6-7.8 2.4-12.6 2.4-7.6 0-14.4-1.9-20.4-5.7-6-3.8-10.5-9.3-13.5-16.5l-36.9 10.6z"
      />
    </svg>
  ),

  html: () => (
    <svg viewBox="0 0 452 520" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E44D26" d="M41.33 0h369.34l-33.56 376.39L226 462.55 75.88 376.39z" />
      <path fill="#F16529" d="M226 437.13l122.07-33.86 28.65-321.12H226z" />
      <path fill="#EBEBEB" d="M226 212.15h-66.84l-4.65-52.17H226v-51H99.7l1.21 13.62 12.4 138.52H226zm0 147.94l-.25.07-55.78-15.05-3.56-39.94H114.6l7.01 78.44 104.33 28.98.06-.02z" />
      <path fill="#fff" d="M225.75 212.15v51h61.44l-5.78 64.79-55.66 15.02v52.93l104.4-28.96.77-8.59 11.99-134.13 1.24-13.97h-13.99zm0-103.17v51h120.63l1.01-11.29 2.31-25.73 1.22-13.98z" />
    </svg>
  ),

  tailwind: () => (
    <svg viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        fill="#38BDF8"
      />
    </svg>
  ),

  figma: () => (
    <img src="/images/figma.svg" className="w-full h-full object-contain" alt="Figma" />
  ),

  github: () => (
    <img src="/images/github-icon.png" className="w-full h-full object-contain" alt="GitHub" />
  ),

  python: () => (
    <svg viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pyGrad1" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="pyGrad2" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
          <stop offset="0%" stopColor="#FFE052" />
          <stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path
        fill="url(#pyGrad1)"
        d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
      />
      <path
        fill="url(#pyGrad2)"
        d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
      />
    </svg>
  ),
};
