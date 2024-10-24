import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginWithEmailAsync, registerWithEmailAsync } from "./services"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import { defaultMessageObj } from "../../utils/hooks"

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async () => {
    return true
  }
)

export const loginAdminByEmailAction = createAsyncThunk(
  "auth/loginByEmail",
  async (loginRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      console.log("----------");
      const response = await loginWithEmailAsync(loginRequest)
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

export const registerAdminByEmailAction = createAsyncThunk(
  "auth/registerByEmail",
  async (registerRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      console.log("----------");
      const response = await registerWithEmailAsync(registerRequest)
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
