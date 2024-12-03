import apiClient from './apiClient';

export const fetchArtists = async () => {
  const response = await apiClient.post('/query/search', {
    query: {
      selector: {
        '@assetType': 'artist',
      },
    },
  });
  return response.data;
};


export const createArtist = async (artistData) => {
  const response = await apiClient.post('/invoke/createAsset', {
    asset: {
      '@assetType': 'artist',
      ...artistData,
    },
  });
  return response.data;
};

export const createAsset = async (assetType, assetData) => {
  const response = await apiClient.post('/invoke/createAsset', {
    asset: {
      '@assetType': assetType,
      ...assetData,
    },
  });
  return response.data;
};


export const readAsset = async (key) => {
  const response = await apiClient.post('/query/readAsset', { key });
  return response.data;
};


export const updateAsset = async (assetData) => {
  const response = await apiClient.put('/invoke/updateAsset', { asset: assetData });
  return response.data;
};


export const deleteAsset = async (key) => {
  const response = await apiClient.delete('/invoke/deleteAsset', { data: { key } });
  return response.data;
};

// Buscar ativos com query
export const searchAssets = async (query) => {
  const response = await apiClient.post('/query/search', { query });
  return response.data;
};
