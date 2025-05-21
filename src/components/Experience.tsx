
import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative bg-gradient-to-b from-tech-dark to-tech-dark-accent py-24">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-tech-blue/5 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-tech-purple/5 animate-pulse-slow"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-tech-blue/50 pl-8 pb-12">
            <div className="absolute -left-3 top-0">
              <div className="w-6 h-6 rounded-full bg-tech-blue"></div>
            </div>
            
            <div className="tech-card animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold">Frontend Intern</h3>
                <div className="flex items-center gap-2">
                  <span className="tech-badge">8 months</span>
                  <span className="text-foreground/60">DR DATATECH21</span>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                Worked on responsive frontend components using HTML, CSS, JavaScript, and Bootstrap, collaborating with a team of developers to deliver high-quality web applications.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tech-blue mt-2"></div>
                  <p className="text-foreground/70">Implemented responsive UI components following design specifications</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tech-blue mt-2"></div>
                  <p className="text-foreground/70">Collaborated with designers to ensure pixel-perfect implementation</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tech-blue mt-2"></div>
                  <p className="text-foreground/70">Optimized website performance through code refactoring and best practices</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-tech-blue mt-2"></div>
                  <p className="text-foreground/70">Participated in code reviews and maintained coding standards</p>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-tech-blue/10 text-tech-blue">HTML</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-tech-blue/10 text-tech-blue">CSS</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-tech-blue/10 text-tech-blue">JavaScript</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-tech-blue/10 text-tech-blue">Bootstrap</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-tech-blue/10 text-tech-blue">Responsive Design</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-foreground/60 mb-4">Looking for new opportunities to grow and contribute</p>
            <a href="#contact" className="button-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
