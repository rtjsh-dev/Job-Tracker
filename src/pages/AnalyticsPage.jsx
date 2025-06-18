import React, { useEffect } from 'react';
import { AnalyticsDashboard } from '../components/AnalyticsDashboard';
import { analytics } from '../services/analytics';

export const AnalyticsPage = () => {
  useEffect(() => {
    analytics.trackPageView('analytics');
  }, []);

  return <AnalyticsDashboard />;
};