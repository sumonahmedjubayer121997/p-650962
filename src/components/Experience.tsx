import {
  Download,
  Code,
  Database,
  Plane,
  Users,
  BarChart3,
  Cloud,
  Brain,
  Settings,
  Target,
} from "lucide-react";

const Experience = () => {
  const skills = [
    {
      title: "Data Science & ML",
      description: "Advanced analytics and machine learning",
      icon: Brain,
      level: 95,
    },
    {
      title: "Aviation Systems",
      description: "Deep domain expertise in aviation",
      icon: Plane,
      level: 90,
    },
    {
      title: "Project Leadership",
      description: "Leading cross-functional teams",
      icon: Users,
      level: 85,
    },
    {
      title: "Data Visualization",
      description: "Creating impactful dashboards",
      icon: BarChart3,
      level: 90,
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud solutions",
      icon: Cloud,
      level: 80,
    },
    {
      title: "Process Optimization",
      description: "Streamlining operations",
      icon: Target,
      level: 88,
    },
  ];

  const tools = [
    {
      name: "Python",
      description: "Primary language for data science and ML",
      logo: "🐍",
      category: "Programming",
    },
    {
      name: "TensorFlow",
      description: "Deep learning and neural networks",
      logo: "🧠",
      category: "ML Framework",
    },
    {
      name: "Tableau",
      description: "Business intelligence and visualization",
      logo: "📊",
      category: "Visualization",
    },
    {
      name: "AWS",
      description: "Cloud infrastructure and services",
      logo: "☁️",
      category: "Cloud",
    },
    {
      name: "Kubernetes",
      description: "Container orchestration",
      logo: "⚙️",
      category: "DevOps",
    },
    {
      name: "PostgreSQL",
      description: "Database management and optimization",
      logo: "🗄️",
      category: "Database",
    },
    {
      name: "Docker",
      description: "Containerization and deployment",
      logo: "🐳",
      category: "DevOps",
    },
    {
      name: "Apache Spark",
      description: "Big data processing",
      logo: "⚡",
      category: "Big Data",
    },
  ];

  return (
    <section className="px-8 py-16 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Experience
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A decade of expertise in aviation data analytics, backed by
          cutting-edge tools and proven methodologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {/* Resume Highlights - Large tile spanning 2 columns */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">10+ Years</h3>
            <p className="text-xl text-lime-400 mb-6">
              Driving Aviation Data Solutions
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <span className="text-gray-300">
                  500+ ML models deployed in production
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <span className="text-gray-300">
                  150+ airlines served globally
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <span className="text-gray-300">
                  99.9% system uptime achieved
                </span>
              </div>
            </div>
            <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-3 group">
              Download Resume
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="bg-lime-400 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-black opacity-10 rounded-full"></div>
          <div className="relative z-10">
            <div className="text-3xl font-bold text-black mb-2">200+</div>
            <div className="text-sm text-black/80 font-medium mb-3">
              Workshops Delivered
            </div>
            <div className="text-2xl font-bold text-black mb-1">50+</div>
            <div className="text-sm text-black/80 font-medium">
              Patents Filed
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative group hover:shadow-lg transition-all duration-300">
          <Settings className="w-8 h-8 text-gray-600 mb-4" />
          <h4 className="font-bold text-gray-900 mb-2">ISO Certified</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Quality management systems ensuring 99.9% data accuracy
          </p>
          <div className="absolute bottom-4 right-4 text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-lime-400 transition-colors">
                  <skill.icon className="w-6 h-6 text-gray-600 group-hover:text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{skill.title}</h4>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-lime-400 h-2 rounded-full transition-all duration-1000 group-hover:bg-lime-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools We Use Daily */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Tools We Use Daily
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer relative"
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.logo}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{tool.category}</p>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                  {tool.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
