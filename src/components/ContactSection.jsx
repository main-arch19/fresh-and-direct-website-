import FadeIn from './ui/FadeIn';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-16 pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ background: '#0E2A12', color: '#F2EFE4' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
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
          className="font-black uppercase tracking-tight leading-none text-center mb-16 md:mb-20"
          style={{ color: '#F2EFE4', fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
        >
          Let&apos;s Talk Produce
        </FadeIn>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(242,239,228,0.15)', marginBottom: '3rem' }} />

        {/* Contact grid — 3 equal columns, all centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">

          {/* Visit */}
          <FadeIn className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Visit</div>
              <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>
                83 Newport West Blvd<br />Kingston, Jamaica
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Also At</div>
              <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>
                Essex Valley<br />St. Elizabeth, Jamaica
              </div>
            </div>
          </FadeIn>

          {/* Call & Email */}
          <FadeIn delay={0.08} className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Call</div>
              <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>
                +1 876 335 6934<br />+1 876 757 4835
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Email</div>
              <a
                href="mailto:sherman@freshndirect.com"
                className="font-medium leading-snug hover:underline"
                style={{ color: '#F2EFE4', fontSize: 'clamp(0.85rem, 1.1vw, 1.05rem)' }}
              >
                sherman@freshndirect.com
              </a>
            </div>
          </FadeIn>

          {/* Hours & Social */}
          <FadeIn delay={0.16} className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Hours</div>
              <div className="font-medium leading-snug" style={{ color: '#F2EFE4', fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)' }}>
                Mon – Sat · 8:30 AM – 4:30 PM<br />Sunday · Closed
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="uppercase tracking-widest text-xs font-light" style={{ color: '#C99A2E' }}>Social</div>
              <div className="flex flex-col gap-1 font-medium" style={{ color: '#F2EFE4', fontSize: 'clamp(0.85rem, 1.1vw, 1.05rem)' }}>
                <a href="https://facebook.com/freshndirectjamaica" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  facebook.com/freshndirectjamaica
                </a>
                <a href="https://instagram.com/freshndirectltd" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @freshndirectltd
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Footer bar */}
      <footer
        className="max-w-5xl mx-auto mt-20 md:mt-24 pt-8 flex flex-col items-center gap-3 text-center"
        style={{ borderTop: '1px solid rgba(242,239,228,0.15)' }}
      >
        <div
          className="uppercase tracking-widest font-light text-xs"
          style={{ color: '#F2EFE4aa' }}
        >
          © 2026 Fresh &amp; Direct Ltd. · All Rights Reserved
        </div>
        <div
          className="uppercase tracking-widest font-light text-xs"
          style={{ color: '#F2EFE4aa' }}
        >
          Changing the way you perceive agriculture 🇯🇲
        </div>
      </footer>
    </section>
  );
}
