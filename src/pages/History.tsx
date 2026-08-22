import { useEffect, useState } from "react";
import { getFlockHistory } from "../services/flockService";
import LoadingOverlay from "../components/LoadingOverlay";
import type { Flock } from "../types/flock";

const History = () => {
  const [flocks, setFlocks] = useState<Flock[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getFlockHistory();

        setFlocks(data.flocks);
      } catch (error: any) {
        console.error("Failed to load flock history:", error);

        setError(
          error.response?.data?.message || "Failed to load flock history",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (isLoading) {
    return <LoadingOverlay message="Loading flock history" />;
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }
  return (
    <section className=" w-full px-10 md:px-40 py-16">
      <div className=" text-center">
        <h1 className=" font-bold text-2xl">Flock history</h1>
        <p>
          Completed flocks are archived here. When your current flock is done,
          it will be added to this list.
        </p>

        {flocks.map((flock) => (
          <div
            key={flock._id}
            className=" px-4 py-4 my-4 rounded-2xl bg-white border border-gray-300 text-start"
          >
            <h2>{flock.batchID}</h2>
            <p>
              {flock.breed}{" "}
              <span> {new Date(flock.createdAt).toLocaleDateString()}</span> →{" "}
              <span>
                {" "}
                {flock.completedAt
                  ? new Date(flock.completedAt).toLocaleDateString()
                  : "N/A"}{" "}
              </span>{" "}
            </p>

            <div className=" flex justify-between">
              <span className=" block">
                <p className=" text-gray-400">Initial birds</p>
                <p> {flock.numberOfBirds}</p>
              </span>

              <span className=" block">
                <p className=" text-gray-400">Final birds</p>
                <p> {flock.finalSummary.finalBirdCount}</p>
              </span>
            </div>

            {/* <div className=" flex justify-between">
              <span className=" block">
                <p className=" text-gray-400">Eggs produced</p>
                <p>{flock.finalSummary.totalEggsProduced}</p>
              </span>

              <span className=" block">
                <p className=" text-gray-400">Total Egg Sold </p>
                <p> {flock.finalSummary.totalEggsSold}</p>
              </span>
            </div> */}

            {/* <div className=" px-4 py-4 rounded-2xl bg-gray-200 border border-gray-500 mt-6">
              <h2>Expenses breakdown</h2>

              <div className=" flex justify-between">
                <p>Day-old chicks</p>
                <p> {flock.initialCost}</p>
              </div>
              <div className=" flex justify-between">
                <p>Feed</p>
                <p>₦{summary?.financialBreakdown?.feedCost?.toLocaleString() ?? "0"}</p>
              </div>
              <div className=" flex justify-between">
                <p>Vaccination</p>
                <p>₦{flock.finalSummary.}</p>
              </div>
              <div className=" flex justify-between">
                <p>Medication</p>
                <p>₦150,000</p>
              </div>
              <div className=" flex justify-between border-t border-gray-100">
                <p>Total</p>
                <p>₦7,550,000</p>
              </div>
            </div> */}

            <div className=" px-4 py-4 rounded-2xl bg-gray-200 border border-gray-500 mt-6 flex flex-col gap-5 md:flex-row  md:justify-between">
              <span>
                <p>Total Expenses</p>
                <p>₦ {flock.finalSummary.totalExpenses}</p>
              </span>
              <span>
                <p>Revenue</p>
                <p>₦ {flock.finalSummary.totalRevenue}</p>
              </span>
              <span>
                <p>ROI</p>₦ {flock.finalSummary.roi.toLocaleString() ?? ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
