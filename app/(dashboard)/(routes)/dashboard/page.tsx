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
} from "lucide-react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <Heading
        title="Dashboard"
        description="Most advanced analytics."
        icon={LayoutDashboard}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 md:px-15 lg:px-15 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {navigationRoute.map(
            (tool) =>
              tool.label !== "Dashboard" && (
                <Card
                  onClick={() => router.push(tool.href)}
                  key={tool.href}
                  className="p-4 border-black/5 hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-center gap-x-4">
                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                      <tool.icon className={cn("w-8 h-8", tool.color)} />
                    </div>
                    <div className="text-samibold">{tool.label}</div>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Card>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
