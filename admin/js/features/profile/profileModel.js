import { API_URL }
  from '../../config.js';

export const getMe =
  async () => {

    const res =
      await axios.get(
        `${API_URL}/users/me`
      );

    return res.data.data.data;
  };

export const updateMe =
  async formData => {

    return await axios.patch(
      `${API_URL}/users/updateMe`,
      formData
    );
  };

export const updatePassword =
  async data => {

    return await axios.patch(
      `${API_URL}/users/updateMyPassword`,
      data
    );
  };