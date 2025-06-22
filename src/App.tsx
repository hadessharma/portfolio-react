import React, { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import Project from "./components/Pages/projects";
import Contact from "./components/Pages/contact";

const Layout: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollContainerRef}
      className="min-h-screen md:h-screen md:snap-y md:snap-mandatory overflow-y-scroll scroll-smooth bg-gray-950 font-sans text-slate-200 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-cyan-600 hover:scrollbar-thumb-cyan-500 scrollbar-thumb-rounded-md"
    >
      <Navbar scrollContainerRef={scrollContainerRef} />
      <div
        id="home"
        className="min-h-screen md:h-screen md:snap-center pt-20"
      >
        <Home />
      </div>
      <div
        id="about"
        className="min-h-screen md:h-screen md:snap-center pt-20"
      >
        <About />
      </div>
      <div
        id="experience"
        className="min-h-screen md:h-screen md:snap-center pt-20"
      >
        <Experience />
      </div>
      <div
        id="projects"
        className="min-h-screen md:h-screen md:snap-center pt-20"
      >
        <Project />
      </div>
      <div
        id="contact"
        className="min-h-screen md:h-screen md:snap-center pt-20"
      >
        <Contact />
      </div>
    </div>
  );
};

function App() {
  return <Layout />;
}

export default App;
