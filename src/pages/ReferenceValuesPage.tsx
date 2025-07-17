import Navigation from "@/components/Navigation";
import ReferenceValues from "@/components/ReferenceValues";

const ReferenceValuesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      <div className="pt-24">
        <ReferenceValues />
      </div>
    </div>
  );
};

export default ReferenceValuesPage;