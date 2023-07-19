import { cn } from "@/lib/utils";
import { subtle } from "crypto";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const poppins = Poppins({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-28  h-12 mr-4">
            {/* <Image fill alt="logo" src="/logo.png" /> */}
            <h1
              className={cn(
                "text-2xl fot-bold text-gray-200",
                poppins.className
              )}
            >
              tech<span className="text-blue-500">soul</span>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
