import { Shirt, Crown, Footprints, Gem, Heart, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Sustainable Tops",
    icon: Shirt,
    description: "Eco-friendly t-shirts & blouses",
    color: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    id: 2,
    name: "Elegant Dresses",
    icon: Crown,
    description: "Timeless formal wear",
    color: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    id: 3,
    name: "Ethical Footwear",
    icon: Footprints,
    description: "Comfortable & sustainable shoes",
    color: "bg-gradient-to-br from-secondary/30 to-secondary/10"
  },
  {
    id: 4,
    name: "Accessories",
    icon: Gem,
    description: "Handcrafted jewelry & bags",
    color: "bg-gradient-to-br from-primary/15 to-primary/8"
  },
  {
    id: 5,
    name: "Wellness",
    icon: Heart,
    description: "Yoga wear & comfort",
    color: "bg-gradient-to-br from-accent/15 to-accent/8"
  },
  {
    id: 6,
    name: "Organic Collection",
    icon: Leaf,
    description: "100% organic materials",
    color: "bg-gradient-to-br from-secondary/40 to-secondary/15"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections designed for conscious fashion lovers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group hover:shadow-medium transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;