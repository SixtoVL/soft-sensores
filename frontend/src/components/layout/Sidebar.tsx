import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Calculator,
  Settings,
  ChevronDown,
  ChevronRight,
  List,
  X,
} from "lucide-react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

  const [isInterpolationOpen, setIsInterpolationOpen] = useState(false);

  const toggleInterpolation = () => {
    setIsInterpolationOpen(!isInterpolationOpen);
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className={styles.logoIcon}>CSI</div>
          <span>Calibración de Sensores Industriales</span>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navGroup}>
          <span className={styles.groupLabel}>General</span>
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <Home size={20} /> Inicio
          </NavLink>
        </div>

        <div className={styles.navGroup}>
          <span className={styles.groupLabel}>Calculadora</span>

          {/* Interpolación */}
          <div
            className={styles.methodTitle}
            onClick={toggleInterpolation}
            style={{
              cursor: "pointer",
              userSelect: "none",
              marginTop: "0.5rem",
            }}
          >
            {isInterpolationOpen ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
            Interpolación
          </div>

          {isInterpolationOpen && (
            <div className={styles.subMenu}>
              <NavLink
                to="/interpolacion"
                onClick={onClose}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <Calculator size={18} /> Calculadora
              </NavLink>
            </div>
          )}
        </div>

        {/*<div className={styles.navGroup}>
          <span className={styles.groupLabel}>Próximos Servicios</span>
          <div className={styles.lockedLink}>
            <List size={20} /> Servicio 2
          </div>
          <div className={styles.lockedLink}>
            <List size={20} /> Otro servicio
          </div>
        </div>*/}
      </nav>

      <div className={styles.footer}>
        <NavLink
          to="/settings"
          onClick={onClose}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Settings size={20} /> Configuración
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
