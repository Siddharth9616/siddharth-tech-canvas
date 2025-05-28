
import React from "react";
import { Code, Settings, Wrench, Database, Lightbulb } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript (ES6+)", "Python", "Java", "C++", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Settings className="w-6 h-6" />,
      skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "Spring Boot"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git & GitHub", "Docker", "VS Code", "Firebase", "AWS (Basics)", "Jira"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"]
    },
    {
      title: "Concepts & Methodologies",
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ["Agile/Scrum", "REST APIs", "OOP", "Data Structures", "Algorithms"]
    }
  ];
  
  return (
    <section id="skills" className="relative py-24 bg-tech-dark">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="tech-card animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-tech-blue">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-tech-blue">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tech-badge text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
