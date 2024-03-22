import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

// Define interfaces for response data
interface Chief {
  name: string;
  description: string;
  ceoId: number;
}

// API functions
export const getAllChiefs = async (): Promise<AxiosResponse<Chief[]>> => {
  return axiosInstance.get("/chiefs");
};

export const getSingleChief = async (
  id: number
): Promise<AxiosResponse<Chief>> => {
  return axiosInstance.get(`/chiefs/${id}`);
};

export const createChief = async (
  chiefDetails: Chief
): Promise<AxiosResponse<Chief>> => {
  return axiosInstance.post("/chiefs", chiefDetails);
};

export const updateChief = async (
  id: number,
  chiefDetails: Chief
): Promise<AxiosResponse<Chief>> => {
  return axiosInstance.patch(`/chiefs/${id}`, chiefDetails);
};

export const deleteChief = async (id: number): Promise<AxiosResponse<void>> => {
  return axiosInstance.delete(`/chiefs/${id}`);
};
