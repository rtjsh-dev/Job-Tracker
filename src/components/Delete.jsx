import React, { useState } from "react";

const Delete = ({ jobs }) => {
  console.log({ jobs });
  const [deleteId, setdeleteId] = useState(null);
  const [deletedJobs, setDeletedJobs] = useState({
    companyName: "",
    position: "",
    source: "",
  });
  const startDeleting = () => {
    setdeleteId(jobs.id);
    setDeletedJobs({
      companyName: "",
      position: "",
      source: "",
    });
  };
  return (
    <button
      onClick={() => startDeleting(jobs)}
      className="rounded-xl p-1 bg-red-500 text-white"
    >
      Delete
    </button>
  );
};

export default Delete;
