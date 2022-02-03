import React from "react";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.textContainer}>
            <p>
              Empresa pionera en la distribución y maquila de chips
              semiconductores
            </p>
            <h1>Diseño e implementación de circuitos y sistemas integrados.</h1>
            <button id="about" className="primaryBtn">
              Saber más
            </button>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <img src="/heroImg.webp" />
        </div>
      </div>
    </div>
  );
}
