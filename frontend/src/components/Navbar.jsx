 // src/components/MainNavbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import autismLogo from "../assets/svgviewer-output.svg";

export default function MainNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const navLinkClasses = ({ isActive }) =>
    `relative px-4 py-2.5 text-[16px] font-medium transition-all duration-200 ${
      isActive
        ? "text-[#0B5ED7]"
        : "text-gray-700 hover:text-[#0B5ED7]"
    }`;

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "shadow-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center hover:scale-105 transition">
            <img
              src={autismLogo}
              alt="Decoder Health"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-16" : "h-20"
              }`}
            />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden lg:flex items-center gap-1">
            <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
            <li><NavLink to="/services" className={navLinkClasses}>Services</NavLink></li>
            <li><NavLink to="/about-us" className={navLinkClasses}>About Us</NavLink></li>
            <li><NavLink to="/insurance" className={navLinkClasses}>Insurance</NavLink></li>
            <li><NavLink to="/faq" className={navLinkClasses}>FAQs</NavLink></li>
            <li><NavLink to="/careers" className={navLinkClasses}>Careers</NavLink></li>
            <li><NavLink to="/team" className={navLinkClasses}>Team</NavLink></li>

            {/* MORE DROPDOWN (HOVER) */}
            <li
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <div className="flex items-center gap-1 px-4 py-2.5 cursor-pointer text-[16px] font-medium text-gray-700 hover:text-[#0B5ED7]">
                More <FaChevronDown className="text-xs mt-[1px]" />
              </div>

              <div
                className={`absolute right-0 mt-3 w-72 rounded-xl bg-white border border-gray-100 shadow-xl transition-all duration-200 ${
                  moreOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {[
                  ["Resources", "/resources"],
                  ["Message From CEO", "/message-from-ceo"],
                  ["Autism is Cool", "/autism-is-cool"],
                  ["Youtube Channel", "/youtube-channel"],
                  ["Autism Spectrum Disorder Statistics", "/autism-statistics"],
                  ["Campaigns", "/campaigns"],
                ].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </li>
          </ul>

          {/* CTA */}
          <NavLink
            to="/contact-us"
            className="hidden lg:inline-flex items-center rounded-full bg-[#0B5ED7] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#084298] transition"
          >
            Contact us
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg hover:bg-gray-100"
          >
            <span className="w-6 h-0.5 bg-gray-700 block relative before:absolute before:w-6 before:h-0.5 before:bg-gray-700 before:-top-2 after:absolute after:w-6 after:h-0.5 after:bg-gray-700 after:top-2"></span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl lg:hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-[#0B5ED7]">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <FaTimes />
              </button>
            </div>

            <ul className="px-6 py-4 space-y-1">
              {[
                ["Home","/"],
                ["Services","/services"],
                ["About Us","/about-us"],
                ["Insurance","/insurance"],
                ["FAQs","/faq"],
                ["Careers","/careers"],
                ["Team","/team"],
                ["Resources","/resources"],
                ["Message From CEO","/message-from-ceo"],
                ["Autism is Cool","/autism-is-cool"],
                ["Youtube Channel","/youtube-channel"],
                ["Autism Spectrum Disorder Statistics","/autism-statistics"],
                ["Campaigns","/campaigns"],
              ].map(([label, to]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-[#0B5ED7]/10 hover:text-[#0B5ED7]"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="p-6 border-t">
              <NavLink
                to="/contact-us"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-[#0B5ED7] text-white py-3 rounded-lg font-semibold hover:bg-[#084298]"
              >
                Contact us
              </NavLink>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
