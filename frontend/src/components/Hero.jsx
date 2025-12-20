 import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import banner1 from "../assets/Banner/slider1.webp";
import banner2 from "../assets/Banner/slider2.webp";
import banner3 from "../assets/Banner/slider3.webp";

export default function Hero() {
  const [images, setImages] = useState([
    { full: banner1 },
    { full: banner2 },
    { full: banner3 },
  ]);

  /* ---------- BLUE + WHITE CONTENT ---------- */
  const [heroText, setHeroText] = useState({
    heading: "DECODER Health",
    highlight: "Empowering Every Child’s Future",
    subheading:
      "We lead with applied behavior analysis, social innovation, and culturally sensitive care to create meaningful, lasting outcomes for children and families.",
    highlightColor: "#1E88E5", // blue
    textColor: "#FFFFFF",
    buttonBg: "#FFFFFF",
    buttonTextColor: "#1E88E5",
    secondaryBorder: "#FFFFFF",
  });

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);
  const AUTOPLAY_MS = 5000;

  /* ---------------- FETCH FROM BACKEND ---------------- */
  useEffect(() => {
    const backend = import.meta.env.VITE_BACKEND_URL;

    fetch(`${backend}/api/hero`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.images) && data.images.length > 0) {
          setImages(data.images);
        }
        if (data.text) {
          setHeroText((prev) => ({ ...prev, ...data.text }));
        }
      })
      .catch(() => {});
  }, []);

  /* ---------------- AUTOPLAY ---------------- */
  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  useEffect(() => {
    stopAutoplay();
    startAutoplay();

    const nextIdx = (index + 1) % images.length;
    const img = new Image();
    img.src = images[nextIdx].full;
  }, [index, images]);

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((i) => (i + 1) % images.length);
      }
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

  return (
    <header
      id="home"
      className="relative w-full h-auto lg:h-[70vh] overflow-hidden"
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === i
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={img.full}
              alt="DECODER Health Banner"
              className="w-full h-full object-cover"
            />

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-blue-900/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ color: heroText.textColor }}
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-5">
            {heroText.heading} <br />
            <span style={{ color: heroText.highlightColor }}>
              {heroText.highlight}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90">
            {heroText.subheading}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Primary Button */}
            <a
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: heroText.buttonBg,
                color: heroText.buttonTextColor,
              }}
            >
              Book Free Consultation <FaChevronRight />
            </a>

            {/* Secondary Button */}
            <a
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                borderColor: heroText.secondaryBorder,
                color: heroText.textColor,
              }}
            >
              Explore Services <FaChevronRight />
            </a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-x-0 top-1/2 z-30 flex items-center justify-between px-4">
        <button
          className="rounded-full p-3 bg-white/20 text-white hover:bg-white/30 transition"
          onClick={prev}
        >
          <FaChevronLeft />
        </button>
        <button
          className="rounded-full p-3 bg-white/20 text-white hover:bg-white/30 transition"
          onClick={next}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </header>
  );
}
