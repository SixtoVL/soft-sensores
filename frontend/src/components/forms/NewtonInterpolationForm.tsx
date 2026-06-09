import React, { useState, useEffect, useMemo } from "react";
import {
  Plus,
  Trash2,
  Calculator,
  ArrowDownRight,
  ArrowUpRight,
  Settings2,
} from "lucide-react";
import type {
  DividedDifferencesRequest
} from "../../schemas/interpolation.schema";
import { SENSOR_TYPES, type SensorConfig } from "../../schemas/sensor.schema";
import styles from "./NewtonInterpolationForm.module.css";
import clsx from "clsx";

interface Props {
  onSubmit: (data: DividedDifferencesRequest) => void;
  isLoading: boolean;
  initialValues?: DividedDifferencesRequest & { sensorId?: string };
}

export const NewtonInterpolationForm: React.FC<Props> = ({
  onSubmit,
  isLoading,
  initialValues,
}) => {
  // Permitimos que x e y sean string para poder borrarlos en el input
  const [puntos, setPuntos] = useState<any[]>(
    initialValues?.puntos || [
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 4, y: 16 },
    ],
  );
  const [sensorId, setSensorId] = useState<string>(initialValues?.sensorId || "termistor");
  
  const currentSensor = useMemo(() => 
    SENSOR_TYPES.find(s => s.id === sensorId) || SENSOR_TYPES[0],
    [sensorId]
  );
  const [xAEvaluar, setXAEvaluar] = useState<number | string>(
    initialValues?.x_a_evaluar ?? 3,
  );
  const [metodo, setMetodo] = useState<"divididas" | "finitas">(
    initialValues?.metodo || "divididas",
  );
  const [direccion, setDireccion] = useState<"adelante" | "atras">(
    initialValues?.direccion || "adelante",
  );
  const [pivote, setPivote] = useState<number>(initialValues?.pivote || 0);

  // Al cambiar la dirección, sugerir un pivote adecuado
  useEffect(() => {
    if (metodo === "finitas") {
      if (direccion === "atras" && pivote === 0) {
        setPivote(puntos.length - 1);
      } else if (direccion === "adelante" && pivote === puntos.length - 1) {
        setPivote(0);
      }
    }
  }, [direccion, puntos.length, metodo]);

  useEffect(() => {
    if (initialValues) {
      setPuntos(initialValues.puntos);
      setXAEvaluar(initialValues.x_a_evaluar ?? "");
      setMetodo(initialValues.metodo || "divididas");
      setDireccion(initialValues.direccion || "adelante");
      setPivote(initialValues.pivote || 0);
    }
  }, [initialValues]);

  const handleAddPoint = () => {
    setPuntos([...puntos, { x: "", y: "" }]);
  };

  const handleRemovePoint = (index: number) => {
    if (puntos.length > 2) {
      setPuntos(puntos.filter((_, i) => i !== index));
      if (pivote >= puntos.length - 1) {
        setPivote(Math.max(0, puntos.length - 2));
      }
    }
  };

  const handleUpdatePoint = (
    index: number,
    field: "x" | "y",
    value: string,
  ) => {
    const newPuntos = [...puntos];
    newPuntos[index] = {
      ...newPuntos[index],
      [field]: value, // Guardamos el string directo del input
    };
    setPuntos(newPuntos);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (puntos.length < 2) return;

    // Convertir a números antes de enviar a la API
    const puntosProcesados = puntos.map((p) => ({
      x: typeof p.x === "string" ? parseFloat(p.x) : p.x,
      y: typeof p.y === "string" ? parseFloat(p.y) : p.y,
    }));

    onSubmit({
      puntos: puntosProcesados,
      x_a_evaluar:
        xAEvaluar === ""
          ? null
          : typeof xAEvaluar === "string"
            ? parseFloat(xAEvaluar)
            : xAEvaluar,
      metodo,
      direccion: metodo === "finitas" ? direccion : undefined,
      pivote: metodo === "finitas" ? pivote : undefined,
      sensorId, // Añadimos el sensorId para persistencia en el front
    } as any);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.iconBox}>
            <Calculator size={20} />
          </div>
          <h2>Configuración</h2>
        </div>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Selector de Sensor */}
        <section className={styles.formSection} style={{ marginBottom: "1rem" }}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Settings2 size={18} />
              <h3>Tipo de Sensor / Aplicación</h3>
            </div>
          </div>
          <select
            value={sensorId}
            onChange={(e) => setSensorId(e.target.value)}
            className={styles.mainInput}
            style={{ width: "100%", cursor: "pointer", marginBottom: "0.5rem" }}
          >
            {SENSOR_TYPES.map((sensor) => (
              <option key={sensor.id} value={sensor.id}>
                {sensor.name}
              </option>
            ))}
          </select>
          <div style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.25rem" }}>
            Eje X: {currentSensor.placeholderX} ({currentSensor.unitX}) <br />
            Eje Y: {currentSensor.placeholderY} ({currentSensor.unitY})
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <Plus size={18} />
              <h3>Puntos ({currentSensor.unitX}, {currentSensor.unitY})</h3>
            </div>
            <button
              type="button"
              onClick={handleAddPoint}
              className={styles.addButtonMini}
            >
              Añadir
            </button>
          </div>

          <div className={styles.listContainer}>
            {puntos.map((punto, index) => (
              <div key={index} className={styles.itemRow}>
                <span className={styles.itemIndex}>{index}</span>
                <div style={{ position: "relative", flex: 1 }}>
                  <input
                    type="number"
                    step="any"
                    placeholder={currentSensor.unitX}
                    value={punto.x}
                    onChange={(e) =>
                      handleUpdatePoint(index, "x", e.target.value)
                    }
                    className={styles.mainInput}
                    required
                  />
                </div>
                <div style={{ position: "relative", flex: 1 }}>
                  <input
                    type="number"
                    step="any"
                    placeholder={currentSensor.unitY}
                    value={punto.y}
                    onChange={(e) =>
                      handleUpdatePoint(index, "y", e.target.value)
                    }
                    className={styles.mainInput}
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemovePoint(index)}
                  className={styles.removeButton}
                  disabled={puntos.length <= 2}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Selector de Tipo de Diferencia */}
        <div className={styles.toggleContainer}>
          <div className={styles.toggleLabel}>
            <span style={{ fontWeight: 700 }}>Diferencias Finitas</span>
            <span>(Datos equiespaciados)</span>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={metodo === "finitas"}
              onChange={(e) =>
                setMetodo(e.target.checked ? "finitas" : "divididas")
              }
            />
            <span className={styles.slider}></span>
          </label>
        </div>

        {!metodo || metodo === "divididas" ? (
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "#f8fafc",
              borderRadius: "8px",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              color: "#64748b",
              border: "1px solid #e2e8f0",
            }}
          >
            <strong>Sección 1:</strong> Usando Diferencias Divididas para puntos
            con cualquier espaciamiento.
          </div>
        ) : (
          <div
            style={{
              padding: "0.75rem",
              backgroundColor: "#f0fdf4",
              borderRadius: "8px",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              color: "#166534",
              border: "1px solid #bbf7d0",
            }}
          >
            <strong>Sección 2:</strong> Usando Diferencias Finitas optimizadas
            para paso h constante.
          </div>
        )}

        {/* Configuración adicional para Finitas */}
        {metodo === "finitas" && (
          <div
            className={styles.finitasConfig}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {/* Selector de Dirección */}
            <div className={styles.directionSelector}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#64748b",
                  marginBottom: "0.75rem",
                }}
              >
                Dirección de la Tabla
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                }}
              >
                <button
                  type="button"
                  className={clsx(
                    styles.dirBtn,
                    direccion === "adelante" && styles.dirBtnActive,
                  )}
                  onClick={() => setDireccion("adelante")}
                >
                  <ArrowDownRight size={16} /> Adelante
                </button>
                <button
                  type="button"
                  className={clsx(
                    styles.dirBtn,
                    direccion === "atras" && styles.dirBtnActive,
                  )}
                  onClick={() => setDireccion("atras")}
                >
                  <ArrowUpRight size={16} /> Atrás
                </button>
              </div>
            </div>

            {/* Selector de Pivote */}
            <div className={styles.pivotSelector}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#64748b",
                  marginBottom: "0.75rem",
                }}
              >
                Punto de Referencia (Pivote)
              </label>
              <select
                value={pivote}
                onChange={(e) => setPivote(parseInt(e.target.value))}
                className={styles.mainInput}
                style={{ width: "100%", cursor: "pointer" }}
              >
                {puntos.map((_, idx) => (
                  <option key={idx} value={idx}>
                    Punto {idx} (x={puntos[idx].x || "?"})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className={styles.footerParams}>
          <div className={styles.field} style={{ marginBottom: "1.5rem" }}>
            <label>Punto a evaluar (opcional)</label>
            <input
              type="number"
              step="any"
              placeholder="Ej: 2.5"
              value={xAEvaluar}
              onChange={(e) => setXAEvaluar(e.target.value)}
              className={styles.mainInput}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading || puntos.length < 2}
          >
            {isLoading ? "Calculando..." : "Calcular Interpolación"}
          </button>
        </div>
      </form>
    </div>
  );
};
