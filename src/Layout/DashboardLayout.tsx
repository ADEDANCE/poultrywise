import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import BottomNav from "../components/BottomNav";
import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-200">
      <SideNav />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardNavbar />
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
