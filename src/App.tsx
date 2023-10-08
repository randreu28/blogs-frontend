import AuthForm from "./components/AuthForm";
import BlogList from "./components/BlogList";
import NewBlogForm from "./components/NewBlogForm";
import useAuth from "./lib/hooks/useAuth";

export default function App() {
  const user = useAuth();

  function logOut() {
    window.localStorage.removeItem("user");
    window.location.reload();
  }

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
      <div className="py-5 text-sm text-gray-500 md:float-right md:text-right">
        <p>
          Signed in as <b>{user.name}</b>
        </p>
        <button onClick={logOut} className="underline">
          Log out
        </button>
      </div>
      <NewBlogForm />
      <BlogList />
    </div>
  );
}
