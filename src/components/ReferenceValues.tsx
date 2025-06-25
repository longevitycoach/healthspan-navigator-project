
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ReferenceValues = () => {
  const biomarkerCategories = [
    {
      category: "Cardiovascular",
      markers: [
        { name: "Total Cholesterol", optimal: "< 200 mg/dL", functional: "150-200 mg/dL", unit: "mg/dL" },
        { name: "LDL Cholesterol", optimal: "< 100 mg/dL", functional: "70-100 mg/dL", unit: "mg/dL" },
        { name: "HDL Cholesterol", optimal: "> 60 mg/dL", functional: "40-60 mg/dL", unit: "mg/dL" },
        { name: "Triglycerides", optimal: "< 100 mg/dL", functional: "100-150 mg/dL", unit: "mg/dL" },
        { name: "C-Reactive Protein", optimal: "< 1.0 mg/L", functional: "1.0-3.0 mg/L", unit: "mg/L" }
      ]
    },
    {
      category: "Metabolic",
      markers: [
        { name: "Fasting Glucose", optimal: "70-85 mg/dL", functional: "85-99 mg/dL", unit: "mg/dL" },
        { name: "HbA1c", optimal: "< 5.3%", functional: "5.3-5.6%", unit: "%" },
        { name: "Fasting Insulin", optimal: "< 5 μIU/mL", functional: "5-10 μIU/mL", unit: "μIU/mL" },
        { name: "HOMA-IR", optimal: "< 1.0", functional: "1.0-2.5", unit: "" }
      ]
    },
    {
      category: "Hormonal",
      markers: [
        { name: "Vitamin D", optimal: "40-60 ng/mL", functional: "30-40 ng/mL", unit: "ng/mL" },
        { name: "B12", optimal: "> 500 pg/mL", functional: "300-500 pg/mL", unit: "pg/mL" },
        { name: "Folate", optimal: "> 15 ng/mL", functional: "10-15 ng/mL", unit: "ng/mL" },
        { name: "TSH", optimal: "1.0-2.0 mIU/L", functional: "2.0-4.0 mIU/L", unit: "mIU/L" }
      ]
    },
    {
      category: "Longevity",
      markers: [
        { name: "Homocysteine", optimal: "< 7 μmol/L", functional: "7-10 μmol/L", unit: "μmol/L" },
        { name: "ApoB", optimal: "< 80 mg/dL", functional: "80-100 mg/dL", unit: "mg/dL" },
        { name: "Lp(a)", optimal: "< 30 mg/dL", functional: "30-50 mg/dL", unit: "mg/dL" },
        { name: "IGF-1", optimal: "150-250 ng/mL", functional: "100-300 ng/mL", unit: "ng/mL" }
      ]
    }
  ];

  return (
    <section id="reference-values" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Optimal Reference Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Evidence-based optimal ranges for key biomarkers focused on longevity and healthspan optimization
          </p>
        </div>

        <Tabs defaultValue="Cardiovascular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {biomarkerCategories.map((category) => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
                className="text-sm"
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {biomarkerCategories.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.markers.map((marker, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-slate-800 flex items-center justify-between">
                        {marker.name}
                        <Badge variant="outline" className="text-xs font-normal">
                          {category.category}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                        <span className="text-sm font-medium text-emerald-800">Optimal</span>
                        <span className="text-sm font-semibold text-emerald-700">
                          {marker.optimal}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-blue-800">Functional</span>
                        <span className="text-sm font-semibold text-blue-700">
                          {marker.functional}
                        </span>
                      </div>
                      {marker.unit && (
                        <div className="text-xs text-slate-500 text-center pt-2">
                          Unit: {marker.unit}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Understanding the Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-2">Optimal Ranges</h4>
              <p className="text-slate-600">
                Based on the latest longevity research and represent values associated with 
                healthspan optimization and reduced disease risk.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Functional Ranges</h4>
              <p className="text-slate-600">
                Conservative ranges that are still healthy but may not represent 
                the most optimal values for longevity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceValues;
