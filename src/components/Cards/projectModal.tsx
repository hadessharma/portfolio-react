import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import { Project } from "../data/projectData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import ImageModal from "./imageModal";

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
  const [isZoomed, setIsZoomed] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    setAspectRatio(null);
    if (!project) return;
    const img = new Image();
    img.src = project.img[0];
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setAspectRatio(img.naturalWidth / img.naturalHeight);
      }
    };
  }, [project]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  }, [
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
      playOnMouseLeave: true
    })
  ]);
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
            <div 
              className={`embla rounded-lg overflow-hidden relative border border-paper-edge bg-transparent max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[400px] mx-auto ${!aspectRatio ? (project.app ? "aspect-[9/16]" : "h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] w-full") : ""} flex items-center justify-center group/carousel`} 
              ref={emblaRef}
              style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined}
            >
              <div className="embla__container h-full w-full flex">
                {project.img.map((src, index) => (
                  <div className="embla__slide h-full flex items-center justify-center flex-shrink-0 w-full relative group/slide" key={index}>
                    {/* Main Image */}
                    <img
                      className="relative z-10 w-full h-full object-contain cursor-zoom-in transition-transform duration-300 group-hover/slide:scale-[1.01]"
                      src={src}
                      alt={`${project.name} screenshot ${index + 1}`}
                      onClick={() => setIsZoomed(true)}
                    />
                    
                    {/* Hover Click to Enlarge HUD overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/slide:opacity-100 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-20">
                      <span className="flex items-center gap-1.5 px-4 py-2 bg-paper-surface/90 backdrop-blur-md text-paper-ink text-xs font-semibold rounded-full border border-paper-edge shadow-lg scale-90 group-hover/slide:scale-100 transition-all duration-300">
                        <FiZoomIn className="w-4 h-4 text-paper-accent" />
                        <span>Click to Enlarge</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              {project.img.length > 1 && (
                <>
                  <button
                    onClick={scrollPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-paper-surface/85 backdrop-blur-md border border-paper-edge/50 rounded-full text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -translate-x-3 group-hover/carousel:translate-x-0 z-20 cursor-pointer shadow-md"
                    aria-label="Previous screenshot"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-paper-surface/85 backdrop-blur-md border border-paper-edge/50 rounded-full text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 translate-x-3 group-hover/carousel:translate-x-0 z-20 cursor-pointer shadow-md"
                    aria-label="Next screenshot"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Interactive Thumbnail Strip */}
            {project.img.length > 1 && (
              <div className="flex gap-2 mt-4 justify-center overflow-x-auto py-1.5 scrollbar-none select-none max-w-full">
                {project.img.map((src, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`relative w-16 h-10 sm:w-20 sm:h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      index === selectedIndex
                        ? "border-paper-accent scale-105 shadow-md opacity-100"
                        : "border-paper-edge/60 opacity-60 hover:opacity-90 hover:scale-[1.02]"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
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
      {isZoomed && (
        <ImageModal
          isOpen={isZoomed}
          onClose={() => setIsZoomed(false)}
          images={project.img}
          currentIndex={selectedIndex}
          onIndexChange={scrollTo}
          alt={`${project.name} screenshot`}
        />
      )}
    </Modal>
  );
};

export default ProjectModal; 