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
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center px-4 py-8 bg-transparent"
    >
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto w-full">
          <h2 className="paper-title paper-title-underline mb-5">
            Let's Connect
          </h2>
          <p className="paper-copy text-lg md:text-xl mb-12 md:mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl mx-auto">
            {/* Email Button */}
            <a
              href="mailto:de.sharma993@gmail.com"
              className="w-full md:w-auto flex-grow paper-card paper-interactive-lift p-5 md:p-6 hover:border-paper-accent/50 text-left flex items-center gap-4 group"
            >
              <span className="paper-logo-stamp shrink-0">
                <img
                  src={mailIcon}
                  alt="Email"
                  className="w-10 h-10 md:w-12 md:h-12 paper-icon group-hover:opacity-100 transition-opacity"
                />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-paper-ink mb-1">Email</h3>
                <p className="text-paper-accentDeep text-sm md:text-base break-all">de.sharma993@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/deepsharma993/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex-grow paper-card paper-interactive-lift p-5 md:p-6 hover:border-paper-accent/50 text-left flex items-center gap-4 group"
            >
              <span className="paper-logo-stamp shrink-0">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-10 h-10 md:w-12 md:h-12 paper-icon group-hover:opacity-100 transition-opacity"
                />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-paper-ink mb-1">LinkedIn</h3>
                <p className="text-paper-accentDeep text-sm md:text-base">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Blog Navigation Prompt */}
      {showBlogPrompt && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce">
          <button
            onClick={handleBlogNavigation}
            className="bg-paper-accent hover:bg-paper-accentDeep text-white rounded-full shadow-paper transition-all duration-500 hover:-translate-y-0.5 hover:shadow-paper group animate-pulse"
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

      {/* Footer */}
      <footer className="w-full mt-auto pt-8 pb-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav className="flex justify-center items-center gap-4 text-sm">
            <a href="#home" className="paper-link whitespace-nowrap">
              Home
            </a>
            <span className="text-paper-muted select-none" aria-hidden="true">
              |
            </span>
            <a href="#about" className="paper-link whitespace-nowrap">
              About
            </a>
            <span className="text-paper-muted select-none" aria-hidden="true">
              |
            </span>
            <a href="#projects" className="paper-link whitespace-nowrap">
              Project
            </a>
            <span className="text-paper-muted select-none" aria-hidden="true">
              |
            </span>
            <a href="#skills" className="paper-link whitespace-nowrap">
              Skills
            </a>
            <span className="text-paper-muted select-none" aria-hidden="true">
              |
            </span>
            <a href="/blog" className="paper-link whitespace-nowrap">
              Blog
            </a>
          </nav>
          <p className="text-paper-muted text-sm mt-3">
            © {new Date().getFullYear()} Deep Sharma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
