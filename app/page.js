import Image from "next/image";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import HeroSection from "@/components/Homepage/HeroSection";
import Section2 from "@/components/Homepage/Section2";
import Section3 from "@/components/Homepage/Section3";
import Section4 from "@/components/Homepage/Section4";
import Section5 from "@/components/Homepage/Section5";



import styles from "./page.module.css";
import Section6 from "@/components/Homepage/Section6";
import Section7 from "@/components/Homepage/Section7";

export default function Home() {
  return (
    <section className="">
      <Header />

      <main>
        <HeroSection />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </main>

      <Footer />
    </section>
  );
}