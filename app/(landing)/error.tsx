"use client";

import { Empty } from "@/components/empty";
import { FrownIcon } from "lucide-react";

const Error = () => {
  return <Empty label="Something went wrong." icon={FrownIcon} />;
};

export default Error;
