
import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const projects = [
    {
      id: 1,
      title: "My-Awesome-Cart-main",
      description: "E-commerce website built using HTML, CSS, JavaScript, Bootstrap, and Django.",
      image: "https://placehold.co/600x400/4361EE/FFFFFF?text=E-commerce+App",
      category: "web",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Teche Blog",
      description: "Tech blog platform with commenting, dark mode toggle, and user authentication. Built with HTML, CSS, JavaScript, Bootstrap, and Django.",
      image: "https://placehold.co/600x400/7209B7/FFFFFF?text=Tech+Blog",
      category: "web",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Weather forecasting site using a weather API with Django backend and HTML/CSS frontend.",
      image: "https://placehold.co/600x400/F72585/FFFFFF?text=Weather+App",
      category: "web",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "ML Classification Model",
      description: "Machine learning model for image classification using Python and TensorFlow.",
      image: "https://placehold.co/600x400/4CC9F0/FFFFFF?text=ML+Model",
      category: "data",
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets using Python and Streamlit.",
      image: "https://placehold.co/600x400/FFBE0B/FFFFFF?text=Dashboard",
      category: "data",
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Restaurant Management System",
      description: "Complete system for restaurant operations with ordering and inventory management.",
      image: "https://placehold.co/600x400/FB8500/FFFFFF?text=Restaurant+System",
      category: "web",
      link: "#",
      github: "#",
    },
  ];
  
  const filters = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Dev" },
    { value: "data", label: "Data Science" },
  ];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="relative py-24 bg-tech-dark-accent">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-tech-dark/50 rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeFilter === filter.value 
                    ? "bg-tech-blue text-white" 
                    : "text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="tech-card overflow-hidden"
            >
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="tech-badge capitalize">{project.category}</span>
                <div className="space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-tech-dark-accent hover:bg-tech-blue/20 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.571 21.128 10.286 21.879C10.286 21.879 10.286 21.879 10.285 21.879C10.88 21.988 11.111 21.641 11.111 21.334C11.111 21.053 11.103 20.351 11.099 19.523C7.78 20.155 7.013 18.249 7.013 18.249C6.414 17.077 5.608 16.731 5.608 16.731C4.536 16.109 5.684 16.122 5.684 16.122C6.864 16.197 7.55 17.2 7.55 17.2C8.63 18.777 10.268 18.299 11.132 18.001C11.238 17.339 11.539 16.861 11.874 16.591C9.271 16.319 6.545 15.432 6.545 11.313C6.545 10.167 7.05 9.226 7.571 8.51C7.451 8.216 7.004 7.203 7.676 5.857C7.676 5.857 8.701 5.547 11.086 7.062C11.993 6.8 12.944 6.669 13.899 6.665C14.852 6.669 15.804 6.8 16.713 7.062C19.095 5.547 20.119 5.857 20.119 5.857C20.792 7.203 20.345 8.216 20.225 8.51C20.748 9.226 21.249 10.167 21.249 11.313C21.249 15.443 18.519 16.315 15.905 16.582C16.324 16.918 16.7 17.581 16.7 18.591C16.7 20.034 16.687 20.949 16.687 21.33C16.687 21.635 16.911 21.984 17.514 21.873C22.222 21.118 25.79 16.984 25.79 12C25.79 6.477 21.313 2 15.79 2H12Z" />
                    </svg>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-tech-dark-accent hover:bg-tech-blue/20 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/siddharth-rai"
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
