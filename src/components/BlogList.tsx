import Blog from "./Blog";
import Error from "./Error";
import Spinner from "./Spinner";
import useResource from "../lib/hooks/useResource";
import { BlogType } from "../lib/types";

export default function BlogList() {
  const { data: blogs, error, isLoading } = useResource<BlogType>("/blogs");

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
