"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "./ui/button";

interface ILogoutProps {
  full?: boolean;
}

const Logout = ({ full }: ILogoutProps) => {
  return (
    <Button className={`${full && "w-full"}`}>
      <LogoutLink>Logout</LogoutLink>
    </Button>
  );
};

export default Logout;
