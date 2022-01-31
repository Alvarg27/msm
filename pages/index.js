import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  useState;
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  console.log(offsetY);
  return (
    <div className={styles.home}>
      <Head>
        <title>MSM</title>
        <meta name="description" content="Circuitos y sistemas integtrados" />
        <link rel="icon" href="/msm_logo_circulo_degrado.webp" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact offsetY={offsetY} />
    </div>
  );
}
