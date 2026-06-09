# Soft-Sensores Backend 🐍

Motor de procesamiento matemático para la interpolación de datos de sensores.

## 📋 Funcionalidades

-   **Algoritmos de Newton:**
    -   Diferencias Divididas (para cualquier espaciamiento).
    -   Diferencias Finitas (Adelante, Atrás, Centrada) para datos equiespaciados.
-   **Procesamiento Simbólico:** Generación de polinomios reducidos mediante SymPy.
-   **Salida Educativa:** Generación de procedimientos paso a paso en formato LaTeX para facilitar la validación manual.
-   **Flexibilidad:** Diseñado para recibir pares de datos (x, y) de cualquier magnitud física.

## 🛠️ Tecnologías

-   **FastAPI**: Framework de alto rendimiento.
-   **NumPy**: Operaciones vectorizadas para cálculo de tablas de diferencias.
-   **SymPy**: Manipulación algebraica para la simplificación de polinomios.

## 🚀 Despliegue

1.  Instalar dependencias: `pip install -r requirements.txt`
2.  Iniciar servidor: `python main.py`
3.  Documentación API: [http://localhost:8088/docs](http://localhost:8088/docs)

---
El backend es agnóstico al tipo de sensor, procesando los datos numéricos independientemente de las unidades físicas.
