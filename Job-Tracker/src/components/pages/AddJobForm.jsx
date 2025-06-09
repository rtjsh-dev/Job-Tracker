import React, { use, useState } from "react";
import "../Styles/Styles.css";


const AddJobForm = ({onAddJob}) => {
  const [formData, setFormData] = useState({
    source: "",
    company: "",
    status: "",
    position: "",
  });

   const handleSubmit = (e) => {
    e.preventDefault();
    // if (!formData.source || !formData.company || !formData.status || !formData.position) {
    //   alert("Please fill all fields");
    //   return;
    // };
    onAddJob(formData);
    console.log("onAddJob", typeof onAddJob);  // should log: function

    setFormData({ source: "", company: "", status: "", position: "" });
  }

  return (
    <div className="flex justify-center items-center h-[calc(100vh-54px)] bg-gradient-to-br from-[#00feba] to-[#5b548a]">
      <form onSubmit={handleSubmit} className="text-black h-100 w-100 rounded-2xl flex flex-col justify-center bg-[#DBFCE7] m-4">
        <p className="flex items-center justify-center text-4xl font-bold text-[#2c3e50] mb-6">
          Jobs Applied for!
        </p>
        <input type="text" placeholder="Source" value={formData.source} onChange={(e) => setFormData({ ...formData, source: e.target.value })}/>
        <input type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}/>
        <input type="text" placeholder="Status" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}/>
        <input type="text" placeholder="Applied for" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })}/>
        <div className="flex justify-center">
          <button type="submit" className="btn">Add</button>
        </div>
        
        
      </form>
    </div>
  );
  
};

export default AddJobForm;
