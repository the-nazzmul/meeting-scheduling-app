"use client";

import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavRight from "./NavRight";

const Navbar = () => {
  const pathname = usePathname();
  const { user, isLoading } = useKindeBrowserClient();
  return (
    <nav className="p-4 shadow-md backdrop-blur">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2 lg:w-fit">
          <Image
            src="/logo.png"
            width={200}
            height={100}
            alt="logo"
            className="rounded-xl"
          />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-4">
            <li>
              <Link
                href="/"
                className={`font-semibold hover:border-b-2 hover:border-b-gray-500 hover:text-gray-500 p-2  ${
                  pathname === "/" && "border-b-2 border-black"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`font-semibold hover:border-b-2 hover:border-b-gray-500 hover:text-gray-500 p-2 ${
                  pathname === "/about" && "border-b-2 border-black"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`font-semibold hover:border-b-2 hover:border-b-gray-500 hover:text-gray-500 p-2 ${
                  pathname === "/contact" && "border-b-2 border-black"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <NavRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
