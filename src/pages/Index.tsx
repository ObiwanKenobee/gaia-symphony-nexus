import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyGaiaSection from '@/components/WhyGaiaSection';
import TechnologySection from '@/components/TechnologySection';
import WisdomSection from '@/components/WisdomSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-nature">
      <Navigation />
      <HeroSection />
      <WhyGaiaSection />
      <TechnologySection />
      <WisdomSection />
    </div>
  );
};

export default Index;
