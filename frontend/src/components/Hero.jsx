 // Hero.jsx — instant image slider with 30% dark backdrop + styled heading
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../assets/Banner/slider1.webp";
import banner2 from "../assets/Banner/slider2.webp";
import banner3 from "../assets/Banner/slider3.webp";

export default function Hero() {
  const images = [banner1, banner2, banner3];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);
  const AUTOPLAY_MS = 5000;

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      startAutoplay();
    }
    const next = (index + 1) % images.length;
    const p = new Image();
    p.src = images[next];
  }, [index]);

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (!isHoveredRef.current) setIndex((i) => (i + 1) % images.length);
    }, AUTOPLAY_MS);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const goTo = (i) => setIndex(i);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      id="home"
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((src, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              aria-hidden={!active}
              className={`absolute inset-0 ${active ? "block z-10" : "hidden z-0 pointer-events-none"}`}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                loading={active ? "eager" : "lazy"}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
              {/* 30% black backdrop */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            Autism Support & Therapy
            <br />
            <span className="text-[#F57C00]">Caring, Evidence-Based</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Personalized therapy, parent training, and school support
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#2E7D32] hover:border-white backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
            >
              <span>Book Free Consultation</span>
              <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#2E7D32] hover:border-white backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
            >
              <span>Explore Services</span>
              <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 top-1/2 z-30 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="pointer-events-auto rounded-full p-3 bg-black/30 text-white hover:bg-black/50 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="pointer-events-auto rounded-full p-3 bg-black/30 text-white hover:bg-black/50 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 pointer-events-auto">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </header>
  );
}
