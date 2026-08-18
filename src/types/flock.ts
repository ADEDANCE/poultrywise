export interface FinalSummary {
  totalExpenses: number;
  totalRevenue: number;
  netProfit: number;
  roi: number;
  totalMortality: number;
  mortalityRate: number;
  finalBirdCount: number;
  totalEggsSold: number;
}

export interface Flock {
  _id: string;
  user: string;
  batchID: string;
  numberOfBirds: number;
  breed: string;
  dateReceived: string;
  supplier?: string;
  currentStage: string;
  initialCost: number;
  status: string;
  completedAt: string | null;
  createdAt: string;
  updatedAt: string;
  finalSummary: FinalSummary;
}