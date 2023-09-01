import { navigationRoute } from "@/lib/data";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  const pathname = usePathname();
  const existRoute = navigationRoute.find((route) => route.href === pathname);
  console.log(existRoute?.subMenu);
  return (
    <div className="px-4 lg:px-4 flex justify-between">
      <div className="flex item-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("h-10 w-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex ">
        {existRoute?.subMenu?.map((route) => (
          <Link href={route.href} className="flex items-center me-3 flex-col border-3">
            <route.icon  className={cn("h-8 w-8", route.color)}/>
            <span className="text-xs">{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Heading;
