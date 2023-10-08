import AuthForm from "./components/AuthForm";
import BlogList from "./components/BlogList";
import useAuth from "./hooks/useAuth";

export default function App() {
  const user = useAuth();

  if (!user) {
    return (
      <div className="p-5">
        <h1 className="py-3 text-center text-3xl">Log in</h1>
        <AuthForm />
      </div>
    );
  }
  return (
    <div className="p-5">
      <h1 className="py-3 text-center text-3xl">Blogs</h1>
      <BlogList />
    </div>
  );
}
