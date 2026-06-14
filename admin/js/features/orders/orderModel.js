import { API_URL }
  from '../../config.js';

axios.defaults.withCredentials = true;
export const getOrders =
  async () => {

    const res =
      await axios.get(
        `${API_URL}/order`
      );

    return res.data.data.data;
  };

export const updateOrder =
  async (id, data) => {

    return await axios.patch(
      `${API_URL}/order/${id}`,
      data
    );
  };