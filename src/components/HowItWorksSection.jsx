import FadeIn from './ui/FadeIn';

const steps = [
  { n: '01', name: 'Partner', desc: 'We partner with small to medium farmers across Jamaica — providing seeds, inputs, financial support and ongoing guidance.' },
  { n: '02', name: 'Grow', desc: 'Farmers cultivate fresh local produce with a guaranteed market and a set price agreed up front.' },
  { n: '03', name: 'Store', desc: 'Our post-harvest storage facility preserves freshness and minimizes spoilage between farm and shelf.' },
  { n: '04', name: 'Deliver', desc: 'We market and distribute produce to retailers, supermarkets, restaurants and households island-wide.' },
];

export default function HowItWorksSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: '#F2EFE4' }}>
      <FadeIn
        className="text-center uppercase tracking-[0.4em] font-light mb-6"
        y={20}
        style={{ color: '#1A5A1A', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
      >
        From Farm To Table
      </FadeIn>
      <FadeIn
        as="h2"
        y={40}
        className="font-black uppercase text-center mb-16 sm:mb-20"
        style={{ color: '#0E2A12', fontSize: 'clamp(2.5rem, 9vw, 120px)', lineHeight: 1 }}
      >
        How It Works
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {steps.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.08}
            className="p-4 md:p-8 flex flex-col gap-3"
            style={{
              background: '#FFFFFF',
              borderRadius: 'clamp(28px, 3vw, 40px)',
              border: '1px solid var(--line)',
            }}
          >
            <div
              className="font-black"
              style={{ color: '#C99A2E', fontSize: 'clamp(1.8rem, 4vw, 4rem)', lineHeight: 0.9 }}
            >
              {s.n}
            </div>
            <div
              className="font-medium uppercase tracking-wide"
              style={{ color: '#0E2A12', fontSize: 'clamp(1.1rem, 1.5vw, 1.6rem)' }}
            >
              {s.name}
            </div>
            <div
              className="font-light leading-relaxed"
              style={{ color: '#4B5A48', fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)' }}
            >
              {s.desc}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
