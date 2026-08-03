"use client";

import { useEffect, useState } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "@/router";

export default function AppWrapper() {
  const [router, setRouter] = useState<any>(null);

  useEffect(() => {
    setRouter(getRouter());
  }, []);

  if (!router) return null;

  return <RouterProvider router={router} />;
}
