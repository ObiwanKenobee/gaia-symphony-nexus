import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
      </div>

      {/* Floating Elements Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-glow rounded-full opacity-60 animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 animate-pulse">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Main Tagline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-wisdom font-bold mb-6 leading-tight">
          <span className="block text-foreground mb-2">Technology That</span>
          <span className="block bg-gradient-aurora bg-clip-text text-transparent mb-2">Listens</span>
          <span className="block text-foreground/90 text-3xl sm:text-4xl lg:text-5xl">
            Nature That Leads
          </span>
          <span className="block text-foreground/80 text-2xl sm:text-3xl lg:text-4xl mt-4">
            Humanity That Belongs
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto font-nature leading-relaxed">
          A visionary platform for regenerative, harmonizing technology that bridges ancient wisdom with future innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-aurora text-background hover:shadow-glow transition-all duration-500 hover:scale-105 group text-lg px-8 py-6"
          >
            Discover the Symphony
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-primary hover:bg-primary/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 text-lg px-8 py-6"
          >
            Watch the Vision
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Organic Shapes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;