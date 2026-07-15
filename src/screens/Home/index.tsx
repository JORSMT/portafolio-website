import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RevealInit from "@/components/RevealInit";
import Competencias from "./components/Competencias";
import Contacto from "./components/Contacto";
import Cta from "./components/Cta";
import EcosistemaPos from "./components/EcosistemaPos";
import Hero from "./components/Hero";
import Metodologia from "./components/Metodologia";
import Negocios from "./components/Negocios";
import Perfil from "./components/Perfil";
import Proyectos from "./components/Proyectos";
import Resultados from "./components/Resultados";
import Servicios from "./components/Servicios";
import Testimonios from "./components/Testimonios";

export default function Home() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        <Hero />
        <Perfil />
        <Negocios />
        <EcosistemaPos />
        <Proyectos />
        <Servicios />
        <Metodologia />
        <Competencias />
        <Resultados />
        <Testimonios />
        <Cta />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
