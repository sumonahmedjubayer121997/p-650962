
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, FileText, Briefcase, Code, Wrench, Calendar } from "lucide-react";

interface StatsData {
  personalInfo: boolean;
  aboutLength: number;
  experienceCount: number;
  skillsCount: number;
  toolsCount: number;
  lastUpdated: string;
}

const DashboardStats = () => {
  const [stats, setStats] = useState<StatsData>({
    personalInfo: false,
    aboutLength: 0,
    experienceCount: 0,
    skillsCount: 0,
    toolsCount: 0,
    lastUpdated: "Never"
  });

  useEffect(() => {
    const loadStats = () => {
      const personalInfo = localStorage.getItem("admin_personal_info");
      const about = localStorage.getItem("admin_about");
      const experience = localStorage.getItem("admin_experience");
      const skills = localStorage.getItem("admin_skills");
      const tools = localStorage.getItem("admin_tools");

      setStats({
        personalInfo: !!personalInfo,
        aboutLength: about ? JSON.parse(about).length : 0,
        experienceCount: experience ? JSON.parse(experience).length : 0,
        skillsCount: skills ? JSON.parse(skills).length : 0,
        toolsCount: tools ? JSON.parse(tools).length : 0,
        lastUpdated: localStorage.getItem("admin_last_updated") || "Never"
      });
    };

    loadStats();
    // Refresh stats every 5 seconds
    const interval = setInterval(loadStats, 5000);
    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      title: "Personal Info",
      value: stats.personalInfo ? "Complete" : "Incomplete",
      icon: User,
      color: stats.personalInfo ? "text-green-600" : "text-red-600"
    },
    {
      title: "About Section",
      value: `${stats.aboutLength} chars`,
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Work Experience",
      value: `${stats.experienceCount} entries`,
      icon: Briefcase,
      color: "text-purple-600"
    },
    {
      title: "Skills",
      value: `${stats.skillsCount} skills`,
      icon: Code,
      color: "text-orange-600"
    },
    {
      title: "Tools",
      value: `${stats.toolsCount} tools`,
      icon: Wrench,
      color: "text-cyan-600"
    },
    {
      title: "Last Updated",
      value: stats.lastUpdated,
      icon: Calendar,
      color: "text-gray-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Quick overview of your resume data
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h3 className="font-medium text-gray-900 dark:text-white">Update Personal Info</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Keep your basic information current
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h3 className="font-medium text-gray-900 dark:text-white">Add New Experience</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Add your latest work experience
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
              <h3 className="font-medium text-gray-900 dark:text-white">Update Skills</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Add new skills you've learned
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
