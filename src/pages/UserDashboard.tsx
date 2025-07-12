import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { UserAvatar } from "./UserAvatar";
import { DashboardCard } from "./DashboardCard";
import { Edit, Plus, Settings, Search, Images, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";


export function UserDashboard() {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    joinDate: "Member since 2023"
  });

  const [listings] = useState([
    {
      id: 1,
      title: "Vintage Denim Jacket",
      price: "$45.00",
      status: "active",
      image: undefined
    },
    {
      id: 2,
      title: "Designer Silk Scarf",
      price: "$32.00",
      status: "sold",
      image: undefined
    },
    {
      id: 3,
      title: "Cotton Summer Dress",
      price: "$28.00",
      status: "active",
      image: undefined
    },
    {
      id: 4,
      title: "Leather Crossbody Bag",
      price: "$65.00",
      status: "pending",
      image: undefined
    }
  ]);

  const [purchases] = useState([
    {
      id: 1,
      title: "Bohemian Maxi Dress",
      price: "$38.00",
      status: "delivered",
      image: undefined
    },
    {
      id: 2,
      title: "Vintage Band T-Shirt",
      price: "$22.00",
      status: "shipped",
      image: undefined
    },
    {
      id: 3,
      title: "Wool Winter Coat",
      price: "$85.00",
      status: "delivered",
      image: undefined
    },
    {
      id: 4,
      title: "Statement Earrings",
      price: "$15.00",
      status: "processing",
      image: undefined
    }
  ]);

  const [coins] = useState(120); // Example: 120 coins earned

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex justify-end items-center mt-4 mb-2">
          <div className="flex items-center bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full px-5 py-2 shadow-lg animate-bounce">
            <Coins className="text-yellow-600 w-7 h-7 mr-2 drop-shadow pr-2" />
            <span className="text-xl font-extrabold text-yellow-800 ">{coins} Coins</span>
          </div>
        </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-700"></h1>
          <Button asChild variant="outline" size="sm">
            <a href="/my-listings">My Listings</a>
          </Button>
        </div>
        {/* Profile Section */}
        <Card className="mb-8 border-green-200 shadow-card">
          <CardHeader className="bg-gradient-subtle border-b border-green-200 flex flex-row items-center justify-between">
            <CardTitle className="text-green-700">User Profile</CardTitle>
            <Link to="/user-profile">
              <Button variant="outline" size="sm">
                Go to Profile
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center space-y-4">
                <UserAvatar name={user.name} size="xl" />
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Change Photo
                </Button>
              </div>

              {/* Profile Form */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-green-700">Full Name</Label>
                  <Input 
                    id="name" 
                    value={user.name} 
                    className="border-green-200 focus:border-green-400 focus:ring-green-200"
                    readOnly
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-700">Email Address</Label>
                  <Input 
                    id="email" 
                    value={user.email} 
                    className="border-green-200 focus:border-green-400 focus:ring-green-200"
                    readOnly
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-green-700">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={user.phone} 
                    className="border-green-200 focus:border-green-400 focus:ring-green-200"
                    readOnly
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-green-700">Location</Label>
                  <Input 
                    id="location" 
                    value={user.location} 
                    className="border-green-200 focus:border-green-400 focus:ring-green-200"
                    readOnly
                  />
                </div>
                
                <div className="md:col-span-2 pt-4">
                  <Button variant="default" className="w-full md:w-auto">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Listings Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-green-700">My Listings</h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-4 w-4" />
                <Input 
                  placeholder="Search listings..."
                  className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-200"
                />
              </div>
              <Button variant="default">
                <Plus className="h-4 w-4 mr-2" />
                Add Listing
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <DashboardCard
                key={listing.id}
                title={listing.title}
                price={listing.price}
                status={listing.status}
                type="listing"
                onView={() => console.log("View listing", listing.id)}
                onEdit={() => console.log("Edit listing", listing.id)}
                onDelete={() => console.log("Delete listing", listing.id)}
              />
            ))}
          </div>
        </div>

        {/* My Purchases Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-green-700">My Purchases</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 h-4 w-4" />
              <Input 
                placeholder="Search purchases..."
                className="pl-10 border-green-200 focus:border-green-400 focus:ring-green-200"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purchases.map((purchase) => (
              <DashboardCard
                key={purchase.id}
                title={purchase.title}
                price={purchase.price}
                status={purchase.status}
                type="purchase"
                onView={() => console.log("View purchase", purchase.id)}
              />
            ))}
          </div>
        </div>

        {/* Coins Badge */}

      </div>
    </div>
  );
}