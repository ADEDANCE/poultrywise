import api from "./api";
import type { Flock } from "../types/flock";

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

export const getActiveFlock = async (): Promise<Flock> => {
  const response = await api.get("/api/flocks");

  return response.data.flock;
};
