"use client";
import Heading from "@/components/Heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { navigationRoute } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  VideoIcon,
  Music,
  MessageSquare,
  ArrowRight,
  LayoutDashboard,
  ShoppingCart,
  Soup,
} from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

const Procurements = () => {
  return (
    <div>
      <Heading
        title="Menu & Order"
        description="Most advanced analytics"
        icon={Soup}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 md:px-15 lg:px-15 space-y-4"></div>
    </div>
  );
};

export default Procurements;
