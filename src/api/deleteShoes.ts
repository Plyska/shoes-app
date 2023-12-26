import axios from "axios";

export const deleteShoes = async (shoesId: string): Promise<any> => {
  const URL = `https://shoes-app-back.vercel.app/all-shoes/${shoesId}`;
  await axios.delete(URL);
};
