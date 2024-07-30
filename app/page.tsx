import SocialLogins from "@/components/SocialLogins";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFacebook, FaGoogle } from "react-icons/fa";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
