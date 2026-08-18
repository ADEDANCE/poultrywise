import { FaPlus } from "react-icons/fa";
import Button from "../components/Button";
import DashboardCard from "../components/DashboardCard";
import { LuBird } from "react-icons/lu";
import { useState, useEffect } from "react";
import type { Flock } from "../types/flock";
import { getActiveFlock } from "../services/flockService";
import { getDashboardSummary } from "../services/dashboardService";
import type { DashboardSummary } from "../services/dashboardService";
import LoadingOverlay from "../components/LoadingOverlay";

const Dashboard = () => {
  const [flock, setFlock] = useState<Flock | null>(null);
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [flockData, summaryData] = await Promise.all([
          getActiveFlock(),
          getDashboardSummary(),
        ]);

        setFlock(flockData);
        setSummary(summaryData);
      } catch (error: any) {
        console.error("Failed to load dashboard:", error);

        setError(
          error.response?.data?.message || "Failed to load your dashboard",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (isLoading) {
    return <LoadingOverlay message="Loading your flock" />;
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className=" w-full px-8 py-7 bg-gray-200">
      <div className=" text-center">
        <div className=" bg-green-800 text-white px-4 py-4 rounded-2xl flex flex-col items-start ">
          <p className=" text-gray-300 font-bold text-xl">Current Flock</p>

          <div className=" flex justify-between w-full">
            <p className="text-3xl">
              {flock?.batchID} . <span>Day {summary?.birdAgeDays ?? 0}</span>
            </p>

            <Button className=" hidden md:block bg-orange-500 text-white">
              <span className=" flex gap-2 items-center justify-center">
                <FaPlus />
                <p>Add Today's Record</p>
              </span>
            </Button>
          </div>

          <p>
            Stage: <span>{flock?.currentStage}</span>
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
            value={`${summary?.birdsAlive ?? 0}`}
            description={`${summary?.totalMortality ?? 0} deaths total`}
          />
          <DashboardCard
            title="Flock Age
"
            icon={<LuBird />}
            value={`Day ${summary?.birdAgeDays ?? 0}`}
            description={`${summary?.birdAgeWeeks ?? 0} weeks old`}
          />
        </div>

        <div className=" flex justify-between gap-7  mt-4 text-start">
          <DashboardCard
            title="Total Expenses"
            icon={<LuBird />}
            value={`₦${summary?.totalExpenses?.toLocaleString() ?? "0"}`}
            description={`${summary?.status}`}
          />
          <DashboardCard
            title="Total Revenue"
            icon={<LuBird />}
            value={`₦${summary?.totalRevenue?.toLocaleString() ?? "0"}`}
            description={summary?.status ?? "No records"}
          />
        </div>

        <div className=" w-full border bg-white border-gray-400 px-4 py-4 rounded-2xl mt-12">
          <h3 className=" font-semibold">Financial Summary</h3>
          <p className=" text-gray-600">
            Cumulative across the full flock cycle.{" "}
          </p>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Initial Chicks</p>
            <p>₦{flock?.initialCost?.toLocaleString() ?? "0"}</p>
          </div>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Feed</p>
            <p>
              ₦{summary?.financialBreakdown?.feedCost?.toLocaleString() ?? "0"}
            </p>
          </div>
          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Drugs</p>
            <p>
              ₦
              {summary?.financialBreakdown?.medicationCost?.toLocaleString() ??
                "0"}
            </p>
          </div>
          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Vacination</p>
            <p>
              ₦
              {summary?.financialBreakdown?.vaccinationCost?.toLocaleString() ??
                "0"}
            </p>
          </div>

          <div className=" flex justify-between border-b border-gray-400">
            <p className=" text-gray-400">Egg sold</p>
            <p>
              ₦
              {summary?.financialBreakdown?.eggRevenue?.toLocaleString() ?? "0"}
            </p>
          </div>

          <div className=" flex justify-between border-b border-gray-400 ">
            <p className=" text-gray-400">Total Revenue</p>
            <p>₦{summary?.totalRevenue?.toLocaleString() ?? "0"}</p>
          </div>

          <div className=" flex justify-between  ">
            <p className=" text-gray-400">ROI</p>
            <p>{summary?.roi ?? 0}%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
