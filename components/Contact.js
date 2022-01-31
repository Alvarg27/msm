import styles from "../styles/Contact.module.css";

import React from "react";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <img className={styles.chipImg} src="/contactImg.webp" />
        <img className={styles.logo} src="/logo_msm_degradado.webp" />
        <div className={styles.contactText}>
          <h2>Contacto</h2>
          <p>info@msm.com</p>
          <p>442 748 1939</p>
        </div>
      </div>
      <p className={styles.copyright}>© Copyright 2022, MSM</p>
    </div>
  );
}
