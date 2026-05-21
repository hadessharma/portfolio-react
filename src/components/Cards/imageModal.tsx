import React, { useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  alt?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  alt,
}) => {
  const hasMultipleImages = images && images.length > 1;

  const onPrev = () => {
    if (!hasMultipleImages) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onIndexChange(prevIndex);
  };

  const onNext = () => {
    if (!hasMultipleImages) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onIndexChange(nextIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultipleImages) {
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, currentIndex, hasMultipleImages]); // Re-bind when currentIndex changes to ensure handler uses fresh index

  if (!isOpen || !images || !images.length) return null;

  const currentSrc = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-zoom-out p-4 md:p-10 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-md text-white/70 hover:text-white transition-all duration-200 z-50 cursor-pointer"
        aria-label="Close image viewer"
      >
        <FiX className="w-6 h-6" />
      </button>

      {/* Navigation Controls */}
      {hasMultipleImages && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full text-white/70 hover:text-white transition-all duration-200 z-50 cursor-pointer"
            aria-label="Previous image"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full text-white/70 hover:text-white transition-all duration-200 z-50 cursor-pointer"
            aria-label="Next image"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Preview Container */}
      <div
        className="relative max-w-full max-h-full flex flex-col items-center justify-center animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentSrc}
          alt={alt ? `${alt} ${currentIndex + 1}` : `Screenshot ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg border border-white/10 shadow-2xl select-none"
        />

        {/* Indicator Counter */}
        {hasMultipleImages && (
          <span className="mt-4 text-white/60 text-xs font-semibold select-none bg-black/40 px-3 py-1 rounded-full border border-white/5">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
