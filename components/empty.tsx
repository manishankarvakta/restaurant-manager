import { cn } from "@/lib/utils";
import { LucideIcon, MessageSquareDashed } from "lucide-react";
import Image from "next/image";

interface EmptyProps {
  label: string;
  icon: LucideIcon;
  iconColor?: string;
}

export const Empty = ({ label, icon: Icon, iconColor }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className={cn("relative rounded-md")}>
        {/* <Image src="/empty.svg" fill alt="Empty" /> */}
        <Icon
          className={cn("h-52 w-52 mr-3 text-purple-200 opacity-25", iconColor)}
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
