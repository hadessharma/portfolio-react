import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./components/Pages/projects";
import Contact from "./components/Pages/contact";
// import NotFound from "./components/Pages/notfound";

const Layout: React.FC = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth">
      {/* Navbar */}
      <Navbar />
      {/* Sections */}
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="projects" className="section">
        <Project />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
