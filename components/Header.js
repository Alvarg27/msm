import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/Header.module.css";
import { CgMenuGridO } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import Dropdown from "./Dropdown";

export default function Header({ offsetY }) {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    setDropdown(false);
  }, [offsetY]);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src="/logo_msm_degradado.webp" />
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
        {!dropdown ? (
          <CgMenuGridO
            className={styles.icon}
            onClick={() => setDropdown(true)}
          />
        ) : (
          <CgClose className={styles.icon} onClick={() => setDropdown(false)} />
        )}
      </div>
      {dropdown ? <Dropdown setDropdown={setDropdown} /> : ""}
    </div>
  );
}
