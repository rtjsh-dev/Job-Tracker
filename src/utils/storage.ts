import { Job } from '../types/job';

const STORAGE_KEY = 'job-tracker-data';

export const saveJobs = (jobs: Job[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  } catch (error) {
    console.error('Failed to save jobs to localStorage:', error);
  }
};

export const loadJobs = (): Job[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load jobs from localStorage:', error);
    return [];
  }
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};