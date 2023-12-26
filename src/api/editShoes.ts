// @ts-nocheck
import axios from "axios";
import { DrawerForm } from "../types";

export const editShoes = async (
  shoes: DrawerForm,
  shoesId: string
): Promise<any> => {
  const URL = `https://shoes-app-back.vercel.app/all-shoes/${shoesId}`;
  delete shoes._id;
  await axios.put(URL, shoes)
};
