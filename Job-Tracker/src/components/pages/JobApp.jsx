// JobApp.jsx (Parent Component)
import React, { useState } from "react";
import AddJobForm from "./AddJobForm";
import JobList from "./JobList";

const JobApp = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prevJobs) => [...prevJobs, job]);
    console.log("New Job Added:", job);
  };

  return (
    <>
      <AddJobForm onAddJob={addJob} />
      <JobList jobs={jobs} />
    </>
  );
};

export default JobApp;
