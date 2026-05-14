import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import { ContactButton } from './ui/Buttons';
import imgFarming from '../assets/farming.jpeg';
import imgIrishPotatoHarvest from '../assets/irish-potato-harvest.jpeg';
import imgMarketCrates from '../assets/market-crates.jpeg';
import imgDeliveryVan from '../assets/delivery-van.jpeg';

function CornerPlaceholder({ className, label, img, ...rest }) {
  return (
    <FadeIn className={`absolute ${className}`} {...rest}>
      <div
        className="w-full aspect-square rounded-2xl flex items-end justify-start p-2"
        style={img ? {
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%), url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid rgba(14,42,18,0.1)',
        } : {
          background: 'repeating-linear-gradient(135deg, #EDE9D8 0 14px, #F4F1E4 14px 28px)',
          border: '1px solid rgba(14,42,18,0.1)',
        }}
      >
        <span className="font-mono text-[10px] sm:text-xs" style={{ color: img ? '#FFFFFFcc' : '#7A8A6A' }}>{label}</span>
      </div>
    </FadeIn>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center gap-16 sm:gap-20 md:gap-24"
      style={{ background: '#FFFFFF' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <CornerPlaceholder
          label="[ farmer at work ]"
          className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
          delay={0.1} x={-80} y={0} duration={0.9}
          img={imgFarming}
        />
        <CornerPlaceholder
          label="[ market crates ]"
          className="bottom-[1%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
          delay={0.25} x={-80} y={0} duration={0.9}
          img={imgMarketCrates}
        />
        <CornerPlaceholder
          label="[ Irish potato harvest ]"
          className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
          delay={0.15} x={80} y={0} duration={0.9}
          img={imgIrishPotatoHarvest}
        />
        <CornerPlaceholder
          label="[ delivery van ]"
          className="bottom-[1%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
          delay={0.3} x={80} y={0} duration={0.9}
          img={imgDeliveryVan}
        />
      </div>

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
          className="font-medium text-center leading-relaxed max-w-[640px]"
          style={{ color: '#0E2A12', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>
      <FadeIn className="relative z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Link to="/journey" style={{ textDecoration: 'none' }}>
            <ContactButton label="Experience the Seed to Shelf Journey" large />
          </Link>
        </motion.div>
      </FadeIn>
    </section>
  );
}
