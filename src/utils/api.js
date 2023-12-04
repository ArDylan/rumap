import axios from "axios"

export const baseURL = "http://192.168.137.92:8000";

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
  timeoutErrorMessage: "Request to server timeout"
});

export const formatAxiosError = (error) => {
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.errors) {
    return error.response.data.errors[0].message;
  }
  if (error?.response?.data) {
    return error.response.data;
  }
  if (error?.message) {
    return error.message;
  }
  return "Please try again";
};
