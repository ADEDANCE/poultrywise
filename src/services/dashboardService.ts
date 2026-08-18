import api from "./api";

export interface DashboardSummary {
  totalExpenses: number;
  totalRevenue: number;
  netProfit: number;
  roi: number;
  status: string;

  financialBreakdown: {
    initialCost: number;
    feedCost: number;
    medicationCost: number;
    vaccinationCost: number;
    eggRevenue: number;
  };

  birdsAlive: number;
  totalMortality: number;
  mortalityRate: number;

  birdAgeDays: number;
  birdAgeWeeks: number;

  currentStage: string;
  recommendedStage: string;
  stageChangeRequired: boolean;
  stageMessage: string;
}

export const getDashboardSummary = async (): Promise<DashboardSummary> => {
  const response = await api.get("/api/dashboard/summary");

  return response.data;
};
