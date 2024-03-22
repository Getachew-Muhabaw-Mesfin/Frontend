import axiosInstance from "./axiosInstance";

export const getAllCEO = async () => {
  const getAll = await axiosInstance.get("/ceo");
  return getAll.data;
};

export const getChiefs = async () => {
  const getAll = await axiosInstance.get("/chiefs");
  return getAll.data;
};

export const getDepartments = async () => {
  const getAll = await axiosInstance.get("/departments");
  return getAll.data;
};
