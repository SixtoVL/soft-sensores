import React, { useEffect, useRef } from "react";
import katex from "katex";

interface MathRendererProps {
  math: string;
  block?: boolean;
}

/**
 * Componente para renderizar fórmulas matemáticas usando KaTeX directamente
 * para mayor compatibilidad con React 19.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  block = false,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && math) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
          output: 'htmlAndMathml',
          strict: false
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math, block]);

  return <span ref={containerRef} />;
};
