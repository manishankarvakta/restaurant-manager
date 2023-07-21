import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "@/components/MobileSideBar";
import { getApiLimitCount } from "@/lib/api-limit";

const NavBar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex item-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
