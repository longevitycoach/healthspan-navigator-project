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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Blood Test Oracle */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
            </div>
            
            {/* Right Column - Habbit Builder Prototype */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://longevity-coach-et8m506.public.builtwithrocket.new/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Habbit Builder Prototype
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/cd68eedd-9546-47a8-bf00-a772884954f2.png" 
                  alt="Habbit Builder Interface - Daily Health Tracking Dashboard"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrototypesPage;