# Soft-Sensores Frontend ⚛️

Interfaz de usuario para la calibración multisensor mediante interpolación.

## 📋 Características Multisensor

-   **Selector de Aplicación:** Picklist para elegir entre diversos tipos de sensores industriales:
    -   **Presión:** (V/mA -> kPa/bar)
    -   **Nivel:** (V/mA -> m/%)
    -   **Flujo:** (Hz/V -> L/min)
    -   **Humedad:** (V -> %HR)
    -   **Gases:** (V/kΩ -> ppm)
    -   **Termistores:** (Ω -> °C)
-   **Interfaz Contextual:** Los placeholders y etiquetas de la tabla de puntos se adaptan automáticamente al sensor elegido.
-   **Gráficos Plotly:** Visualización de la curva de calibración interpolada.
-   **Renderizado KaTeX:** Fórmulas matemáticas de alta calidad.

## 🛠️ Tecnologías

-   **React 19 + TypeScript**: Base del desarrollo.
-   **TanStack Query**: Persistencia y gestión de estados de cálculo.
-   **Lucide React**: Iconografía industrial.
-   **XLSX**: Soporte para exportación de tablas de calibración a Excel.

## 🚀 Desarrollo

1.  `npm install`
2.  `npm run dev`

---
La configuración de sensores y unidades se gestiona de forma centralizada en `src/schemas/sensor.schema.ts`.
