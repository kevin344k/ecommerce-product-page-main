import React, { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, className = "", skeletonClass = "" }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [fitMode, setFitMode] = useState("object-contain"); // default
  const containerRef = useRef();
  const imageRef = useRef();

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

  useEffect(() => {
    if (hasLoaded && imageRef.current) {
      const img = imageRef.current;

      const checkCropping = () => {
        const containerRatio = containerRef.current.clientWidth / containerRef.current.clientHeight;
        const imageRatio = img.naturalWidth / img.naturalHeight;

        const recorteHorizontal = imageRatio > containerRatio;
        const recorteVertical = imageRatio < containerRatio;

        if (recorteHorizontal || recorteVertical) {
          setFitMode("object-contain");
        } else {
          setFitMode("object-cover");
        }
      };

      if (img.complete) {
        checkCropping();
      } else {
        img.onload = checkCropping;
      }
    }
  }, [hasLoaded]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden rounded-md ${className}`}
      style={{ minHeight: "250px" }}
    >
      {!hasLoaded && (
        <div
          className={`absolute inset-0 bg-gray-200 animate-pulse rounded-md ${skeletonClass}`}
        />
      )}

      {hasLoaded && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading="lazy"
          className={`max-w-full max-h-full border border-neutral-200 h-full w-full shadow-md rounded-tl-3xl rounded-tr-3xl transition-all duration-300 ${fitMode}`}
        />
      )}
    </div>
  );
}
