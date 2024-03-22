"use client";
import { useMemo } from "react";
import {  LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
}



const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, path } = item;
  const router = useRouter();
  const pathname = usePathname();
  const onClick = () => {
    return router.push(path);
  };
  const isActive = useMemo(() => {
    return path === pathname;
  }, [path, pathname]);

  return (
    <>
      <div
        className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between
     ${isActive && "text-sidebar-active bg-sidebar-background"}
    `}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="text-sm font-semibold">{name} </p>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
