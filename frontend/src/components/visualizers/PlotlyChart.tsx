import React from 'react';
import Plotly from 'plotly.js/lib/core';
import createPlotlyComponent from 'react-plotly.js/factory';

// Manejo robusto para Vite/CJS
const createPlotly = (createPlotlyComponent as any).default || createPlotlyComponent;
const Plot = createPlotly(Plotly);

interface PlotlyChartProps {
  puntosX: number[];
  puntosY: number[];
  polinomioLatex: string;
  curva?: Array<{ x: number; y: number }>;
}

export const PlotlyChart: React.FC<PlotlyChartProps> = ({ puntosX, puntosY, polinomioLatex, curva }) => {
  
  const data: any[] = [
    {
      x: puntosX,
      y: puntosY,
      type: 'scatter',
      mode: 'markers',
      marker: { color: '#2563eb', size: 10 },
      name: 'Puntos de Calibración',
    }
  ];

  if (curva && curva.length > 0) {
    data.push({
      x: curva.map(p => p.x),
      y: curva.map(p => p.y),
      type: 'scatter',
      mode: 'lines',
      line: { color: '#10b981', width: 3 },
      name: 'Polinomio de Newton',
    });
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Plot
        data={data}
        layout={{
          autosize: true,
          margin: { l: 40, r: 20, t: 20, b: 40 },
          hovermode: 'closest',
          xaxis: { title: 'Resistencia (Ω)' },
          yaxis: { title: 'Temperatura (°C)' },
          plot_bgcolor: '#f8fafc',
          paper_bgcolor: '#ffffff',
          legend: { orientation: 'h', y: -0.2 }
        }}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
