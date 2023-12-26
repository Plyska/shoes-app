import axios from "axios";

export const instance = axios.create({
  baseURL: "https://shoes-app-back.vercel.app/all-shoes/",
  timeout: 10000
  // here we can config such parameters as headers, etc
});
