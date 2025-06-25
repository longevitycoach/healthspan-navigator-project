
import { Card, CardContent } from "@/components/ui/card";
import { Search, Check, List, Clock } from "lucide-react";

const FeatureShowcase = () => {
  const features = [
    {
      icon: Search,
      title: "Health Insights",
      description: "Monitor key biomarkers, visualize trends, and identify health risks early with comprehensive data analysis.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Check,
      title: "Personalized Guidance",
      description: "Receive tailored health recommendations, set custom goals, and track your progress over time.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: List,
      title: "Data Integration",
      description: "Connect with major laboratories, sync wearables, and maintain secure, HIPAA-compliant health records.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Optimal Experience",
      description: "Responsive design, dark/light modes, data export capabilities, and smart health reminders.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to take control of your health and optimize your longevity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
