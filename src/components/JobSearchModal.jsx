import React, { useState } from 'react';
import { Search, MapPin, Briefcase, X, Loader, ExternalLink, Plus } from 'lucide-react';
import { jobsApiService } from '../services/jobsApi';
import { analytics } from '../services/analytics';

export const JobSearchModal = ({ isOpen, onClose, onImportJob }) => {
  const [searchParams, setSearchParams] = useState({
    search: '',
    location: '',
    remote: '',
    employment_type: '',
    sort_by: 'date_posted'
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (page = 1) => {
    if (!searchParams.search && !searchParams.location) {
      setError('Please enter a search term or location');
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentPage(page);

    try {
      const params = {
        ...searchParams,
        page,
        remote: searchParams.remote === 'true' ? true : searchParams.remote === 'false' ? false : undefined
      };

      // Remove empty parameters
      Object.keys(params).forEach(key => {
        if (params[key] === '' || params[key] === undefined) {
          delete params[key];
        }
      });

      analytics.trackJobSearch(params);
      const data = await jobsApiService.searchJobs(params);
      setResults(data);
    } catch (err) {
      setError('Failed to search jobs. Please check your API key and try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleImportJob = (apiJob) => {
    const jobData = {
      companyName: apiJob.company_name || 'Unknown Company',
      jobTitle: apiJob.role || 'Unknown Position',
      location: apiJob.location || 'Unknown Location',
      status: 'applied',
      applicationDate: new Date().toISOString().split('T')[0],
      salaryRange: '',
      description: apiJob.description || '',
      contactPerson: '',
      applicationUrl: apiJob.url || '',
      notes: `Imported from FindWork.dev - ID: ${apiJob.id}`,
    };

    analytics.trackJobImported(apiJob);
    onImportJob(jobData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Search Jobs</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Keywords
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="search"
                  value={searchParams.search}
                  onChange={handleInputChange}
                  placeholder="e.g., React, Python, Designer"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={searchParams.location}
                  onChange={handleInputChange}
                  placeholder="e.g., London, New York"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Remote Work
              </label>
              <select
                name="remote"
                value={searchParams.remote}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="true">Remote Only</option>
                <option value="false">On-site Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type
              </label>
              <select
                name="employment_type"
                value={searchParams.employment_type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Any</option>
                <option value="full_time">Full Time</option>
                <option value="part_time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                name="sort_by"
                value={searchParams.sort_by}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="date_posted">Date Posted</option>
                <option value="relevance">Relevance</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => handleSearch(1)}
                disabled={loading}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Search Jobs
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {/* Results */}
          {results && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Found {results.count} jobs
                </p>
                {results.count > 20 && (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleSearch(currentPage - 1)}
                      disabled={!results.previous || loading}
                      className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span className="text-sm text-gray-500">Page {currentPage}</span>
                    <button
                      onClick={() => handleSearch(currentPage + 1)}
                      disabled={!results.next || loading}
                      className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>

              <div className="max-h-96 overflow-y-auto space-y-3">
                {results.results.map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{job.role}</h3>
                        <p className="text-gray-700 font-medium">{job.company_name}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          {job.remote && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                              Remote
                            </span>
                          )}
                          {job.employment_type && (
                            <span className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.employment_type.replace('_', ' ')}
                            </span>
                          )}
                        </div>
                        {job.description && (
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            {job.description.substring(0, 150)}...
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {job.url && (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title="View original job posting"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <button
                          onClick={() => handleImportJob(job)}
                          className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          <Plus className="h-4 w-4" />
                          <span>Import</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};