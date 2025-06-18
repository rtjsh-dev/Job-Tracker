import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { saveJobs, loadJobs, generateId } from './utils/storage';
import { analytics } from './services/analytics';
import { Layout } from './components/Layout';
import { JobForm } from './components/JobForm';
import { JobSearchModal } from './components/JobSearchModal';
import { DashboardPage } from './pages/DashboardPage';
import { JobsPage } from './pages/JobsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

function App() {
  const [jobs, setJobs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isJobSearchOpen, setIsJobSearchOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  // Load jobs from localStorage on component mount
  useEffect(() => {
    const savedJobs = loadJobs();
    setJobs(savedJobs);
    analytics.trackPageView('app_start');
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  const handleAddJob = (jobData) => {
    const newJob = {
      id: generateId(),
      ...jobData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setJobs(prev => [newJob, ...prev]);
    analytics.trackJobAdded(jobData);
  };

  const handleEditJob = (jobData) => {
    if (!editingJob) return;
    
    const updatedJob = {
      ...editingJob,
      ...jobData,
      updatedAt: new Date().toISOString(),
    };
    
    setJobs(prev => prev.map(job => job.id === editingJob.id ? updatedJob : job));
    analytics.trackJobUpdated(jobData);
    setEditingJob(null);
  };

  const handleDeleteJob = (id) => {
    const jobToDelete = jobs.find(job => job.id === id);
    if (window.confirm('Are you sure you want to delete this job application?')) {
      setJobs(prev => prev.filter(job => job.id !== id));
      if (jobToDelete) {
        analytics.trackJobDeleted(jobToDelete);
      }
    }
  };

  const handleImportJob = (jobData) => {
    handleAddJob(jobData);
    setIsJobSearchOpen(false);
  };

  const openEditForm = (job) => {
    setEditingJob(job);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingJob(null);
  };

  const openAddForm = () => {
    setEditingJob(null);
    setIsFormOpen(true);
    analytics.track('form_opened', { type: 'add_job' });
  };

  const openJobSearch = () => {
    setIsJobSearchOpen(true);
    analytics.track('job_search_opened');
  };

  return (
    <Router>
      <Layout 
        onAddJob={openAddForm} 
        onOpenJobSearch={openJobSearch}
        jobCount={jobs.length}
      >
        <Routes>
          <Route 
            path="/" 
            element={<DashboardPage jobs={jobs} />} 
          />
          <Route 
            path="/jobs" 
            element={
              <JobsPage 
                jobs={jobs} 
                onEdit={openEditForm} 
                onDelete={handleDeleteJob} 
              />
            } 
          />
          <Route 
            path="/analytics" 
            element={<AnalyticsPage />} 
          />
        </Routes>
      </Layout>

      {/* Job Form Modal */}
      <JobForm
        isOpen={isFormOpen}
        onClose={closeForm}
        onSubmit={editingJob ? handleEditJob : handleAddJob}
        editingJob={editingJob}
      />

      {/* Job Search Modal */}
      <JobSearchModal
        isOpen={isJobSearchOpen}
        onClose={() => setIsJobSearchOpen(false)}
        onImportJob={handleImportJob}
      />
    </Router>
  );
}

export default App;