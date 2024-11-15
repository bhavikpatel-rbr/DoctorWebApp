import { createSlice } from "@reduxjs/toolkit";
import {
  allClinicsUsersAction,
  allDoctorsUsersAction,
  allPatientsUsersAction,
  allStaffUsersAction,
  getAllUserAction,
  registerClinicAction,
  registerDoctorAction,
  registerPatientAction,
  registerStaffAction,
} from "./middleware";

const INITIAL_STATE = {
  users: null,
  patientList: null,
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
    builder.addCase(allClinicsUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(allDoctorsUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(allStaffUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
    }));
    builder.addCase(allPatientsUsersAction.fulfilled, (state, { payload }) => ({
      ...state,
      patientList: payload?.data,
    }));
  },
});

export const appSelector = (state) => state?.App;

export default appSlice.reducer;
