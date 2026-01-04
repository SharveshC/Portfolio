
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroStats = [
    {
      label: "Projects Delivered",
      value: "05+",
      detail: "From prototypes to polished apps"
    },
    {
      label: "Certifications",
      value: "06",
      detail: "Verified by Simplilearn & Be10X"
    },
    {
      label: "Learning Hours",
      value: "1.2k",
      detail: "Coding, debugging, collaborating"
    }
  ];

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SharveshC_Resume.pdf';
    link.download = 'SharveshC_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-portfolio-orange to-portfolio-orange-light rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-portfolio-blue to-portfolio-cyan rounded-full opacity-30 animate-bounce-gentle"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-portfolio-cyan to-portfolio-orange rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">Sharvesh C</span>
            </h1>
            
            <h2 className="font-inter text-xl lg:text-2xl text-portfolio-cyan/80 mb-4">
              B.Tech CSE Student | Aspiring Software Developer
            </h2>
            
            <p className="font-inter text-lg text-slate-300 mb-8 max-w-2xl">
              I love building software, exploring tech, and solving real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={downloadResume}
                size="lg"
                className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white hover:from-portfolio-blue-dark hover:to-portfolio-purple transition-all transform hover:scale-105"
              >
                Download Resume
              </Button>
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white hover:from-portfolio-blue-dark hover:to-portfolio-purple transition-all transform hover:scale-105"
              >
                View Projects
              </Button>
            </div>

            <div className="mt-6 flex justify-center lg:justify-start gap-3">
              <span className="h-1 w-16 rounded-full bg-gradient-to-r from-portfolio-cyan to-portfolio-blue animate-pulse" />
              <span className="h-1 w-10 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple opacity-60 animate-[wave_2s_ease-in-out_infinite]" />
            </div>

          </div>

          {/* Right Content - Illustration */}
          <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Main circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 rounded-full animate-float"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-portfolio-orange to-portfolio-orange-light rounded-lg rotate-12 animate-bounce-gentle flex items-center justify-center text-white font-bold">
                  &lt;/&gt;
                </div>
                
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-portfolio-cyan to-portfolio-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                
                <div className="absolute top-1/2 left-4 w-8 h-8 bg-gradient-to-r from-portfolio-purple to-portfolio-orange rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4 animate-bounce-gentle">
                      &lt;/&gt;
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-portfolio-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-portfolio-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
