import axios from "axios";
import { DrawerForm } from "../types";
import { KEY } from "../constants";

const URL = `https://crudcrud.com/api/${KEY}/shoes`;

export const addNewShoes = async (shoes: DrawerForm) => {
  try {
    await axios.post(URL, shoes);
  } catch (e) {
    console.log(e);
  }
};
