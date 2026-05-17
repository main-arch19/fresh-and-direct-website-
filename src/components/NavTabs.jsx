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
        className="nav-bar-pill relative flex items-center rounded-full min-w-max flex-shrink-0"
        style={{
          background: '#ffffff',
        }}
      >
        {tabs.map((tab, i) => (
          <div key={tab.label} className="flex items-center" style={{ zIndex: 1 }}>
            {i > 0 && (
              <div
                aria-hidden="true"
                style={{
                  width: '1px',
                  height: '1.4em',
                  background: 'rgba(0,0,0,0.25)',
                  flexShrink: 0,
                }}
              />
            )}
            <button
              ref={(el) => { tabRefs.current[i] = { current: el }; }}
              role="tab"
              aria-selected={activeIndex === i}
              onClick={() => handleTabClick(i)}
              className="nav-tab-btn relative px-8 rounded-full text-2xl font-medium whitespace-nowrap cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              style={{
                color: '#111111',
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
