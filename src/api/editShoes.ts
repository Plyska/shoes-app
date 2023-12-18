import axios from "axios";
import { DrawerForm } from "../types";
import { KEY } from "../constants";

export const editShoes = async (
  shoes: DrawerForm,
  shoesId: string
): Promise<any> => {
  const URL = `https://crudcrud.com/api/${KEY}/shoes/${shoesId}`;
  console.log(shoesId, shoes, "API");
  await fetch(URL, {
    method: "PUT",
    body: JSON.stringify(shoes),
    mode: "no-cors",
    credentials: "include",
    headers:
      typeof Headers !== "undefined"
        ? new Headers({ "content-type": "application/x-www-form-urlencoded" })
        : { "content-type": "application/x-www-form-urlencoded" },
  });
};
