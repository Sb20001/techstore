import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Product } from "./ProductCard";
import { useMemo } from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  products: Product[];
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  products 
}: CategoryFilterProps) {
  // Calculate product counts per category
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    return counts;
  }, [products]);

  const totalProducts = products.length;

  return (
    <Card className="p-4">
      <h3 className="mb-4">Categories</h3>
      <div className="space-y-2">
        <Button
          variant={selectedCategory === "All" ? "default" : "ghost"}
          className="w-full justify-between"
          onClick={() => onSelectCategory("All")}
        >
          <span>All Products</span>
          <Badge variant="secondary" className="ml-2">
            {totalProducts}
          </Badge>
        </Button>
        
        {categories.filter(cat => cat !== "All").map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            className="w-full justify-between"
            onClick={() => onSelectCategory(category)}
          >
            <span>{category}</span>
            <Badge variant="secondary" className="ml-2">
              {productCounts[category] || 0}
            </Badge>
          </Button>
        ))}
      </div>
    </Card>
  );
}