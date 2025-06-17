import { useState } from "react";
import Button from "./AddJobButton";

const AddJob = ({ jobs, setJobs }) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [source, setSource] = useState("");
  const [status, setStatus] = useState("");
  const [jobAdded, setJobAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyName || !position || !source || !status) {
      alert("All fields are required!");
      return;
    }

    const newJob = {
      id: Date.now(),
      companyName,
      position,
      source,
      status,
    };

    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobLists", JSON.stringify(updatedJobs));

    setCompanyName("");
    setPosition("");
    setSource("");
    setStatus("");
    setJobAdded(true);
    setTimeout(() => setJobAdded(false), 3000);
  };

  return (
    <div className="min-h-[calc(100vh-50px)] flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl space-y-4 sm:space-y-6"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
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
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300"
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300"
        />

        <Button type="submit" showMessage={jobAdded}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddJob;
