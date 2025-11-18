import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Page = "home" | "data";

interface PageState {
  currentPage: Page;
}

const initialState: PageState = {
  currentPage: "home",
};

export const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<Page>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;
