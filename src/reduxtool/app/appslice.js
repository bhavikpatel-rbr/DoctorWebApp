import { createSlice } from "@reduxjs/toolkit"
import { getAllUserAction } from "./middleware"

const INITIAL_STATE = {
}

const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserAction.fulfilled, (state) => ({
      ...state,
    }))
  },
})

export const appSelector = (state) => state?.App

export default appSlice.reducer