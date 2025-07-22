import { TrendingDown, TrendingUp, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyGaiaSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Extraction",
      description: "Technology that depletes rather than replenishes",
      color: "text-red-500"
    },
    {
      icon: TrendingDown,
      title: "Disconnection", 
      description: "Systems that separate us from nature and each other",
      color: "text-orange-500"
    },
    {
      icon: TrendingDown,
      title: "Burnout",
      description: "Unsustainable cycles that exhaust people and planet",
      color: "text-yellow-600"
    }
  ];

  const solutions = [
    {
      icon: TrendingUp,
      title: "Regeneration",
      description: "Technology that gives back more than it takes",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Harmonization",
      description: "Systems that reconnect us with natural rhythms",
      color: "text-accent"
    },
    {
      icon: Lightbulb,
      title: "Renewal",
      description: "Sustainable cycles that energize all life",
      color: "text-gold"
    }
  ];

  return (
    <section id="why" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-wisdom font-bold mb-6">
            Why <span className="bg-gradient-aurora bg-clip-text text-transparent">Gaia Symphony</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            We stand at a crossroads between extraction and regeneration, disconnection and harmony. 
            The choice we make will define the next century of human-Earth relationships.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* The Problem */}
          <div>
            <h3 className="text-2xl font-wisdom font-semibold mb-8 text-center">
              🌍 The Problem: <span className="text-red-500">Extraction Era</span>
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-red-200 hover:shadow-organic transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <problem.icon className={`w-6 h-6 mt-1 ${problem.color}`} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{problem.title}</h4>
                      <p className="text-foreground/70">{problem.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div>
            <h3 className="text-2xl font-wisdom font-semibold mb-8 text-center">
              🌿 The Solution: <span className="bg-gradient-aurora bg-clip-text text-transparent">Regenerative Future</span>
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-primary/20 hover:shadow-glow transition-all duration-300 bg-primary/5">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <solution.icon className={`w-6 h-6 mt-1 ${solution.color}`} />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{solution.title}</h4>
                      <p className="text-foreground/70">{solution.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Timeline */}
        <div className="bg-gradient-forest rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-wisdom font-semibold mb-6 text-center">
            🔮 The Impossible Dream: 2025 → 2100
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold mb-2">2025-2030</h4>
              <p className="text-sm opacity-90">First bio-tech symbiosis networks emerge</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌳</div>
              <h4 className="font-semibold mb-2">2050</h4>
              <p className="text-sm opacity-90">Cities become living ecosystems with AI-nature collaboration</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-semibold mb-2">2100</h4>
              <p className="text-sm opacity-90">Earth-technology consciousness achieves planetary healing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGaiaSection;