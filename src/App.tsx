import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import Project from "./components/Pages/projects";
import Contact from "./components/Pages/contact";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home" className="h-screen">
        <Home />
      </div>
      <div id="about" className="h-screen">
        <About />
      </div>
      <div id="experience" className="h-screen">
        <Experience />
      </div>
      <div id="projects" className="h-screen">
        <Project />
      </div>
      <div id="contact" className="h-screen">
        <Contact />
      </div>
    </div>
  );
};

function App() {
  return <Layout />;
}

export default App;
