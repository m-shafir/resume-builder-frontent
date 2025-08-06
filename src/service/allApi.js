import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const addResumeAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/resumes`, reqBody);
};

export const getResumeAPI = async () => {
  return await commonAPI("GET", `${serverURL}/resumes`, "");
};

export const deleteResumeAPI = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/resumes/${id}`, "");
};

export const getAResumeAPI = async (id) => {
  return await commonAPI("GET", `${serverURL}/resumes/${id}`, "");
};

// Update Rsume Api

export const UpdateResumeAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${serverURL}/resumes/${id}`, reqBody);
};
