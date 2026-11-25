"use client";

import { usePathname } from "next/navigation";

export function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname === "/seo-demo";

  return (
    <main className={`min-h-screen overflow-x-clip md:overflow-x-visible ${isDemo ? "pt-0" : "pt-16 md:pt-24"}`}>
      {children}
    </main>
  );
}
