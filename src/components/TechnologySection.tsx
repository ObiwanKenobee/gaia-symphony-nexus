import { useState } from 'react';
import { Brain, Shield, Leaf, Zap, Eye, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TechnologySection = () => {
  const [activeNode, setActiveNode] = useState(null);

  const techNodes = [
    {
      id: 'wisdom-ai',
      icon: Brain,
      title: "Wisdom-Trained AI",
      spirit: "Ancient knowledge meets computational intelligence",
      science: "Neural networks trained on indigenous wisdom, philosophical texts, and ecological patterns",
      details: "Our AI systems learn not just from data, but from millennia of human wisdom traditions, creating technology that makes decisions with both logic and deep understanding."
    },
    {
      id: 'nature-contracts',
      icon: Shield,
      title: "Nature Rights Contracts",
      spirit: "Legal standing for the more-than-human world",
      science: "Blockchain-based smart contracts that encode rights for rivers, forests, and ecosystems",
      details: "Smart contracts that automatically protect and advocate for natural systems, giving legal voice to the voiceless and ensuring technology serves ecological wellbeing."
    },
    {
      id: 'bio-networks',
      icon: Leaf,
      title: "Floating Bio-Nanonets",
      spirit: "Technology that breathes with the world",
      science: "Photosynthetic atmospheric processors using bio-mimetic materials",
      details: "Aerial networks of living technology that clean air while generating energy, floating like gentle canopies that work in harmony with natural systems."
    },
    {
      id: 'story-sensors',
      icon: Eye,
      title: "Story-Activated VR",
      spirit: "Narratives that transform reality",
      science: "Context-aware sensors that trigger immersive experiences based on location and story",
      details: "VR systems that respond to the stories embedded in places, revealing the deeper narratives of landscapes and helping humans reconnect with the earth's memory."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-wisdom font-bold mb-6">
            🔬 Technology
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets ancient intelligence. Our technology is designed with spirit and science, 
            creating systems that serve life rather than extracting from it.
          </p>
        </div>

        {/* Interactive Tech Nodes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techNodes.map((node) => (
            <Card 
              key={node.id}
              className={`cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-glow ${
                activeNode === node.id ? 'ring-2 ring-primary shadow-glow bg-primary/5' : 'hover:bg-primary/5'
              }`}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            >
              <CardHeader className="text-center">
                <node.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="text-lg font-wisdom">{node.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 text-center">{node.spirit}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Node Details */}
        {activeNode && (
          <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in">
            <CardContent className="p-8">
              {(() => {
                const node = techNodes.find(n => n.id === activeNode);
                return (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-wisdom font-semibold mb-4 flex items-center">
                        <node.icon className="w-6 h-6 mr-2 text-primary" />
                        {node.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-accent mb-2">🌟 The Spirit</h4>
                          <p className="text-foreground/80">{node.spirit}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold mb-2">⚗️ The Science</h4>
                          <p className="text-foreground/80">{node.science}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-4">🔍 Deep Dive</h4>
                      <p className="text-foreground/70 leading-relaxed">{node.details}</p>
                    </div>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {/* Transparency Section */}
        <div className="bg-gradient-earth rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <Code className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-wisdom font-semibold mb-4">
              📚 Radical Transparency
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Every algorithm, every design choice, every line of code is open for the world to see, 
              critique, and improve. Technology this powerful must be built in the light.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">🔓 Open Source Specs</h4>
              <p className="text-sm text-white/80">All technical documentation and code freely available</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">🧭 Ethical Design Principles</h4>
              <p className="text-sm text-white/80">Human-centered, Earth-conscious, wisdom-guided development</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Explore the Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;