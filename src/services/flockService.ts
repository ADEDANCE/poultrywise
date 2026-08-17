import api from "./api";

export interface CreateFlockData {
  batchID: string;
  numberOfBirds: number;
  breed: string;
  dateReceived: string;
  supplier?: string;
  initialCost: number;
}

export const createFlock = async (flockData: CreateFlockData) => {
  const response = await api.post("/api/flocks", flockData);

  return response.data;
};