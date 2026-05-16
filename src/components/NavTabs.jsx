import { useRef, useState, useEffect } from 'react';

const tabs = [
  { label: 'About',      href: '#about'    },
  { label: 'What We Do', href: '#services' },
  { label: 'Impact',     href: '#impact'   },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact'  },
];

export default function NavTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({});
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef(null);
  const tabRefs = useRef(tabs.map(() => ({ current: null })));

  const getPillRect = (index) => {
    const tab = tabRefs.current[index]?.current;
    const container = containerRef.current;
    if (!tab || !container) return null;
    const tabRect = tab.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return {
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
    };
  };

  useEffect(() => {
    const rect = getPillRect(0);
    if (rect) setPillStyle(rect);
  }, []);

  const handleTabClick = (index) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);

    const fromRect = getPillRect(activeIndex);
    const toRect = getPillRect(index);
    if (!fromRect || !toRect) return;

    // Step 1: stretch pill to union of both tabs (instant)
    const stretchLeft = Math.min(fromRect.left, toRect.left);
    const stretchRight = Math.max(
      fromRect.left + fromRect.width,
      toRect.left + toRect.width
    );
    setPillStyle({ left: stretchLeft, width: stretchRight - stretchLeft });

    // Step 2: after short delay, snap to target
    setTimeout(() => {
      setActiveIndex(index);
      setPillStyle(toRect);
      setTimeout(() => setTransitioning(false), 350);
    }, 160);

    document.querySelector(tabs[index].href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Site sections">
      <div
        ref={containerRef}
        role="tablist"
        className="relative flex items-center p-1 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)',
        }}
      >
        {/* Animated blue pill */}
        <div
          aria-hidden="true"
          className="absolute top-1 bottom-1 rounded-full bg-blue-600"
          style={{
            left: pillStyle.left ?? 0,
            width: pillStyle.width ?? 0,
            transition:
              'left 0.35s cubic-bezier(0.34,1.56,0.64,1), width 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            zIndex: 0,
          }}
        />

        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            ref={(el) => { tabRefs.current[i] = { current: el }; }}
            role="tab"
            aria-selected={activeIndex === i}
            onClick={() => handleTabClick(i)}
            className="relative px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            style={{
              zIndex: 1,
              color: activeIndex === i ? '#ffffff' : 'rgba(255,255,255,0.62)',
              transition: 'color 0.25s ease',
              background: 'none',
              border: 'none',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
