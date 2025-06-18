import React, { useState, useEffect } from 'react';
import { analytics } from '../services/analytics';
import { BarChart3, TrendingUp, Search, Clock, Eye, MousePointer } from 'lucide-react';

export const AnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState({
    eventCounts: {},
    topSearches: [],
    recentEvents: [],
    sessionDuration: 0
  });
  const [timeRange, setTimeRange] = useState(30);

  useEffect(() => {
    const loadAnalytics = () => {
      const eventCounts = analytics.getEventCounts(timeRange);
      const topSearches = analytics.getTopSearches(timeRange);
      const recentEvents = analytics.getEvents(7).slice(-10).reverse();
      const sessionDuration = analytics.getSessionDuration();

      setAnalyticsData({
        eventCounts,
        topSearches,
        recentEvents,
        sessionDuration
      });
    };

    loadAnalytics();
    const interval = setInterval(loadAnalytics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [timeRange]);

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const formatEventName = (eventName) => {
    return eventName.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value={7}>Last 7 days</option>
          <option value={30}>Last 30 days</option>
          <option value={90}>Last 90 days</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Events</p>
              <p className="text-3xl font-bold text-gray-900">
                {Object.values(analyticsData.eventCounts).reduce((a, b) => a + b, 0)}
              </p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Job Searches</p>
              <p className="text-3xl font-bold text-gray-900">
                {analyticsData.eventCounts.job_search || 0}
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Search className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Jobs Added</p>
              <p className="text-3xl font-bold text-gray-900">
                {(analyticsData.eventCounts.job_added || 0) + (analyticsData.eventCounts.job_imported || 0)}
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Session Time</p>
              <p className="text-3xl font-bold text-gray-900">
                {formatDuration(analyticsData.sessionDuration)}
              </p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Event Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Breakdown</h3>
          <div className="space-y-3">
            {Object.entries(analyticsData.eventCounts).map(([event, count]) => (
              <div key={event} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{formatEventName(event)}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ 
                        width: `${(count / Math.max(...Object.values(analyticsData.eventCounts))) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Search Terms</h3>
          <div className="space-y-3">
            {analyticsData.topSearches.length > 0 ? (
              analyticsData.topSearches.map(([search, count]) => (
                <div key={search} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 truncate">{search}</span>
                  <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
                    {count}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No search data available</p>
            )}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {analyticsData.recentEvents.length > 0 ? (
            analyticsData.recentEvents.map(event => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    {event.name === 'page_view' && <Eye className="h-4 w-4 text-blue-600" />}
                    {event.name === 'job_search' && <Search className="h-4 w-4 text-blue-600" />}
                    {(event.name === 'job_added' || event.name === 'job_imported') && <TrendingUp className="h-4 w-4 text-blue-600" />}
                    {!['page_view', 'job_search', 'job_added', 'job_imported'].includes(event.name) && <MousePointer className="h-4 w-4 text-blue-600" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{formatEventName(event.name)}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(event.properties.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                {event.properties.company && (
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
                    {event.properties.company}
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No recent activity</p>
          )}
        </div>
      </div>
    </div>
  );
};