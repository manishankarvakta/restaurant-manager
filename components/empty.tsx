import { cn } from "@/lib/utils";
import { MessageSquareDashed } from "lucide-react";
import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      {/* <div className="relative h-72 w-72 "> */}
      {/* <Image src="/empty.svg" fill alt="Empty" /> */}
      <MessageSquareDashed
        className={cn("h-52 w-52 mr-3 text-purple-200 opacity-25")}
      />
      {/* </div> */}
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
