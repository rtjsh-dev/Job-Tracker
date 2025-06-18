import React from 'react';
import { Dashboard } from '../components/Dashboard';

export const DashboardPage = ({ jobs }) => {
  return <Dashboard jobs={jobs} />;
};