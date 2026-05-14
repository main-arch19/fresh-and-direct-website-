import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactSection from './components/ImpactSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import SeedToShelfPage from './pages/SeedToShelfPage';

function HomePage() {
  return (
    <main style={{ background: '#FFFFFF', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <ImpactSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journey" element={<SeedToShelfPage />} />
    </Routes>
  );
}
