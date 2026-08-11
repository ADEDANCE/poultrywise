import Navbar from "./components/Navbar";
import Landingpage from "./pages/Landingpage";
import Footer from "./Section/Footer";

const App = () => {
  return (
    <div className=" text-red-600">
      <Navbar />
      <Landingpage />
      <Footer />
    </div>
  );
};

export default App;
