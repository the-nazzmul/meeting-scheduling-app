"use client"

import { useKindeAuth, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { user,isLoading } = useKindeBrowserClient();
  console.log(user);

  const value = {
    user,
    // isLoading,
    // isAuthenticated,
    // error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
