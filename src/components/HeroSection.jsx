import FadeIn from './ui/FadeIn';
import { ContactButton } from './ui/Buttons';
import logoImg from '../assets/fresh-and-direct-logo.jpg';
import heroVideo from '../assets/hero-video.mp4';

export default function HeroSection() {
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
        style={{ zIndex: 0 }}
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
      <FadeIn delay={0} y={-20} className="relative" style={{ zIndex: 10 }}>
        <nav
          className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-sm md:text-base lg:text-lg font-medium uppercase tracking-wider"
          style={{ color: '#FFFFFF', textShadow: '0 1px 6px rgba(0,0,0,0.45)' }}
        >
          <a href="#" className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="Fresh & Direct — Food Service · Farming · Fruits & Vegetables"
              style={{ height: 'clamp(80px, 10vw, 130px)', width: 'auto', display: 'block', mixBlendMode: 'multiply' }}
            />
          </a>
          <div className="hidden md:flex gap-10 lg:gap-14">
            <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
            <a href="#services" className="hover:opacity-70 transition-opacity duration-200">What We Do</a>
            <a href="#impact" className="hover:opacity-70 transition-opacity duration-200">Impact</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
          </div>
          <a href="#contact" className="md:hidden hover:opacity-70 transition-opacity duration-200">Menu</a>
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

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 gap-6">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-medium uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[280px] md:max-w-[340px]"
              style={{ color: '#FFFFFF', fontSize: 'clamp(0.75rem, 1.3vw, 1.4rem)', textShadow: '0 2px 8px rgba(0,0,0,0.55)' }}
            >
              Changing the way you perceive agriculture — in your homes, and in our nation.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton label="Explore Our Services" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
