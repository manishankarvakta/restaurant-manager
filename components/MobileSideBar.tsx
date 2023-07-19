"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileSideBar = () => {
  return (
    <div>
      <Button variant={"ghost"} size={"icon"} className="md:hidden">
        <Menu />
      </Button>
    </div>
  );
};

export default MobileSideBar;
