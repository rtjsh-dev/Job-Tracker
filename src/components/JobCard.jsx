import React from "react";
import { getStatusColor, getStatusLabel } from "../utils/constants";
import {
  Calendar,
  MapPin,
  DollarSign,
  Edit,
  Trash2,
  ExternalLink,
  User,
} from "lucide-react";

export const JobCard = ({ job, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 truncate">
            {job.jobTitle}
          </h3>
          <p className="text-base sm:text-lg text-gray-700 font-medium truncate">
            {job.companyName}
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
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

      <div className="space-y-2 sm:space-y-3 mb-4">
        <div className="flex items-center text-gray-600 gap-2">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">{job.location}</span>
        </div>

        <div className="flex items-center text-gray-600 gap-2">
          <Calendar className="h-4 w-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm">
            Applied on {formatDate(job.applicationDate)}
          </span>
        </div>

        {job.salaryRange && (
          <div className="flex items-center text-gray-600 gap-2">
            <DollarSign className="h-4 w-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">
              {job.salaryRange}
            </span>
          </div>
        )}

        {job.contactPerson && (
          <div className="flex items-center text-gray-600 gap-2">
            <User className="h-4 w-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">
              {job.contactPerson}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-2">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit ${getStatusColor(
            job.status
          )}`}
        >
          {getStatusLabel(job.status)}
        </span>

        {job.applicationUrl && (
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-start text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium transition-colors"
          >
            View Job
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </a>
        )}
      </div>

      {job.description && (
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
            {job.description}
          </p>
        </div>
      )}

      {job.notes && (
        <div className="mt-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
          <p className="text-xs sm:text-sm text-gray-700">{job.notes}</p>
        </div>
      )}
    </div>
  );
};
