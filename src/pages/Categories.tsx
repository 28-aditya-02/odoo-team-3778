import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mensFashion from "@/assets/MAN-FASHION.png";
import womensFashion from "@/assets/WOMAN-FASHION.png";
import accessories from "@/assets/acceseries.png";
import footwear from "@/assets/footwear.png";
import formalWear from "@/assets/formal-wear.png";
import casualWear from "@/assets/casual-wear.png";

const Categories = () => {
  const categories = [
    {
      name: "Men's Fashion",
      description: "Trendy clothing and accessories for men",
      count: "150+ items",
      image: mensFashion
    },
    {
      name: "Women's Fashion",
      description: "Elegant and stylish clothing for women",
      count: "200+ items",
      image: womensFashion
    },
    {
      name: "Accessories",
      description: "Jewelry, bags, and fashion accessories",
      count: "100+ items",
      image: accessories
    },
    {
      name: "Footwear",
      description: "Shoes, boots, and sandals for all occasions",
      count: "80+ items",
      image: footwear
    },
    {
      name: "Formal Wear",
      description: "Professional and formal attire",
      count: "60+ items",
      image: formalWear
    },
    {
      name: "Casual Wear",
      description: "Comfortable and stylish everyday clothing",
      count: "120+ items",
      image: casualWear
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Fashion Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse range of fashion categories. From casual wear to formal attire, 
            we have everything you need to express your unique style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer">
              <div className="w-full h-64 bg-muted rounded-md mb-4 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-muted-foreground mb-3">
                {category.description}
              </p>
              <span className="text-sm text-primary font-medium">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories; 