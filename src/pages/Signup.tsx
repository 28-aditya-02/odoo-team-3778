import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Recycle, Leaf, User, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Typewriter animation for 'Join the Revolution!'
  const typewriterText = "Join the Revolution!";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = isDeleting ? 40 : 90;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < typewriterText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === typewriterText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, typewriterText]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate signup process
    setTimeout(() => {
      toast({
        title: "Welcome to VastraVerse!",
        description: "Account created successfully. Start your sustainable fashion journey.",
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Green Background with Branding */}
      <div className="flex-1 bg-[#0caa4f] flex flex-col justify-center items-center p-8 text-white relative">
        {/* Navigation Header */}
        <div className="absolute top-8 left-8 right-8">
          <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold  transition-colors bg-neutral-100 text-[#292c35] px-2 rounded-md py-1.5">
              <span className="text-[#59d083]">वस्त्र</span>Verse
            </Link>
            <div className="flex items-center gap-8 text-sm">
              {/* <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link> */}
            </div>
          </nav>
        </div>

        {/* Main Branding */}
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white mb-4">
            {displayedText}
            <span className="inline-block w-4" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </h2>
          <p className="text-white/90 text-lg">
            Be part of the sustainable fashion movement
          </p>
        </div>

        {/* Floating Action Button */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-4 flex items-center gap-2">
            <Recycle className="h-5 w-5 text-white" />
            <Leaf className="h-5 w-5 text-white" />
            <button className="text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-black mb-8">Sign up</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="w-5 h-5" />
                  </span>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="bg-gray-100 border-0 rounded-2xl py-6 pl-12 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-100 border-0 rounded-2xl py-6 pl-12 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-gray-100 border-0 rounded-2xl py-6 pl-12 pr-12 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-gray-100 border-0 rounded-2xl py-6 pl-12 pr-12 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded text-primary focus:ring-primary"
                  required
                />
                <span className="text-sm text-gray-500">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-6 text-lg rounded-2xl transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500">
                    Or
                  </span>
                </div>
              </div>

              <Link to="/login">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-200 text-black hover:bg-gray-50 font-medium py-6 text-lg rounded-2xl transition-all duration-200"
                >
                  Log in
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
