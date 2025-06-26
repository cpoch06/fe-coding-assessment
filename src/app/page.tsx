"use client";

import { Header } from './features/header';
import { TaskManager } from './features/tasks';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Task Management
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay organized and boost your productivity with our powerful task management system
            </p>
          </div>

          {/* Task Manager Component */}
          <TaskManager />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 sm:mt-24 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 TopSchool AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
