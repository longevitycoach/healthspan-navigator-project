
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import PersonalJourney from "@/components/PersonalJourney";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import FeatureShowcase from "@/components/FeatureShowcase";
import BusinessPlan from "@/components/BusinessPlan";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      <HeroSection />
      <FeatureShowcase />
      <PersonalJourney />
      
      {/* Reference Values Teaser */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <span className="text-4xl">🧬</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Unlock Your Biological Potential
              </h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                Dive deeper into our comprehensive biomarker database with detailed clinical notes, 
                expert insights, and personalized optimization strategies from leading longevity researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    300+ Biomarkers
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Expert-Validated Ranges
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Actionable Insights
                  </span>
                </div>
              </div>
              <Button 
                onClick={() => window.location.href = '/reference-values'}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold"
              >
                Explore Complete Reference Values →
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <BusinessPlan />
      <ContactSection />
    </div>
  );
};

export default Index;
