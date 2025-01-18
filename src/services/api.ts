import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const fetchProductById = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/products/${id}`);
  return response.data;
};

export const fetchReviewsByProductId = async (productId: string) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}/reviews`);
  return response.data;
};

export const fetchUserAccount = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};

export const fetchPersonalizedRecommendations = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}/recommendations`);
  return response.data;
};