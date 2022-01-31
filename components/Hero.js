import React from "react";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.textContainer}>
            <p>
              Empresa pionera en la distribución y maquila de chips
              semiconductores
            </p>
            <h1>Diseño y fabricación de circuitos y sistemas integrados.</h1>
            <button className="primaryBtn">Saber más</button>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <img src="/heroImg.webp" />
        </div>
      </div>
      <small>© Copyright 2022, MSM</small>
    </div>
  );
}
