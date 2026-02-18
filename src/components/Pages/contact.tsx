import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mailIcon from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [showBlogPrompt, setShowBlogPrompt] = useState(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target) return;

      const { scrollTop, scrollHeight, clientHeight } = target;
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;

      // Show blog prompt when user has scrolled 90% of the contact section
      if (scrollPercentage > 0.9) {
        setShowBlogPrompt(true);
      } else {
        setShowBlogPrompt(false);
      }
    };

    // Add listener to the parent scroll container
    const scrollContainer = document.querySelector('.min-h-screen.md\\:h-screen.md\\:snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleBlogNavigation = () => {
    navigate('/blog');
  };

  return (
    <div
      className="min-h-full flex flex-col items-center px-4 py-8 bg-gray-900"
    >
      {/* Main Content Wrapper */}
      <div className="flex-grow flex flex-col justify-center items-center w-full pb-20 md:pb-0">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl mx-auto">
            {/* Email Button */}
            <a
              href="mailto:de.sharma993@gmail.com"
              className="w-full md:w-auto flex-grow bg-gray-800/50 border border-gray-700 rounded-xl p-5 md:p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70 text-left flex items-center gap-4 group"
            >
              <img
                src={mailIcon}
                alt="Email"
                className="w-10 h-10 md:w-12 md:h-12 filter invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">Email</h3>
                <p className="text-cyan-400 text-sm md:text-base break-all">de.sharma993@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/deepsharma993/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex-grow bg-gray-800/50 border border-gray-700 rounded-xl p-5 md:p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70 text-left flex items-center gap-4 group"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 md:w-12 md:h-12 filter invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-1">LinkedIn</h3>
                <p className="text-cyan-400 text-sm md:text-base">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center pt-16">
        <div className="max-w-4xl mx-auto">
          <nav className="flex justify-center mb-6 gap-8">
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="/blog"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              Blog
            </a>
          </nav>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Deep Sharma. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Blog Navigation Prompt */}
      {showBlogPrompt && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce">
          <button
            onClick={handleBlogNavigation}
            className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg transition-all duration-500 hover:scale-110 group animate-pulse"
          >
            <div className="flex items-center gap-3 px-6 py-4">
              <span className="text-sm font-medium whitespace-nowrap animate-fade-in">
                Explore my blog
              </span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
