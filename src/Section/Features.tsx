import { LuBird, LuBookOpenText } from "react-icons/lu";
import FeaturesCard from "../components/FeaturesCard";
import { FaChartLine, FaRegClock } from "react-icons/fa";

const Features = () => {
  return (
    <section className=" bg-gray-300 w-full px-10 py-8">
      <div className=" mx-auto text-black items-center text-center  lg:px-32">
        <h3 className=" text-green-700">FEATURES</h3>
        <h2 className=" font-bold text-2xl">
          Everything you need to understand one flock.
        </h2>

        <div className=" mt-7 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ">
          <FeaturesCard
            number="01"
            icon={<LuBird />}
            title="Flock Management"
            description="Start a flock and follow it through its complete lifecycle, from day-old chicks to completion."
          />

          <FeaturesCard
            number="02"
            icon={<LuBookOpenText />}
            title="Daily Records"
            description="Record daily expenses, egg sales, mortality, and important flock information in seconds."
          />

          <FeaturesCard
            number="03"
            icon={<FaChartLine />}
            title="Financial Intelligence"
            description="Automatically calculate total expenses, revenue, net profit, profit margin, and ROI."
          />

          <FeaturesCard
            number="04"
            icon={<FaRegClock />}
            title="Flock History"
            description="When a flock is completed, preserve its final performance for future reference."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
