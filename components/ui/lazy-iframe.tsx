"use client";

import { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  src: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
  sandbox?: string;
  tabIndex?: number;
  ariaHidden?: boolean;
  rootMargin?: string;
}

export function LazyIframe({
  src,
  title,
  className = "w-full h-full border-none",
  style,
  sandbox = "allow-same-origin allow-scripts allow-forms allow-popups",
  tabIndex,
  ariaHidden,
  rootMargin = "280px 0px",
}: LazyIframeProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = hostRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin]);

  return (
    <div ref={hostRef} className="absolute inset-0 w-full h-full">
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-zinc-950 text-zinc-400"
        >
          <div className="w-6 h-6 rounded-full border-2 border-zinc-700 border-t-zinc-300 animate-spin" />
          <span className="font-mono text-[11px] tracking-widest opacity-70">
            Loading preview...
          </span>
        </div>
      )}
      {shouldLoad && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          sandbox={sandbox}
          tabIndex={tabIndex}
          aria-hidden={ariaHidden}
          onLoad={() => setLoaded(true)}
          className={`${className} transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={style}
        />
      )}
    </div>
  );
}
