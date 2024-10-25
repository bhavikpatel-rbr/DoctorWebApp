import { createSlice } from "@reduxjs/toolkit";
import { getAllUserAction, registerClinicAction, registerDoctorAction, registerPatientAction, registerStaffAction } from "./middleware";

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
    builder.addCase(registerClinicAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(registerStaffAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(registerPatientAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
  },
});

export const appSelector = (state) => state?.App;

export default appSlice.reducer;
