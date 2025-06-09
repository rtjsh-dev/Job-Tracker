import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-white shadow-md">
      <h2 className="text-2xl font-medium text-gray-800">Job Portal</h2>
      <ul className="flex items-center gap-2">
        <Link to="/job-list">JobList</Link>
        <Link to="/add-job">Add job</Link>
        <Link to="/edit-job">Edit job</Link>
      </ul>
    </div>
  );
};

export default Nav;
