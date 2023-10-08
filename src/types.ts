export type BlogType = {
  title: string;
  author: string;
  url: string;
  likes: number;
  user: {
    username: string;
    name: string;
    blogs: string[];
    id: string;
  };
  id: string;
};

export type UserType = {
  username: string;
  name: string;
  blogs: {
    title: string;
    author: string;
    url: string;
    likes: number;
    user: string;
    id: string;
  };
  id: string;
};

export type AuthPayload = {
  id: string;
  username: string;
  name: string;
  token: string;
};
