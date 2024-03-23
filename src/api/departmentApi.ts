import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

// Define interfaces for response data
interface Department {
  id: number;
  name: string;
  description: string;
  chiefId: number;
}

// API functions
export const getAllDepartments = async (): Promise<
  AxiosResponse<Department[]>
> => {
  return axiosInstance.get("/departments");
};

export const getSingleDepartment = async (
  id: number
): Promise<AxiosResponse<Department>> => {
  return axiosInstance.get(`/departments/${id}`);
};

export const createDepartment = async (
  departmentDetails: Department
): Promise<AxiosResponse<Department>> => {
  return axiosInstance.post("/departments", departmentDetails);
};

export const updateDepartment = async (
  id: number,
  departmentDetails: Department
): Promise<AxiosResponse<Department>> => {
  return axiosInstance.patch(`/departments/${id}`, departmentDetails);
};

export const deleteDepartment = async (
  id: number
): Promise<AxiosResponse<void>> => {
  return axiosInstance.delete(`/departments/${id}`);
};
