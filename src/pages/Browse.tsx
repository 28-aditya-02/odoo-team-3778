import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Browse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Browse Our Collection
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated selection of fashion items. From trendy streetwear to elegant formal wear, 
            find your perfect style with our diverse collection.
          </p>
        </div>
        
        {/* Placeholder for browse content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-card rounded-lg p-6 border border-border">
              <div className="w-full h-48 bg-muted rounded-md mb-4"></div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Fashion Item {item}
              </h3>
              <p className="text-muted-foreground">
                Beautiful fashion item with amazing design and quality materials.
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse; 