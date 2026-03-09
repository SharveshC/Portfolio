
import useScrollReveal from "@/hooks/useScrollReveal";

const About = () => {
  const education = [
    {
      period: "2024 - 2028",
      school: "Amrita Vishwa Vidyapeetham",
      level: "B.Tech Computer Science Engineering",
      location: "Coimbatore"
    },
    {
      period: "2022 - 2024",
      school: "KG International School",
      level: "Higher Secondary",
      location: "Coimbatore"
    },
    {
      period: "2017 - 2022",
      school: "Kovai Vidyashram",
      level: "Secondary Education",
      location: "Coimbatore"
    }
  ];

  const leftReveal = useScrollReveal(0.25);
  const rightReveal = useScrollReveal(0.25);

  return (
    <section id="about" className="scroll-mt-28 py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">
            About <span className="bg-gradient-to-r from-portfolio-cyan to-portfolio-purple bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Personal Info */}
          <div
            ref={leftReveal.ref}
            className={`transition-all duration-700 ${
              leftReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 rounded-2xl border border-white/10 shadow-[0_25px_80px_rgba(15,23,42,0.55)]">
              <h3 className="font-poppins font-semibold text-2xl text-white mb-6">
                My Journey
              </h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I'm a passionate B.Tech Computer Science student at Amrita Vishwa Vidyapeetham, 
                Coimbatore, with a deep love for programming and technology. My journey started 
                with curiosity about how software works, and now I'm actively building projects 
                and exploring cutting-edge domains like blockchain and cybersecurity.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I have a strong foundation in multiple programming languages and I'm constantly 
                learning new technologies. I enjoy working on projects that solve real-world 
                problems and believe in the power of technology to make a positive impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl shadow">
                  <div className="font-bold text-2xl text-portfolio-cyan">4+</div>
                  <div className="text-white/70 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/5 border border-white/10 rounded-xl shadow">
                  <div className="font-bold text-2xl text-portfolio-orange">2</div>
                  <div className="text-white/70 text-sm">Certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Education Timeline */}
          <div
            ref={rightReveal.ref}
            className={`transition-all duration-700 ${
              rightReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="font-poppins font-semibold text-2xl text-white mb-8">
              Educational Timeline
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-white/80 to-white/30"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] top-2 w-2 h-2 bg-gradient-to-r from-white to-portfolio-cyan/80 rounded-full"></div>
                  
                  {/* Content */}
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-900/60 p-6 rounded-xl border border-white/20 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg text-white">{edu.school}</h4>
                      <span className="text-sm text-portfolio-cyan font-medium px-3 py-1 bg-portfolio-cyan/10 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-white/70 mb-1">{edu.level}</p>
                    <p className="text-white/50 text-sm">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
