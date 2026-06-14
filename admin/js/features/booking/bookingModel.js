import { API_URL }
  from '../../config.js';

axios.defaults.withCredentials = true;
export const getBooking =
  async () => {

    const res =
      await axios.get(
        `${API_URL}/booking`
      );

    return res.data.data.data;
  };

export const updateBooking =
  async (id, data) => {

    return await axios.patch(
      `${API_URL}/booking/${id}`,
      data
    );
  };