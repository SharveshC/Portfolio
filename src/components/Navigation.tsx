import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const bodyHeight = document.body.scrollHeight - window.innerHeight;
      if (bodyHeight > 0) {
        setScrollProgress(window.scrollY / bodyHeight);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const navOffset = 90;
    if (element) {
      const targetPosition = Math.max(0, element.getBoundingClientRect().top + window.scrollY - navOffset);
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sharvesh_Resume.pdf';
    link.download = 'Sharvesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-slate-950 border-b border-white/20 shadow-2xl transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-poppins font-bold text-xl text-white">
            Sharvesh C
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="transition-colors text-white hover:text-portfolio-blue"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="transition-colors text-white hover:text-portfolio-blue"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="transition-colors text-white hover:text-portfolio-blue"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="transition-colors text-white hover:text-portfolio-blue"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="transition-colors text-white hover:text-portfolio-blue"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="transition-colors text-white hover:text-portfolio-blue"
            >
              Contact
            </button>
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white hover:from-portfolio-blue-dark hover:to-portfolio-purple transition-all"
            >
              Download Resume
            </Button>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col space-y-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 transition-all bg-white`}></span>
            <span className={`block w-6 h-0.5 transition-all bg-white`}></span>
            <span className={`block w-6 h-0.5 transition-all bg-white`}></span>
          </button>
        </div>
      </div>
      <div
        className="absolute left-0 bottom-0 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-3">
            <button
              onClick={() => {
                scrollToSection("home");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection("skills");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToSection("experience");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
            >
              Experience
            </button>
            <button
              onClick={() => {
                scrollToSection("projects");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-white/90 hover:text-white transition-colors py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => {
                downloadResume();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white hover:from-portfolio-blue-dark hover:to-portfolio-purple transition-all"
            >
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
