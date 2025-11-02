import { Link, useLocation } from "react-router-dom";
import { BarChart3, List, Plus, Menu } from "lucide-react";
import { useState } from "react";
import myImage from "/final.png";
import { Footer } from "./Footer";
import { SideMenu } from "./SideMenu";

export const Layout = ({ children, onAddJob, jobCount }) => {
  const location = useLocation();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 sm:py-4 gap-4 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsSideMenuOpen(true)}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>

              <img
                src={myImage}
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <div className="min-w-0 flex-1 sm:flex-none">
                <h1 className="text-lg sm:text-2xl font-bold text-blue-500 truncate">
                  Job Tracker
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  Manage your job applications
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-row items-center gap-4 w-full sm:w-auto">
              <div className="flex bg-gray-100 rounded-lg p-1 overflow-x-auto">
                <Link
                  to="/tracker"
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === "/tracker"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <BarChart3 className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Link>
                <Link
                  to="/jobs"
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === "/jobs"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">Jobs</span>
                  <span className="inline sm:hidden">({jobCount})</span>
                  <span className="hidden sm:inline">({jobCount})</span>
                </Link>
              </div>

              <button
                onClick={onAddJob}
                className="flex items-center justify-center sm:justify-start space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto"
              >
                <Plus className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Add Job</span>
                <span className="inline sm:hidden">Add</span>
              </button>
            </div>

            {/* Mobile Navigation Buttons (Visible only on small screens) */}
            <div className="flex lg:hidden flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onAddJob}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto"
              >
                <Plus className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Add Job</span>
                <span className="inline sm:hidden">Add</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Side Menu */}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        onAddJob={onAddJob}
        jobCount={jobCount}
      />

      <Footer />
    </div>
  );
};
