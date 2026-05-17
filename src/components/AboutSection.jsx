import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import aboutVideo from '../assets/about-video.mp4';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-14 sm:py-20 md:py-28 flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-16"
      style={{ background: '#FFFFFF' }}
    >
      <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-14 relative z-10">
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
          className="heading-dark font-black uppercase leading-none tracking-tight text-center mt-4 sm:mt-8 md:mt-12"
          style={{ fontSize: 'clamp(2.25rem, 9vw, 120px)' }}
        >
          Since 2005
        </FadeIn>
        <AnimatedText
          text="Fresh & Direct is a Jamaican-based producer and distributor of fresh produce — Irish potatoes, onions, grape tomatoes, scallion, Scotch bonnet peppers, and imported garlic and beans. We supply traditional market vendors at Coronation and Brown's Town markets, and indirectly to retail chains like PriceSmart and hotels island-wide. What sets us apart is that we are farmers ourselves — growing Irish potatoes in St. Mary and Manchester, and onions in Spring Plain, Clarendon. We partner with farmers by providing seeds, inputs, and financial support, and collaborate with RADA to strengthen planting and post-harvest care. Our mission: sustain and grow local agriculture while meeting market demand efficiently."
          className="font-medium text-left leading-relaxed self-start w-full max-w-3xl"
          style={{ color: '#0E2A12', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
        <FadeIn delay={0.2} y={30} className="w-full self-start">
          <div
            className="w-full aspect-video rounded-3xl overflow-hidden"
            style={{ background: '#0E2A12' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src={aboutVideo}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
