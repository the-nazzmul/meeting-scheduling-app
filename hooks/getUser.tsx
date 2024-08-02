"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const GetUser = () => {
  const user = useContext(AuthContext);
  return user;
};

export default GetUser;
