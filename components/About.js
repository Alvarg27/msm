import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1 className="title">Acerca de</h1>
      <div className={styles.textContainer}>
        <p>
        Implementación procesos de circuitos integrados de alto valor al sector, industrial, a nivel Internacional, con base en una plataforma tecnológica de implementación única y enfocados al cliente.
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
