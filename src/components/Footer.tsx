
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark text-foreground/70 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-tech-blue/10 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold tech-text-gradient mb-2">Siddharth Rai</h2>
            <p className="text-sm">Aspiring Data Scientist & Web Developer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-sm hover:text-tech-blue transition-colors">Home</a>
            <a href="#about" className="text-sm hover:text-tech-blue transition-colors">About</a>
            <a href="#experience" className="text-sm hover:text-tech-blue transition-colors">Experience</a>
            <a href="#skills" className="text-sm hover:text-tech-blue transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-tech-blue transition-colors">Projects</a>
            <a href="#services" className="text-sm hover:text-tech-blue transition-colors">Services</a>
            <a href="#contact" className="text-sm hover:text-tech-blue transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; {year} Siddharth Rai. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-tech-blue transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.571 21.128 10.286 21.879C10.286 21.879 10.286 21.879 10.285 21.879C10.88 21.988 11.111 21.641 11.111 21.334C11.111 21.053 11.103 20.351 11.099 19.523C7.78 20.155 7.013 18.249 7.013 18.249C6.414 17.077 5.608 16.731 5.608 16.731C4.536 16.109 5.684 16.122 5.684 16.122C6.864 16.197 7.55 17.2 7.55 17.2C8.63 18.777 10.268 18.299 11.132 18.001C11.238 17.339 11.539 16.861 11.874 16.591C9.271 16.319 6.545 15.432 6.545 11.313C6.545 10.167 7.05 9.226 7.571 8.51C7.451 8.216 7.004 7.203 7.676 5.857C7.676 5.857 8.701 5.547 11.086 7.062C11.993 6.8 12.944 6.669 13.899 6.665C14.852 6.669 15.804 6.8 16.713 7.062C19.095 5.547 20.119 5.857 20.119 5.857C20.792 7.203 20.345 8.216 20.225 8.51C20.748 9.226 21.249 10.167 21.249 11.313C21.249 15.443 18.519 16.315 15.905 16.582C16.324 16.918 16.7 17.581 16.7 18.591C16.7 20.034 16.687 20.949 16.687 21.33C16.687 21.635 16.911 21.984 17.514 21.873C22.222 21.118 25.79 16.984 25.79 12C25.79 6.477 21.313 2 15.79 2H12Z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/50 hover:text-tech-blue transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
                <path d="M6 9H2V21H6V9Z" />
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
              </svg>
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-tech-blue transition-colors"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" />
              </svg>
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-tech-blue transition-colors"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
