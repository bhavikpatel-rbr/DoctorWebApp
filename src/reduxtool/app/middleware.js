import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginWithEmailAsync  } from "./services"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import { defaultMessageObj } from "../../utils/hooks"
import { getAllUserAsync } from "./service"


export const getAllUserAction = createAsyncThunk(
  "auth/getAllUser",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      console.log("----------");
      const response = await getAllUserAsync()
      if (response?.data?.isSuccess) {
        dispatch(hideLoader())
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)
