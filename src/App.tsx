import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import Project from "./components/Pages/projects";
import Contact from "./components/Pages/contact";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen md:h-screen md:snap-y md:snap-mandatory overflow-y-scroll scroll-smooth bg-gray-950 font-sans text-slate-200">
      <Navbar />
      <div id="home" className="min-h-screen md:h-screen md:snap-center">
        <Home />
      </div>
      <div id="about" className="min-h-screen md:h-screen md:snap-center">
        <About />
      </div>
      <div id="experience" className="min-h-screen md:h-screen md:snap-center">
        <Experience />
      </div>
      <div id="projects" className="min-h-screen md:h-screen md:snap-center">
        <Project />
      </div>
      <div id="contact" className="min-h-screen md:h-screen md:snap-center">
        <Contact />
      </div>
    </div>
  );
};

function App() {
  return <Layout />;
}

export default App;
