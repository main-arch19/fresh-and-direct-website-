import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './ui/FadeIn';
import { GhostButton } from './ui/Buttons';
import stMaryShot1 from '../assets/st-mary-shot-1.jpeg';
import stMaryShot2 from '../assets/st-mary-shot-2.jpeg';
import stMaryHero from '../assets/st-mary-hero.jpeg';
import freshExpressShot1 from '../assets/fresh-express-shot-1.jpeg';
import freshExpressShot2 from '../assets/fresh-express-shot-2.jpeg';
import freshExpressHero from '../assets/fresh-express-hero.jpeg';

const projects = [
  {
    n: '01',
    cat: 'Flagship Investment',
    name: 'New Pen, St. Mary',
    summary: '$50M planted into Irish-potato cultivation — publicly commended by the Minister of Agriculture as a model for farmer returns.',
    hue: 70,
    imgs: [stMaryShot1, stMaryShot2, stMaryHero],
    link: 'https://www.jamaicaobserver.com/2021/02/03/green-commends-fresh-direct-ltd-for-50-million-investment-in-agriculture/',
  },
  {
    n: '02',
    cat: 'Digital Division',
    name: 'Fresh Mart Express',
    summary: 'Online produce marketplace delivering 46+ items across Kingston, St Andrew and Portmore — downtown prices without the downtown experience.',
    hue: 35,
    imgs: [freshExpressShot1, freshExpressShot2, freshExpressHero],
    link: 'https://past.jamaica-gleaner.com/article/business/20150524/food-produce-market-now-available-online-fresh-mart-express',
  },
];

function ProjectImage({ label, hue, src, style }) {
  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        background: src ? '#000' : `radial-gradient(circle at 40% 30%, oklch(0.72 0.14 ${hue}), oklch(0.34 0.08 ${hue}) 80%)`,
        borderRadius: 'clamp(28px, 4vw, 48px)',
        border: '1px solid rgba(14,42,18,0.1)',
        ...style,
      }}
    >
      {src && (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ borderRadius: 'inherit' }}
        />
      )}
    </div>
  );
}

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="min-h-[80vh] md:h-[88vh] flex items-start sticky" style={{ top: 0 }}>
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
          position: 'sticky',
          background: '#FFFFFF',
          border: '2px solid #0E2A12',
          borderRadius: 'clamp(40px, 5vw, 60px)',
          boxShadow: '0 20px 50px -25px rgba(14,42,18,0.25)',
          width: '100%',
        }}
        className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6"
      >
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <div
              className="font-black"
              style={{ color: '#0E2A12', fontSize: 'clamp(3rem, 9vw, 130px)', lineHeight: 0.9 }}
            >
              {project.n}
            </div>
            <div className="flex flex-col gap-2 max-w-md">
              <span
                className="uppercase tracking-widest font-light"
                style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.9rem)' }}
              >
                {project.cat}
              </span>
              <span
                className="uppercase font-medium"
                style={{ color: '#0E2A12', fontSize: 'clamp(1rem, 2vw, 1.8rem)', lineHeight: 1 }}
              >
                {project.name}
              </span>
              <span
                className="font-light leading-snug mt-1"
                style={{ color: '#4B5A48', fontSize: 'clamp(0.8rem, 1vw, 1rem)' }}
              >
                {project.summary}
              </span>
            </div>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GhostButton label="Read Story" />
            </a>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 md:gap-5">
          <div className="col-span-2 hidden md:flex flex-col gap-3 md:gap-5" aria-hidden="true">
            <ProjectImage
              label={`[ ${project.name} — shot 1 ]`}
              hue={project.hue}
              src={project.imgs?.[0]}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <ProjectImage
              label={`[ ${project.name} — shot 2 ]`}
              hue={project.hue + 20}
              src={project.imgs?.[1]}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="col-span-1 sm:col-span-3">
            <ProjectImage
              label={`[ ${project.name} — hero ]`}
              hue={project.hue + 40}
              src={project.imgs?.[2]}
              style={{ height: '100%', minHeight: 'clamp(300px, 40vw, 590px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 pb-14 sm:pb-20 md:pb-28" style={{ background: '#FFFFFF' }}>
      <div className="overflow-hidden pt-12 sm:pt-16 md:pt-24">
        <FadeIn
          className="text-center uppercase tracking-[0.4em] font-light mb-6"
          y={20}
          style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
        >
          Featured Work
        </FadeIn>
        <FadeIn
          as="h2"
          y={40}
          className="heading-dark font-black uppercase tracking-tight leading-none text-center"
          style={{ fontSize: 'clamp(48px, 12vw, 12vw)' }}
        >
          Projects
        </FadeIn>
      </div>
      <div className="px-5 sm:px-8 md:px-10 mt-12 md:mt-20">
        {projects.map((p, i) => (
          <ProjectCard key={p.n} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
