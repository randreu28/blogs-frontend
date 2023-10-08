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

export function updateBlog(
  updatedBlog: {
    id: string;
    title: string;
    author: string;
    url: string;
    likes: number;
  },
  token: string,
) {
  return axios.put<BlogType>(
    import.meta.env.VITE_API_URL + "/blogs/" + updatedBlog.id,
    updatedBlog,
    { headers: { Authorization: `Bearer ${token}` } },
  );
}

export function deleteBlog(blogId: string, token: string) {
  return axios.delete<BlogType>(
    import.meta.env.VITE_API_URL + "/blogs/" + blogId,
    { headers: { Authorization: `Bearer ${token}` } },
  );
}
