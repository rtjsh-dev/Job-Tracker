import React, { useState } from "react";

const JobLists = ({ jobs, setJobs }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedJob, setEditedJob] = useState({
    companyName: "",
    position: "",
    source: "",
  });

  const startEditing = (job) => {
    setEditingId(job.id);
    setEditedJob({
      companyName: job.companyName,
      position: job.position,
      source: job.source,
    });
  };

  const saveChanges = () => {
    const updatedJobs = jobs.map((job) =>
      job.id === editingId ? { ...job, ...editedJob } : job
    );
    setJobs(updatedJobs);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedJob((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
    <div className="flex justify-center text-3xl mt-3">Jobs Applied For!</div>
    <div className="text-black p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-xl shadow-md space-y-1"
          >
            {editingId === job.id ? (
              <>
                <input
                  name="companyName"
                  value={editedJob.companyName}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
                <input
                  name="position"
                  value={editedJob.position}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
                <input
                  name="source"
                  value={editedJob.source}
                  onChange={handleChange}
                  className="border p-1 rounded w-full mb-2"
                />
                <button
                  onClick={saveChanges}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">
                  Company: {job.companyName}
                </h3>
                <p>Position: {job.position}</p>
                <p className="mb-2">Source: {job.source}</p>
                <div className="flex gap-7">
                  <button
                    onClick={() => startEditing(job)}
                    className={`px-3 py-1 rounded ${
                      editingId === job.id
                        ? "text-orange-500 underline"
                        : "text-white bg-blue-500 hover:text-blue-500"
                    }`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      const updatedJobs = jobs.filter((j) => j.id !== job.id);
                      setJobs(updatedJobs);
                    }}
                    className="rounded-xl p-1 bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
    
    </>
    
  );
};

export default JobLists;
