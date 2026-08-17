import { CgDanger } from "react-icons/cg";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createFlock } from "../services/flockService";

import type { SubmitEvent } from "react";
import LoadingOverlay from "../components/LoadingOverlay";

export const SetupFlock = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    batchID: "",
    numberOfBirds: "",
    breed: "",
    dateReceived: "",
    supplier: "",
    initialCost: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    setError("");

    // Basic validation
    if (
      !formData.batchID ||
      !formData.numberOfBirds ||
      !formData.breed ||
      !formData.dateReceived ||
      !formData.initialCost
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);

    try {
      const flockData = {
        batchID: formData.batchID,
        numberOfBirds: Number(formData.numberOfBirds),
        breed: formData.breed,
        dateReceived: formData.dateReceived,
        supplier: formData.supplier,
        initialCost: Number(formData.initialCost),
      };

      await createFlock(flockData);

      navigate("/dashboard");
    } catch (error: any) {
      console.log("Flock creation error:", error);
      console.log("Server response:", error.response?.data);

      setError(error.response?.data?.message || "Failed to create flock");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoadingOverlay message="Setting up your flock" />}
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

            {error && <p className="mt-4 text-red-500">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col gap-3">
                <Input
                  label="Flock Name or Batch ID"
                  name="batchID"
                  placeholder="e.g Batch 001"
                  value={formData.batchID}
                  onChange={handleChange}
                />

                <Input
                  label="Breed / Strain"
                  name="breed"
                  placeholder="e.g ISA Brown"
                  value={formData.breed}
                  onChange={handleChange}
                />

                <div className=" flex flex-col md:flex-row md:gap-6">
                  <Input
                    label="Number of Day-Old Chicks"
                    name="numberOfBirds"
                    type="number"
                    placeholder="e.g 50"
                    value={formData.numberOfBirds}
                    onChange={handleChange}
                  />

                  <Input
                    label="Date Received"
                    name="dateReceived"
                    type="date"
                    value={formData.dateReceived}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  label="Supplier (optional)"
                  name="supplier"
                  placeholder="e.g Kenchem Agri"
                  value={formData.supplier}
                  onChange={handleChange}
                />

                <Input
                  label="Initial Chick Cost"
                  name="initialCost"
                  type="number"
                  placeholder="e.g 125000"
                  value={formData.initialCost}
                  onChange={handleChange}
                />
              </div>

              <div className=" bg-green-100 border border-green-500 rounded-2xl flex gap-2 text-green-600 px-3 py-4 my-5 text-start ">
                <CgDanger size={30} />
                <p>
                  PoultryWise will automatically start your flock at the Day-Old
                  Chicks / Brooding Stage and calculate all lifecycle
                  transitions.
                </p>
              </div>

              <Button type="submit" className="bg-green-800 text-white">
                <span className="flex items-center gap-2">
                  Set Up My Flock
                  <FaArrowRight />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
