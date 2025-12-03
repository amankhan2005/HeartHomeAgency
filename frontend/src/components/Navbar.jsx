 // src/components/MainNavbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";

// ⬅️ Static logo import (new)
import autismLogo from "../assets/autism-logo.webp";

import { useSettings } from "../context/SettingsContext";

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { settings } = useSettings();

  // ⬅️ STATIC LOGO ONLY (no backend, no dynamic)
  const logoSrc = autismLogo;

  // phone
  const phoneRaw = settings?.phone || "(410) 905-5477";
  const phoneTel = phoneRaw.replace(/[^+\d]/g, "");

  // email
  const emailRaw = settings?.email || "info@autismabapartners.com";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navLinkClasses = ({ isActive }) =>
    `relative px-3 py-2 font-medium transition-all duration-300 ${
      isActive ? "text-[#F57C00]" : "text-gray-700 hover:text-[#2E7D32]"
    } group`;

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "shadow-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <NavLink
              to="/"
              aria-label="Home"
              className="flex items-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logoSrc}
                alt="Autism ABA Partners Logo"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "h-16" : "h-20"
                }`}
              />
            </NavLink>

            {/* Mobile phone + email */}
            <div className="flex-col items-start gap-0 lg:hidden">
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#2E7D32]"
              >
                <FaPhoneAlt className="w-4 h-4 text-[#2E7D32]" />
                <span className="text-xs">{phoneRaw}</span>
              </a>
              <a
                href={`mailto:${emailRaw}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#2E7D32] mt-0.5"
              >
                <FaEnvelopeOpenText className="w-4 h-4 text-[#F57C00]" />
                <span className="text-xs">{emailRaw}</span>
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            <li>
              <NavLink to="/" className={navLinkClasses}>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F57C00] to-[#2E7D32] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={navLinkClasses}>
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F57C00] to-[#2E7D32] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClasses}>
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F57C00] to-[#2E7D32] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={navLinkClasses}>
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F57C00] to-[#2E7D32] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={navLinkClasses}>
                Career
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F57C00] to-[#2E7D32] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <NavLink
            to="/contact-us"
            className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#F57C00] to-[#FF8A33] text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:from-[#2E7D32] hover:to-[#388E3C] transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </NavLink>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "top-2 rotate-45" : "top-0"}`}></span>
              <span className={`absolute top-2 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "top-2 -rotate-45" : "top-4"}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl lg:hidden animate-slideIn">
            
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <FaTimes className="text-gray-700 text-xl" />
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about-us", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/faq", label: "FAQ" },
                  { to: "/careers", label: "Career" },
                ].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#F57C00]/10 to-[#FF8A33]/10 text-[#F57C00] border-l-4 border-[#F57C00]"
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32]"
                        }`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Contact button in mobile menu */}
              <div className="p-6 border-t border-gray-200">
                <NavLink
                  to="/contact-us"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F57C00] to-[#FF8A33] text-white py-3 rounded-lg font-semibold shadow-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slideIn { animation: slideIn 0.3s ease-out; }
          `}</style>
        </>
      )}
    </nav>
  );
}
