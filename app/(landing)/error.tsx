"use client";

import { Empty } from "@/components/empty";
// import { FrownIcon } from "lucide-react";
import { LuCrown } from "react-icons/lu";

const Error = () => {
  return `<Empty label="Something went wrong." icon={LuCrown} />`;
};

export default Error;
