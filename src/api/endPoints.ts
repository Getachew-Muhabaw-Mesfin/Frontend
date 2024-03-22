import axiosInstance from "./axiosInstance";

// get all the request list

const id = null; // Declare the variable 'id' before using it

const requests = {
  //127.0.0.1:3000/api/v1/ceo
  getAllCeo: "/ceo",
  getSingleCeo: `/ceo/:${id}`,
  createCeo: "/ceo",
  updateCeo: `/ceo/:${id}`,
  deleteCeo: `/ceo/:${id}`,
  // 127.0.0.1:3000/api/v1/chiefs
  getAllChief: "/chiefs",
  getSingleChief: `/chiefs/:${id}`,
  createChief: "/chiefs",
  updateChief: `/chiefs/:${id}`,
  deleteChief: `/chiefs/:${id}`,
  //127.0.0.1:3000/api/v1/departments
  getAllDepartment: "/departments",
  getSingleDepartment: `/departments/:${id}`,
  createDepartment: "/departments",
  updateDepartment: `/departments/:${id}`,
  deleteDepartment: `/departments/:${id}`,
};

export default requests;
