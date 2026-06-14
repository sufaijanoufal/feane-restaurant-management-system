import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;

export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/category`);

  return res.data.data.data;
};

export const createCategory = async categoryData => {
   console.log(categoryData);
  return await axios.post(
    `${API_URL}/category`,
    categoryData
  );
};

export const updateCategory = async (
  id,
  categoryData
) => {
  return await axios.patch(
    `${API_URL}/category/${id}`,
    categoryData
  );
};

export const deleteCategory = async id => {
  return await axios.delete(`${API_URL}/category/${id}`);
};