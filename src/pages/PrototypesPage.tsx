import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

const PrototypesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Current Prototypes
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Exploring what brings the most benefit for health and longevity enthusiasts in the discovery phase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Blood Test Oracle */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Blood Test Oracle</h3>
                <p className="text-slate-600 text-sm mb-4">
                  An AI-powered tool that analyzes blood test results and provides personalized health insights based on reference values and longevity research. Upload your lab results to get actionable recommendations for optimal health.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-emerald-50"
                >
                  <a href="https://mabu.red/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo Blood Test
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/22aee038-5083-49ea-be98-a5a007fc656d.png" 
                  alt="Blood Test Oracle Interface - Blood Test Analysis Form"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://github.com/ma3u/blood-test/" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    First Prototype (GitHub)
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Middle Column - Habit Builder Prototype */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Habit Builder</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A comprehensive habit tracking and building platform designed to help users develop sustainable healthy behaviors. Features daily tracking, progress visualization, and science-based habit formation strategies.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://longevity-coach-et8m506.public.builtwithrocket.new/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Habit Builder Prototype
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/cd68eedd-9546-47a8-bf00-a772884954f2.png" 
                  alt="Habit Builder Interface - Daily Health Tracking Dashboard"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
            </div>
            
            {/* Right Column - Health Longevity Dashboard */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Educational Healthspan</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A German-language educational platform focused on healthspan optimization and longevity science. Provides evidence-based information about aging, health metrics, and lifestyle interventions for extending healthy lifespan.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-emerald-50"
                >
                  <a href="https://gesund.longevitycoa.ch/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Educational Healthspan (German)
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/60e01b13-c72b-42e1-8663-eb59a7779ffd.png" 
                  alt="Health Longevity Dashboard - Aging Statistics and Health Insights"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://github.com/longevitycoach/gesund-deutschland-jetzt" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub Repository
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrototypesPage;