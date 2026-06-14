import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;

export const getOffer = async () => {
  const res = await axios.get(`${API_URL}/offers`);

  return res.data.data.data;
};

export const createOffer = async formData => {

  return await axios.post(
    `${API_URL}/offers`,
    formData
  );
};

export const updateOffer = async (
  id,
  formData
) => {

  return await axios.patch(
    `${API_URL}/offers/${id}`,
    formData
  );
};

export const deleteOffer = async id => {
  return await axios.delete(`${API_URL}/offers/${id}`);
};