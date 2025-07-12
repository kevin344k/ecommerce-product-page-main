import React, { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className = "", skeletonClass = "" }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden rounded-md  ${className}`}
      style={{ minHeight: "250px" }}
    >
      {!hasLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded-md ${skeletonClass}`}
        />
      )}

      {hasLoaded && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover shadow-md rounded-md"
        />
      )}
    </div>
  );
}
