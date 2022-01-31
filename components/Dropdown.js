import styles from "../styles/Dropdown.module.css";

import React from "react";

import Link from "next/link";

export default function Dropdown({ setDropdown }) {
  return (
    <div className={styles.dropdown} onClick={() => setDropdown(false)}>
      <ul>
        <li>
          <Link href="#hero">Inicio</Link>
        </li>
        <li>
          <Link href="#about">Acerca de</Link>
        </li>
        <li>
          <Link href="#contact">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}
