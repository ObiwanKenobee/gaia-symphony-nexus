import { useState, useEffect } from 'react';
import { Mountain, Users, BookOpen, Infinity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WisdomSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const wisdomQuotes = [
    {
      text: "We do not inherit the earth from our ancestors; we borrow it from our children.",
      tradition: "Native American Proverb",
      philosophy: "Indigenous Wisdom"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      tradition: "Chinese Proverb", 
      philosophy: "Taoism"
    },
    {
      text: "Ubuntu: I am because we are. We are because I am.",
      tradition: "African Philosophy",
      philosophy: "Ubuntu"
    },
    {
      text: "You were born to work together with others. You are part of something greater.",
      tradition: "Marcus Aurelius",
      philosophy: "Stoicism"
    },
    {
      text: "When we know ourselves to be connected to all others, acting compassionately is simply the natural thing to do.",
      tradition: "Rachel Naomi Remen",
      philosophy: "Buddhism"
    }
  ];

  const philosophies = [
    {
      icon: Mountain,
      name: "Indigenous Wisdom",
      description: "Co-designed frameworks honoring first peoples' knowledge systems",
      principle: "Reciprocity with all relations"
    },
    {
      icon: Infinity,
      name: "Stoicism",
      description: "Ancient philosophy of virtue, wisdom, and harmony with nature",
      principle: "Live according to natural order"
    },
    {
      icon: Users,
      name: "Ubuntu",
      description: "African philosophy emphasizing interconnectedness and collective humanity",
      principle: "I am because we are"
    },
    {
      icon: BookOpen,
      name: "Buddhism",
      description: "Mindful awareness and compassionate action for all beings",
      principle: "Interdependence of all life"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % wisdomQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="wisdom" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-wisdom font-bold mb-6">
            📜 Wisdom & Culture
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets ancient intelligence. Technology guided by wisdom traditions 
            that have sustained humanity for millennia.
          </p>
        </div>

        {/* Living Scroll - Rotating Quotes */}
        <div className="mb-16">
          <Card className="bg-gradient-forest border-0 shadow-glow">
            <CardContent className="p-12 text-center text-white">
              <div className="min-h-[120px] flex flex-col justify-center">
                <blockquote className="text-2xl lg:text-3xl font-wisdom italic mb-6 transition-all duration-500">
                  "{wisdomQuotes[currentQuote].text}"
                </blockquote>
                <cite className="text-lg text-white/80">
                  — {wisdomQuotes[currentQuote].tradition}
                </cite>
                <p className="text-sm text-white/60 mt-2">
                  {wisdomQuotes[currentQuote].philosophy}
                </p>
              </div>
              
              {/* Quote Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {wisdomQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentQuote 
                        ? 'bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Philosophical Pillars */}
        <div className="mb-16">
          <h3 className="text-2xl font-wisdom font-semibold text-center mb-12">
            🧘 Philosophical Pillars
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((philosophy, index) => (
              <Card 
                key={index} 
                className="hover:shadow-organic transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6 text-center">
                  <philosophy.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-accent transition-colors duration-300" />
                  <h4 className="font-wisdom font-semibold text-lg mb-3">{philosophy.name}</h4>
                  <p className="text-sm text-foreground/70 mb-3">{philosophy.description}</p>
                  <div className="text-xs text-primary font-medium">
                    "{philosophy.principle}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Art & Poetry Engine */}
        <div className="bg-gradient-bio rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-wisdom font-semibold mb-4">
              🎨 Art & Poetry Engine
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              A living canvas where human creativity meets AI collaboration. 
              Submit your poems, stories, and art to be woven into the ever-evolving tapestry of Gaia consciousness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🖋️</div>
              <h4 className="font-semibold mb-2">Sacred Poetry</h4>
              <p className="text-sm text-white/80">Verses that bridge human heart and natural wisdom</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎭</div>
              <h4 className="font-semibold mb-2">Living Art</h4>
              <p className="text-sm text-white/80">Visual expressions of Earth-technology harmony</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌊</div>
              <h4 className="font-semibold mb-2">AI Collaboration</h4>
              <p className="text-sm text-white/80">Human creativity enhanced by wisdom-trained AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomSection;