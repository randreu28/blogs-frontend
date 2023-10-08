import { useState } from "react";
import { toast } from "sonner";
import { getJsonWebToken } from "../lib/actions";

export default function AuthForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = getJsonWebToken(username, password);

    toast.promise<Awaited<typeof res>>(res, {
      loading: "Loading...",
      success: ({ data: user }) => {
        window.localStorage.setItem("user", JSON.stringify(user));
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        return `Welcome, ${user.name}. Redirecting...`;
      },
      error: "Something when wrong. Please try again",
    });
  }

  return (
    <form
      className="w-fit space-y-3 rounded-xl bg-white p-3"
      onSubmit={handleLogin}
    >
      <div className="flex justify-between gap-3">
        <label>Username</label>
        <input
          className="rounded bg-gray-200"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="flex justify-between gap-3">
        <label>Password</label>
        <input
          className="rounded bg-gray-200"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button
        className="rounded bg-blue-300 px-3 py-2 disabled:bg-blue-100"
        type="submit"
        disabled={!username || !password}
      >
        Login
      </button>
    </form>
  );
}
