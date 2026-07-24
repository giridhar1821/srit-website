import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', decimals = 0, duration = 2000, className = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(end * eased);
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(end);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default Counter;
