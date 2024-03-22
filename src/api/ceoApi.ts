import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

// Define interfaces for response data
interface CEO {
  companyName: string;
  ceoName: string;
  name: string;
  description: string;
}


// API functions
export const getAllCeo = async (): Promise<AxiosResponse<CEO[]>> => {
  return axiosInstance.get("/ceo");
};

export const getSingleCeo = async (id: string): Promise<AxiosResponse<CEO>> => {
  return axiosInstance.get(`/ceo/${id}`);
};

export const createCeo = async (ceoDetails: CEO): Promise<AxiosResponse<CEO>> => {
  return axiosInstance.post("/ceo", ceoDetails);
};

export const updateCeo = async (id: string, ceoDetails: CEO): Promise<AxiosResponse<CEO>> => {
  return axiosInstance.patch(`/ceo/${id}`, ceoDetails);
};

export const deleteCeo = async (id: string): Promise<AxiosResponse<void>> => {
  return axiosInstance.delete(`/ceo/${id}`);
};
