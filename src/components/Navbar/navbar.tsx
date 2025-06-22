import React, { useState, useEffect } from "react";

interface NavbarProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const bracketPairs = [
  { open: "<", close: " />" },
  { open: "[", close: "]" },
  { open: "{", close: "}" },
  { open: "(", close: ")" },
];

const Navbar: React.FC<NavbarProps> = ({ scrollContainerRef }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [currentBracketIndex, setCurrentBracketIndex] = useState(0);
  const [isFadingLogo, setIsFadingLogo] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingLogo(true);
      setTimeout(() => {
        setCurrentBracketIndex(
          (prevIndex) => (prevIndex + 1) % bracketPairs.length
        );
        setIsFadingLogo(false);
      }, 500); // Half second for fade-out
    }, 3000); // 3 seconds per style

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollContainer = scrollContainerRef.current;

      if (!scrollContainer) return;

      const scrollPosition =
        scrollContainer.scrollTop + scrollContainer.clientHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  const navLinkClasses = (section: string) =>
    `px-4 py-2 text-base transition-all duration-300 rounded-lg ${
      activeSection === section
        ? "text-cyan-400 font-semibold"
        : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 font-medium"
    }`;

  const mobileNavLinkClasses = (section: string) =>
    `block px-3 py-3 text-lg transition-colors duration-300 rounded-lg ${
      activeSection === section
        ? "text-cyan-400 font-semibold"
        : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 font-medium"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold font-mono tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <span>&lt;</span>
              <span>Deep</span>
              <span> /&gt;</span>
              <span className="animate-blink">_</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#about" className={navLinkClasses("about")}>
                About
              </a>
              <a href="#experience" className={navLinkClasses("experience")}>
                Experience
              </a>
              <a href="#projects" className={navLinkClasses("projects")}>
                Projects
              </a>
              <a href="#contact" className={navLinkClasses("contact")}>
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#about"
            className={mobileNavLinkClasses("about")}
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#experience"
            className={mobileNavLinkClasses("experience")}
            onClick={toggleMenu}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={mobileNavLinkClasses("projects")}
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={mobileNavLinkClasses("contact")}
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;