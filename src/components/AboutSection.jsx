import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center gap-16 sm:gap-20 md:gap-24"
      style={{ background: '#FFFFFF' }}
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn
          className="text-center uppercase tracking-[0.4em] font-light"
          delay={0} y={20}
          style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
        >
          About Fresh &amp; Direct
        </FadeIn>
        <FadeIn
          as="h2"
          delay={0.05}
          y={40}
          className="heading-dark font-black uppercase leading-none tracking-tight text-center mt-6 sm:mt-10 md:mt-14"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Since 2005
        </FadeIn>
        <AnimatedText
          text="Fresh & Direct is a Jamaican-based producer and distributor of fresh produce — Irish potatoes, onions, grape tomatoes, scallion, Scotch bonnet peppers, and imported garlic and beans. We supply traditional market vendors at Coronation and Brown's Town markets, and indirectly to retail chains like PriceSmart and hotels island-wide. What sets us apart is that we are farmers ourselves — growing Irish potatoes in St. Mary and Manchester, and onions in Spring Plain, Clarendon. We partner with farmers by providing seeds, inputs, and financial support, and collaborate with RADA to strengthen planting and post-harvest care. Our mission: sustain and grow local agriculture while meeting market demand efficiently."
          className="font-medium text-left leading-relaxed max-w-[640px]"
          style={{ color: '#0E2A12', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>
    </section>
  );
}
