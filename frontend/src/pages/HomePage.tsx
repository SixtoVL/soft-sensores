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
import sensorsImg from "../assets/sensores.webp";
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* SECCIÓN HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <Zap size={14} /> Soft-Sensores v1.0
          </div>
          <h1>
            Interpolación de Newton para <br />
            <span>Calibración de Sensores Industriales</span>
          </h1>
          <p>
            Plataforma avanzada para la conversión y estimación de magnitudes físicas. 
            Utiliza métodos numéricos de Newton para transformar señales eléctricas en datos 
            precisos de temperatura, presión, nivel, flujo y más.
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
          <img src={sensorsImg} alt="Sensores Industriales" className={styles.sensorsHeroImg} />
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
            Los sistemas modernos de adquisición de datos reciben señales eléctricas 
            (voltaje, corriente, resistencia) que deben convertirse en magnitudes físicas 
            comprensibles. Cuando un valor medido no aparece exactamente en la tabla de 
            referencia, la interpolación es la clave para una lectura precisa.
          </p>
          <p>
            Mediante el uso de <strong>diferencias divididas y finitas</strong>, nuestro sistema 
            permite estimar cualquier magnitud asociada utilizando datos experimentales, 
            actuando como un mecanismo de conversión fundamental en instrumentación y 
            control industrial.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2.10: APLICACIONES INDUSTRIALES */}
      <section className={styles.features}>
        <div className={styles.fullWidthHeader}>
          <h2>Versatilidad del Método de Newton</h2>
          <p>
            Desde la termometría hasta la detección de gases, el método de Newton es una 
            herramienta indispensable en múltiples campos de la ingeniería y la manufactura.
          </p>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Activity />
          </div>
          <h3>Termistores (Temp.)</h3>
          <p>
            Convierte lecturas de resistencia (Ω) en temperaturas precisas (°C/°F), 
            compensando la no linealidad característica de los sensores NTC.
          </p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconBox}>
            <Gauge />
          </div>
          <h3>Sensores de Presión</h3>
          <p>
            Estima presiones (Pa, bar, psi) a partir de señales de voltaje o corriente, 
            crucial para la precisión en sistemas hidráulicos y neumáticos.
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
