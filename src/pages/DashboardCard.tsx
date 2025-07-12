import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2, Heart } from "lucide-react";

interface DashboardCardProps {
  title: string;
  price?: string;
  status?: string;
  image?: string;
  type: "listing" | "purchase";
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function DashboardCard({ 
  title, 
  price, 
  status, 
  image, 
  type, 
  onView, 
  onEdit, 
  onDelete 
}: DashboardCardProps) {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 border-green-200 hover:border-green-400">
      <CardHeader className="p-0">
        <div className="aspect-square bg-gradient-subtle rounded-t-md flex items-center justify-center relative overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-green-400 text-4xl">👕</div>
          )}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon"  className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-sm font-medium line-clamp-2 text-foreground">
              {title}
            </CardTitle>
            {status && (
              <Badge 
                variant={status === "active" ? "default" : "secondary"}
                className={status === "active" ? "bg-green-500 text-white" : ""}
              >
                {status}
              </Badge>
            )}
          </div>
          
          {price && (
            <p className="text-lg font-bold text-green-600">{price}</p>
          )}
          
          <div className="flex gap-1">
            <Button size="sm"  onClick={onView} className="flex-1">
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
            {type === "listing" && (
              <>
                <Button size="sm" variant="ghost" onClick={onEdit}>
                  <Edit className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" onClick={onDelete} className="text-red-500 hover:text-red-600">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}