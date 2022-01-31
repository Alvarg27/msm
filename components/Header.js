import Link from "next/link";
import React from "react";
import styles from "../styles/Header.module.css";
import { CgMenuGridO } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
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
      {!dropdown ? (
        <CgMenuGridO
          className={styles.icon}
          onClick={() => setDropdown(true)}
        />
      ) : (
        <CgClose className={styles.icon} onClick={() => setDropdown(false)} />
      )}
    </div>
  );
}
