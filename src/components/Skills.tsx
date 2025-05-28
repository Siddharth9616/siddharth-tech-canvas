
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
        
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillsData.map((categoryData, index) => (
              <div key={categoryData.category} className="tech-card text-left animate-fade-in group hover:shadow-2xl hover:shadow-tech-blue/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-tech-blue rounded-full mr-3"></div>
                  <h4 className="font-bold text-xl text-white group-hover:text-tech-blue-light transition-colors duration-300">
                    {categoryData.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill} 
                      className="inline-block bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 border border-tech-blue/20 text-tech-blue-light px-4 py-2 rounded-full text-sm font-medium hover:bg-tech-blue/20 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${index * 100 + skillIndex * 50}ms`
                      }}
                    >
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
