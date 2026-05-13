import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnimatedText({ text, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = useMemo(() => text.split(''), [text]);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.18, 1]);
        return (
          <span key={i} style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre' }}>
            <span style={{ opacity: 0 }}>{c}</span>
            <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>{c}</motion.span>
          </span>
        );
      })}
    </p>
  );
}
