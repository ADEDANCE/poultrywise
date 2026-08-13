import { FaPlus } from "react-icons/fa";
import Button from "../components/Button";
import DashboardCard from "../components/DashboardCard";
import { LuBird } from "react-icons/lu";

const Dashboard = () => {
  return (
    <section className=" w-full px-8 py-7 bg-gray-200">
      <div className=" text-center">
        <div className=" bg-green-800 text-white px-4 py-4 rounded-2xl flex flex-col items-start ">
          <p className=" text-gray-300 font-bold text-xl">Current Flock</p>

          <div className=" flex justify-between w-full">
            <p className=" text-3xl">
              Batch 001 · <span> Day 145</span>
            </p>

            <Button className=" hidden md:block bg-orange-500 text-white">
              <span className=" flex gap-2 items-center justify-center">
                <FaPlus />
                <p>Add Today's Record</p>
              </span>
            </Button>
          </div>

          <p>
            Stage: <span>Egg Production</span>
          </p>

          <Button className=" mt-3 md:hidden w-full bg-orange-500 text-white ">
            <span className=" flex gap-2 items-center justify-center">
              <FaPlus />
              <p>Add Today's Record</p>
            </span>
          </Button>
        </div>

        <div className=" flex justify-between gap-10 mt-10 text-start">
          <DashboardCard
            title="Current Birds"
            icon={<LuBird />}
            value="492"
            description="8 deaths total"
          />
          <DashboardCard
            title="Flock Age
"
            icon={<LuBird />}
            value="Day 145"
            description="Started 4 Mar 2026"
          />
        </div>

        <div className=" flex justify-between gap-7  mt-4 text-start">
          <DashboardCard
            title="Total Expenses"
            icon={<LuBird />}
            value="492"
            description="8 deaths total"
          />
          <DashboardCard
            title="Total Revenue"
            icon={<LuBird />}
            value="492"
            description="8 deaths total"
          />
        </div>

        <div className=" w-full border bg-white border-gray-400 px-4 py-4 rounded-2xl mt-12">
          <h3 className=" font-semibold">Financial Summary</h3>
          <p className=" text-gray-600">
            Cumulative across the full flock cycle.{" "}
          </p>
          <p className=" text-gray-600 font-bold  my-3">EXPENSES</p>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Initial Chicks</p>
            <p>500,000</p>
          </div>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Feed</p>
            <p>200,000</p>
          </div>
          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Drugs</p>
            <p>20,000</p>
          </div>
          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Vacination</p>
            <p>30,000</p>
          </div>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Egg sold</p>
            <p>1,000,000</p>
          </div>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Vacination</p>
            <p>6,000</p>
          </div>

          <div className=" flex justify-between border-b border-gray-400 ">
            <p className=" text-gray-400">Total Revenue</p>
            <p>1,000,000</p>
          </div>

          <div className=" flex justify-between  ">
            <p className=" text-gray-400">ROI</p>
            <p>300,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
