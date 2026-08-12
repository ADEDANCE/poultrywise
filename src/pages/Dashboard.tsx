import { FaPlus } from "react-icons/fa";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <section className=" w-full px-8 py-7">
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
      </div>
    </section>
  );
};

export default Dashboard;
