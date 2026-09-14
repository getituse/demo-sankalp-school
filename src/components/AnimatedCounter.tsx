import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export const AnimatedCounter = ({ target, suffix = '', duration = 1400 }: AnimatedCounterProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Check if motion is disabled via URL or system preference
    const isMotionOff =
      document.documentElement.getAttribute('data-motion') === 'off' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMotionOff) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration]);

  return (
    <span className="tabular-nums inline-block font-heading-serif font-bold" aria-label={`${target}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
};
