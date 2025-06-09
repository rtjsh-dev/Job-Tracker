import React, { useEffect, useState } from "react";

const JobLists = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobLists");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
      console.log(jobs);
    }
  }, []);

  return (
    <div className="text-black p-6 space-y-4">
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-xl shadow-md space-y-1"
          >
            <h3 className="text-lg font-semibold">{job.companyName}</h3>
            <p>Position: {job.position}</p>
            <p>Source: {job.source}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default JobLists;
