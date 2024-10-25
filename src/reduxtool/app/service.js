import axiosInstance, { isAxiosError } from "../../services/api";

export const getAllUserAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerDoctorAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerdoctor`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerClinicAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerclinic`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerStaffAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerstaff`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const registerPatientAsync = async (payload) => {
  try {
    const response = await axiosInstance.post(`/registerpatient`, payload);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allClinicsUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allclinicsusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allDoctorsUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/alldoctorsusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allStaffUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allstaffusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};

export const allPatientsUsersAsync = async () => {
  try {
    const response = await axiosInstance.get(`/allpatientsusers`);
    return response;
  } catch (err) {
    return isAxiosError(err);
  }
};
