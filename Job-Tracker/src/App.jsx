import React from "react";
import Nav from "./components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import JobList from "./components/pages/JobList";
import AddJobForm from "./components/pages/AddJobForm";
import EditJobForm from "./components/pages/EditJobForm";
const App = () => {
  return (
    <div className="text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/" element={<JobList />} />
        <Route path="/AddJobForm" element={<AddJobForm />} />
        <Route path="/EditJobForm" element={<EditJobForm />} />
      </Routes>
    </div>
  );
};

export default App;
