import React from 'react';
import { JobCard } from './JobCard';
import { FileX } from 'lucide-react';

export const JobList = ({ jobs, onEdit, onDelete, searchTerm }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <FileX className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {searchTerm ? 'No jobs found' : 'No job applications yet'}
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          {searchTerm 
            ? 'Try adjusting your search terms or filters to find what you\'re looking for.'
            : 'Get started by adding your first job application to track your progress.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};