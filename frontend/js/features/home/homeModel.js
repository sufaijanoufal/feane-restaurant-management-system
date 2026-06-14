const API_URL =
  'http://localhost:3000/api/v1';

export const getMenus =
  async () => {

    const res =
      await axios.get(
        `${API_URL}/menu?limit=100`
      );

    return res.data.data.data;
  };
  export const getCategories = async () => {
  const res = await axios.get(`${API_URL}/category`);
return res.data.data.data;
};
 export const getTestimonial = async () => {
  const res = await axios.get(`${API_URL}/testimonial`);
return res.data.data.data;
};
 export const getAbout = async () => {
  const res = await axios.get(`${API_URL}/content/type/about`);
return res.data.data.data;
};
export const getFooter = async () => {
  const res = await axios.get(`${API_URL}/content/type/footer`);
return res.data.data.data;
};
export const getOffer = async () => {
  const res = await axios.get(`${API_URL}/offers`);
return res.data.data.data;
};