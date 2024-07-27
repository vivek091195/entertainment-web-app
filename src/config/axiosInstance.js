import axios from "axios";
import { BASE_URL } from "./routes";

const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { apiInstance };
