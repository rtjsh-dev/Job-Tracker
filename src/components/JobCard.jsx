import React from 'react';
import { getStatusColor, getStatusLabel } from '../utils/constants';
import { Calendar, MapPin, DollarSign, Edit, Trash2, ExternalLink, User } from 'lucide-react';

export const JobCard = ({ job, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.jobTitle}</h3>
          <p className="text-lg text-gray-700 font-medium">{job.companyName}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onEdit(job)}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Edit job"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(job.id)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete job"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">Applied on {formatDate(job.applicationDate)}</span>
        </div>

        {job.salaryRange && (
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.salaryRange}</span>
          </div>
        )}

        {job.contactPerson && (
          <div className="flex items-center text-gray-600">
            <User className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.contactPerson}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(job.status)}`}>
          {getStatusLabel(job.status)}
        </span>
        
        {job.applicationUrl && (
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            View Job
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        )}
      </div>

      {job.description && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 line-clamp-3">{job.description}</p>
        </div>
      )}

      {job.notes && (
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">{job.notes}</p>
        </div>
      )}
    </div>
  );
};