import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <SplashScreen>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </SplashScreen>
  );
}
