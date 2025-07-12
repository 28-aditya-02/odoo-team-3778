import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About वस्त्रVerse
            </h1>
            <p className="text-muted-foreground text-lg">
              Your destination for curated fashion and style inspiration
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4">
                वस्त्रVerse was born from a passion for fashion and a desire to create a platform 
                where style meets substance. We believe that fashion is more than just clothing—it's 
                a form of self-expression and confidence.
              </p>
              <p className="text-muted-foreground">
                Our team of fashion enthusiasts and style experts work tirelessly to curate the 
                best collections, ensuring that every piece we feature meets our high standards 
                for quality, style, and affordability.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Company Image</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To inspire and empower individuals to express their unique style with confidence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We carefully select each item to ensure the highest quality and latest trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building a community of fashion lovers who share our passion for style.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">hello@vastraverse.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Fashion District, Style City</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 