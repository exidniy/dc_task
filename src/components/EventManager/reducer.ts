import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { EventsState } from "./types";
import { IEvent } from "./types";

const initialState = {
  events: [],
  showEvents: false,
} as EventsState;

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<IEvent>) => {
      state.events.push(action.payload);
    },
    markAllEventsRead: (state) => {
      state.events = state.events.map((event) => ({
        ...event,
        isRead: true,
      }));
    },
    clearEvents: (state) => {
      state.events = [];
    },
    showEvents: (state, action: PayloadAction<boolean>) => {
      state.showEvents = action.payload;
    },
  },
});

export const settingsReducer = eventsSlice.reducer;
export const { addEvent, clearEvents, markAllEventsRead, showEvents } =
  eventsSlice.actions;
