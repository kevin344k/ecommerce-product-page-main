import React, { useEffect, useRef, useState } from "react";

export default function LazyButton({ children, className, onClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {isVisible ? (
        <button
          onClick={onClick}
          className="w-full flex items-center rounded-bl-md rounded-br-md justify-center gap-2 text-Pale-orange font-bold text-white bg-fm-Orange py-2 hover:bg-[#ff9637] hover:cursor-pointer"
        >
          {children}
        </button>
      ) : (
        <div className="w-full h-10 bg-gray-300 animate-pulse rounded-bl-md rounded-br-md" />
      )}
    </div>
  );
}
