import api from './axios';

export const getDonations = async () => {
  const response = await api.get('/donations');
  return response.data;
};

export const createDonation = async (payload: { user_id: number; amount: number; date: string }) => {
  const response = await api.post('/donations', payload);
  return response.data;
};

export const updateDonation = async (id: number, payload: { user_id?: number; amount?: number; date?: string }) => {
  const response = await api.put(`/donations/${id}`, payload);
  return response.data;
};

export const deleteDonation = async (id: number) => {
  const response = await api.delete(`/donations/${id}`);
  return response.data;
};
