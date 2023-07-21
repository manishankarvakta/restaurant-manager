import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "@/components/MobileSideBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const NavBar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="flex item-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
