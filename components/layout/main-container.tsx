"use client";

import { usePathname } from "next/navigation";

export function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname === "/seo-demo";

  return (
    <main className={`min-h-screen ${isDemo ? "pt-0" : "pt-24"}`}>
      {children}
    </main>
  );
}
