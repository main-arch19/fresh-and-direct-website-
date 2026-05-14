import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';
import ContactSection from '../components/ContactSection';

const steps = [
  {
    n: '01',
    name: 'Partner',
    desc: 'We partner with small to medium farmers across Jamaica — providing seeds, inputs, financial support and ongoing guidance. Every farmer in our network has a guaranteed buyer before a single seed goes in the ground.',
  },
  {
    n: '02',
    name: 'Grow',
    desc: 'Farmers cultivate fresh local produce with a guaranteed market and a set price agreed up front. We collaborate with RADA to strengthen planting techniques and post-harvest care, ensuring every crop meets market standards.',
  },
  {
    n: '03',
    name: 'Store',
    desc: 'Our post-harvest storage facility preserves freshness and minimises spoilage between farm and shelf. Temperature-controlled handling keeps produce at peak quality from the moment it leaves the field.',
  },
  {
    n: '04',
    name: 'Deliver',
    desc: 'We market and distribute produce to retailers, supermarkets, restaurants and households island-wide — from Coronation and Brown\'s Town markets to PriceSmart and hotels across Jamaica.',
  },
];

export default function SeedToShelfPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#FFFFFF', overflowX: 'clip' }}>

      {/* Nav bar */}
      <nav
        className="px-5 sm:px-8 md:px-10 py-5 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(14,42,18,0.1)' }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-medium uppercase tracking-widest text-sm"
          style={{ color: '#0E2A12', textDecoration: 'none' }}
        >
          <span style={{ fontSize: '1.1rem' }}>←</span> Back to Home
        </Link>
        <div
          className="font-black uppercase tracking-tight"
          style={{ color: '#0E2A12', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
        >
          Fresh &amp; Direct
        </div>
      </nav>

      {/* Hero */}
      <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 text-center">
        <FadeIn
          className="uppercase tracking-[0.4em] font-light mb-6"
          y={20}
          style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
        >
          From Seed to Shelf
        </FadeIn>
        <FadeIn
          as="h1"
          y={50}
          className="font-black uppercase leading-none tracking-tight mb-8"
          style={{
            background: 'linear-gradient(180deg, #0E2A12 0%, #2F8F2F 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            fontSize: 'clamp(2.8rem, 10vw, 130px)',
          }}
        >
          The Journey
        </FadeIn>
        <FadeIn
          y={30}
          delay={0.1}
          className="font-light leading-relaxed max-w-2xl mx-auto"
          style={{ color: '#4B5A48', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
        >
          Every item on your shelf started as a seed in Jamaican soil. Here is how Fresh &amp; Direct brings it from farm to family — supporting local agriculture every step of the way.
        </FadeIn>
      </section>

      {/* Journey steps */}
      <section className="px-5 sm:px-8 md:px-10 pb-24 sm:pb-32" style={{ background: '#F2EFE4' }}>
        <div className="max-w-6xl mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <FadeIn
              key={s.n}
              delay={i * 0.1}
              className="p-8 md:p-10 flex flex-col gap-5"
              style={{
                background: '#FFFFFF',
                borderRadius: 'clamp(28px, 3vw, 40px)',
                border: '1px solid rgba(14,42,18,0.1)',
                minHeight: 300,
              }}
            >
              <div
                className="font-black"
                style={{ color: '#C99A2E', fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 0.9 }}
              >
                {s.n}
              </div>
              <div
                className="font-medium uppercase tracking-wide"
                style={{ color: '#0E2A12', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}
              >
                {s.name}
              </div>
              <div
                className="font-light leading-relaxed"
                style={{ color: '#4B5A48', fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)' }}
              >
                {s.desc}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer — identical to main page */}
      <ContactSection />
    </div>
  );
}
