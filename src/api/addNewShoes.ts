import axios from "axios";
import { DrawerForm } from "../types";
import { KEY } from "../constants";

const URL = `https://crudcrud.com/api/${KEY}/shoes`;

export const addNewShoes = async (shoes: DrawerForm): Promise<any> => {
  await axios.post(URL, shoes);
};
