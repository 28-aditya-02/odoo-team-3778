import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { UserAvatar } from "./UserAvatar";
import { UserDashboard } from "./UserDashboard";
import { DashboardCard } from "./DashboardCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  LogOut, 
  Settings, 
  Heart, 
  ShoppingBag, 
  Package,
  Edit,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function UserProfile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      logout();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
        
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          
          {/* User Dashboard Component */}
          <UserDashboard />
        </div>
      </div>
    </div>
  );
} 