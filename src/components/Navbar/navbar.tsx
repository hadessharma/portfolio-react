import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cvPDF from "../../assets/resume_DeepSharma.pdf";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";

interface NavbarProps {
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollContainerRef }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const isBlogPage = location.pathname.startsWith('/blog');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownloadCV = () => {
    window.open(cvPDF);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const scrollContainer = scrollContainerRef?.current;

    if (section && scrollContainer) {
      const targetPosition = section.offsetTop;
      const startPosition = scrollContainer.scrollTop;
      const distance = targetPosition - startPosition;
      const duration = 700; // Matches App.tsx duration
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        // easeInOutCubic matches App.tsx
        const ease = percentage < 0.5
          ? 4 * percentage * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        scrollContainer.scrollTop = startPosition + distance * ease;

        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          // Update active section after scroll completes for accuracy
          if (!isBlogPage) setActiveSection(sectionId);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  useEffect(() => {

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollContainer = scrollContainerRef?.current;

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

    if (scrollContainerRef?.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainerRef?.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef, isBlogPage]); // Added isBlogPage to dependencies

  const navLinkClasses = (section: string) => {
    const isActive = isBlogPage ? section === "blog" : activeSection === section;
    return `px-4 py-2 text-base transition-all duration-300 rounded-lg border border-transparent ${isActive
      ? "text-cyan-400 font-semibold bg-cyan-400/10 border-cyan-400/30"
      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:border-gray-600/50 font-medium"
      }`;
  };

  const mobileNavLinkClasses = (section: string) => {
    const isActive = isBlogPage ? section === "blog" : activeSection === section;
    return `block px-3 py-3 text-lg transition-all duration-300 rounded-lg text-center border border-transparent ${isActive
      ? "text-cyan-400 font-semibold bg-cyan-400/10 border-cyan-400/30"
      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:border-gray-600/50 font-medium"
      }`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {isBlogPage ? (
              <button
                onClick={() => navigate("/")}
                className="text-2xl font-bold font-mono tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>&lt;</span>
                <span>Deep</span>
                <span> /&gt;</span>
                <span className="animate-blink">_</span>
              </button>
            ) : (
              <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-bold font-mono tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>&lt;</span>
                <span>Deep</span>
                <span> /&gt;</span>
                <span className="animate-blink">_</span>
              </button>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {isBlogPage ? (
                <>
                  <button
                    onClick={() => navigate("/")}
                    className={navLinkClasses("home")}
                  >
                    Home
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => scrollToSection("about")} className={navLinkClasses("about")}>
                    About
                  </button>
                  <button onClick={() => scrollToSection("projects")} className={navLinkClasses("projects")}>
                    Projects
                  </button>
                  <button onClick={() => scrollToSection("skills")} className={navLinkClasses("skills")}>
                    Skills
                  </button>
                  <button onClick={() => scrollToSection("contact")} className={navLinkClasses("contact")}>
                    Contact
                  </button>
                </>
              )}
              <div className="flex items-center space-x-3 ml-8">
                <button
                  onClick={handleDownloadCV}
                  className="px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-cyan-700 border border-cyan-500 rounded-xl text-white font-semibold hover:from-cyan-500 hover:to-cyan-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-200"
                >
                  Download CV
                </button>
                <button
                  onClick={() => navigate("/blog")}
                  className={`px-4 py-2 text-base transition-all duration-300 rounded-lg border font-medium ${isBlogPage
                    ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/30"
                    : "border-gray-600 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:border-cyan-400/50"
                    }`}
                >
                  Blog
                </button>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <div
                  className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600 hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/deepsharma993/");
                  }}
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 filter brightness-0 invert hover:brightness-100 transition-all duration-200"
                  />
                </div>
                <div
                  className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600 hover:scale-105 transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    window.open("https://github.com/hadessharma");
                  }}
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-5 h-5 filter brightness-0 invert hover:brightness-100 transition-all duration-200"
                  />
                </div>
              </div>
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
        className={`md:hidden bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/50 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
          {isBlogPage ? (
            <>
              <button
                onClick={() => {
                  navigate("/");
                  toggleMenu();
                }}
                className={mobileNavLinkClasses("home")}
              >
                Home
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  scrollToSection("about");
                  toggleMenu();
                }}
                className={mobileNavLinkClasses("about")}
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection("projects");
                  toggleMenu();
                }}
                className={mobileNavLinkClasses("projects")}
              >
                Projects
              </button>
              <button
                onClick={() => {
                  scrollToSection("skills");
                  toggleMenu();
                }}
                className={mobileNavLinkClasses("skills")}
              >
                Skills
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  toggleMenu();
                }}
                className={mobileNavLinkClasses("contact")}
              >
                Contact
              </button>
            </>
          )}

          {/* Action buttons section */}
          <div className="border-t border-gray-700 pt-4 mt-4">
            <button
              onClick={() => {
                handleDownloadCV();
                toggleMenu();
              }}
              className="block w-full px-4 py-3 mb-3 text-lg font-semibold bg-gradient-to-r from-cyan-600 to-cyan-700 border border-cyan-500 rounded-xl text-white hover:from-cyan-500 hover:to-cyan-600 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 text-center"
            >
              Download CV
            </button>
            <button
              onClick={() => {
                navigate("/blog");
                toggleMenu();
              }}
              className={`block w-full px-4 py-3 text-lg font-medium border rounded-xl transition-all duration-200 text-center ${isBlogPage
                ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/30"
                : "border-gray-600 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 hover:border-cyan-400/50"
                }`}
            >
              Blog
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div
              className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600 hover:scale-105 transition-all duration-200 cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/deepsharma993/");
                toggleMenu();
              }}
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-6 h-6 filter brightness-0 invert"
              />
            </div>
            <div
              className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600 hover:scale-105 transition-all duration-200 cursor-pointer"
              onClick={() => {
                window.open("https://github.com/hadessharma");
                toggleMenu();
              }}
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-6 h-6 filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;