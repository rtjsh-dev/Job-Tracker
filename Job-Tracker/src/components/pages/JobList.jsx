const JobList = ({jobs = []})=>{
  console.log(jobs);
  console.log("Hello");
  
  return(
    <div>
      <h2>Jobs You applied for:</h2>
      {jobs.map((job, index) => (
        <div key={index}>
          <p>{job.source}</p>
        </div>
      ))}
    </div>
  )
}

export default JobList