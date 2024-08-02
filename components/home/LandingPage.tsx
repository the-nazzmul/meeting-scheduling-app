"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import HeroWithUser from "./HeroWithUser";
import LoadingPage from "../Loading";
import HeroWithoutUser from "./HeroWithoutUser";

const LandingPage = () => {
  const { user, isLoading } = useKindeBrowserClient();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (user && !isLoading) {
    return <HeroWithUser />;
  }

  if (!user) {
    return <HeroWithoutUser />;
  }
};

export default LandingPage;
