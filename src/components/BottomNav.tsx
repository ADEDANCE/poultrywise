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

const BottomNav = () => {
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

        <button
          onClick={() => setShowEndFlockDialog(true)}
          className="flex flex-col items-center gap-1 py-3 text-gray-500"
        >
          <FaSignOutAlt />
          <span className="text-xs">End flock</span>
        </button>

        {showEndFlockDialog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-6">
              <h2 className="text-lg font-semibold">End this flock?</h2>

              <p className="mt-2 text-gray-600">
                Are you sure you want to end this flock? This will mark the
                flock as completed and calculate its final financial summary.
              </p>

              {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

              <div className="mt-6 flex gap-3">
                <Button
                  className="w-full border border-gray-300 bg-white"
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
      </div>
    </nav>
  );
};

export default BottomNav;
