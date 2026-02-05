import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  from: number;
  to: number;
}

function CountUp({ from, to }: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    let controls: ReturnType<typeof animate> | null = null;

    if (node) {
      controls = animate(from, to, {
        duration: 1.4,
        ease: 'easeOut',
        onUpdate(value) {
          node.textContent = value.toFixed(0);
        },
      });
    }

    return () => {
      if (controls) controls.stop();
    };
  }, [from, to]);

  return <span ref={nodeRef}>{to}</span>;
}

export default CountUp;
