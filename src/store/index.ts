import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { settingsReducer } from "../components/EventManager/reducer";

const reducer = combineReducers({
  events: settingsReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
