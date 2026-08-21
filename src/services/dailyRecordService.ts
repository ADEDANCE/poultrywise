import api from "./api";
import type { DailyRecord, DailyRecordFormData } from "../types/dailyRecord";

export const createDailyRecord = async (
  data: DailyRecordFormData,
): Promise<DailyRecord> => {
  const response = await api.post("/api/daily-records", data);

  return response.data.dailyRecord;
};
