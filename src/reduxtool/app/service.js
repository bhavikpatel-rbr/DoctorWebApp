import axiosInstance, { isAxiosError } from "../../services/api"

export const getAllUserAsync = async () => {
    try {
      const response = await axiosInstance.get(`/allusers`)
      return response
    } catch (err) {
      return isAxiosError(err)
    }
  }
  