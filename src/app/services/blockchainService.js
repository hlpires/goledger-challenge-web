import apiClient from './apiClient';


export const getChainInfo = async (channelName) => {
  const response = await apiClient.get(`/${channelName}/qscc/getChainInfo`);
  return response.data;
};


export const getBlockByNumber = async (channelName, blockNumber) => {
  const response = await apiClient.get(`/${channelName}/qscc/getBlockByNumber`, {
    params: { blockNumber },
  });
  return response.data;
};


export const getTransactionByID = async (channelName, txID) => {
  const response = await apiClient.get(`/${channelName}/qscc/getTransactionByID`, {
    params: { txID },
  });
  return response.data;
};
