import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className="title">Acerca de</h1>
      <div className={styles.textContainer}>
        <p>
          Consolidar procesos de fabricación de circuitos integrados que de
          soluciones de alto valor al sector académico e industrial a nivel
          nacional con base en una plataforma tecnológica con procesos flexibles
          y enfocados al cliente.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Misión</h2>
          <p>
            Empresa responsable en el manejo de tecnologías, talento y
            desarrollo.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Visión</h2>
          <p>
            Ser una empresa líder a nivel nacional e internacional, en desarollo
            de tecnología, impulsando talento mexicano en el sector tecnológico.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Valores</h2>
          <p>
            Responsabilidad, Compromiso, Ética, Lealtad, Integridad, Desarrollo
            de talento.
          </p>
        </div>
      </div>
    </div>
  );
}
