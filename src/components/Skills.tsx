
import React from "react";

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "Java", "C++", "HTML5", "CSS3"]
    },
    {
      category: "Frameworks & Libraries", 
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Spring Boot"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "Docker", "VS Code", "Firebase", "AWS (Basics)", "Jira"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      category: "Concepts & Methodologies",
      skills: ["Agile/Scrum", "REST APIs", "OOP", "Data Structures", "Algorithms"]
    }
  ];
  
  return (
    <section id="skills" className="relative py-24 bg-tech-dark">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mt-16">
          <h3 className="section-subtitle mb-8">Skills by Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((categoryData) => (
              <div key={categoryData.category} className="tech-card text-center animate-fade-in">
                <h4 className="font-semibold mb-4 text-tech-blue text-lg">{categoryData.category}</h4>
                <div className="space-y-2">
                  {categoryData.skills.map((skill) => (
                    <span key={skill} className="inline-block bg-tech-blue/20 text-tech-blue-light px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
