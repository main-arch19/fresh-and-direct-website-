import FadeIn from './ui/FadeIn';

const services = [
  {
    n: '01',
    name: 'Produce Marketing & Sales',
    desc: "The bridge between Jamaica's farms and its shelves. We source and distribute fresh produce — local and imported — to traditional market vendors at Coronation and Brown's Town markets, and supply indirectly to retail chains like PriceSmart and hotels island-wide.",
  },
  {
    n: '02',
    name: 'Fresh & Direct Farms',
    desc: 'As farmers ourselves, we produce Irish potatoes in St. Mary (fall) and Manchester (spring), and onions in Spring Plain, Clarendon. Our Essex Valley, St. Elizabeth facility expands onion and scallion production and processes value-added pepper and scallion mash. We also partner with small to medium farmers island-wide — providing seeds, inputs, and financial support — and collaborate with RADA to deliver training in planting and post-harvest care.',
  },
  {
    n: '03',
    name: 'Fresh & Direct Storage',
    desc: "A state-of-the-art post-harvest facility built to minimize loss to spoilage and shrinkage — helping farmers maximize profit on the hard work they've already put in the ground.",
  },
  {
    n: '04',
    name: 'Fresh Mart Express',
    desc: 'Our online produce marketplace and delivery service. Households across Kingston, St Andrew and Portmore order provisions, seasonings, fruits and vegetables online — downtown prices without the downtown experience.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-5 sm:px-8 md:px-10 py-14 sm:py-20 md:py-28" style={{ background: '#FFFFFF' }}>
      <FadeIn
        className="text-center uppercase font-light mb-6"
        y={20}
        style={{ color: '#C99A2E', fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
      >
        What We Do
      </FadeIn>
      <FadeIn
        as="h2"
        y={40}
        className="font-black uppercase text-center mb-10 sm:mb-16 md:mb-24"
        style={{ color: '#0E2A12', fontSize: 'clamp(2.25rem, 9vw, 120px)', lineHeight: 1 }}
      >
        Services
      </FadeIn>
      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.1}
            className="flex items-start gap-4 sm:gap-10 md:gap-14 py-5 sm:py-8 md:py-10"
            style={{
              borderTop: i === 0 ? '1px solid var(--line)' : 'none',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <div
              className="font-black shrink-0"
              style={{ color: '#0E2A12', fontSize: 'clamp(1.4rem, 6vw, 80px)', lineHeight: 0.9 }}
            >
              {s.n}
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 pt-2">
              <div
                className="font-medium uppercase"
                style={{ color: '#0E2A12', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', lineHeight: 1.05 }}
              >
                {s.name}
              </div>
              <div
                className="font-light leading-relaxed max-w-2xl"
                style={{ color: '#4B5A48', fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {s.desc}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
