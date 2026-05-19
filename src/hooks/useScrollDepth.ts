import { useEffect, useRef, useMemo } from 'react';

export const useScrollDepth = (trackEvent: (event: string, params?: Record<string, unknown>) => void) => {
  const thresholds = useMemo(() => [25, 50, 75, 100], []);
  const triggered = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !triggered.current.has(threshold)) {
          triggered.current.add(threshold);
          trackEvent('gtm_scroll_depth', {
            event_category: 'engagement',
            event_label: `${threshold}%`,
            scroll_depth: threshold,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trackEvent, thresholds]);
};