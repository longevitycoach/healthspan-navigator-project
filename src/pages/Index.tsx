
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import PersonalJourney from "@/components/PersonalJourney";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import FeatureShowcase from "@/components/FeatureShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      <HeroSection />
      <FeatureShowcase />
      <PersonalJourney />
      
      {/* LinkedIn Article Reference */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <Linkedin className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                    Featured Article: The Science Behind Personalized Health Coaching
                  </h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                    Dive deeper into the scientific foundation of our approach with this comprehensive article 
                    exploring how current longevity research can be applied to create personalized health coaching solutions.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-200 hover:bg-blue-50 text-xs sm:text-sm"
                    onClick={() => window.open('https://www.linkedin.com/pulse/build-personalized-health-coach-based-current-state-buchhorn-roth-ptyfe/', '_blank')}
                  >
                    <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Read: "Build a personalized Health Coach based on the current state of science"</span>
                    <span className="sm:hidden">Read Article</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* German Market Educational Material */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="text-xl sm:text-2xl">🇩🇪</span>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                    German Market Research: Understanding Health Optimization Needs
                  </h3>
                  <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                    Help us understand the German-speaking market's specific needs for longevity and health optimization. 
                    Your insights will shape our localized approach and educational content.
                  </p>
                  <div className="mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600">
                    <p className="font-medium mb-1">Key questions we're exploring:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>What are the primary health concerns in German-speaking regions?</li>
                      <li>How do cultural attitudes towards preventive health differ?</li>
                      <li>What educational formats resonate best with this market?</li>
                      <li>Which biomarkers and health metrics are most valued?</li>
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-emerald-600 border-emerald-200 hover:bg-emerald-50 text-xs sm:text-sm"
                    onClick={() => window.open('https://gesund.longevitycoa.ch/', '_blank')}
                  >
                    <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Explore German Educational Material</span>
                    <span className="sm:hidden">German Material</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Reference Values Teaser */}
      <section className="py-6 sm:py-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">🧬</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
                Unlock Your Biological Potential
              </h3>
              <p className="text-sm sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Dive deeper into our comprehensive biomarker database with detailed clinical notes, 
                expert insights, and personalized optimization strategies from leading longevity researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-slate-600">
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
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold"
              >
                <Link to="/reference-values">
                  <span className="hidden sm:inline">Explore Complete Reference Values →</span>
                  <span className="sm:hidden">Explore Reference Values →</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Business Plan Teaser */}
      <section className="py-6 sm:py-10 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">📊</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
                Comprehensive Business Strategy
              </h3>
              <p className="text-sm sm:text-lg text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Explore our complete business plan covering market analysis, revenue model, competitive positioning, 
                and growth strategy for democratizing longevity science.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mb-4">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    Market Analysis
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Revenue Model
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Growth Strategy
                  </span>
                </div>
              </div>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold"
              >
                <Link to="/business-plan">
                  <span className="hidden sm:inline">View Complete Business Plan →</span>
                  <span className="sm:hidden">View Business Plan →</span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ContactSection />
      
      {/* Educational Disclaimer */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-400">
            <div className="flex items-start gap-3">
              <span className="text-xl">📚</span>
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Educational Purpose & Lifestyle Exploration</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  This project was started for educational purposes and lifestyle exploration. The information and tools provided 
                  are intended to help users learn about longevity science and health optimization. This platform is not intended 
                  to replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers 
                  before making changes to your health regimen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <p className="text-slate-500 text-sm">
              Coming Q2 2024 • Built with privacy and security in mind
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link 
                to="/impress" 
                className="text-slate-500 hover:text-slate-700 transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
