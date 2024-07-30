"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="p-4 shadow-md bg-gradient-to-b from-gray-300 to-white border-b-2 border-gray-700">
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
        <div className="hidden lg:flex gap-x-2">
          <Button variant="outline">Login</Button>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
