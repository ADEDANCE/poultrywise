import { FaEgg, FaRegCalendarAlt } from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const DailyRecord = () => {
  const [usedVaccine, setUsedVaccine] = useState(false);
  const [usedDrug, setUsedDrug] = useState(false);

  return (
    <section className=" w-full px-10 md:px-40 py-16">
      <div className=" text-center">
        <div className=" bg-green-100 rounded-xl px-3 py-3 flex gap-2">
          <FaRegCalendarAlt />
          <p>
            Recording for{" "}
            <span className=" font-bold">Sunday, 27 July 2026</span> ·{" "}
            <span>Flock Day 145</span>
          </p>
        </div>

        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center my-6">
          <h2 className=" font-semibold">General Information</h2>

          <div className=" flex flex-col gap-3">
            <Input label="Date" type="date" placeholder="mm/dd/y" />

            <div className=" flex gap-6 ">
              <Input label="Birds Today" placeholder="e.g 492" />
              <Input label="Deaths Today" placeholder="e.g 0" />
            </div>

            <Input
              label="Notes (optional)"
              placeholder="Any observations about the flock today..."
            />
          </div>
        </div>

        {/* feed Information */}

        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center mb-6">
          <h2 className=" font-semibold">Feed Information</h2>

          <div className=" mt-4 flex gap-6">
            <Input label="Feed Quantity (kg)" placeholder="e.g 492" />
            <Input label="Feed Cost (GHS)" placeholder="e.g 0" />
          </div>
        </div>

        {/* vacination */}
        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center mb-6">
          <h2 className=" font-semibold">Vaccination</h2>

          <p>Did you use a vaccine today?</p>

          <div className=" flex gap-6 mt-3">
            <Button
              className=" bg-white border border-gray-300 w-full"
              onClick={() => setUsedVaccine(true)}
            >
              {" "}
              Yes
            </Button>

            <Button
              className=" bg-green-800 text-white w-full"
              onClick={() => setUsedVaccine(false)}
            >
              {" "}
              No
            </Button>
          </div>

          {usedVaccine && (
            <>
            <Input label="Vaccine Name" placeholder="e.g lasota" />
          <Input label="Vaccination Cost" placeholder="e.g 500" />
            </>
          )}

          

          
        </div>


        {/* Medcine */}
         <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center mb-6">
          <h2 className=" font-semibold">Vaccination</h2>

          <p>Did you buy drug today?</p>

          <div className=" flex gap-6 mt-3">
            <Button
              className=" bg-white border border-gray-300 w-full"
              onClick={() => setUsedDrug(true)}
            >
              {" "}
              Yes
            </Button>

            <Button
              className=" bg-green-800 text-white w-full"
              onClick={() => setUsedDrug(false)}
            >
              {" "}
              No
            </Button>
          </div>

          {usedDrug && (
            <>
            <Input label="Medcine Name" placeholder="e.g multivate" />
          <Input label="Medcine Cost" placeholder="e.g 500" />
            </>
          )}

          

          
        </div>

        {/* Egg production */}
        <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
          <div className=" flex gap-2">
            <FaEgg className="  text-orange-300" />

            <h2 className=" font-semibold">Egg Production</h2>
          </div>

          <div className=" mt-4 flex gap-6 mb-4">
            <Input label="Crate Produced" type="number" placeholder="e.g 23" />
            <Input label="Create Sold" placeholder="e.g 20" />
          </div>

          <Input label="Extra egg Sold" placeholder="e.g 12" />
        </div>

        <Button className=" bg-green-800 text-white w-full mt-8">
          <span className=" flex gap-2 justify-center">
            <p>Save Record</p>
            <IoMdCheckmark />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default DailyRecord;
