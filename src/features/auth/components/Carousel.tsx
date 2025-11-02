// src/features/auth/components/Carousel.tsx

import React, { useState } from "react";
import { CarouselSlide } from "./carouselSlide";
import { type CarouselSlideData } from "../types";
import login from "../../../assets/images/login.jpg";
import login2 from "../../../assets/images/login2.jpg";

// Fake slide data - you can replace images later
const SLIDES: CarouselSlideData[] = [
  {
    id: 1,
    title: "Alone we are smart.",
    subtitle: "Together we are brilliant.",
    image: login,
  },
  {
    id: 2,
    title: "Build amazing things.",
    subtitle: "With powerful tools.",
    image: login2,
  },
  
];

export const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Auto slide every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 relative">
      {/* Slide Content */}
      <div className="w-full max-w-2xl">
        <CarouselSlide slide={SLIDES[currentSlide]} />
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-8">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Title */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl text-white font-light">
          {SLIDES[currentSlide].title.split("brilliant").length > 1 ? (
            <>
              {SLIDES[currentSlide].title.split("brilliant")[0]}
              <span className="text-cyan-300 font-semibold">brilliant</span>
              {SLIDES[currentSlide].title.split("brilliant")[1]}
            </>
          ) : (
            <>
              {SLIDES[currentSlide].title}{" "}
              <span className="text-cyan-300 font-semibold">
                {SLIDES[currentSlide].subtitle}
              </span>
            </>
          )}
        </h2>
      </div>

      {/* Arrow Navigation (optional) */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
};
