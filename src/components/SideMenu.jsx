import React from "react";
import { Link, useLocation } from "react-router-dom";
import { X, BarChart3, List, Plus } from "lucide-react";
import { JOB_STATUS_CONFIG } from "../utils/constants";

export const SideMenu = ({ isOpen, onClose, onAddJob, jobCount }) => {
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-blue-600">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          <Link
            to="/"
            onClick={onClose}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/"
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="h-5 w-5 flex-shrink-0" />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/jobs"
            onClick={onClose}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/jobs"
                ? "bg-blue-50 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <List className="h-5 w-5 flex-shrink-0" />
            <div className="flex items-center justify-between flex-1">
              <span>View Jobs</span>
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {jobCount}
              </span>
            </div>
          </Link>
        </nav>

        {/* Add Job Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={() => {
              onAddJob();
              onClose();
            }}
            className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus className="h-5 w-5" />
            <span>Add Job</span>
          </button>
        </div>
      </div>
    </>
  );
};
