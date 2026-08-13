import {
  FaHome,
  FaClipboardList,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <aside className="hidden  w-64 flex-col bg-green-800 p-6 text-white md:flex">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold">PoultryWise</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-white text-green-800"
                : "text-gray-200 hover:bg-green-700"
            }`
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/dailyrecord"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-white text-green-800"
                : "text-gray-200 hover:bg-green-700"
            }`
          }
        >
          <FaClipboardList />
          <span>Daily Record</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive
                ? "bg-white text-green-800"
                : "text-gray-200 hover:bg-green-700"
            }`
          }
        >
          <FaHistory />
          <span>Flock History</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <button
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-200 hover:bg-green-700"
        onClick={() => console.log("Logout")}
      >
        <FaSignOutAlt />
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default SideNav;
