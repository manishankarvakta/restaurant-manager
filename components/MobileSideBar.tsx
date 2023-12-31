"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/SideBar";
import { useState, useEffect } from "react";

interface MobileSidebrProps {
  apiLimitCount: number;
  isPro: boolean;
}
const MobileSideBar = ({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebrProps) => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return false;
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
