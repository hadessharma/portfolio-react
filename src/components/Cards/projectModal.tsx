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
    ? "bg-paper-layer"
    : "bg-paper-layer";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-paper-ink/55 z-40"
      contentLabel="Project Modal"
    >
      <div className="relative bg-paper-surface rounded-md border border-paper-edge shadow-paper p-6 max-w-5xl w-full max-h-[85vh] overflow-y-auto scrollbar-none md:scrollbar-thin md:scrollbar-thumb-paper-edge md:scrollbar-track-transparent">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-paper-layer border border-paper-edge rounded-md text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent transition-all duration-200 z-10"
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
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-paper-surface/95 border border-paper-edge rounded-md text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent transition-all duration-200"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-paper-surface/95 border border-paper-edge rounded-md text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent transition-all duration-200"
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
                      index === selectedIndex ? 'bg-paper-accent' : 'bg-paper-edge hover:bg-paper-muted'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="lg:w-2/5 w-full space-y-4">
            <h2 className="text-3xl font-bold text-paper-accent mb-4">
              {project.name}
            </h2>
            <div className="text-paper-muted mb-6 space-y-3">
              {project.info.map((paragraph, index) => {
                if (paragraph.includes(": ")) {
                  const [title, desc] = paragraph.split(/:\s(.+)/);
                  return (
                    <p key={index} className="text-sm md:text-base leading-relaxed text-left">
                      <strong className="text-paper-accent font-semibold">{title}:</strong> {desc}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-sm md:text-base leading-relaxed text-left">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-paper-layer border border-paper-edge text-paper-ink text-sm font-medium px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-paper-layer border border-paper-edge rounded-md text-paper-ink font-semibold hover:border-paper-accent/50 hover:text-paper-accent transition-all duration-200"
              >
                <FiGithub className="w-5 h-5" />
                <span>View Code</span>
              </a>
              {/* --- Live Demo Button/Dropdown --- */}
              {project.demo && project.demo.length > 0 && (
                <>
                  {hasMultipleDemos ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-6 py-3 bg-paper-accent border border-paper-accent rounded-md text-white font-semibold hover:bg-paper-accentDeep transition-all duration-200"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute bottom-full mb-2 w-48 bg-paper-surface border border-paper-edge rounded-md shadow-paper z-20">
                          {project.demo.map((item, i) => (
                            <li
                              key={i}
                              className="px-4 py-2 text-sm text-paper-ink hover:bg-paper-accentSoft hover:text-paper-accentDeep cursor-pointer rounded-md text-center transition-all duration-200"
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
                      className="flex items-center gap-2 px-6 py-3 bg-paper-accent border border-paper-accent rounded-md text-white font-semibold hover:bg-paper-accentDeep transition-all duration-200"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>{project.demo[0].title}</span>
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