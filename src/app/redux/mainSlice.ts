import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const pageName = useSelector((state: RootState) => state.main.value);
// const dispatch = useDispatch();

export interface MainSliceInterface {
  value: string;
  isMenuOpen: boolean;
}

const initialState: MainSliceInterface = {
  value: "Home",
  isMenuOpen: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { changePage, openMenu, closeMenu } = mainSlice.actions;
export default mainSlice.reducer;
