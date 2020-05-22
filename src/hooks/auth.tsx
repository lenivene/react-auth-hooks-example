import React, { createContext, useState, useEffect } from "react";
import store from "store";

// Services
import * as AuthService from "../services/auth";

// Types
interface AuthHookData {
  authenticated: boolean;
  token: string;
  user: object | null;
  login: (email: String, password: String) => Promise<void>;
  logout(): void;
}

const AuthHook = createContext<AuthHookData>({} as AuthHookData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const authUser = store.get("@auth:user");
    const authToken = store.get("@auth:token");

    // Check is authentication
    if (authUser && authToken) {
      setUser(authUser);
    }
  }, []);

  async function login(email: String, password: String) {
    try {
      const response = await AuthService.login(email, password);
      const data = response.data;

      store.set("@auth:user", email);
      store.set("@auth:token", data.token);

      setUser(email);
    } catch (error) {
      if (error.response?.data) {
        alert(error.response.data.error);
      }
    }
  }

  function logout() {
    store.remove("@auth:user");
    store.remove("@auth:token");

    setUser(null);
  }

  return (
    <AuthHook.Provider
      value={{ authenticated: !!user, token: "", user, login, logout }}
    >
      {children}
    </AuthHook.Provider>
  );
};

export default AuthHook;
