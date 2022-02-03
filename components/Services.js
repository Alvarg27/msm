import React from "react";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.textContainer}>
            <h2>Mercado de semiconductores.</h2>
            <ul>
              <li>El Mercado de fabricación está concentrado en Asia.</li>
              <li>Estados Unidos, reacciona para abastecer su mercado.</li>
              <li>México enfrenta crisis de desabasto.</li>
              <li>
                Alianza CIDESI/MSM ofrece una alternativa real, confiable e
                inmediata.
              </li>
              <li>Cubrimos tecnologías CMOS y NMOS</li>
            </ul>
            <h2>Plataforma tecnológica</h2>
            <ul>
              <li>Tecnología en NMOS y CMOS.</li>
              <li>
                Por su escala de integración, esta tecnología no estará en el
                estado del arte de las tecnologías CMOS actualmente en uso.
              </li>
            </ul>
            <p>MSM SEMICONDUCTORES tiene varios años colaborando con CIDESI y de dicha colaboración surgió el acuerdo legal para comercializar de manera exclusiva las tecnologías que competen a nuestro sector de mercado, entre ellos el de semiconductores, para apoyar empresas mexicanas a tener acceso a procesos de manufactura certificados de obleas de semiconductores</p>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <img src="/serviceImg.webp" />
        </div>
      </div>
    </div>
  );
}
