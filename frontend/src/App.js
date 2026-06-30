import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Leadership from "@/components/portfolio/Leadership";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import { PROFILE } from "@/data/portfolio";

const Home = () => {
  useEffect(() => {
    document.title = `${PROFILE.name} — AI/ML Engineer & Software Developer`;
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      `${PROFILE.name} · ${PROFILE.degree} at ${PROFILE.university}. Portfolio of AI/ML projects, software engineering work and leadership experience.`
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand selection:text-black">
      <ScrollProgress />
      <Navbar />
      <main data-testid="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-right" richColors closeButton theme="system" />
      </div>
    </ThemeProvider>
  );
}

export default App;
