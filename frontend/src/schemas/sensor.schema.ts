export interface SensorConfig {
  id: string;
  name: string;
  unitX: string;
  unitY: string;
  placeholderX: string;
  placeholderY: string;
}

export const SENSOR_TYPES: SensorConfig[] = [
  {
    id: "termistor",
    name: "Sensor de Temperatura (Termistor)",
    unitX: "Ω",
    unitY: "°C",
    placeholderX: "Resistencia",
    placeholderY: "Temperatura",
  },
  {
    id: "presion",
    name: "Sensor de Presión",
    unitX: "V/mA",
    unitY: "kPa/bar",
    placeholderX: "Señal (V/mA)",
    placeholderY: "Presión",
  },
  {
    id: "nivel",
    name: "Sensor de Nivel",
    unitX: "V/mA/Hz",
    unitY: "m/cm/%",
    placeholderX: "Señal",
    placeholderY: "Nivel",
  },
  {
    id: "humedad",
    name: "Sensor de Humedad",
    unitX: "V",
    unitY: "% HR",
    placeholderX: "Voltaje",
    placeholderY: "Humedad Relativa",
  },
  {
    id: "flujo",
    name: "Sensor de Flujo",
    unitX: "Hz/V",
    unitY: "L/min",
    placeholderX: "Frecuencia/Señal",
    placeholderY: "Caudal",
  },
  {
    id: "gas",
    name: "Sensor de Gases",
    unitX: "V/kΩ",
    unitY: "ppm/%",
    placeholderX: "Señal",
    placeholderY: "Concentración",
  },
  {
    id: "personalizado",
    name: "Personalizado",
    unitX: "x",
    unitY: "f(x)",
    placeholderX: "Valor X",
    placeholderY: "Valor Y",
  },
];
