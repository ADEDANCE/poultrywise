import { FaEgg } from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";
import type { SubmitEvent } from "react";
import { createDailyRecord } from "../services/dailyRecordService";
import type { DailyRecordFormData } from "../types/dailyRecord";
import LoadingOverlay from "../components/LoadingOverlay";

const DailyRecord = () => {
  const [usedVaccine, setUsedVaccine] = useState<boolean | null>(null);
  const [usedDrug, setUsedDrug] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState<DailyRecordFormData>({
    date: new Date().toISOString().split("T")[0],

    mortality: "",

    feedBagsUsed: "",
    feedCost: "",

    medication: "",
    medicationCost: "",

    vaccination: "",
    vaccinationCost: "",

    cratesCollected: "",
    extraEggsCollected: "",
    brokenEggs: "",

    cratesSold: "",
    extraEggsSold: "",

    pricePerCrate: "",
    pricePerEgg: "",

    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    setError("");
    setMessage("");
    setIsLoading(true);

    try {
      const response = await createDailyRecord(formData);

      console.log("Daily record:", response);

      setMessage("Today's record saved successfully.");

      // Reset the form
      setFormData({
        date: new Date().toISOString().split("T")[0],

        mortality: "",

        feedBagsUsed: 1,
        feedCost: 0,

        medication: "",
        medicationCost: 0,

        vaccination: "",
        vaccinationCost: 0,

        // electricityCost: 0,
        // labourCost: 0,
        // otherCost: 0,
        // otherCostDescription: "",

        cratesCollected: 0,
        extraEggsCollected: 0,
        brokenEggs: 0,

        cratesSold: 0,
        extraEggsSold: 0,

        pricePerCrate: 0,
        pricePerEgg: 0,

        notes: "",
      });

      setUsedVaccine(null);
      setUsedDrug(null);
    } catch (error: any) {
      console.error("Failed to save daily record:", error);

      setError(
        error.response?.data?.message || "Failed to save today's record",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay message="Saving today's record" />}

      <section className=" w-full px-10 md:px-40 py-16">
        <div className=" text-center">
          <h1 className=" text-black font-bold text-2xl">Daily Record</h1>

          {message && <p className="text-green-600 mb-4">{message}</p>}

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center my-6">
              <h2 className=" font-semibold">General Information</h2>

              <div className=" flex flex-col gap-3">
                <Input
                  label="Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="mm/dd/y"
                />

                <Input
                  label="Mortality"
                  name="mortality"
                  type="number"
                  placeholder="e.g 1"
                  value={formData.mortality}
                  onChange={handleChange}
                />

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
                <Input
                  label="Feed Bags Used"
                  name="feedBagsUsed"
                  type="number"
                  placeholder="e.g 5"
                  value={formData.feedBagsUsed}
                  onChange={handleChange}
                />

                <Input
                  label="Feed Cost"
                  placeholder="e.g 0"
                  name="feedCost"
                  value={formData.feedCost}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* vacination */}
            <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center mb-6">
              <h2 className=" font-semibold">Vaccination</h2>

              <p>Did you use a vaccine today?</p>

              <div className=" flex gap-6 mt-3">
                <Button
                  className=" bg-white border border-gray-300 w-full"
                  type="button"
                  onClick={() => setUsedVaccine(true)}
                >
                  {" "}
                  Yes
                </Button>

                <Button
                  className=" bg-green-800 text-white w-full"
                  type="button"
                  onClick={() => setUsedVaccine(false)}
                >
                  {" "}
                  No
                </Button>
              </div>

              {usedVaccine === true && (
                <>
                  <div className=" mt-4">
                    <Input
                      label="Vaccine Name"
                      name="vaccination"
                      placeholder="e.g Lasota"
                      value={formData.vaccination}
                      onChange={handleChange}
                    />
                    <Input
                      label="Vaccination Cost"
                      name="vaccinationCost"
                      placeholder="e.g 500"
                      value={formData.vaccinationCost}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Medcine */}
            <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center mb-6">
              <h2 className=" font-semibold">Medication</h2>

              <p>Did you buy drug today?</p>

              <div className=" flex gap-6 mt-3">
                <Button
                  className=" bg-white border border-gray-300 w-full"
                  type="button"
                  onClick={() => setUsedDrug(true)}
                >
                  {" "}
                  Yes
                </Button>

                <Button
                  className=" bg-green-800 text-white w-full"
                  type="button"
                  onClick={() => setUsedDrug(false)}
                >
                  {" "}
                  No
                </Button>
              </div>

              {usedDrug === true && (
                <>
                  <div className=" mt-4">
                    <Input
                      label="Medicine Name"
                      name="medication"
                      placeholder="e.g Multivate"
                      value={formData.medication}
                      onChange={handleChange}
                    />
                    <Input
                      label="Medicine Cost"
                      name="medicationCost"
                      placeholder="e.g 500"
                      value={formData.medicationCost}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Egg production */}
            <div className=" border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
              <div className=" flex gap-2">
                <FaEgg className="  text-orange-300" />

                <h2 className=" font-semibold">Egg production</h2>
              </div>

              <Input
                label="Crates Collected"
                name="cratesCollected"
                type="number"
                placeholder="e.g 12"
                value={formData.cratesCollected}
                onChange={handleChange}
              />

              <Input
                label="Extra Eggs Collected"
                name="extraEggsCollected"
                type="number"
                placeholder="e.g 15"
                value={formData.extraEggsCollected}
                onChange={handleChange}
              />

              <Input
                label="Broken Eggs"
                name="brokenEggs"
                type="number"
                placeholder="e.g 3"
                value={formData.brokenEggs}
                onChange={handleChange}
              />
            </div>

            <div className=" mt-6 border border-gray-200 bg-white shadow px-4 py-6 rounded-xl text-center">
              <div className=" flex gap-2">
                <FaEgg className="  text-orange-300" />

                <h2 className=" font-semibold">Egg Sales</h2>
              </div>

              <div className=" mt-4 flex gap-3 mb-4">
                <Input
                  label="Crates Sold"
                  name="cratesSold"
                  type="number"
                  placeholder="e.g 20"
                  value={formData.cratesSold}
                  onChange={handleChange}
                />

                <Input
                  label="Extra Eggs Sold"
                  name="extraEggsSold"
                  type="number"
                  placeholder="e.g 5"
                  value={formData.extraEggsSold}
                  onChange={handleChange}
                />
              </div>

              <div className=" mt-4 flex gap-3 mb-4">
                <Input
                  label="Price Per Crate"
                  name="pricePerCrate"
                  placeholder="e.g 12000"
                  value={formData.pricePerCrate}
                  onChange={handleChange}
                />

                <Input
                  label="Price Per Egg"
                  name="pricePerEgg"
                  placeholder="e.g 500"
                  value={formData.pricePerEgg}
                  onChange={handleChange}
                />
              </div>
            </div>

            <Button
              type="submit"
              className=" bg-green-800 text-white w-full mt-8"
            >
              <span className="flex gap-2 justify-center items-center">
                <p>Save Record</p>
                <IoMdCheckmark />
              </span>
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default DailyRecord;
