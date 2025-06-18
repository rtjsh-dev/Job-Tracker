import { Link, useLocation } from "react-router-dom";
import { BarChart3, List, Plus } from "lucide-react";
import myImage from '/final.png';
import { Footer } from "./Footer";

export const Layout = ({ children, onAddJob, jobCount }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img
                src={myImage}
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-500">
                  Job Tracker
                </h1>
                <p className="text-sm text-gray-500">
                  Manage your job applications
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-between pb-2">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <Link
                  to="/"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === "/"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/jobs"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === "/jobs"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="h-4 w-4" />
                  <span>Jobs ({jobCount})</span>
                </Link>

                {/* <TrendingUp className="h-4 w-4" />
                </Link> */}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={onAddJob}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Job</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
