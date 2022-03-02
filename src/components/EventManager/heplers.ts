import { IEvent } from "./types";
import dayjs from "dayjs";

export const getNewEvent = (title?: string): IEvent => ({
  title: title || `Новый эвент ${Date.now()}`,
  time: dayjs().toISOString(),
  isRead: false,
});
