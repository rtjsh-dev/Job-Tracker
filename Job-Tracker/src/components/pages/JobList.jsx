import React from 'react';

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) return <p className="text-white">No jobs added yet.</p>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full ml-4">
      <h2 className="text-xl font-bold mb-2 text-center text-black">Jobs Applied:</h2>
      {jobs.map((job, index) => (
        <div key={index} className="border-b border-gray-300 mb-3 pb-2">
          <p><strong>Source:</strong> {job.source}</p>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Position:</strong> {job.position}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
