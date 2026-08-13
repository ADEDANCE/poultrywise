import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { SetupFlock } from "./pages/SetupFlock";
import Dashboard from "./pages/Dashboard";
import DailyRecord from "./pages/DailyRecord";
import History from "./pages/History";
import DashboardLayout from "./Layout/DashboardLayout";
import PublicLayout from "./Layout/PublicLayout";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setupflock" element={<SetupFlock />} />
        </Route>

        {/* Dashboard layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dailyrecord" element={<DailyRecord />} />
          <Route path="/history" element={<History />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
