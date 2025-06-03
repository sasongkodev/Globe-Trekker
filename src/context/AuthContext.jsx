import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (email, password) => {
    // Simulasi login sukses
    if (email === "user@example.com" && password === "password123") {
      const fakeToken = "fake-jwt-token";
      localStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      setUser({ email });
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const register = async (email, password) => {
    console.log("Registering user:", email);
    const fakeToken = "fake-jwt-token";
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
