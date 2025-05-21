
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Responsive Website Development",
      description: "Creating responsive, modern websites that work seamlessly across all devices using the latest frontend technologies.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H4C2.89543 5 2 5.89543 2 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Machine Learning Model Creation",
      description: "Building custom machine learning models for various applications, from data analysis to predictive modeling.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 9V15C21 16.1046 20.1046 17 19 17H7M7 17L11 13M7 17L11 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 15V9C3 7.89543 3.89543 7 5 7H17M17 7L13 3M17 7L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Data Analysis & Visualization",
      description: "Transforming complex data into meaningful insights through advanced analysis and interactive visualizations.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Database Design & Implementation",
      description: "Creating efficient, scalable database solutions using SQL and NoSQL technologies for various applications.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];
  
  return (
    <section id="services" className="relative py-24 bg-tech-dark">
      <div className="section-container">
        <h2 className="section-title">Services I Offer</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div key={service.id} className="tech-card animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-16 h-16 mb-6 text-tech-blue">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-tech-blue to-tech-purple rounded-2xl overflow-hidden animate-fade-in">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Need a custom solution?</h3>
              <p className="text-white/80 mb-8">
                I'm available for freelance projects and collaborations. Let's discuss how I can help bring your ideas to life.
              </p>
              <a href="#contact" className="inline-block px-6 py-3 bg-white text-tech-blue font-medium rounded-lg transition-all hover:bg-white/90">
                Get in Touch
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center p-8">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-white/10 animate-pulse-slow absolute -top-6 -left-6"></div>
                <div className="w-60 h-60 rounded-full bg-white/20 flex items-center justify-center relative z-10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.5L4.5 12L9 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 16.5L19.5 12L15 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 6L10 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
