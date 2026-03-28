import { useEffect, useRef } from 'react';

/**
 * useReveal – attaches an IntersectionObserver to the returned ref.
 * Every .reveal child gets 'visible' added when it enters the viewport.
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const els = container.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
