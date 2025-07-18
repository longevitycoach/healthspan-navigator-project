import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative" style={{
    backgroundImage: `url('/lovable-uploads/cb871aff-1e4a-400c-b97a-504fbd0c0049.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
              Change Your Life
            </span>
            <br />
            <span className="text-white drop-shadow-lg">with Small Habits</span>
          </h1>
          
          <p className="text-base sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            <strong>Measure the progress - results in exponential Longevity.</strong>
            <br />
            Build your healthspan one atomic habit at a time—powered by secure AI agents that gather your biomarkers, wearable metrics, and lifestyle data. Measure key metrics, act on bite-sized lessons drawn from the latest studies, expert books, and top podcasts, then re-measure to refine your plan. Progress that compounds into lasting vitality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              My Journey
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToFeatures} className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 border-white hover:border-white/90 transition-all duration-300 shadow-lg backdrop-blur-sm bg-fuchsia-500 hover:bg-fuchsia-400 text-fuchsia-100 rounded-full">
              Learn More
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button onClick={scrollToFeatures} className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2" aria-label="Scroll to features section">
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;