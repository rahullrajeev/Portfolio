"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

interface TransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function TransitionLink({
  href,
  children,
  className,
  onClick,
  onMouseEnter,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const targetUrl = href.toString();

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onMouseEnter) onMouseEnter(e);
    if (targetUrl && targetUrl.startsWith("/") && targetUrl !== pathname) {
      router.prefetch(targetUrl);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Standard link behavior for modifier keys or external links
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      props.target === "_blank" ||
      !targetUrl.startsWith("/")
    ) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);

    if (pathname === targetUrl) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Prevent double clicks if a transition is already running
    if (document.body.dataset.transitioning === "true") {
      return;
    }

    // Set transition state
    document.body.dataset.transitioning = "true";

    // Prefetch immediately on click
    router.prefetch(targetUrl);

    // Trigger transition event to start shutter sweep
    window.dispatchEvent(
      new CustomEvent("page-transition-start", {
        detail: { targetUrl },
      })
    );

    // Push route with a tiny delay to ensure animation frame starts cleanly
    setTimeout(() => {
      router.push(targetUrl, { scroll: false });
    }, 50);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </Link>
  );
}
