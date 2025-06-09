import React from 'react'
import { Link,NavLink } from 
'react-router-dom'
import "./Styles.css"
const Nav = () => {
  return (
    <nav className='flex sticky justify-between bg-green-100'>
        <Link to="/" className='ml-4 mt-2'>
        <img src={"final.png"} alt="Website Logo" className="h-10 w-auto" />
        </Link>
        <ul className='flex'>
            <li>
                <NavLink to="/" >Job List</NavLink>
            </li>
            <li>
                <NavLink to="/AddJobForm">Add Job</NavLink>
            </li>
            <li>
                <NavLink to="/EditJobForm">Edit Job</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
