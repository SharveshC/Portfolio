"use client";
// @flow strict
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "education", "projects"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is within the viewport's top portion
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      }

      // Clear active state if we're near the top of the page
      if (window.scrollY < 100) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", href: "/#about", id: "about" },
    { name: "EXPERIENCE", href: "/#experience", id: "experience" },
    { name: "SKILLS", href: "/#skills", id: "skills" },
    { name: "PROJECTS", href: "/#projects", id: "projects" },
    { name: "EDUCATION", href: "/#education", id: "education" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1224]/80 backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between py-5 relative">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Sharvesh C
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-[#16f2b3] focus:outline-none ml-auto" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop & Mobile Navigation Links */}
        <ul className={`${
          isMenuOpen ? "flex" : "hidden md:flex"
        } absolute md:static top-[100%] left-0 w-full md:w-auto flex-col md:flex-row items-center md:items-start bg-[#0d1224] md:bg-transparent pb-6 md:pb-0 md:space-x-1 transition-all duration-300 border-b border-[#1b2c68a0] md:border-none shadow-lg md:shadow-none`} id="navbar-default">
          {navItems.map((item) => (
            <li key={item.name} className="w-full md:w-auto text-center md:text-left mt-4 md:mt-0">
              <Link 
                className="block px-4 py-2 no-underline outline-none hover:no-underline" 
                href={item.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                <div className={`inline-block text-[12px] md:text-[13px] lg:text-[15px] font-medium tracking-widest transition-all duration-300 hover:text-[#16f2b3] ${
                  activeSection === item.id ? "text-[#16f2b3] border-b-2 border-[#16f2b3]" : "text-white"
                }`}>
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;