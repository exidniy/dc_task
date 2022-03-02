import { RootState } from "../../store";

export const EventsSelector = (state: RootState) => state.events.events;
export const UnreadEventsSelector = (state: RootState) =>
  state.events.events.filter((event) => !event.isRead);
export const ShowEventsSelector = (state: RootState) => state.events.showEvents;
