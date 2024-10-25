import { createAsyncThunk } from "@reduxjs/toolkit";

import { hideLoader, showLoader, showMessage } from "../lem/lemSlice";
import { defaultMessageObj } from "../../utils/hooks";
import { getAllUserAsync, registerDoctorAsync } from "./service";

export const getAllUserAction = createAsyncThunk(
  "auth/getAllUser",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await getAllUserAsync();
      if (response?.data) {
        dispatch(hideLoader());
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);

export const registerDoctorAction = createAsyncThunk(
  "auth/registerDoctor",
  async (payload, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }));
    try {
      const response = await registerDoctorAsync(payload);
      if (response?.data) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          })
        );
        return response?.data;
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      );
      return rejectWithValue(response);
    } catch (error) {
      dispatch(hideLoader());
      return rejectWithValue(error);
    }
  }
);
