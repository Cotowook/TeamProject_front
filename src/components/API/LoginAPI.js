import axios from "axios";

const API_URL = "http://localhost:8080";
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const signup = async (formData) => {
  try {
    const response = await api.post("/api/members/new", formData);
    return response.data;
  } catch (error) {
    throw new Error("회원가입에 실패하였습니다.");
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/api/members/login", credentials);
    const token = response.data.token;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw new Error("로그인에 실패하였습니다.");
  }
};