import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import Contact from "./components/Pages/contact";
import Blog from "./components/Pages/blog";
import BlogPost from "./components/Pages/blogPost";
import Projects from "./components/Pages/projects";

const Layout: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDevMode, setIsDevMode] = useState(false);
  const sectionIds = ["home", "about", "projects", "skills", "contact"] as const;
  const [sectionOpacities, setSectionOpacities] = useState<Record<string, number>>(() =>
    sectionIds.reduce<Record<string, number>>((acc, id) => {
      acc[id] = 1;
      return acc;
    }, {})
  );

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isDevMode) return;
    let rafId: number | null = null;

    const updateSectionFade = () => {
      const viewportTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const fadeDistance = viewportHeight * 0.7;
      const nextOpacities: Record<string, number> = {};

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          nextOpacities[id] = 1;
          return;
        }

        const sectionTop = section.offsetTop;
        const distancePast = Math.max(0, viewportTop - sectionTop);
        const fadeProgress = Math.min(distancePast / fadeDistance, 1);

        // Keep the effect subtle so content remains readable.
        nextOpacities[id] = 1 - fadeProgress * 0.16;
      });

      setSectionOpacities((prev) => {
        let hasChanged = false;
        const roundedEntries = Object.entries(nextOpacities).map(([id, value]) => {
          const rounded = Number(value.toFixed(3));
          if (prev[id] !== rounded) hasChanged = true;
          return [id, rounded] as const;
        });

        if (!hasChanged) return prev;

        return roundedEntries.reduce<Record<string, number>>((acc, [id, value]) => {
          acc[id] = value;
          return acc;
        }, {});
      });
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateSectionFade();
        rafId = null;
      });
    };

    updateSectionFade();
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [isDevMode]);

  return (
    <div
      ref={scrollContainerRef}
      className={`themed-scrollbar h-dvh w-full bg-paper-base font-sans text-paper-ink 
        overflow-y-auto
      `}
    >
      {!isDevMode && <Navbar scrollContainerRef={scrollContainerRef} />}
      <div
        id="home"
        className={`paper-fade-section min-h-screen w-full ${!isDevMode ? "pt-20" : ""}`}
        style={{ opacity: sectionOpacities.home }}
      >
        <Home isDevMode={isDevMode} setIsDevMode={setIsDevMode} />
      </div>

      {!isDevMode && (
        <>
          <div
            id="about"
            className="paper-fade-section paper-section-divider min-h-screen w-full pt-20"
            style={{ opacity: sectionOpacities.about }}
          >
            <About />
          </div>
          <div
            id="projects"
            className="paper-fade-section paper-section-divider min-h-screen w-full pt-20"
            style={{ opacity: sectionOpacities.projects }}
          >
            <Projects />
          </div>
          <div
            id="skills"
            className="paper-fade-section paper-section-divider min-h-screen w-full pt-20"
            style={{ opacity: sectionOpacities.skills }}
          >
            <Experience />
          </div>
          <div
            id="contact"
            className="paper-fade-section paper-section-divider min-h-screen w-full pt-20"
            style={{ opacity: sectionOpacities.contact }}
          >
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
