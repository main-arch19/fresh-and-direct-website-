import { useRef, useEffect, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import FadeIn from './ui/FadeIn';

const impactStats = [
  { prefix: '$', to: 50, suffix: 'M', label: 'Invested in a major Irish-potato project in New Pen, St. Mary (2021)' },
  { prefix: '',  to: 20, suffix: '+', label: 'Years in the produce business since 2005' },
  { prefix: '',  to: 40, suffix: '+', label: 'Contracted farmers supplying Fresh & Direct year-round' },
  { prefix: '',  to: 46, suffix: '+', label: 'Fresh items available on Fresh Mart Express, and growing' },
];

function CountUp({ to, prefix = '', suffix = '', duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px 0px -50px 0px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setVal(0);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate(v) { setVal(Math.round(v)); },
    });
    return controls.stop;
  }, [isInView, to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

export default function ImpactSection() {
  return (
    <section id="impact" className="relative z-10 px-5 sm:px-8 md:px-10 py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <FadeIn
        className="text-center uppercase tracking-[0.4em] font-light mb-8 sm:mb-10 md:mb-12"
        y={20}
        style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
      >
        Our Impact
      </FadeIn>
      <FadeIn
        as="h2"
        y={40}
        className="heading-dark font-black uppercase tracking-tight leading-none text-center mb-14 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(1.875rem, 7.5vw, 105px)' }}
      >
        By The Numbers
      </FadeIn>

      <div
        className="max-w-6xl mx-auto grid grid-cols-4 gap-px"
        style={{ background: 'rgba(14,42,18,0.14)' }}
      >
        {impactStats.map((s, i) => (
          <FadeIn
            key={s.to + s.suffix}
            delay={i * 0.08}
            className="flex flex-col gap-1 sm:gap-2 md:gap-3 p-3 sm:p-5 md:p-7 lg:p-10"
            style={{ background: '#FFFFFF' }}
          >
            <div
              className="font-black"
              style={{ color: '#0E2A12', fontSize: 'clamp(1.4rem, 4.5vw, 5rem)', lineHeight: 0.9 }}
            >
              <CountUp prefix={s.prefix} to={s.to} suffix={s.suffix} />
            </div>
            <div
              className="font-light leading-snug"
              style={{ color: '#4B5A48', fontSize: 'clamp(0.7rem, 1.1vw, 1rem)' }}
            >
              {s.label}
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-14 sm:mt-20 md:mt-28 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
        <FadeIn
          className="p-3 sm:p-7 md:p-10 flex flex-col gap-3 sm:gap-4"
          style={{ border: '1px solid var(--line)', borderRadius: 'clamp(12px, 3vw, 40px)' }}
        >
          <div className="uppercase tracking-widest font-light text-xs" style={{ color: '#C99A2E' }}>
            Jamaica Observer · Feb 2021
          </div>
          <p className="font-medium leading-snug" style={{ color: '#0E2A12', fontSize: 'clamp(0.75rem, 1.6vw, 1.5rem)' }}>
            Minister of Agriculture &amp; Fisheries Floyd Green commended Fresh &amp; Direct&apos;s $50M investment, calling it a model for ensuring farmers get a solid set of returns.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="p-3 sm:p-7 md:p-10 flex flex-col gap-3 sm:gap-4"
          style={{ border: '1px solid var(--line)', borderRadius: 'clamp(12px, 3vw, 40px)' }}
        >
          <div className="uppercase tracking-widest font-light text-xs" style={{ color: '#C99A2E' }}>
            Jamaica Gleaner · May 2015
          </div>
          <p className="font-medium leading-snug" style={{ color: '#0E2A12', fontSize: 'clamp(0.75rem, 1.6vw, 1.5rem)' }}>
            Feature on Fresh Mart Express — the online produce marketplace pioneering convenient delivery of fresh produce across Kingston, St Andrew and Portmore.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
