import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  { id: "all", name: "All Categories", count: 1247 },
  { id: "electronics", name: "Electronics", count: 324 },
  { id: "clothing", name: "Clothing", count: 156 },
  { id: "furniture", name: "Furniture", count: 89 },
  { id: "books", name: "Books", count: 234 },
  { id: "sports", name: "Sports & Outdoors", count: 167 },
  { id: "home", name: "Home & Garden", count: 198 },
  { id: "toys", name: "Toys & Games", count: 79 }
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between"
          >
            <Button
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="justify-start w-full h-auto p-2 text-left"
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="flex-1">{category.name}</span>
            </Button>
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;