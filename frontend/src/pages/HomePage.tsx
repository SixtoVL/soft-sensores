import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Zap,
  Gauge,
  Waves,
  Droplets,
  Activity,
  Cloud,
  Microscope,
  Factory
} from "lucide-react";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* SECCIÓN HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Zap size={14} /> Soft-Termistores v1.0
          </div>
          <h1>
            Interpolación de Newton para <br />
            <span>Calibración de Sensores NTC</span>
          </h1>
          <p>
            El software desarrollado tiene como propósito estimar la temperatura correspondiente 
            a una lectura de resistencia obtenida de un termistor NTC mediante la aplicación 
            del método de interpolación de Newton con diferencias finitas hacia adelante.
          </p>
          <div className={styles.actions}>
            <button
              className={styles.primaryBtn}
              onClick={() => navigate("/interpolacion")}
            >
              Comenzar Cálculo <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.matrixPreview}>
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={styles.matrixCell}
                style={{ opacity: Math.random() * 0.7 + 0.3 }}
              >
                {(Math.random() * 20 - 10).toFixed(2)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2.9: CALIBRACIÓN DE SENSORES */}
      <section className={styles.textSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.iconBox}>
            <Microscope />
          </div>
          <h2>Aplicación en la Calibración de Sensores</h2>
        </div>
        <div className={styles.textGrid}>
          <p>
            Los sistemas modernos de adquisición de datos frecuentemente reciben señales eléctricas 
            que deben convertirse en magnitudes físicas comprensibles para el usuario. Por ejemplo, 
            un termistor puede generar una resistencia de 9200 Ω, pero el usuario necesita conocer 
            la temperatura correspondiente.
          </p>
          <p>
            Cuando dicho valor no aparece exactamente en la tabla de calibración, la <strong>interpolación </strong> 
            permite estimar la magnitud asociada utilizando los datos experimentales disponibles. 
            En consecuencia, actúa como un mecanismo de conversión fundamental en sistemas de 
            instrumentación y control industrial.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2.10: APLICACIONES INDUSTRIALES */}
      <section className={styles.features}>
        <div className={styles.fullWidthHeader}>
          <h2>Aplicaciones Industriales del Método de Newton</h2>
          <p>
            Aunque este proyecto se centra en termistores NTC, el método de Newton con diferencias 
            finitas es una herramienta versátil en múltiples campos de la instrumentación.
          </p>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Gauge />
          </div>
          <h3>Sensores de Presión</h3>
          <p>
            Permite estimar la presión (Pa, bar, psi) cuando la lectura eléctrica se encuentra 
            entre dos valores de la tabla de calibración del fabricante, crucial en plantas petroquímicas.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Waves />
          </div>
          <h3>Sensores de Nivel</h3>
          <p>
            Facilita el monitoreo detallado de tanques de agua o combustibles al estimar niveles 
            intermedios de manera precisa para la toma de decisiones en tiempo real.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Droplets />
          </div>
          <h3>Sensores de Humedad</h3>
          <p>
            Optimiza sistemas de riego e invernaderos al calcular estimaciones confiables de 
            humedad relativa cuando la respuesta del sensor no es lineal.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Activity />
          </div>
          <h3>Sensores de Flujo</h3>
          <p>
            Fundamental en industrias alimentarias y farmacéuticas para convertir pulsos o 
            voltaje en caudales exactos (l/min, m³/h) mediante interpolación.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Cloud />
          </div>
          <h3>Sensores de Gases</h3>
          <p>
            Detecta y cuantifica concentraciones de CO, CO₂ o CH₄. La interpolación compensa la 
            respuesta no lineal del sensor para mejorar la seguridad industrial.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Factory />
          </div>
          <h3>Control de Procesos</h3>
          <p>
            Transforma datos discretos en información continua utilizable por sistemas de monitoreo 
            y supervisión en cualquier entorno de manufactura.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2.10.6: CONCLUSIÓN */}
      <section className={styles.importanceSection}>
        <div className={styles.importanceContent}>
          <h3>Importancia en la Instrumentación Industrial</h3>
          <p>
            La interpolación constituye una herramienta fundamental dentro de la instrumentación moderna 
            debido a que permite transformar datos discretos obtenidos durante los procesos de calibración 
            en información continua utilizable por sistemas de control.
          </p>
          <p>
            El método de <strong>Newton con diferencias finitas hacia adelante</strong> ofrece una solución eficiente 
            cuando los datos se encuentran igualmente espaciados, permitiendo su implementación sencilla en 
            microcontroladores y controladores industriales.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
