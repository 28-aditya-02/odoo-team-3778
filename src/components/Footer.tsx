import { Heart, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">वस्त्र</span>Verse
            </h3>
            <p className="text-background/80 mb-4 max-w-md">
              Sustainable fashion for conscious souls. Every thread tells a story of ethical choices and timeless elegance.
            </p>
            <div className="flex items-center space-x-4 text-sm text-background/70">
              <div className="flex items-center">
                <Leaf className="h-4 w-4 mr-1 text-primary" />
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-1 text-primary" />
                <span>Ethically Made</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Browse</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 वस्त्रVerse. Made with ❤️ for sustainable fashion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;