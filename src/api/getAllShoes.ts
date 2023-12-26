import axios from 'axios';
import { instance } from '../config/axios';

const URL = `https://shoes-app-back.vercel.app/all-shoes`;

export const getAllShoes = async (): Promise<any> => {
  //const result = await axios.get(URL);
  const result = await instance.get("")
  return result?.data || [];
};
