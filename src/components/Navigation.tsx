import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Why Gaia Symphony', href: '#why' },
    { name: 'Technology', href: '#technology' },
    { name: 'Wisdom & Culture', href: '#wisdom' },
    { name: 'Stories & Voices', href: '#stories' },
    { name: 'Ecosystem Impact', href: '#impact' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-wisdom font-bold bg-gradient-aurora bg-clip-text text-transparent">
              Gaia Symphony
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-aurora scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-aurora text-background hover:shadow-glow transition-all duration-300">
              Discover the Symphony
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-aurora text-background hover:shadow-glow transition-all duration-300">
                Discover the Symphony
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;