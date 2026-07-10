import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    const element = elementRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-700
        ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}