import apiClient from './apiClient';


export const getTransactions = async () => {
  const response = await apiClient.get('/query/getTx');
  return response.data;
};


export const getTransactionDetails = async (txName) => {
  const response = await apiClient.post('/query/getTx', { txName });
  return response.data;
};
