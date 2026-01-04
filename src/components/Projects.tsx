
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "EYE DISEASE PREDICTION",
      description: "A machine learning project for predicting eye diseases from medical imaging and associated data. Includes full coding workflow and repository documentation.",
      tech: ["Python", "ML", "Data Processing"],
      icon: "👁️",
      gradient: "from-indigo-400 to-indigo-600",
      link: "https://github.com/SharveshC/Projects/tree/main/Eye%20Disease%20Prediction/full%20coding%20part"
    },
    {
      title: "Foretype",
      description: "A Secure Autocomplete System developed in Python that combines data structures, encryption, and an interactive terminal UI. Implements fast Autocomplete using Trie data structure with RSA encryption.",
      tech: ["Python", "Trie", "RSA", "Data Structures"],
      icon: "⌨️",
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Student & Teacher Management System",
      description: "A comprehensive system for managing student and teacher data with CRUD operations and user authentication using Neo4j graph database.",
      tech: ["Python", "Tkinter", "Neo4j", "File Handling"],
      icon: "🧑‍🎓",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Explore Edge",
      description: "An interactive web application for planning trips around Coimbatore with attractions, routes, and recommendations.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🌍",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">
            My <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 rounded-3xl shadow-[0_25px_65px_rgba(2,6,23,0.65)] hover:shadow-[0_32px_90px_rgba(2,6,23,0.8)] transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-white/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Header */}
              <div className="mb-4">
                <h3 className="font-poppins font-semibold text-xl text-white group-hover:text-portfolio-blue transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 text-white/80 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-br from-slate-900/60 to-slate-900/10 p-8 rounded-3xl border border-white/10 shadow-[0_20px_45px_rgba(15,23,42,0.45)]">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-white/70 mb-6">
              Check out my GitHub profile for more projects and contributions
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white hover:from-portfolio-blue-dark hover:to-portfolio-purple transition-all transform hover:scale-105"
              onClick={() => window.open('https://github.com/SharveshC', '_blank')}
            >
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
