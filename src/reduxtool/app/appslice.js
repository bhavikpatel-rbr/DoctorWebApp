import { createSlice } from "@reduxjs/toolkit";
import { getAllUserAction, registerDoctorAction } from "./middleware";

const INITIAL_STATE = {
  users: null,
};

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserAction.fulfilled, (state, { payload }) => ({
      ...state,
      users: payload?.users,
    }));
    builder.addCase(registerDoctorAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
  },
});

export const appSelector = (state) => state?.App;

export default appSlice.reducer;
