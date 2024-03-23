"use client";
import {
  LucideIcon,
  LayoutDashboard,
  Users,
  Boxes,
  Building,
} from "lucide-react";

import SidebarItem from "./item";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const items: ISidebarItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "CEO",
    path: "/ceo",
    icon: Boxes,
  },
  {
    name: "Chiefs",
    path: "/chief",
    icon: Building,
  },
  {
    name: "Departments",
    path: "/department",
    icon: Users,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <img className="h-10 w-fit" src="/logo-expanded.png" alt="Logo" />
        <div className="flex flex-col space-y-2 ">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
