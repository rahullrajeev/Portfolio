"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useTransition } from "react";

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: React.ReactNode;
  href: string;
}

export function TransitionLink({ 
  href, 
  children, 
  className, 
  onClick, 
  ...props 
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    
    const targetUrl = href.toString();
    if (pathname === targetUrl) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Dispatch the closing transition event
    window.dispatchEvent(new Event("transition-start"));
    
    // Smooth delay before push, reducing from 800ms to 400ms fixes the perceived lag 
    // while giving the shutters enough time to cleanly transition in.
    setTimeout(() => {
      startTransition(() => {
        router.push(targetUrl);
      });
    }, 250); 
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
