import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/Yard Sale in Suburbia.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for sustainable fashion..."
                className="pl-10 pr-4 py-3 rounded-full border-border/30 bg-background/90 backdrop-blur-sm shadow-soft"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Browse your{" "}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  style
                </span>{" "}
                here!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Discover sustainable fashion that speaks to your soul. Every piece tells a story of conscious choices and timeless elegance.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="group">
                  Start Shopping
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="browse" size="lg">
                  Browse Items
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={heroImage}
                  alt="Sustainable Fashion Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;