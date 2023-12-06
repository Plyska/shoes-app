import axios from "axios";
import { DrawerForm } from "../types";
import { KEY } from "../constants";

export const deleteShoes = async (shoesId: string, shoes: DrawerForm): Promise<any> => {
  const URL = `https://crudcrud.com/api/${KEY}/shoes/${shoesId}`;
  await axios.delete(URL);
};
