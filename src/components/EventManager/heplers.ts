import { IEvent } from "./types";

export const getNewEvent = (title?: string, quantity?: number): IEvent => ({
  title: title || `Новый эвент ${quantity || +new Date()}`,
  time: new Date().toString(),
  isRead: false,
});
