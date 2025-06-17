import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full px-4 py-2 bg-white shadow-md relative">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link to="/">
          <h2 className="text-2xl font-medium text-blue-800">Job Tracker</h2>
        </Link>
        <div
          className="sm:hidden menu cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col sm:flex sm:flex-row sm:items-center gap-10 mt-4 pr-5 sm:mt-0 sm:visible`}
      >
        <li>
          <NavLink
            to="/add-job"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add Job
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/job-list"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            JobList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
