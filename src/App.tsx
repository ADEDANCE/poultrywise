import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Footer from "./Section/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { SetupFlock } from "./pages/SetupFlock";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setupflock" element={<SetupFlock />} />

         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
};

export default App;
