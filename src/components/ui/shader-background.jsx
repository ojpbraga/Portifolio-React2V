import { GrainGradient } from "@paper-design/shaders-react";

export function ShaderBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(230, 28%, 5%)"
        softness={0.72}
        intensity={0.5}
        noise={0.04}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={0.7}
        colors={[
          "hsl(215, 100%, 52%)",
          "hsl(195, 100%, 48%)",
          "hsl(260, 78%, 58%)",
        ]}
      />
    </div>
  );
}
