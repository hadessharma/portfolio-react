import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Navbar />
        <div className="h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
