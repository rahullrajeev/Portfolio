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
  onTouchStart,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const targetUrl = href.toString();

  const prefetchTarget = () => {
    if (targetUrl && targetUrl.startsWith("/") && targetUrl !== pathname) {
      router.prefetch(targetUrl);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onMouseEnter) onMouseEnter(e);
    prefetchTarget();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (onTouchStart) onTouchStart(e);
    prefetchTarget();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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

    // Instant navigation for reduced-motion users
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      router.push(targetUrl);
      return;
    }

    if (document.body.dataset.transitioning === "true") {
      return;
    }

    document.body.dataset.transitioning = "true";

    window.setTimeout(() => {
      document.body.dataset.transitioning = "false";
    }, 1800);

    router.prefetch(targetUrl);

    window.dispatchEvent(
      new CustomEvent("page-transition-start", {
        detail: { targetUrl },
      })
    );

    requestAnimationFrame(() => {
      router.push(targetUrl, { scroll: false });
    });
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      {...props}
    >
      {children}
    </Link>
  );
}
