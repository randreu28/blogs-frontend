import { useEffect, useState } from "react";
import type { AuthPayload } from "../types";

export default function useAuth() {
  const [user, setUser] = useState<AuthPayload>();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("user");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON) as AuthPayload;
      setUser(user);
    }
  }, []);

  return user;
}
