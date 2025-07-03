import BusinessPlan from "@/components/BusinessPlan";
import Navigation from "@/components/Navigation";

const BusinessPlanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      <BusinessPlan />
    </div>
  );
};

export default BusinessPlanPage;