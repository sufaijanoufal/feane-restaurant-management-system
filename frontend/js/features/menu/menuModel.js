import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;
export const getMenus = async () => {
  const res = await axios.get(`${API_URL}/menu?limit=100`);
return res.data.data.data;
};
export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/category`);
return res.data.data.data;
};