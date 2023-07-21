"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("7258681f-5a6f-476c-8f7f-87c7a72738e8");
  }, []);

  return null;
};
