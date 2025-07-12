import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  ArrowLeftRight,
  AlertTriangle,
  MessageSquare,
  BarChart3,
  Megaphone,
  LogOut,
  Menu,
  X,
  Leaf,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const menuItems = [
  { 
    title: "Dashboard", 
    url: "/admin", 
    icon: LayoutDashboard,
    exact: true
  },
  { 
    title: "Users", 
    url: "/admin/users", 
    icon: Users 
  },
  { 
    title: "Listings", 
    url: "/admin/listings", 
    icon: Package 
  },
  { 
    title: "Swaps", 
    url: "/admin/swaps", 
    icon: ArrowLeftRight 
  },
  { 
    title: "Reports", 
    url: "/admin/reports", 
    icon: AlertTriangle 
  },
  { 
    title: "Feedback", 
    url: "/admin/feedback", 
    icon: MessageSquare 
  },
  { 
    title: "Analytics", 
    url: "/admin/analytics", 
    icon: BarChart3 
  },
  { 
    title: "Announcements", 
    url: "/admin/announcements", 
    icon: Megaphone 
  },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function AdminSidebar({ collapsed, onToggleCollapse }: AdminSidebarProps) {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
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
    }
  };

  return (
    <div className={cn(
      "flex flex-col bg-card border-r border-border transition-all duration-300 h-screen",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Admin Panel</h2>
              <p className="text-xs text-muted-foreground"></p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="p-2"
        >
          {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            className={({ isActive: navIsActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                (navIsActive || isActive(item.url, item.exact))
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span>{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-2 border-t border-border space-y-1">
        <Button
          variant="ghost"
          asChild
          className={cn(
            "w-full justify-start gap-3 text-muted-foreground hover:text-foreground",
            collapsed && "justify-center"
          )}
        >
          <Link to="/">
            <ArrowLeft className="h-5 w-5" />
            {!collapsed && <span>Back to Site</span>}
          </Link>
        </Button>
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={cn(
            "w-full justify-start gap-3 text-muted-foreground hover:text-foreground",
            collapsed && "justify-center"
          )}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
}