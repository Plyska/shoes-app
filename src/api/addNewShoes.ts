import axios from "axios";
import { DrawerForm } from "../types";

const URL = `https://shoes-app-back.vercel.app/all-shoes`;

export const addNewShoes = async (shoes: DrawerForm): Promise<any> => {
  await axios.post(URL, shoes);
};
