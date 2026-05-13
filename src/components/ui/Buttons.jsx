export function ContactButton({ label = 'Contact Us' }) {
  return (
    <button className="contact-btn rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer">
      {label}
    </button>
  );
}

export function GhostButton({ label = 'Learn More', dark = false }) {
  return (
    <button
      className="rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition cursor-pointer"
      style={{
        borderColor: dark ? '#FFFFFF' : '#0E2A12',
        color: dark ? '#FFFFFF' : '#0E2A12',
        background: 'transparent',
      }}
    >
      {label}
    </button>
  );
}
