import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <header className=" md:hidden flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      {/* Logo */}
      <h1 className="text-xl font-bold text-green-800 ">PoultryWise</h1>

      {/* Settings */}
      <button
        onClick={() => navigate("/setting")}
        type="button"
        className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-green-800"
      >
        <FiSettings size={22} />
      </button>
    </header>
  );
};

export default DashboardNavbar;
