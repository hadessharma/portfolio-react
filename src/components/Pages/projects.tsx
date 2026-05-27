import React, { useState, useEffect } from "react";
import ProjectCard from "../Cards/projectCard";
import ProjectModal from "../Cards/projectModal";
import { projects, Project as ProjectType, ProjectCategory } from "../data/projectData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";
import ImageModal from "../Cards/imageModal";

const ProjectDetailPanel: React.FC<{ project: ProjectType }> = ({ project }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    setAspectRatio(null);
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
      stopOnMouseEnter: true
    })
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  const hasMultipleDemos = project.demo && project.demo.length > 1;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

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

  return (
    <div className="flex flex-col w-full min-h-full text-left pr-1">
      {/* Top: Title & Action Buttons */}
      <div className="w-full flex items-center justify-between pb-3 mb-5 border-b border-paper-edge/60 shrink-0">
        <h2 className="text-2xl font-bold text-paper-accent">
          {project.name}
        </h2>
        
        <div className="flex items-center space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-paper-layer border border-paper-edge rounded-md text-paper-ink text-xs font-semibold hover:border-paper-accent/50 hover:text-paper-accent transition-all duration-200"
          >
            <FiGithub className="w-4 h-4" />
            <span>View Code</span>
          </a>
          
          {project.demo && project.demo.length > 0 && (
            <div className="relative" ref={dropdownRef}>
              {hasMultipleDemos ? (
                <>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-paper-accent border border-paper-accent rounded-md text-white text-xs font-semibold hover:bg-paper-accentDeep transition-all duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute top-full mt-2 right-0 w-40 bg-paper-surface border border-paper-edge rounded-md shadow-paper z-20">
                      {project.demo.map((item, i) => (
                        <li
                          key={i}
                          className="px-3 py-1.5 text-xs text-paper-ink hover:bg-paper-accentSoft hover:text-paper-accentDeep cursor-pointer rounded-md text-center transition-all duration-200"
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
                </>
              ) : (
                <a
                  href={project.demo[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-paper-accent border border-paper-accent rounded-md text-white text-xs font-semibold hover:bg-paper-accentDeep transition-all duration-200"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>{project.demo[0].title}</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom: Columns */}
      <div className="flex flex-col xl:flex-row gap-6 w-full items-center justify-center flex-grow">
        {/* Left: Image Carousel (60%) */}
        <div className="xl:w-[60%] w-full flex-shrink-0 flex flex-col justify-center">
          <div 
            className={`embla rounded-lg overflow-hidden relative border border-paper-edge bg-transparent max-h-[350px] md:max-h-[420px] mx-auto ${!aspectRatio ? (project.app ? "aspect-[9/16]" : "aspect-[16/10]") : ""} flex items-center justify-center group/carousel`} 
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
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-surface/90 backdrop-blur-md text-paper-ink text-[11px] font-semibold rounded-full border border-paper-edge shadow-lg scale-90 group-hover/slide:scale-100 transition-all duration-300">
                      <FiZoomIn className="w-3.5 h-3.5 text-paper-accent" />
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-paper-surface/85 backdrop-blur-md border border-paper-edge/50 rounded-full text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 -translate-x-3 group-hover/carousel:translate-x-0 z-20 cursor-pointer shadow-md"
                  aria-label="Previous screenshot"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-paper-surface/85 backdrop-blur-md border border-paper-edge/50 rounded-full text-paper-muted hover:border-paper-accent/50 hover:text-paper-accent hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 translate-x-3 group-hover/carousel:translate-x-0 z-20 cursor-pointer shadow-md"
                  aria-label="Next screenshot"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
          
          {/* Interactive Thumbnail Strip */}
          {project.img.length > 1 && (
            <div className="flex gap-1.5 mt-3 justify-center overflow-x-auto py-1 scrollbar-none select-none max-w-full">
              {project.img.map((src, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`relative w-12 h-8 sm:w-16 sm:h-10 flex-shrink-0 rounded overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    index === selectedIndex
                      ? "border-paper-accent scale-105 shadow-sm opacity-100"
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

        {/* Right: Details (40%) */}
        <div className="xl:w-[40%] w-full flex flex-col justify-center space-y-4 my-auto">
          <div>
            <div className="text-paper-muted space-y-2.5 mb-4">
              {project.info.map((paragraph, index) => {
                if (paragraph.includes(": ")) {
                  const [title, desc] = paragraph.split(/:\s(.+)/);
                  return (
                    <p key={index} className="text-xs md:text-sm leading-relaxed text-left">
                      <strong className="text-paper-accent font-semibold">{title}:</strong> {desc}
                    </p>
                  );
                }
                return (
                  <p key={index} className="text-xs md:text-sm leading-relaxed text-left">
                    {paragraph}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-paper-layer border border-paper-edge text-paper-ink text-[11px] font-medium px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
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
    </div>
  );
};

const Project: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  // Mobile modal state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalProject, setModalProject] = useState<ProjectType | null>(null);

  // Tab scrolling indicators state
  const tabContainerRef = React.useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const checkScroll = () => {
    if (tabContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabContainerRef.current;
      setShowLeftFade(scrollLeft > 2);
      setShowRightFade(scrollWidth - scrollLeft - clientWidth > 2);
    }
  };

  useEffect(() => {
    const container = tabContainerRef.current;
    if (container) {
      // Tiny delay to ensure layout rendering has settled
      const timeoutId = setTimeout(checkScroll, 100);
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        clearTimeout(timeoutId);
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [activeCategory]);

  const filteredProjects = [...projects]
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  // Auto-select first project in active category for desktop inline preview
  const activeProject = selectedProject || filteredProjects[0] || null;

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setSelectedProject(filteredProjects[0]);
    } else {
      setSelectedProject(null);
    }
  }, [activeCategory]);

  const openMobileModal = (project: ProjectType) => {
    setModalProject(project);
    setModalIsOpen(true);
  };

  const closeMobileModal = () => {
    setModalIsOpen(false);
    setModalProject(null);
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & Agents" },
    { id: "cloud", label: "Cloud & Systems" },
    { id: "other", label: "Other" },
  ] as const;

  return (
    <div className="flex flex-col lg:h-full w-full items-center justify-start px-4 md:px-20 py-8 pb-20 md:pb-8 lg:overflow-hidden">
      <div className="text-center mb-5 shrink-0">
        <span className="paper-eyebrow text-xs md:text-sm block mb-1">Browse My Recent</span>
        <h2 className="relative inline-block text-2xl md:text-3xl font-bold text-paper-ink paper-title-underline">Projects</h2>
      </div>

      {/* Tab Selector with responsive scroll fade indicators */}
      <div className="relative w-full max-w-7xl mb-6 shrink-0">
        {/* Left Fade Overlay */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-paper-base to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showLeftFade ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scrollable Selector */}
        <div
          ref={tabContainerRef}
          className="flex w-full border-b border-paper-edge justify-start lg:justify-center overflow-x-auto scrollbar-none px-4 lg:px-0"
        >
          <div className="flex space-x-1">
            {categories.map((cat) => (
              <button
                 key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-200 border-t-2 border-x border-b border-transparent rounded-t-md -mb-[1px] whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-paper-surface border-paper-edge border-b-paper-surface text-paper-accent"
                    : "text-paper-muted hover:text-paper-ink hover:bg-paper-layer/40"
                }`}
              >
                {cat.label} ({cat.id === "all" ? projects.length : projects.filter(p => p.category === cat.id).length})
              </button>
            ))}
          </div>
        </div>

        {/* Right Fade Overlay */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-paper-base to-transparent pointer-events-none z-10 transition-opacity duration-300 ${
            showRightFade ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Main Split Dashboard (Desktop / Large screen) */}
      <div className="hidden lg:flex gap-6 w-full max-w-7xl h-[calc(100vh-19.5rem)] min-h-[440px] overflow-hidden shrink-0">
        {/* Left column: Sidebar List */}
        <div className="w-[35%] border border-paper-edge rounded-md bg-paper-surface shadow-paper p-4 overflow-y-auto themed-scrollbar flex flex-col gap-3">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              onClick={() => setSelectedProject(project)}
              className={`paper-card p-5 text-left cursor-pointer transition-all duration-200 border flex flex-col justify-between min-h-[130px] ${
                activeProject?.name === project.name
                  ? "border-paper-accent bg-paper-surface shadow-paper-soft"
                  : "border-paper-edge hover:border-paper-accent/40 bg-paper-layer/30 hover:bg-paper-surface"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-paper-accent truncate">
                    {project.name}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] uppercase tracking-wider font-bold bg-paper-accent-soft text-paper-accent-deep px-1.5 py-0.5 rounded flex-shrink-0">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-paper-muted text-xs line-clamp-2 mt-1.5 leading-relaxed">
                  {project.info[0]}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="bg-paper-layer text-paper-ink text-[10px] font-medium px-2 py-0.5 rounded border border-paper-edge whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span
                    className="bg-paper-accentSoft text-paper-accentDeep text-[10px] font-bold px-2 py-0.5 rounded border border-paper-edge whitespace-nowrap"
                  >
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right column: Rich Preview Pane */}
        <div className="w-[65%] border border-paper-edge rounded-md bg-paper-surface shadow-paper p-6 overflow-y-auto themed-scrollbar flex flex-col">
          {activeProject ? (
            <ProjectDetailPanel key={activeProject.name} project={activeProject} />
          ) : (
            <div className="flex items-center justify-center h-full text-paper-muted">
              Select a project to see details
            </div>
          )}
        </div>
      </div>

      {/* Fallback Grid (Mobile / Medium screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-7xl lg:hidden h-auto pb-8 px-1">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onOpenModal={openMobileModal}
          />
        ))}
      </div>

      {/* Fallback Modal for Mobile */}
      {modalProject && (
        <ProjectModal
          isOpen={modalIsOpen}
          onClose={closeMobileModal}
          project={modalProject}
        />
      )}
    </div>
  );
};

export default Project;
