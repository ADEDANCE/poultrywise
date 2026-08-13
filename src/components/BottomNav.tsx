import {
  FaHome,
  FaClipboardList,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white md:hidden">
      <div className="grid grid-cols-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-3 ${
              isActive ? "text-green-800" : "text-gray-500"
            }`
          }
        >
          <FaHome />
          <span className="text-xs">Dashboard</span>
        </NavLink>

        <NavLink
          to="/dailyrecord"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-3 ${
              isActive ? "text-green-800" : "text-gray-500"
            }`
          }
        >
          <FaClipboardList />
          <span className="text-xs">Daily Record</span>
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 py-3 ${
              isActive ? "text-green-800" : "text-gray-500"
            }`
          }
        >
          <FaHistory />
          <span className="text-xs">History</span>
        </NavLink>

        <button className="flex flex-col items-center gap-1 py-3 text-gray-500">
          <FaSignOutAlt />
          <span className="text-xs">Log Out</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
