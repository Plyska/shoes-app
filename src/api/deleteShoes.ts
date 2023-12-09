import axios from "axios";
import { KEY } from "../constants";

export const deleteShoes = async (shoesId: string): Promise<any> => {
  const URL = `https://crudcrud.com/api/${KEY}/shoes/${shoesId}`;
  await axios.delete(URL);
};
