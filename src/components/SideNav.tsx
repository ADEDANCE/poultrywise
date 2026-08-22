import { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { endFlock } from "../services/flockService";
import Button from "./Button";

const SideNav = () => {
  const navigate = useNavigate();
  const [showEndFlockDialog, setShowEndFlockDialog] = useState(false);
  const [isEndingFlock, setIsEndingFlock] = useState(false);
  const [error, setError] = useState("");

  const handleEndFlock = async () => {
    try {
      setIsEndingFlock(true);
      setError("");

      const response = await endFlock();

      console.log("Flock ended:", response);

      setShowEndFlockDialog(false);

      // Navigate to flock history
      navigate("/history");
    } catch (error: any) {
      console.error("Failed to end flock:", error);

      setError(error.response?.data?.message || "Failed to end flock");
    } finally {
      setIsEndingFlock(false);
    }
  };

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
        onClick={() => setShowEndFlockDialog(true)}
      >
        <FaSignOutAlt />
        <span>End Flock</span>
      </button>

      {showEndFlockDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6">
            <h2 className="text-lg font-semibold">End this flock?</h2>

            <p className="mt-2 text-gray-600">
              Are you sure you want to end this flock? This will mark the flock
              as completed and calculate its final financial summary.
            </p>

            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

            <div className="mt-6 flex gap-3">
              <Button
                className="w-full border border-gray-300 "
                onClick={() => setShowEndFlockDialog(false)}
                disabled={isEndingFlock}
              >
                Cancel
              </Button>

              <Button
                className="w-full bg-red-600 text-white"
                onClick={handleEndFlock}
                disabled={isEndingFlock}
              >
                {isEndingFlock ? "Ending..." : "Yes, End Flock"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default SideNav;
