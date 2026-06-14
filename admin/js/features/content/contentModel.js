import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;

export const getContent = async () => {
  const res = await axios.get(`${API_URL}/content`);

  return res.data.data.data;
};

export const createContent = async formData => {

  return await axios.post(
    `${API_URL}/content`,
    formData
  );
};

export const updateContent = async (
  id,
  formData
) => {

  return await axios.patch(
    `${API_URL}/content/${id}`,
    formData
  );
};

export const deleteContent = async id => {
  return await axios.delete(`${API_URL}/content/${id}`);
};