import AuthProvider from "./components/AuthProvider";
import BlogList from "./components/BlogList";

export default function App() {
  return (
    <AuthProvider>
      <div className="p-5">
        <h1 className="text-center text-3xl">Blogs</h1>
        <BlogList />
      </div>
    </AuthProvider>
  );
}
