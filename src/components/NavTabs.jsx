import { useRef, useState } from 'react';

const tabs = [
  { label: 'About',      href: '#about'    },
  { label: 'What We Do', href: '#services' },
  { label: 'Impact',     href: '#impact'   },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact'  },
];

export default function NavTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const tabRefs = useRef(tabs.map(() => ({ current: null })));

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    document.querySelector(tabs[index].href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Site sections">
      <div
        ref={containerRef}
        role="tablist"
        className="relative flex items-center p-2 rounded-full min-w-max flex-shrink-0 overflow-hidden"
        style={{
          background: '#C99A2E',
          boxShadow: '0 2px 16px rgba(0,0,0,0.22)',
        }}
      >
        {/* Glowing green streak */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.18) 20%, rgba(74,222,128,0.95) 50%, rgba(74,222,128,0.18) 80%, transparent 100%)',
            filter: 'blur(5px)',
            animation: 'nav-streak 2.2s linear infinite',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />

        {tabs.map((tab, i) => (
          <div key={tab.label} className="flex items-center" style={{ zIndex: 1 }}>
            {i > 0 && (
              <div
                aria-hidden="true"
                style={{
                  width: '1px',
                  height: '1.4em',
                  background: 'rgba(255,255,255,0.35)',
                  flexShrink: 0,
                }}
              />
            )}
            <button
              ref={(el) => { tabRefs.current[i] = { current: el }; }}
              role="tab"
              aria-selected={activeIndex === i}
              onClick={() => handleTabClick(i)}
              className="nav-tab-btn relative px-10 py-5 rounded-full text-2xl font-medium whitespace-nowrap cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              style={{
                color: '#ffffff',
                background: 'none',
                border: 'none',
              }}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
}
