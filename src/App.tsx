import Blog from "./components/Blog";
import Error from "./components/Error";
import Spinner from "./components/Spinner";
import useApi from "./hooks/useApi";
import { BlogType } from "./types";

export default function App() {
  const { data: blogs, error, isLoading } = useApi<BlogType>("/blogs");

  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl">Blogs</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
