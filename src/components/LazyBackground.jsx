import React, { useEffect, useRef, useState } from 'react';

/**
 * A div whose CSS background image is only requested once it is close to the
 * viewport. Keeps large decorative backgrounds from competing with the hero
 * image and app bundle during the initial page load.
 */
const LazyBackground = ({ src, className = '', style, ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    if (typeof IntersectionObserver === 'undefined') { setVisible(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { rootMargin: '600px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, backgroundImage: visible ? `url(${src})` : undefined }}
      {...rest}
    />
  );
};

export default LazyBackground;
