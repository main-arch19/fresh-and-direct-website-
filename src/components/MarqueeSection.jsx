import { useRef, useEffect, useState } from 'react';
import imgIrishPotato from '../assets/irish-potato.jpeg';
import imgBellPeppers from '../assets/bell-peppers.jpeg';
import imgGarlic1 from '../assets/garlic-1.jpeg';
import imgGarlic2 from '../assets/garlic-2.jpeg';
import imgGrapeTomatoes from '../assets/grape-tomatoes.jpeg';
import imgScallion from '../assets/scallion.jpeg';
import imgBeans from '../assets/beans.jpeg';

const produceTiles = [
  { name: 'Irish Potato', hue: 60, c: 0.10, img: imgIrishPotato },
  { name: 'Garlic 1', hue: 90, c: 0.05, img: imgGarlic1 },
  { name: 'Sweet Pepper', hue: 25, c: 0.18, img: imgBellPeppers },
  { name: 'Scallion', hue: 130, c: 0.14, img: imgScallion },
  { name: 'Scotch Bonnet', hue: 30, c: 0.20 },
  { name: 'Pumpkin', hue: 50, c: 0.18 },
  { name: 'Onion', hue: 80, c: 0.07 },
  { name: 'Garlic', hue: 90, c: 0.05 },
  { name: 'Pineapple', hue: 95, c: 0.16 },
  { name: 'Mango', hue: 70, c: 0.18 },
  { name: 'Tomato', hue: 25, c: 0.18 },
  { name: 'Garlic 2', hue: 90, c: 0.05, img: imgGarlic2 },
  { name: 'Grape', hue: 10, c: 0.20, img: imgGrapeTomatoes },
  { name: 'Sweet Potato', hue: 35, c: 0.14 },
  { name: 'Onions', hue: 80, c: 0.07, img: imgBeans },
  { name: 'Green Banana', hue: 120, c: 0.12 },
  { name: 'Plantain', hue: 90, c: 0.14 },
  { name: 'Scallion', hue: 130, c: 0.14, img: imgScallion },
  { name: 'Thyme', hue: 140, c: 0.12 },
  { name: 'Lettuce', hue: 135, c: 0.12 },
  { name: 'Coconut', hue: 90, c: 0.04 },
];

function Tile({ t }) {
  const bgStyle = t.img
    ? {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 55%), url(${t.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        background: `radial-gradient(circle at 35% 35%, oklch(0.72 ${t.c} ${t.hue}), oklch(0.35 ${t.c * 0.7} ${t.hue}) 80%)`,
      };

  return (
    <div
      className="rounded-2xl flex flex-col items-start justify-end shrink-0 overflow-hidden p-5"
      style={{
        width: 'clamp(260px, 55vw, 420px)',
        height: 'clamp(170px, 35vw, 270px)',
        border: '1px solid rgba(14,42,18,0.1)',
        ...bgStyle,
      }}
    >
      <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: '#FFFFFFcc' }}>
        [ {t.name} ]
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const o = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(o);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const row1 = produceTiles.slice(0, 11);
  const row2 = produceTiles.slice(11);

  const renderRow = (tiles, dir) => {
    const tripled = [...tiles, ...tiles, ...tiles];
    const x = dir === 'right' ? (offset - 200) : -(offset - 200);
    return (
      <div className="flex gap-3" style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}>
        {tripled.map((t, idx) => <Tile key={`${dir}-${idx}`} t={t} />)}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10" style={{ background: '#FFFFFF', overflow: 'hidden' }}>
      <div className="flex flex-col gap-3">
        {renderRow(row1, 'right')}
        {renderRow(row2, 'left')}
      </div>
    </section>
  );
}
