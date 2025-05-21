
import React from "react";
import { Code, Book, Briefcase } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-tech-dark-accent py-16">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              I am a BE (Computer Science) student currently in my 3rd year at the Institute of Engineering and Technology, Agra, graduating in 2026. I'm passionate about data science and have a wide range of technical skills including HTML, CSS, Java, Python, Django, MySQL, Bootstrap, and MongoDB.
            </p>
            <p className="text-lg mb-6">
              I'm always eager to learn and apply new technologies to solve real-world problems and create meaningful applications.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center flex-shrink-0">
                  <Book className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className="text-foreground/70">BE in Computer Science Engineering</p>
                  <p className="text-foreground/70">Institute of Engineering and Technology, Agra</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <p className="text-foreground/70">Frontend Intern at DR DATATECH21</p>
                  <p className="text-foreground/70">8 months of hands-on development</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tech-blue/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Passion</h3>
                  <p className="text-foreground/70">Data Science & Web Development</p>
                  <p className="text-foreground/70">Building responsive and intuitive digital experiences</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-primary inline-flex items-center gap-2">
                Download Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V16M12 16L8 12M12 16L16 12M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="relative">
              {/* Decorative pattern */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-tech-blue/30 rounded-2xl"></div>
              <div className="p-6 bg-tech-dark rounded-2xl shadow-xl border border-tech-blue/10">
                <h3 className="text-2xl font-bold mb-6 tech-text-gradient">My Journey</h3>
                
                <div className="space-y-6">
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-tech-blue">
                    <h4 className="text-lg font-semibold">Started Learning Programming</h4>
                    <p className="text-sm text-foreground/70">First learned HTML & CSS</p>
                  </div>
                  
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-tech-blue">
                    <h4 className="text-lg font-semibold">College Journey Began</h4>
                    <p className="text-sm text-foreground/70">Enrolled in Computer Science Engineering</p>
                  </div>
                  
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-tech-blue">
                    <h4 className="text-lg font-semibold">First Professional Experience</h4>
                    <p className="text-sm text-foreground/70">Frontend Internship at DR DATATECH21</p>
                  </div>
                  
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-tech-blue">
                    <h4 className="text-lg font-semibold">Explored Data Science</h4>
                    <p className="text-sm text-foreground/70">Started building ML models</p>
                  </div>
                  
                  <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-tech-blue">
                    <h4 className="text-lg font-semibold">Present</h4>
                    <p className="text-sm text-foreground/70">Continuously learning and building projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
