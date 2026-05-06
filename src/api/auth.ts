import api from './axios';

type LoginData = { email: string; password: string };

type RegisterData = { name: string; email: string; password: string; password_confirmation: string };

export const login = async (data: LoginData) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const fetchCurrentUser = async () => {
  const response = await api.get('/auth/user');
  return response.data;
};
