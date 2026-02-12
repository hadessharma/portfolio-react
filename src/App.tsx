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
  const isScrolling = useRef(false);

  // Helper to check if we are on a mobile device
  // You might want to use a more robust check or a library like react-responsive,
  // but checking window width is a simple start for layout logic.
  // However, for the wheel event listener, we can just check if window.innerWidth < 768 inside the handler.

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isDevMode) return;

    const handleWheel = (e: WheelEvent) => {
      // Disable custom scroll logic on mobile (md breakpoint is 768px in Tailwind)
      if (window.innerWidth < 768) return;

      e.preventDefault();
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const height = container.clientHeight;
      const currentScroll = container.scrollTop;
      // Use a small threshold to determine current section more accurately during partial scrolls
      const currentSectionIndex = Math.round(currentScroll / height);

      const nextSectionIndex = currentSectionIndex + direction;
      const sectionsCount = 5; // Home, About, Projects, Skills, Contact

      if (nextSectionIndex >= 0 && nextSectionIndex < sectionsCount) {
        isScrolling.current = true;
        const targetScroll = nextSectionIndex * height;

        const start = container.scrollTop;
        const change = targetScroll - start;
        const duration = 700; // ms
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          // easeInOutCubic for smoother start/end
          const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

          container.scrollTop = start + change * ease;

          if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
          } else {
            isScrolling.current = false;
          }
        };

        requestAnimationFrame(animateScroll);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isDevMode]);

  return (
    <div
      ref={scrollContainerRef}
      className={`h-dvh w-full bg-gray-950 font-sans text-slate-200 
        ${isDevMode ? 'overflow-y-auto' : 'overflow-y-auto md:overflow-hidden'}
      `}
    >
      {!isDevMode && <Navbar scrollContainerRef={scrollContainerRef} />}
      <div
        id="home"
        className={`min-h-screen w-full ${!isDevMode ? 'md:h-screen pt-20' : ''}`}
      >
        <Home isDevMode={isDevMode} setIsDevMode={setIsDevMode} />
      </div>

      {!isDevMode && (
        <>
          <div
            id="about"
            className="min-h-screen w-full md:h-screen pt-20"
          >
            <About />
          </div>
          <div
            id="projects"
            className="min-h-screen w-full md:h-screen pt-20"
          >
            <Projects />
          </div>
          <div
            id="skills"
            className="min-h-screen w-full md:h-screen pt-20"
          >
            <Experience />
          </div>
          <div
            id="contact"
            className="min-h-screen w-full md:h-screen pt-20"
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
