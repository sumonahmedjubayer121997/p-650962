
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code, Lightbulb, Target } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();

  // Project data - in a real app, this would come from an API or database
  const projects = {
    '1': {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution built with modern web technologies, featuring user authentication, payment integration, and an intuitive admin dashboard for seamless business management.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Full Stack",
      demoLink: "https://demo-ecommerce.example.com",
      githubLink: "https://github.com/username/ecommerce-platform",
      timeline: "3 months",
      role: "Full Stack Developer",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and management",
        "Responsive design for all devices"
      ],
      technologies: {
        frontend: ["React", "Redux", "Tailwind CSS", "React Router"],
        backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
        tools: ["VS Code", "Git", "Postman", "Stripe Dashboard"]
      },
      challenges: [
        {
          challenge: "Payment Processing Security",
          solution: "Implemented Stripe's secure payment processing with proper error handling and webhook validation to ensure transaction security."
        },
        {
          challenge: "State Management Complexity",
          solution: "Used Redux Toolkit for efficient state management across the application, with proper separation of concerns."
        }
      ],
      improvements: [
        "Add real-time chat support",
        "Implement product recommendations using ML",
        "Add multi-vendor marketplace functionality",
        "Integrate with third-party logistics APIs"
      ]
    },
    '2': {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, intuitive drag-and-drop functionality, and comprehensive team collaboration features designed to boost productivity.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      category: "Web App",
      demoLink: "https://demo-taskmanager.example.com",
      githubLink: "https://github.com/username/task-manager",
      timeline: "2 months",
      role: "Frontend Lead",
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task management",
        "Team member assignment and notifications",
        "Project timeline and milestone tracking",
        "File attachments and comments",
        "Custom project templates",
        "Advanced filtering and search"
      ],
      technologies: {
        frontend: ["React", "React DnD", "Socket.io Client", "Material-UI"],
        backend: ["Node.js", "Express.js", "Socket.io", "PostgreSQL"],
        tools: ["Figma", "Git", "Docker", "AWS"]
      },
      challenges: [
        {
          challenge: "Real-time Synchronization",
          solution: "Implemented Socket.io for real-time updates with proper conflict resolution and offline support."
        },
        {
          challenge: "Complex Drag-and-Drop Logic",
          solution: "Used React DnD library with custom hooks to create intuitive drag-and-drop interactions across different components."
        }
      ],
      improvements: [
        "Add time tracking functionality",
        "Implement Gantt chart view",
        "Add mobile app version",
        "Integrate with calendar applications"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-pulse-600 hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-white py-12">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-600 hover:text-pulse-600 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
              
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-pulse-100 text-pulse-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    {project.role}
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-pulse-600 text-white px-6 py-3 rounded-lg hover:bg-pulse-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-12">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12">
          <div className="section-container">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Key Features */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-2 text-pulse-600" />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border">
                        <div className="w-2 h-2 bg-pulse-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2 text-pulse-600" />
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-6">
                    {project.challenges.map((item, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                        <h3 className="font-semibold text-gray-900 mb-3">Challenge: {item.challenge}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          <strong>Solution:</strong> {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Future Improvements */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Improvements</h2>
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <ul className="space-y-3">
                      {project.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Technologies Used */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-pulse-600" />
                    Technologies Used
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.frontend.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.backend.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.tools.map((tool) => (
                          <span key={tool} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Tags */}
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
