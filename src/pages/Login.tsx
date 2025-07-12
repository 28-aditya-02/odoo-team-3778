import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Recycle, Leaf, User, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  // Typewriter animation state (looping, smooth)
  const typewriterText = "Wear.Share.Care!";
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

    try {
      const success = await login(email, password);
      if (success) {
        toast({
          title: "Welcome to VastraVerse!",
          description: "Login successful. Start your sustainable fashion journey.",
        });
        navigate("/");
      } else {
        toast({
          title: "Login failed",
          description: "Invalid username or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
            The art of conscious clothing exchange
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

      {/* Right Side - Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-black mb-8">Log in</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User className="w-5 h-5" />
                  </span>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-100 border-0 rounded-2xl py-6 pl-12 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="relative">
                  {/* Left icon */}
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock className="w-5 h-5" />
                  </span>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-100 border-0 rounded-2xl py-6 pl-12 pr-12 text-black placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
                    required
                  />
                  {/* Right icon (eye) */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span className="text-gray-500">Remember Me</span>
                </label>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-6 text-lg rounded-2xl transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
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

              <Link to="/signup">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-gray-200 text-black hover:bg-gray-50 font-medium py-6 text-lg rounded-2xl transition-all duration-200"
                >
                  Sign up
                </Button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
