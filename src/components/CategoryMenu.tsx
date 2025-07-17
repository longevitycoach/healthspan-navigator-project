
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Category {
  id: string;
  label: string;
  icon: string;
  priority?: string;
  description?: string;
}

interface CategoryMenuProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (categoryId: string) => void;
}

const CategoryMenu = ({ categories, activeCategory, setActiveCategory }: CategoryMenuProps) => {
  // Group categories by priority
  const groupedCategories = categories.reduce((acc, category) => {
    const priority = category.priority || 'other';
    if (!acc[priority]) acc[priority] = [];
    acc[priority].push(category);
    return acc;
  }, {} as Record<string, Category[]>);

  const priorityOrder = ['horseman', 'foundation', 'performance', 'organ'];
  const priorityLabels = {
    horseman: '🏇 Four Horsemen',
    foundation: '🏗️ Foundation', 
    performance: '🎯 Performance',
    organ: '🏥 Organ Function'
  };

  return (
    <div className="space-y-6">
      {priorityOrder.map((priority) => {
        const categoryGroup = groupedCategories[priority];
        if (!categoryGroup) return null;

        return (
          <div key={priority}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              {priorityLabels[priority]}
            </h3>
            <div className="space-y-1">
              {categoryGroup.map((category) => (
                <Tooltip key={category.id}>
                  <TooltipTrigger asChild>
                    <Button
                      variant={activeCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start text-left h-auto px-3 py-2"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span className="text-base">{category.icon}</span>
                        <span className="font-medium text-sm">{category.label}</span>
                      </div>
                    </Button>
                  </TooltipTrigger>
                  {category.description && (
                    <TooltipContent side="right">
                      <p className="max-w-xs">{category.description}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
