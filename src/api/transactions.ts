import api from './axios';

export const getTransactions = async () => {
  const response = await api.get('/transactions');
  return response.data;
};

export const createTransaction = async (payload: { user_id: number; amount: number; type: string; note?: string }) => {
  const response = await api.post('/transactions', payload);
  return response.data;
};

export const updateTransaction = async (id: number, payload: { user_id?: number; amount?: number; type?: string; note?: string }) => {
  const response = await api.put(`/transactions/${id}`, payload);
  return response.data;
};

export const deleteTransaction = async (id: number) => {
  const response = await api.delete(`/transactions/${id}`);
  return response.data;
};
