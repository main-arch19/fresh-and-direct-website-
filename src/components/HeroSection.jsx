import { useState } from 'react';
import FadeIn from './ui/FadeIn';
import NavTabs from './NavTabs';
import logoImg from '../assets/fresh-and-direct-logo.jpg';
import heroVideo from '../assets/hero-video.mp4';

const mobileLinks = [
  { label: 'About',      href: '#about'    },
  { label: 'What We Do', href: '#services' },
  { label: 'Impact',     href: '#impact'   },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact'  },
];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMobileNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, objectPosition: 'center 75%' }}
        src={heroVideo}
      />
      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 35%, rgba(14,42,18,0.35) 100%)',
          zIndex: 1,
        }}
      />

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: 'rgba(14,42,18,0.97)', zIndex: 50 }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl leading-none"
            aria-label="Close menu"
          >
            ✕
          </button>
          {mobileLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleMobileNav(l.href)}
              className="text-white uppercase tracking-widest font-medium text-2xl hover:text-yellow-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <FadeIn delay={0} y={-20} className="relative" style={{ zIndex: 10 }}>
        <nav
          className="flex justify-between items-center px-4 md:px-14 pt-5 md:pt-12 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wider"
          style={{ color: '#FFFFFF', textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
        >
          <a href="#" className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="Fresh & Direct — Food Service · Farming · Fruits & Vegetables"
              style={{ height: 'clamp(48px, 10vw, 130px)', width: 'clamp(48px, 10vw, 130px)', display: 'block', objectFit: 'cover', borderRadius: '50%' }}
            />
          </a>
          <div className="hidden md:flex mr-60 lg:mr-[30rem]">
            <NavTabs />
          </div>
          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white rounded-full" />
            <span className="block w-6 h-0.5 bg-white rounded-full" />
            <span className="block w-6 h-0.5 bg-white rounded-full" />
          </button>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-end relative" style={{ zIndex: 10 }}>
        <div className="overflow-hidden relative z-0">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-6 sm:mt-4 md:-mt-5 text-center"
            style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}
          >
            Fresh &amp; Direct
          </FadeIn>
        </div>

        <div className="flex flex-wrap justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 gap-4 sm:gap-6">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-medium uppercase tracking-wide leading-snug max-w-[260px] sm:max-w-[280px] md:max-w-[340px]"
              style={{ color: '#FFFFFF', fontSize: 'clamp(0.75rem, 1.3vw, 1.4rem)', textShadow: '0 2px 8px rgba(0,0,0,0.55)' }}
            >
              Changing the way you perceive agriculture — in your homes, and in our nation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
