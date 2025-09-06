import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  category: string;
  location: string;
  imageUrl: string;
  isLiked?: boolean;
  condition: "excellent" | "good" | "fair";
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  category,
  location,
  imageUrl,
  isLiked = false,
  condition
}: ProductCardProps) => {
  const savings = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-card to-background shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-destructive text-destructive' : ''}`} />
          </Button>
        </div>

        {/* Savings Badge */}
        {savings > 0 && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-success text-success-foreground">
              Save {savings}%
            </Badge>
          </div>
        )}

        {/* Condition Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {condition}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-sm text-muted-foreground capitalize">{category}</p>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>

        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          {location}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="shrink-0">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;