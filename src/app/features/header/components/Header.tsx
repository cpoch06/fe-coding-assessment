"use client";

import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // When menu is open, add a class to body or a wrapper to dim the page content
  if (typeof window !== 'undefined') {
    if (isMenuOpen) {
      document.body.classList.add('menu-dimmed');
    } else {
      document.body.classList.remove('menu-dimmed');
    }
  }

  return (
    <>
      <header className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-50">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">TopSchool AI</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-gray-600 dark:text-gray-300 text-base font-medium cursor-default">Home</span>
            <span className="text-gray-600 dark:text-gray-300 text-base font-medium cursor-default">About</span>
            <span className="text-gray-600 dark:text-gray-300 text-base font-medium cursor-default">Task</span>
            <span className="text-gray-600 dark:text-gray-300 text-base font-medium cursor-default">Contact</span>
          </div>
          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </nav>
      </header>
      {/* Mobile Overlay Navigation */}
      {isMenuOpen && (
        <>
          {/* Dim overlay, but not fully blacked out */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity duration-300 pointer-events-none"
            aria-hidden="true"
          />
          <div className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden flex flex-col">
            {/* Header in overlay */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">TopSchool AI</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Overlay Content */}
            <nav className="flex-1 p-4 sm:p-6">
              <div className="flex flex-col space-y-4 mt-8">
                <span className="text-gray-600 dark:text-gray-300 text-lg font-medium cursor-default">Home</span>
                <span className="text-gray-600 dark:text-gray-300 text-lg font-medium cursor-default">About</span>
                <span className="text-gray-600 dark:text-gray-300 text-lg font-medium cursor-default">Task</span>
                <span className="text-gray-600 dark:text-gray-300 text-lg font-medium cursor-default">Contact</span>
              </div>
              <div className="flex flex-col space-y-4 mt-12">
                <div className="text-center py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Task Management System
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2">
                    Stay organized and productive
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
