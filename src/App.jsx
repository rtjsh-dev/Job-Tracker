import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import JobLists from "./components/JobLists";
import AddJob from "./components/AddJob";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobLists");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  useEffect(() => {
  localStorage.setItem("jobLists", JSON.stringify(jobs));
}, [jobs]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<AddJob/>}/>
        <Route path="/job-list" element={<JobLists jobs={jobs} setJobs={setJobs}/>} />
        <Route
          path="/add-job"
          element={<AddJob jobs={jobs} setJobs={setJobs} />}
        />
      </Routes>
    </>
  );
};

export default App;
