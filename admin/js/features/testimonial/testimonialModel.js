import { API_URL } from '../../config.js';

axios.defaults.withCredentials = true;

export const getTestimonial = async () => {
  const res = await axios.get(`${API_URL}/testimonial`);

  return res.data.data.data;
};

export const createTestimonial = async formData => {

  return await axios.post(
    `${API_URL}/testimonial`,
    formData
  );
};

export const updateTestimonial = async (
  id,
  formData
) => {

  return await axios.patch(
    `${API_URL}/testimonial/${id}`,
    formData
  );
};

export const deleteTestimonial = async id => {
  return await axios.delete(`${API_URL}/testimonial/${id}`);
};