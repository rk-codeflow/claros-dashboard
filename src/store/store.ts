import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slices/sidebarSlice";
import pageReducer from "../slices/pageSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
