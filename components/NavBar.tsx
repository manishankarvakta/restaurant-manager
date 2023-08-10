import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "@/components/MobileSideBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import MenuBar from "./menu-bar";

const NavBar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="flex item-center p-4">
      <MobileSideBar apiLimitCount={1} isPro={true} />
      <div className="flex w-full justify-between">
        <MenuBar />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
