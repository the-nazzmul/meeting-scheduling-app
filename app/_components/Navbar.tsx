import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
            className="border-2 border-white rounded-full"
          />
          <h1 className="text-accent text-4xl font-bold">Scheduly</h1>
        </div>
        <div></div>
        <div className="flex gap-x-2">
          <Button variant="outline">Login</Button>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
