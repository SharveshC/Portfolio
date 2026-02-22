
const Certifications = () => {
  const certificationBadges: Record<string, string[]> = {
    "Automated Machine Learning for Beginners (Google & Apple)": ["Google", "Apple", "AutoML"],
    "DSA": ["Verified", "Practice-Ready"],
    "C Programming": ["Verified", "Systems"],
    "AI Assistant Workshop": ["Be10X", "Conversational"]
  };

  const certifications = [
    {
      title: "Automated Machine Learning for Beginners (Google & Apple)",
      provider: "Google & Apple",
      percentage: 100,
      color: "from-purple-400 to-purple-600",
      icon: "🤖",
      focus: "AutoML & ML Fundamentals",
      year: "2026",
      viewLink: "https://www.coursera.org/learn/automated-machine-learning"
    },
    {
      title: "DSA",
      provider: "Simplilearn",
      percentage: 100,
      color: "from-blue-400 to-blue-600",
      icon: "📊",
      focus: "Algorithmic Strategy",
      year: "2025",
      viewLink: "https://www.simplilearn.com/certification"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">
            My <span className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Continuous learning through verified courses and certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="group bg-gradient-to-br from-slate-900/60 to-slate-900/40 p-8 rounded-3xl shadow-[0_25px_65px_rgba(2,6,23,0.65)] hover:shadow-[0_32px_90px_rgba(2,6,23,0.8)] transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-white/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Certificate Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                
                <h3 className="font-poppins font-semibold text-lg text-white mb-2 group-hover:text-portfolio-blue transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-white/80 font-medium">
                  {cert.provider}
                </p>
                <div className="flex items-center justify-center gap-3 text-xs text-white/60 mt-1">
                  <span className="bg-portfolio-blue/10 px-3 py-1 rounded-full text-portfolio-blue font-semibold">{cert.year}</span>
                  <span className="text-portfolio-purple/80">• {cert.focus}</span>
                </div>
              </div>

              {/* Progress Circle */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="transparent" 
                    className="text-gray-200"
                  />
                  {/* Progress circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray={`${2.51 * cert.percentage} 251.2`}
                    className={`text-transparent bg-gradient-to-r ${cert.color} bg-clip-text transition-all duration-1000 ease-out`}
                    style={{
                      background: `linear-gradient(45deg, #3b82f6, #8b5cf6)`,
                      stroke: `url(#gradient-${index})`
                    }}
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Percentage text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-lg text-white">
                    {cert.percentage}%
                  </span>
                </div>
              </div>

              {/* Mastery bar */}
              <div className="mt-4">
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple"
                    style={{ width: `${cert.percentage}%` }}
                  />
                </div>
              </div>

              {/* Completion Status */}
              <div className="text-center space-y-4 mt-5">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  cert.percentage === 100 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {cert.percentage === 100 ? 'Completed' : 'In Progress'}
                </span>

                {cert.viewLink && (
                  <a
                    href={cert.viewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-portfolio-blue hover:bg-portfolio-purple transition-colors"
                  >
                  View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Certifications;
