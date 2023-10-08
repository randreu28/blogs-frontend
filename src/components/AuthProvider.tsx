import React, { useEffect, useState } from "react";
import type { AuthPayload } from "../types";

export const AuthContext = React.createContext<AuthPayload | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<AuthPayload>();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("user");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON) as AuthPayload;
      setUser(user);
    }
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
