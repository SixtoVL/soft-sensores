# Soft-Sensores 🌡️📊

Plataforma integral para el cálculo y visualización de interpolación polinómica aplicada a la **calibración de sensores industriales**. Utiliza métodos numéricos de Newton (**Diferencias Divididas** y **Diferencias Finitas**) para transformar señales eléctricas en magnitudes físicas precisas.

## 🚀 Características Principales

-   **Soporte Multisensor:** Configuración específica para Termistores, Presión, Nivel, Humedad, Flujo y Gases.
-   **Adaptación Dinámica:** Ajuste automático de unidades (Ω, V, mA, Hz) y magnitudes (°C, kPa, %, L/min) según el sensor seleccionado.
-   **Interpolación Avanzada:** Implementación completa de Newton con visualización paso a paso en LaTeX.
-   **Visualización Interactiva:** Gráficos dinámicos para comparar puntos experimentales con la curva de calibración.

## 🛠️ Estructura del Proyecto

-   **/backend**: API en FastAPI (Python) con el motor matemático y simplificación simbólica (SymPy).
-   **/frontend**: Interfaz moderna en React 19 + TypeScript con soporte para múltiples perfiles de sensores.

## 📦 Instalación Rápida

### Requisitos
-   [Python 3.10+](https://www.python.org/)
-   [Node.js 18+](https://nodejs.org/)

### Pasos

1.  **Backend:**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate # Windows: venv\Scripts\activate
    pip install -r requirements.txt
    python main.py
    ```

2.  **Frontend:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

---
Diseñado para ingenieros y técnicos que requieren una herramienta precisa para la conversión de datos en instrumentación y control industrial.
