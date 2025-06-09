import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white shadow-md">
      <Link to="/">
        <h2 className="text-2xl font-medium text-blue-800">Job Tracker</h2>
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink to="/job-list">JobList</NavLink>
        </li>
        <li>
          <NavLink to="/add-job">Add Job</NavLink>
        </li>
        <li>
          <NavLink to="/edit-job">Edit Job</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
