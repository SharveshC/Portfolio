"use client";
// @flow strict
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

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
    { name: "EDUCATION", href: "/#education", id: "education" },
    { name: "PROJECTS", href: "/#projects", id: "projects" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1224]/80 backdrop-blur-md transition-all duration-300">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Sharvesh C
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={item.href}>
                <div className={`text-[11px] md:text-[13px] lg:text-[15px] font-medium tracking-widest transition-all duration-300 hover:text-[#16f2b3] ${
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