import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Project } from "../data/projectData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

Modal.setAppElement("#root"); // Important for accessibility

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  }, [Autoplay()]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  if (!project) return null;

  const hasMultipleDemos = project.demo && project.demo.length > 1;

  const imageContainerClass = project.app
    ? "bg-gray-950"
    : "bg-black";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
      contentLabel="Project Modal"
    >
      <div className="relative bg-gray-900 rounded-xl p-6 max-w-5xl w-full max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200 z-10"
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Left: Image Carousel */}
          <div className="lg:w-3/5 w-full">
            <div className="embla rounded-lg overflow-hidden relative" ref={emblaRef}>
              <div className={`embla__container flex ${imageContainerClass}`}>
                {project.img.map((src, index) => (
                  <div className="embla__slide flex items-center justify-center flex-shrink-0 w-full" key={index}>
                    <img
                      className="w-auto h-auto max-w-full max-h-[60vh] object-contain"
                      src={src}
                      alt={`${project.name} screenshot ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {project.img.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-800/80 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Dots Indicator */}
            {project.img.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {project.img.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === selectedIndex ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="lg:w-2/5 w-full space-y-4">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-6">{project.info.join(" ")}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium px-3 py-1 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
              >
                <FiGithub className="w-5 h-5" />
                <span className="font-medium">Code</span>
              </a>
              {/* --- Live Demo Button/Dropdown --- */}
              {project.demo && project.demo.length > 0 && (
                <>
                  {hasMultipleDemos ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-600 border border-cyan-600 rounded-lg text-white hover:bg-cyan-700 hover:border-cyan-700 transition-all duration-200"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span className="font-medium">Live Demo</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute bottom-full mb-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20">
                          {project.demo.map((item, i) => (
                            <li
                              key={i}
                              className="px-4 py-2 text-sm text-gray-300 hover:bg-cyan-600 hover:text-white cursor-pointer rounded-lg text-center transition-all duration-200"
                              onClick={() => {
                                window.open(item.link);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {item.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={project.demo[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-600 border border-cyan-600 rounded-lg text-white hover:bg-cyan-700 hover:border-cyan-700 transition-all duration-200"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal; 