
import { Button } from "@/components/ui/button";

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

  const priorityOrder = ['horseman', 'foundation', 'performance', 'organ', 'specialized'];
  const priorityLabels = {
    horseman: '🏇 Four Horsemen',
    foundation: '🏗️ Foundation', 
    performance: '🎯 Performance',
    organ: '🏥 Organ Function',
    specialized: '🔬 Specialized'
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
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto p-3"
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-start gap-3 w-full">
                    <span className="text-lg">{category.icon}</span>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="font-medium text-sm">{category.label}</div>
                      {category.description && (
                        <div className="text-xs mt-0.5 opacity-70">
                          {category.description}
                        </div>
                      )}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
