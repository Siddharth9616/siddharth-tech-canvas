
import React from "react";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 decorative-circle bg-tech-blue/20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 decorative-circle bg-tech-purple/20 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 decorative-circle bg-tech-pink/20 animate-spin-slow"></div>
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm <span className="tech-text-gradient">Siddharth Rai</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-6">
              Aspiring Data Scientist & Web Developer
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg">
              A passionate CS student exploring the realms of data science and web development, 
              building innovative solutions with cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="button-primary cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="button-outline cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/5 animate-fade-in-left">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-tech-blue via-tech-blue-light to-tech-purple p-1">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-tech-dark">
                  <img 
                    src="https://xsgames.co/randomusers/avatar.php?g=male" 
                    alt="Siddharth Rai" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-tech-dark-accent px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium">
                  <span className="text-green-500">●</span> Available for work
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-tech-blue"
            >
              <path 
                d="M12 4V20M12 20L6 14M12 20L18 14" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
