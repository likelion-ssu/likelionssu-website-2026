import { useEffect, useRef, useState } from "react";

const PRELOAD_ROOT_MARGIN = "1600px 0px";

export default function SmartImage({
  src,
  alt,
  className,
  loading = "lazy",
  fetchPriority = "low",
}) {
  const supportsObserver =
    typeof window !== "undefined" && "IntersectionObserver" in window;
  const shouldLoadImmediately = loading === "eager" || !supportsObserver;

  const hostRef = useRef(null);
  const [shouldStartLoading, setShouldStartLoading] = useState(
    shouldLoadImmediately,
  );
  const [resolvedSrc, setResolvedSrc] = useState(shouldLoadImmediately ? src : "");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src || shouldStartLoading || !supportsObserver) return undefined;

    const target = hostRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldStartLoading(true);
        observer.disconnect();
      },
      { rootMargin: PRELOAD_ROOT_MARGIN, threshold: 0.01 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldStartLoading, src, supportsObserver]);

  useEffect(() => {
    if (!src || !shouldStartLoading) return undefined;

    let cancelled = false;
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = fetchPriority;

    const finalize = () => {
      if (cancelled) return;
      setResolvedSrc(src);
      setIsLoaded(true);
    };

    image.onload = finalize;
    image.onerror = finalize;
    image.src = src;

    if (typeof image.decode === "function") {
      image.decode().then(finalize).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [fetchPriority, shouldStartLoading, src]);

  return (
    <div ref={hostRef} className="relative w-full h-full bg-emptyimg">
      {resolvedSrc && (
        <img
          src={resolvedSrc}
          alt={alt}
          className={`${className} transition-opacity duration-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          decoding="async"
          loading={loading}
          fetchPriority={fetchPriority}
        />
      )}
    </div>
  );
}

