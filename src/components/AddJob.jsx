import { useState } from "react";

const AddJob = ({ jobs, setJobs }) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [source, setSource] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty submission
    if (!companyName || !position || !source) {
      alert("All fields are required!");
      return;
    }

    const newJob = {
      id: Date.now(),
      companyName,
      position,
      source,
    };

    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobLists", JSON.stringify(updatedJobs));

    setCompanyName("");
    setPosition("");
    setSource("");
  };

  return (
    <div className="h-[calc(100vh-50px)] flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add a Job
        </h2>
        <input
          type="text"
          placeholder="Company"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300"
        />
        <input
          type="text"
          value={source}
          placeholder="Source"
          onChange={(e) => setSource(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddJob;
