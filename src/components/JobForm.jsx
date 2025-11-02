import React, { useState, useEffect } from "react";
import { JOB_STATUS_CONFIG } from "../utils/constants";
import { X } from "lucide-react";

export const JobForm = ({ isOpen, onClose, onSubmit, editingJob }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    location: "",
    status: "applied",
    applicationDate: new Date().toISOString().split("T")[0],
    salaryRange: "",
    description: "",
    contactPerson: "",
    applicationUrl: "",
    notes: "",
  });

  useEffect(() => {
    if (editingJob) {
      setFormData({
        companyName: editingJob.companyName,
        jobTitle: editingJob.jobTitle,
        location: editingJob.location,
        status: editingJob.status,
        applicationDate: editingJob.applicationDate,
        salaryRange: editingJob.salaryRange,
        description: editingJob.description,
        contactPerson: editingJob.contactPerson,
        applicationUrl: editingJob.applicationUrl,
        notes: editingJob.notes,
      });
    } else {
      setFormData({
        companyName: "",
        jobTitle: "",
        location: "",
        status: "applied",
        applicationDate: new Date().toISOString().split("T")[0],
        salaryRange: "",
        description: "",
        contactPerson: "",
        applicationUrl: "",
        notes: "",
      });
    }
  }, [editingJob, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-2xl my-4 sm:my-8">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 gap-2">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">
            {editingJob ? "Edit Job Application" : "Add New Job Application"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-4 sm:p-6 max-h-[calc(90vh-8rem)] overflow-y-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="jobTitle"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                {JOB_STATUS_CONFIG.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="applicationDate"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Application Date *
              </label>
              <input
                type="date"
                id="applicationDate"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="salaryRange"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Salary Range
              </label>
              <input
                type="text"
                id="salaryRange"
                name="salaryRange"
                value={formData.salaryRange}
                onChange={handleChange}
                placeholder="e.g., $70,000 - $90,000"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contactPerson"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Contact Person
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="e.g., John Smith, HR Manager"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="applicationUrl"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
              >
                Application URL
              </label>
              <input
                type="url"
                id="applicationUrl"
                name="applicationUrl"
                value={formData.applicationUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <label
              htmlFor="description"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the role, responsibilities, and requirements..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          <div className="mt-4 sm:mt-6">
            <label
              htmlFor="notes"
              className="block text-xs sm:text-sm font-medium text-gray-700 mb-2"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={2}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Personal notes, interview feedback, etc..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              {editingJob ? "Update Application" : "Add Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
