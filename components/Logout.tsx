"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

const Logout = () => {
  return (
    <LogoutLink>
      <Button>Logout</Button>
    </LogoutLink>
  );
};

export default Logout;
