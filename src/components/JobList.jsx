import React from "react";
import { JobCard } from "./JobCard";
import { FileX } from "lucide-react";

export const JobList = ({ jobs, onEdit, onDelete, searchTerm }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12 px-3 sm:px-4">
        <div className="bg-gray-50 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <FileX className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
        </div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">
          {searchTerm ? "No jobs found" : "No job applications yet"}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
          {searchTerm
            ? "Try adjusting your search terms or filters to find what you're looking for."
            : "Get started by adding your first job application to track your progress."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};
