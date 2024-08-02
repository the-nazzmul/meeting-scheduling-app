"use client";

import {
  LoginLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import ClipLoader from "react-spinners/ClipLoader";
import UserDropdown from "./UserDropdown";
import { Button } from "./ui/button";

const NavRight = () => {
  const { user, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return <ClipLoader />;
  }

  if (user && !isLoading) {
    return <UserDropdown />;
  }

  if (!user) {
    return (
      <div className="hidden lg:flex gap-x-2">
        <LoginLink>
          <Button variant="outline">Login</Button>
        </LoginLink>
        <RegisterLink>
          <Button variant="default">Get Started</Button>
        </RegisterLink>
      </div>
    );
  }
};

export default NavRight;
