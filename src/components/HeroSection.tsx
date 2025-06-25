
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Change Your Life
            </span>
            <br />
            <span className="text-slate-800">with Small Habits</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>Measure the progress - results in exponential Longevity.</strong>
            <br />
            Build your healthspan one atomic habit at a time—powered by secure AI agents that gather your biomarkers, wearable metrics, and lifestyle data. Measure key metrics, act on bite-sized lessons drawn from the latest studies, expert books, and top podcasts, then re-measure to refine your plan. Progress that compounds into lasting vitality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full border-2 border-slate-300 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
              onClick={scrollToFeatures}
            >
              Learn More
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button onClick={scrollToFeatures} className="text-slate-400 hover:text-blue-600 transition-colors">
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
