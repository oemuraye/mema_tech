import Image from "next/image";
import Header from "@/components/Heading/Header";
import Footer from "@/components/Footer/Footer";


import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="container-fluid">
      <Header />
      
      <Footer />
    </section>
  );
}