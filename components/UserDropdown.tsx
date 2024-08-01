"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { ChevronDown, LayoutDashboardIcon, User } from "lucide-react";
import Image from "next/image";
import Logout from "./Logout";
import Link from "next/link";

const UserDropdown = () => {
  const { user } = useKindeBrowserClient();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <Image
            src={user?.picture || "/placeholder-avatar.png"}
            height={40}
            width={40}
            alt="user image"
            className="rounded-full border border-primary"
          />
          <ChevronDown size={24} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/user-profile" className="flex gap-2 items-center">
            <User />
            <p>Profile</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/dashboard/meeting-type"
            className="flex gap-2 items-center"
          >
            <LayoutDashboardIcon />
            <p>Dashboard</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          <Logout full />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
