import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
        <Link to="/" className=''>Website</Link>
        <ul>
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
