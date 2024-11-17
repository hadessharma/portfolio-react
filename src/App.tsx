import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
