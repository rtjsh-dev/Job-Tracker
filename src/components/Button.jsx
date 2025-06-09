import React from 'react'
import "../App.css"
const Button = ({jobs}) => {
    console.log("Button clicked");
    
    console.log(jobs);
    
  return (
    <div>
      <button className="btn">Edit</button>
    </div>
  )
}

export default Button
