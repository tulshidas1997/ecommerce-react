import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const registerUser = async (userData: { username: string; password: string; email: string }) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post(`${API_URL}/logout`);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/current-user`);
  return response.data;
};