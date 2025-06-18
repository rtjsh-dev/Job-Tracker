import React from 'react';
import { JOB_STATUS_CONFIG } from '../utils/constants';
import { BarChart3, Briefcase, Calendar, TrendingUp } from 'lucide-react';

export const Dashboard = ({ jobs }) => {
  const totalJobs = jobs.length;
  const recentJobs = jobs.filter(job => {
    const applicationDate = new Date(job.applicationDate);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return applicationDate >= thirtyDaysAgo;
  }).length;

  const statusCounts = JOB_STATUS_CONFIG.map(status => ({
    ...status,
    count: jobs.filter(job => job.status === status.value).length,
  }));

  const offerRate = totalJobs > 0 ? 
    Math.round((jobs.filter(job => job.status === 'offer').length / totalJobs) * 100) : 0;

  return (
    <div className="space-y-8 p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Applications</p>
              <p className="text-3xl font-bold text-gray-900">{totalJobs}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Recent (30 days)</p>
              <p className="text-3xl font-bold text-gray-900">{recentJobs}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Offer Rate</p>
              <p className="text-3xl font-bold text-gray-900">{offerRate}%</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Applications</p>
              <p className="text-3xl font-bold text-gray-900">
                {jobs.filter(job => !['offer', 'rejected', 'withdrawn'].includes(job.status)).length}
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Status Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Application Status Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statusCounts.map(status => (
            <div key={status.value} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                  {status.label}
                </span>
                <p className="text-2xl font-bold text-gray-900 mt-2">{status.count}</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {totalJobs > 0 ? Math.round((status.count / totalJobs) * 100) : 0}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      {jobs.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Applications</h3>
          <div className="space-y-4">
            {jobs
              .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
              .slice(0, 5)
              .map(job => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{job.jobTitle}</p>
                    <p className="text-sm text-gray-500">{job.companyName} • {job.location}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      JOB_STATUS_CONFIG.find(s => s.value === job.status)?.color
                    }`}>
                      {JOB_STATUS_CONFIG.find(s => s.value === job.status)?.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(job.applicationDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};