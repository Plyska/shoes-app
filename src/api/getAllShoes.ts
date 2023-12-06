import axios from 'axios';
import { KEY } from '../constants';

const URL = `https://crudcrud.com/api/${KEY}/shoes`;

export const getAllShoes = async (): Promise<any> => {
  const result = await axios.get(URL);
  return result?.data || [];
};
