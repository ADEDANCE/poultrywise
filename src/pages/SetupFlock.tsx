import { CgDanger } from "react-icons/cg";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SetupFlock = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-full px-20 md:px-40 py-16">
      <div className=" text-center">
        <h1 className=" font-bold text-2xl mb-6">PoultryWise</h1>

        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
          <h2 className=" font-semibold">Set Up Your Layer Flock</h2>
          <p>Tell us about your flock to get started.</p>

          <p>
            PoultryWise will track your flock from day-old chicks through egg
            production — automatically calculating age, stage, and upcoming
            transitions.
          </p>

          <div className=" flex flex-col gap-3">
            <Input label="Flock Name or Batch ID" placeholder="e.g Batch 001" />
            <Input
              label="Breed / Strain
"
              placeholder="e.g ISA Brown"
            />

            <div className=" flex flex-col md:flex-row md:gap-6">
              <Input label="Number of Day-Old Chicks" placeholder="e.g 50C" />
              <Input label="Date Received" type="date" placeholder="mm/dd/y" />
            </div>

            <Input label="Supplier (optional)" placeholder="e.g kenchem Agri" />
            <Input label="Initial Chick Cost" placeholder="e.g 1250" />
          </div>

          <div className=" bg-green-100 border border-green-500 rounded-2xl flex gap-2 text-green-600 px-3 py-4 my-5 text-start ">
            <CgDanger size={30} />
            <p>
              PoultryWise will automatically start your flock at the Day-Old
              Chicks / Brooding Stage and calculate all lifecycle transitions.
            </p>
          </div>

          <Button
            className="  bg-green-800text-white"
            onClick={() => navigate("/dashboard")}
          >
            <span className="flex items-center gap-2">
              Set Up My Flock
              <FaArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
