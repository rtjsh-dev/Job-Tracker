import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, BarChart3, Users } from "lucide-react";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-100">
      {/* Hero Section */}
      <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-24 bg-gradient-to-r from-blue-200 via-blue-300 to-indigo-300">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Stay Updated on Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Job Hunt
            </span>
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Track all your job applications in one place. Stay organized, stay
            motivated, and never lose track of an opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-8">
            <Link
              to="/tracker"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg font-semibold"
            >
              <span>Start Tracking</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <a
              href="#features"
              className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-50 transition-colors text-base sm:text-lg font-semibold"
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 bg-gradient-to-b from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12 md:mb-16"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Why Use Job Tracker?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-blue-100 mb-4">
                <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Organize Applications
              </h3>
              <p
                className="text-sm sm:text-base text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Keep all your job applications organized in one centralized
                location with detailed information.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-green-100 mb-4">
                <BarChart3 className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Track Progress
              </h3>
              <p
                className="text-sm sm:text-base text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Monitor your application status and see detailed analytics about
                your job search progress.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 sm:p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-purple-100 mb-4">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600" />
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Manage Contacts
              </h3>
              <p
                className="text-sm sm:text-base text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Store contact information for recruiters and hiring managers
                from each application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-blue-50">
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 bg-gradient-to-br from-blue-300 via-blue-400 to-indigo-400 rounded-lg sm:rounded-xl p-8 sm:p-12 md:p-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to organize your job search?
          </h2>
          <p
            className="text-base sm:text-lg text-black"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Start using Job Tracker today and take control of your career
            journey.
          </p>
          <Link
            to="/tracker"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg font-semibold"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
