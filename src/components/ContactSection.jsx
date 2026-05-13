import FadeIn from './ui/FadeIn';
import { ContactButton } from './ui/Buttons';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ background: '#0E2A12', color: '#F2EFE4' }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn
          className="text-center uppercase tracking-[0.4em] font-light mb-6"
          y={20}
          style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
        >
          Get In Touch
        </FadeIn>
        <FadeIn
          as="h2"
          y={40}
          className="font-black uppercase tracking-tight leading-none text-center mb-20 md:mb-24"
          style={{ color: '#F2EFE4', fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
        >
          Let&apos;s Talk Produce
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <FadeIn className="flex flex-col gap-3">
            <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Visit</div>
            <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
              83 Newport West Blvd<br />Kingston, Jamaica
            </div>
            <div className="uppercase tracking-widest text-xs font-light mt-3" style={{ color: '#C99A2E' }}>Also At</div>
            <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
              Essex Valley<br />St. Elizabeth, Jamaica
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="flex flex-col gap-3">
            <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Call</div>
            <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
              +1 876 335 6934<br />+1 876 757 4835
            </div>
            <div className="uppercase tracking-widest text-xs font-light mt-3" style={{ color: '#C99A2E' }}>Email</div>
            <a
              href="mailto:sherman@freshndirect.com"
              className="font-medium leading-snug hover:underline"
              style={{ color: '#F2EFE4', fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}
            >
              sherman@freshndirect.com
            </a>
          </FadeIn>
          <FadeIn delay={0.16} className="flex flex-col gap-3">
            <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Hours</div>
            <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
              Mon – Sat · 8:30 AM – 4:30 PM<br />Sunday · Closed
            </div>
            <div className="uppercase tracking-widest text-xs font-light mt-3" style={{ color: '#C99A2E' }}>Social</div>
            <div className="flex flex-col gap-1 font-medium" style={{ color: '#F2EFE4', fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}>
              <a href="https://facebook.com/freshndirectjamaica" className="hover:underline">
                facebook.com/freshndirectjamaica
              </a>
              <a href="https://instagram.com/freshndirectltd" className="hover:underline">
                @freshndirectltd
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 md:mt-20 flex justify-center">
          <a href="mailto:sherman@freshndirect.com">
            <ContactButton label="Email Operations" />
          </a>
        </FadeIn>
      </div>

      <footer
        className="max-w-6xl mx-auto mt-24 md:mt-32 pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ borderTop: '1px solid rgba(242,239,228,0.15)' }}
      >
        <div
          className="uppercase tracking-widest font-light text-sm text-center md:text-left"
          style={{ color: '#F2EFE4aa' }}
        >
          © 2026 Fresh &amp; Direct Ltd. · All Rights Reserved
        </div>
        <div
          className="uppercase tracking-widest font-light text-sm text-center md:text-right"
          style={{ color: '#F2EFE4aa' }}
        >
          Changing the way you perceive agriculture 🇯🇲
        </div>
      </footer>
    </section>
  );
}
