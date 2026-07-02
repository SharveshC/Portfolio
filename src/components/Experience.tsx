const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "Code Developer Solutions",
      duration: "May 2026 - Jun 2026",
      description: "Gained practical experience in front-end and back-end development, database management, and web application development. Contributed to E-Campus project, enhancing technical and problem-solving skills.",
      color: "from-blue-400 to-purple-600",
      icon: "💻",
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">
            My <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Professional journey and hands-on industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.role}
              className="group bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 rounded-3xl shadow-[0_25px_65px_rgba(2,6,23,0.65)] hover:shadow-[0_32px_90px_rgba(2,6,23,0.8)] transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-white/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`w-16 h-16 shrink-0 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {exp.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-2xl text-white mb-1 group-hover:text-portfolio-blue transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/60 mb-4">
                    <span className="font-medium text-white/80 text-lg">{exp.company}</span>
                    <span>•</span>
                    <span className="bg-portfolio-blue/10 px-3 py-1 rounded-full text-portfolio-blue font-semibold">{exp.duration}</span>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
