import Blog from "./Blog";
import Error from "./Error";
import Spinner from "./Spinner";
import useApi from "../hooks/useApi";
import { BlogType } from "../types";

export default function BlogList() {
  const { data: blogs, error, isLoading } = useApi<BlogType>("/blogs");

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </>
  );
}
