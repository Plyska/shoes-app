import axios from 'axios';

const URL = `https://shoes-app-back.vercel.app/all-shoes`;

export const getAllShoes = async (): Promise<any> => {
  const result = await axios.get(URL);
  return result?.data || [];
};
