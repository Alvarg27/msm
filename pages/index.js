import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import styles from "../styles/Home.module.css";

export default function Home() {
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
    </div>
  );
}
