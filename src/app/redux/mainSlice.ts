import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MainSliceInterface {
  value: string;
}

const initialState: MainSliceInterface = {
  value: "home",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changePage } = mainSlice.actions;
export default mainSlice.reducer;
