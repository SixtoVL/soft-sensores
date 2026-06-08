export interface GraficaData {
  x: number[];
  y: number[];
  z?: number[][];
  type: 'function_1d' | 'contour_2d';
  name: string;
}

export interface Tabla {
  cabecera: string[];
  filas: (number | string | null)[][];
}

export interface NewtonIteration {
  i: number;
  xi: number;
  fxi: number;
  dfxi: number;
  error: number;
}
