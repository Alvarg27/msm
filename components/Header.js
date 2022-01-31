import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="/logo_msm_degradado.webp" />
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/">Acerca de</Link>
        </li>
        <li>
          <Link href="/">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}
