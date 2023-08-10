"use client";
import { cn } from "@/lib/utils";
import { FreeCounter } from "./FreeCounter";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navigationRoute } from "@/lib/data";
import {
  Code,
  Settings,
  ImageIcon,
  VideoIcon,
  Music,
  LayoutDashboard,
  MessageSquare,
  ChefHat,
} from "lucide-react";

const poppins = Poppins({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-emerald-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SideBarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const SideBar = ({ apiLimitCount = 0, isPro = false }: SideBarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="h-14 w-14 relative mr-2">
            {/* <Image fill alt="logo" className="h-8 w-8" src="/octopus.png" /> */}
            <ChefHat className={cn("h-14 w-14 mr-2")} />
          </div>
          <h1
            className={cn(
              "text-2xl fot-bold text-gray-200 text-left ml-2",
              poppins.className
            )}
          >
            <span className="font-extrabold line-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              RESTAURANT
            </span>{" "}
            <span className="font-bold text-xl line-0">Manager</span>
          </h1>
          {/* <h1
              className={cn(
                "text-2xl fot-bold text-gray-200 text-center",
                poppins.className
              )}
            >
              tech<span className="text-sky-500">soul</span> AI
            </h1> */}
        </Link>
        <div className="space-y-1">
          {navigationRoute.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} /> */}
    </div>
  );
};

export default SideBar;
