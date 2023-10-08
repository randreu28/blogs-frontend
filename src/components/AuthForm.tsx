import { useState } from "react";

type FormContent = {
  username: string;
  password: string;
};

export default function AuthForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //...
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
      <button className="rounded bg-blue-300 px-3 py-2" type="submit">
        Login
      </button>
    </form>
  );
}
