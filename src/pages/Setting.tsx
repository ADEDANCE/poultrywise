import { IoMdCheckmark } from "react-icons/io";
import Button from "../components/Button";
import Input from "../components/Input";

const Setting = () => {
  return (
    <section className=" w-full px-8 py-7 bg-gray-200">
      <div className=" text-left">
        <h1 className=" font-bold text-2xl">Settings</h1>
        <p className=" text-gray-600">
          Manage your farm, account and workspace
        </p>

        <div className=" mt-6 border border-gray-200 bg-white shadow px-4 py-6 rounded-xl  text-left">
          <h2 className=" font-semibold">Security</h2>

          <div className=" flex flex-col gap-3">
            <Input label="Current password" passwordToggle />
            <Input label="New password" passwordToggle />
          </div>
        </div>

        <div className=" mt-7 text-white border border-gray-200 bg-green-800 shadow px-4 py-6 rounded-xl text-center">
          <h2 className=" font-semibold">Completed</h2>
          <p>End of the production cycle. Archive the flock.</p>

          <Button className=" mt-4 bg-white text-green-500">
            {" "}
            <span className=" flex gap-2 justify-center items-center">
              Mark Flock completed
              <IoMdCheckmark />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Setting;
