import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "@/components/MobileSideBar";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex item-center p-4">
      <MobileSideBar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
