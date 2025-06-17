import React, { useState } from "react";

const JobLists = ({ jobs, setJobs }) => {
  const [editingId, setEditingId] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [editedJob, setEditedJob] = useState({
    companyName: "",
    position: "",
    source: "",
    status: "",
  });

  const startEditing = (job) => {
    setEditingId(job.id);
    setEditedJob({
      companyName: job.companyName,
      position: job.position,
      source: job.source,
      status: job.status,
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

  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter((j) => j.id !== jobId);
    setJobs(updatedJobs);
    setDeleteMessage("Job deleted!");
    setTimeout(() => {
      setDeleteMessage("");
    }, 3000);
  };

  return (
    <>
      <div className="text-center text-4xl font-bold text-blue-500 mt-10 mb-6 tracking-wide">
        Jobs Applied For!
      </div>

      {deleteMessage && (
        <div className="text-center text-red-500 font-semibold mt-2">
          {deleteMessage}
        </div>
      )}

      <div className="text-black p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.length === 0 ? (
          <h1 className="flex justify-center text-2xl">No jobs found.</h1>
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
                  <input
                    name="status"
                    value={editedJob.status}
                    onChange={handleChange}
                    className="border p-1 rounded w-full mb-2"
                  />
                  <button
                    onClick={saveChanges}
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 hover:scale-105 transition duration-300 ease-in-out"
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
                  <p className="mb-2">Status: {job.status}</p>
                  <div className="flex gap-7">
                    <button
                      onClick={() => startEditing(job)}
                      className={`px-3 py-1 rounded transition duration-300 ease-in-out ${
                        editingId === job.id
                          ? "text-orange-500 underline"
                          : "text-white bg-blue-500 hover:bg-blue-600 hover:text-white hover:scale-105"
                      }`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="rounded-xl p-1 bg-red-500 text-white hover:bg-red-600 hover:scale-105 transition duration-300 ease-in-out"
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
