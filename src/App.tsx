import Blog from "./components/Blog";
import useApi from "./hooks/useApi";
import { BlogType } from "./types";

export default function App() {
  const { data: blogs, error, isLoading } = useApi<BlogType>("/blogs");

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    <p>loading</p>;
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
