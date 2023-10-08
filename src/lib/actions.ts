import axios from "axios";
import { AuthPayload, BlogType } from "./types";

export function getJsonWebToken(username: string, password: string) {
  return axios.post<AuthPayload>(import.meta.env.VITE_API_URL + "/login", {
    username,
    password,
  });
}

export function postNewBlog(
  newBlog: { title: string; author: string; url: string },
  token: string,
) {
  return axios.post<BlogType>(
    import.meta.env.VITE_API_URL + "/blogs",
    newBlog,
    { headers: { Authorization: `Bearer ${token}` } },
  );
}
