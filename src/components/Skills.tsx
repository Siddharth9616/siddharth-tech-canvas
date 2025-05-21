
import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "Bootstrap", level: 85, category: "Frontend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "Django", level: 75, category: "Backend" },
    { name: "Java", level: 70, category: "Programming" },
    { name: "MySQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 75, category: "Database" },
    { name: "Data Science", level: 70, category: "Specialization" },
    { name: "Machine Learning", level: 65, category: "Specialization" },
    { name: "Git", level: 75, category: "Tools" },
  ];
  
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));
  
  return (
    <section id="skills" className="relative py-24 bg-tech-dark">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subtitle mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.slice(0, 6).map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-tech-blue">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-tech-dark-accent rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle mb-8">Specialized Knowledge</h3>
            <div className="space-y-6">
              {skills.slice(6, 12).map((skill, index) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.6}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-tech-blue">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-tech-dark-accent rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="section-subtitle mb-8">Skills by Category</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div key={category} className="tech-card text-center animate-fade-in">
                <h4 className="font-semibold mb-3 text-tech-blue">{category}</h4>
                <div className="space-y-2">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <p key={skill.name} className="text-sm">{skill.name}</p>
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
