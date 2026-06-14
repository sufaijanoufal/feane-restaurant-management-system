import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;
export const getAbout = async () => {
  const res = await axios.get(`${API_URL}/content/type/about`);
return res.data.data.data;
};