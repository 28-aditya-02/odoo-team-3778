import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Dashboard } from "@/components/admin/Dashboard";
import { UserAvatar } from "./UserAvatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  LogOut, 
  Settings, 
  Users, 
  Package, 
  BarChart3,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Edit,
  Database,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminProfile() {
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

  if (!user || user.role !== 'admin') {
    navigate("/login");
    return null;
  }

  // Redirect to main admin dashboard
  useEffect(() => {
    navigate("/admin");
  }, [navigate]);

  return null;
}
