import "./App.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Pages/about";
import Experience from "./components/Pages/experience";
import Home from "./components/Pages/home";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./components/Pages/projects";
import Contact from "./components/Pages/contact";
import NotFound from "./components/Pages/notfound";

const Layout: React.FC = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "experience", element: <Experience /> },
          { path: "about", element: <About /> },
          { path: "projects", element: <Project /> },
          { path: "contact", element: <Contact /> },
          { path: "/*", element: <NotFound /> },
        ],
      },
    ],
    {
      basename: "/portfolio-react",
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
