export const skillsCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frameworks & Technologies",
    skills: ["Django", "React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "PostgreSQL", "SQLite", "Firebase Firestore", "Supabase"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

export const skillsData = skillsCategories.flatMap((category) => category.skills);
