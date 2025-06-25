
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import PersonalJourney from "@/components/PersonalJourney";
import ReferenceValues from "@/components/ReferenceValues";
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
      <ReferenceValues />
      <BusinessPlan />
      <ContactSection />
    </div>
  );
};

export default Index;
