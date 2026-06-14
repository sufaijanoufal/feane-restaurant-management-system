import { API_URL }
  from '../../config.js';

export const getMenus =
  async (
    page = 1,
    search = ''
  ) => {

    const res =
      await axios.get(

`${API_URL}/menu?page=${page}&limit=5&search=${search}`

      );

    return res.data;
  };

export const createMenu =
  async formData => {

    return await axios.post(
      `${API_URL}/menu`,
      formData
    );
  };

export const updateMenu =
  async (id, formData) => {

    return await axios.patch(
      `${API_URL}/menu/${id}`,
      formData
    );
  };

export const deleteMenu =
  async id => {

    return await axios.delete(
      `${API_URL}/menu/${id}`
    );
  };

export const getCategories =
  async () => {

    const res =
      await axios.get(
        `${API_URL}/category`
      );

    return res.data.data.data;
  };
 