
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      tags: ["React", "Socket.io", "Express"],
      category: "Web App"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides real-time weather data, forecasts, and interactive maps using third-party APIs.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      category: "Dashboard"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "Portfolio"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="section-container bg-gradient-to-br from-blue-50 to-cyan-100 min-h-screen flex items-center">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div>
              <h2 className="section-title text-gray-800 mb-4">My Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Witness the beauty of code through my lens, as I showcase stunning applications that evoke
                wonder and appreciation for modern web development.
              </p>
            </div>
            
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {getVisibleProjects().map((project, index) => (
              <div
                key={`${project.id}-${currentIndex}`}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  index === 1 ? 'lg:scale-110 lg:z-10' : 'lg:scale-95'
                }`}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pulse-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-pulse-100 hover:text-pulse-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => handleViewProject(project.id)}
                        className="text-pulse-600 font-medium text-sm hover:text-pulse-700 transition-colors"
                      >
                        View Project
                      </button>
                      <div className="w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center group-hover:bg-pulse-200 transition-colors">
                        <ArrowRight className="w-4 h-4 text-pulse-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-pulse-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
