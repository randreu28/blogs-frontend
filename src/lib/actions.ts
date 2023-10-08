import axios from "axios";
import { AuthPayload } from "./types";

export function getJsonWebToken(username: string, password: string) {
  return axios.post<AuthPayload>(import.meta.env.VITE_API_URL + "/login", {
    username,
    password,
  });
}
