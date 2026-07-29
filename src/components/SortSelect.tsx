import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface SortSelectProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function SortSelect({ sortBy, onSortChange }: SortSelectProps) {
  return (
    <Select value={sortBy} onValueChange={onSortChange}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
        <SelectItem value="price-asc">Price (Low to High)</SelectItem>
        <SelectItem value="price-desc">Price (High to Low)</SelectItem>
        <SelectItem value="rating-desc">Rating (High to Low)</SelectItem>
        <SelectItem value="rating-asc">Rating (Low to High)</SelectItem>
        <SelectItem value="featured">Featured First</SelectItem>
      </SelectContent>
    </Select>
  );
}