
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface CategoryMenuProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
}

const CategoryMenu = ({ categories, activeCategory, setActiveCategory }: CategoryMenuProps) => {
  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "ghost"}
          className="w-full justify-start text-left"
          onClick={() => setActiveCategory(category.id)}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryMenu;
