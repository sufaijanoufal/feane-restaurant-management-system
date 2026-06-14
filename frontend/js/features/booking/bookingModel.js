import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;

export const createBooking = async bookingData => {

  const res = await axios.post(
    `${API_URL}/booking`,
    bookingData
  );

  return res.data;
};