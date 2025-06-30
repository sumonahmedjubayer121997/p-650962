
import React from "react";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Admin Panel
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <p className="text-gray-600 dark:text-gray-300">
              Welcome to the admin panel. This is where you can manage your resume data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
