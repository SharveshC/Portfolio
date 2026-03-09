
import useScrollReveal from "@/hooks/useScrollReveal";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "C" },
        { name: "JavaScript" },
        { name: "Arduino" },
        { name: "HTML" },
        { name: "CSS" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL" },
        { name: "MySQL" },
        { name: "Neo4j" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code" },
        { name: "Obsidian" },
        { name: "Git" },
        { name: "GitHub" }
      ]
    },
    {
      title: "Programming Concepts",
      skills: [
        { name: "DSA" },
        { name: "OOPs" },
        { name: "DAA" }
      ]
    }
  ];

  const colorPairs = [
    {
      from: "from-portfolio-blue",
      to: "to-portfolio-purple",
      lightFrom: "from-portfolio-blue/10",
      lightTo: "to-portfolio-purple/10",
      text: "text-portfolio-blue"
    },
    {
      from: "from-portfolio-blue",
      to: "to-portfolio-purple",
      lightFrom: "from-portfolio-blue/10",
      lightTo: "to-portfolio-purple/10",
      text: "text-portfolio-blue"
    },
    {
      from: "from-portfolio-blue",
      to: "to-portfolio-purple",
      lightFrom: "from-portfolio-blue/10",
      lightTo: "to-portfolio-purple/10",
      text: "text-portfolio-blue"
    },
    {
      from: "from-portfolio-blue",
      to: "to-portfolio-purple",
      lightFrom: "from-portfolio-blue/10",
      lightTo: "to-portfolio-purple/10",
      text: "text-portfolio-blue"
    }
  ];

  // Professional look: remove emojis and reduce visual noise
  const emojiBySkill: Record<string, string> = {};

  const reveal = useScrollReveal(0.25);

  return (
    <section id="skills" className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">
            My <span className="bg-gradient-to-r from-portfolio-cyan to-portfolio-purple bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            A showcase of my technical expertise and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            return (
            <div
              key={category.title}
              ref={reveal.ref}
              className={`relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/50 shadow-[0_25px_80px_rgba(2,6,23,0.65)] transition-all duration-700 ${
                reveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="rounded-2xl p-8 relative h-full">
                <div
                  className={`mx-auto mb-6 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-portfolio-blue bg-gradient-to-r from-portfolio-blue/5 to-portfolio-purple/5`}
                >
                  {category.title}
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => {
                    return (
                      <span
                        key={skill.name}
                        className="group inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white border border-white/10 bg-white/5 hover:border-white/30 hover:bg-gradient-to-r hover:from-portfolio-blue/20 hover:to-portfolio-purple/20 transition-all"
                        title={skill.name}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Optional exploration tags removed for a more professional look */}
      </div>
    </section>
  );
};

export default Skills;
