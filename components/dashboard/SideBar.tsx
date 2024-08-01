"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Briefcase, Calendar, Clock, Home, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menu = [
    {
      id: 1,
      name: "Meeting Type",
      path: "/dashboard/meeting-type",
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Schedule Meeting",
      path: "/dashboard/schedule-meeting",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Availability",
      path: "/dashboard/availability",
      icon: Clock,
    },
    {
      id: 4,
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
    {
      id: 5,
      name: "Home",
      path: "/",
      icon: Home,
    },
  ];

  const path = usePathname();

  return (
    <div>
      <Image
        src="/nazzly-logo-for-white.png"
        height={150}
        width={150}
        alt="logo"
        className="mx-auto"
      />
      <div className="mt-4">
        <Button
          className="w-full flex gap-2 text-lg rounded-full"
          variant="destructive"
        >
          <Plus /> Create
        </Button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {menu.map((item, index) => (
          <Button
            key={item.id}
            className={`w-full  ${
              item.path === path && "bg-accent border border-primary"
            }`}
            variant="ghost"
          >
            <Link
              href={item.path}
              className={`w-full flex gap-2 text-lg items-center`}
            >
              <item.icon /> {item.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
