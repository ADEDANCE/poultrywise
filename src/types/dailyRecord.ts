export interface DailyRecord {
  _id: string;
  user: string;
  flock: string;
  date: string;

  mortality: number;

  feedBagsUsed: number;
  feedCost: number;

  medication: string;
  medicationCost: number;

  vaccination: string;
  vaccinationCost: number;

  electricityCost: number;
  labourCost: number;
  otherCost: number;
  otherCostDescription: string;

  cratesCollected: number;
  extraEggsCollected: number;
  brokenEggs: number;

  cratesSold: number;
  extraEggsSold: number;

  pricePerCrate: number;
  pricePerEgg: number;

  notes: string;

  createdAt: string;
  updatedAt: string;
}

export interface DailyRecordFormData {
  date: string;

  mortality: number | "";

  feedBagsUsed: number | "";
  feedCost: number | "";

  medication: string;
  medicationCost: number | "";

  vaccination: string;
  vaccinationCost: number | "";

  cratesCollected: number | "";
  extraEggsCollected: number | "";
  brokenEggs: number | "";

  cratesSold: number | "";
  extraEggsSold: number | "";

  pricePerCrate: number | "";
  pricePerEgg: number | "";

  notes: string;
}
