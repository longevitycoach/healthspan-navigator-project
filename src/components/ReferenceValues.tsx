import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const cardiovascularBiomarkers = [
  {
    name: "LDL-P",
    optimalRange: "< 1000 nmol/L",
    officialRange: "< 130 mg/dL",
    description: "LDL particle number is a more accurate measure of cardiovascular risk than LDL-C.",
    clinicalNotes: "High LDL-P is associated with increased risk of cardiovascular disease.",
    factors: ["Genetics", "Diet", "Exercise"]
  },
  {
    name: "ApoB",
    optimalRange: "< 80 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "Apolipoprotein B is a protein found on LDL particles. It is a more accurate measure of cardiovascular risk than LDL-C.",
    clinicalNotes: "High ApoB is associated with increased risk of cardiovascular disease.",
    factors: ["Genetics", "Diet", "Exercise"]
  },
  {
    name: "Lp(a)",
    optimalRange: "< 30 mg/dL",
    officialRange: "< 75 nmol/L",
    description: "Lipoprotein(a) is a lipoprotein that is associated with increased risk of cardiovascular disease.",
    clinicalNotes: "High Lp(a) is associated with increased risk of cardiovascular disease.",
    factors: ["Genetics"]
  },
  {
    name: "hs-CRP",
    optimalRange: "< 1 mg/L",
    officialRange: "< 3 mg/L",
    description: "High-sensitivity C-reactive protein is a marker of inflammation in the body.",
    clinicalNotes: "High hs-CRP is associated with increased risk of cardiovascular disease.",
    factors: ["Inflammation", "Infection", "Autoimmune disease"]
  },
  {
    name: "Homocysteine",
    optimalRange: "6-9 umol/L",
    officialRange: "< 15 umol/L",
    description: "Homocysteine is an amino acid that is associated with increased risk of cardiovascular disease.",
    clinicalNotes: "High homocysteine is associated with increased risk of cardiovascular disease.",
    factors: ["Genetics", "Diet", "Vitamin deficiencies"]
  }
];

const metabolicBiomarkers = [
  {
    name: "Fasting Glucose",
    optimalRange: "70-85 mg/dL",
    officialRange: "70-99 mg/dL",
    description: "Fasting glucose is a measure of blood sugar levels after an overnight fast.",
    clinicalNotes: "High fasting glucose is associated with increased risk of diabetes.",
    factors: ["Diet", "Exercise", "Insulin resistance"]
  },
  {
    name: "HbA1c",
    optimalRange: "< 5.3%",
    officialRange: "< 5.7%",
    description: "Hemoglobin A1c is a measure of average blood sugar levels over the past 2-3 months.",
    clinicalNotes: "High HbA1c is associated with increased risk of diabetes.",
    factors: ["Diet", "Exercise", "Insulin resistance"]
  },
  {
    name: "Fasting Insulin",
    optimalRange: "2-5 uIU/mL",
    officialRange: "2.6-24.9 uIU/mL",
    description: "Fasting insulin is a measure of insulin levels after an overnight fast.",
    clinicalNotes: "High fasting insulin is associated with insulin resistance.",
    factors: ["Diet", "Exercise", "Insulin resistance"]
  },
  {
    name: "HOMA-IR",
    optimalRange: "< 1",
    officialRange: "< 2.5",
    description: "Homeostatic Model Assessment of Insulin Resistance is a measure of insulin resistance.",
    clinicalNotes: "High HOMA-IR is associated with insulin resistance.",
    factors: ["Diet", "Exercise", "Insulin resistance"]
  },
  {
    name: "Triglycerides",
    optimalRange: "< 70 mg/dL",
    officialRange: "< 150 mg/dL",
    description: "Triglycerides are a type of fat in the blood.",
    clinicalNotes: "High triglycerides are associated with increased risk of cardiovascular disease.",
    factors: ["Diet", "Exercise", "Genetics"]
  }
];

const vitaminsBiomarkers = [
  {
    name: "Vitamin D",
    optimalRange: "50-80 ng/mL",
    officialRange: "30-100 ng/mL",
    description: "Vitamin D is a fat-soluble vitamin that is important for bone health and immune function.",
    clinicalNotes: "Low vitamin D is associated with increased risk of osteoporosis and immune dysfunction.",
    factors: ["Sun exposure", "Diet", "Supplementation"]
  },
  {
    name: "Vitamin B12",
    optimalRange: "> 500 pg/mL",
    officialRange: "200-1100 pg/mL",
    description: "Vitamin B12 is a water-soluble vitamin that is important for nerve function and red blood cell production.",
    clinicalNotes: "Low vitamin B12 is associated with increased risk of nerve damage and anemia.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Folate",
    optimalRange: "> 20 ng/mL",
    officialRange: "> 3.1 ng/mL",
    description: "Folate is a water-soluble vitamin that is important for cell growth and development.",
    clinicalNotes: "Low folate is associated with increased risk of birth defects and anemia.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Vitamin K2",
    optimalRange: "> 1 ng/mL",
    officialRange: "No official range",
    description: "Vitamin K2 is a fat-soluble vitamin that is important for bone health and blood clotting.",
    clinicalNotes: "Low vitamin K2 is associated with increased risk of osteoporosis and cardiovascular disease.",
    factors: ["Diet", "Supplementation"]
  },
  {
    name: "CoQ10",
    optimalRange: "> 1 ug/mL",
    officialRange: "0.4-1.8 ug/mL",
    description: "Coenzyme Q10 is an antioxidant that is important for energy production.",
    clinicalNotes: "Low CoQ10 is associated with increased risk of cardiovascular disease and neurodegenerative diseases.",
    factors: ["Age", "Medications", "Supplementation"]
  }
];

const mineralsBiomarkers = [
  {
    name: "Magnesium",
    optimalRange: "2.2-2.6 mg/dL",
    officialRange: "1.7-2.2 mg/dL",
    description: "Magnesium is a mineral that is important for bone health, muscle function, and nerve function.",
    clinicalNotes: "Low magnesium is associated with increased risk of osteoporosis, muscle cramps, and nerve damage.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Zinc",
    optimalRange: "90-110 ug/dL",
    officialRange: "60-120 ug/dL",
    description: "Zinc is a mineral that is important for immune function, wound healing, and cell growth.",
    clinicalNotes: "Low zinc is associated with increased risk of immune dysfunction and delayed wound healing.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Selenium",
    optimalRange: "100-150 ug/L",
    officialRange: "50-200 ug/L",
    description: "Selenium is a mineral that is important for thyroid function and antioxidant defense.",
    clinicalNotes: "Low selenium is associated with increased risk of thyroid dysfunction and cancer.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Copper",
    optimalRange: "80-120 ug/dL",
    officialRange: "70-175 ug/dL",
    description: "Copper is a mineral that is important for iron metabolism and nerve function.",
    clinicalNotes: "Low copper is associated with increased risk of anemia and nerve damage.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Iron",
    optimalRange: "50-150 ug/dL",
    officialRange: "25-150 ug/dL",
    description: "Iron is a mineral that is important for red blood cell production and oxygen transport.",
    clinicalNotes: "Low iron is associated with increased risk of anemia.",
    factors: ["Diet", "Absorption", "Supplementation"]
  }
];

const hormonesBiomarkers = [
  {
    name: "Testosterone",
    optimalRange: "600-900 ng/dL (males)",
    officialRange: "280-1100 ng/dL (males)",
    description: "Testosterone is a hormone that is important for muscle growth, bone density, and sexual function.",
    clinicalNotes: "Low testosterone is associated with increased risk of muscle loss, osteoporosis, and sexual dysfunction.",
    factors: ["Age", "Genetics", "Lifestyle"]
  },
  {
    name: "Estradiol",
    optimalRange: "20-40 pg/mL (females)",
    officialRange: "30-400 pg/mL (females)",
    description: "Estradiol is a hormone that is important for bone health, cardiovascular health, and sexual function.",
    clinicalNotes: "Low estradiol is associated with increased risk of osteoporosis and cardiovascular disease.",
    factors: ["Age", "Genetics", "Lifestyle"]
  },
  {
    name: "DHEA-S",
    optimalRange: "200-400 ug/dL",
    officialRange: "85-690 ug/dL",
    description: "Dehydroepiandrosterone sulfate is a hormone that is important for immune function and energy production.",
    clinicalNotes: "Low DHEA-S is associated with increased risk of immune dysfunction and fatigue.",
    factors: ["Age", "Genetics", "Lifestyle"]
  },
  {
    name: "Cortisol",
    optimalRange: "5-15 ug/dL",
    officialRange: "6-23 ug/dL",
    description: "Cortisol is a hormone that is important for stress response and energy production.",
    clinicalNotes: "Low cortisol is associated with increased risk of fatigue and immune dysfunction.",
    factors: ["Stress", "Sleep", "Lifestyle"]
  },
  {
    name: "Thyroid Stimulating Hormone (TSH)",
    optimalRange: "0.5-2.0 uIU/mL",
    officialRange: "0.4-4.0 uIU/mL",
    description: "Thyroid stimulating hormone is a hormone that is important for thyroid function.",
    clinicalNotes: "High TSH is associated with hypothyroidism.",
    factors: ["Thyroid disease", "Medications", "Lifestyle"]
  }
];

const longevityBiomarkers = [
  {
    name: "Fasting Blood Glucose",
    optimalRange: "70-85 mg/dL",
    officialRange: "70-99 mg/dL",
    description: "Fasting blood glucose levels are a key indicator of metabolic health and insulin sensitivity.",
    clinicalNotes: "Maintaining optimal fasting glucose levels is crucial for preventing insulin resistance and type 2 diabetes.",
    factors: ["Diet", "Exercise", "Stress Management"]
  },
  {
    name: "Hemoglobin A1c (HbA1c)",
    optimalRange: "< 5.3%",
    officialRange: "< 5.7%",
    description: "HbA1c provides an average of blood sugar levels over the past 2-3 months.",
    clinicalNotes: "Keeping HbA1c in the optimal range is essential for preventing long-term complications of diabetes.",
    factors: ["Diet", "Exercise", "Medications"]
  },
  {
    name: "High-Sensitivity C-Reactive Protein (hs-CRP)",
    optimalRange: "< 1 mg/L",
    officialRange: "< 3 mg/L",
    description: "hs-CRP is a marker of inflammation in the body.",
    clinicalNotes: "Lowering hs-CRP levels can reduce the risk of cardiovascular disease and other chronic conditions.",
    factors: ["Diet", "Exercise", "Stress Reduction"]
  },
  {
    name: "Lipoprotein(a) [Lp(a)]",
    optimalRange: "< 30 mg/dL",
    officialRange: "< 75 nmol/L",
    description: "Lp(a) is a genetic risk factor for cardiovascular disease.",
    clinicalNotes: "Managing Lp(a) levels may require specialized interventions and monitoring.",
    factors: ["Genetics", "Niacin", "PCSK9 Inhibitors"]
  },
  {
    name: "Apolipoprotein B (ApoB)",
    optimalRange: "< 80 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "ApoB is a protein found on LDL particles and is a key marker of cardiovascular risk.",
    clinicalNotes: "Reducing ApoB levels can significantly lower the risk of heart attacks and strokes.",
    factors: ["Diet", "Exercise", "Statins"]
  }
];

const specializedBiomarkers = [
  {
    name: "Telomere Length",
    optimalRange: "Varies by age",
    officialRange: "Varies by age",
    description: "Telomere length is a measure of cellular aging.",
    clinicalNotes: "Shorter telomeres are associated with increased risk of age-related diseases.",
    factors: ["Genetics", "Lifestyle", "Supplementation"]
  },
  {
    name: "Oxidized LDL",
    optimalRange: "< 50 U/L",
    officialRange: "< 100 U/L",
    description: "Oxidized LDL is a measure of LDL particles that have been damaged by oxidation.",
    clinicalNotes: "High oxidized LDL is associated with increased risk of cardiovascular disease.",
    factors: ["Diet", "Antioxidants", "Lifestyle"]
  },
  {
    name: "Advanced Glycation End Products (AGEs)",
    optimalRange: "< 1000 ng/mL",
    officialRange: "< 2000 ng/mL",
    description: "AGEs are compounds that are formed when sugar molecules bind to proteins or fats.",
    clinicalNotes: "High AGEs are associated with increased risk of diabetes and cardiovascular disease.",
    factors: ["Diet", "Lifestyle", "Supplementation"]
  },
  {
    name: "Trimethylamine N-oxide (TMAO)",
    optimalRange: "< 6.2 umol/L",
    officialRange: "< 10 umol/L",
    description: "TMAO is a compound that is produced by gut bacteria.",
    clinicalNotes: "High TMAO is associated with increased risk of cardiovascular disease.",
    factors: ["Diet", "Gut bacteria", "Supplementation"]
  },
  {
    name: "Uric Acid",
    optimalRange: "3.0-5.5 mg/dL",
    officialRange: "2.5-7.0 mg/dL",
    description: "Uric acid is a waste product that is produced when the body breaks down purines.",
    clinicalNotes: "High uric acid is associated with increased risk of gout and kidney disease.",
    factors: ["Diet", "Genetics", "Lifestyle"]
  }
];

const immuneBiomarkers = [
  {
    name: "White Blood Cell Count",
    optimalRange: "4,500-11,000 cells/uL",
    officialRange: "4,500-11,000 cells/uL",
    description: "White blood cells are immune cells that help the body fight infection.",
    clinicalNotes: "Abnormal white blood cell counts can indicate infection or immune dysfunction.",
    factors: ["Infection", "Inflammation", "Autoimmune disease"]
  },
  {
    name: "Vitamin D",
    optimalRange: "50-80 ng/mL",
    officialRange: "30-100 ng/mL",
    description: "Vitamin D is a fat-soluble vitamin that is important for immune function.",
    clinicalNotes: "Low vitamin D is associated with increased risk of immune dysfunction.",
    factors: ["Sun exposure", "Diet", "Supplementation"]
  },
  {
    name: "Zinc",
    optimalRange: "90-110 ug/dL",
    officialRange: "60-120 ug/dL",
    description: "Zinc is a mineral that is important for immune function.",
    clinicalNotes: "Low zinc is associated with increased risk of immune dysfunction.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Selenium",
    optimalRange: "100-150 ug/L",
    officialRange: "50-200 ug/L",
    description: "Selenium is a mineral that is important for immune function.",
    clinicalNotes: "Low selenium is associated with increased risk of immune dysfunction.",
    factors: ["Diet", "Absorption", "Supplementation"]
  },
  {
    name: "Glutathione",
    optimalRange: "650-950 ug/L",
    officialRange: "550-1100 ug/L",
    description: "Glutathione is an antioxidant that is important for immune function.",
    clinicalNotes: "Low glutathione is associated with increased risk of immune dysfunction.",
    factors: ["Diet", "Supplementation", "Lifestyle"]
  }
];

const liverBiomarkers = [
  {
    name: "Alanine Aminotransferase (ALT)",
    optimalRange: "10-40 U/L",
    officialRange: "7-55 U/L",
    description: "ALT is an enzyme that is found in the liver.",
    clinicalNotes: "High ALT is associated with liver damage.",
    factors: ["Alcohol consumption", "Medications", "Liver disease"]
  },
  {
    name: "Aspartate Aminotransferase (AST)",
    optimalRange: "10-35 U/L",
    officialRange: "8-48 U/L",
    description: "AST is an enzyme that is found in the liver.",
    clinicalNotes: "High AST is associated with liver damage.",
    factors: ["Alcohol consumption", "Medications", "Liver disease"]
  },
  {
    name: "Gamma-Glutamyl Transferase (GGT)",
    optimalRange: "10-40 U/L",
    officialRange: "9-48 U/L",
    description: "GGT is an enzyme that is found in the liver.",
    clinicalNotes: "High GGT is associated with liver damage.",
    factors: ["Alcohol consumption", "Medications", "Liver disease"]
  },
  {
    name: "Alkaline Phosphatase (ALP)",
    optimalRange: "30-100 U/L",
    officialRange: "20-140 U/L",
    description: "ALP is an enzyme that is found in the liver.",
    clinicalNotes: "High ALP is associated with liver damage.",
    factors: ["Alcohol consumption", "Medications", "Liver disease"]
  },
  {
    name: "Bilirubin",
    optimalRange: "0.2-1.0 mg/dL",
    officialRange: "0.3-1.2 mg/dL",
    description: "Bilirubin is a waste product that is produced when the body breaks down red blood cells.",
    clinicalNotes: "High bilirubin is associated with liver damage.",
    factors: ["Alcohol consumption", "Medications", "Liver disease"]
  }
];

const kidneyBiomarkers = [
  {
    name: "Creatinine",
    optimalRange: "0.6-1.0 mg/dL (females)",
    officialRange: "0.5-1.1 mg/dL (females)",
    description: "Creatinine is a waste product that is produced by muscle metabolism.",
    clinicalNotes: "High creatinine is associated with kidney damage.",
    factors: ["Kidney disease", "Dehydration", "Medications"]
  },
  {
    name: "Blood Urea Nitrogen (BUN)",
    optimalRange: "8-20 mg/dL",
    officialRange: "6-24 mg/dL",
    description: "BUN is a waste product that is produced when the body breaks down protein.",
    clinicalNotes: "High BUN is associated with kidney damage.",
    factors: ["Kidney disease", "Dehydration", "Medications"]
  },
  {
    name: "Estimated Glomerular Filtration Rate (eGFR)",
    optimalRange: "> 90 mL/min/1.73 m2",
    officialRange: "> 60 mL/min/1.73 m2",
    description: "eGFR is a measure of kidney function.",
    clinicalNotes: "Low eGFR is associated with kidney damage.",
    factors: ["Kidney disease", "Dehydration", "Medications"]
  },
  {
    name: "Sodium",
    optimalRange: "135-145 mEq/L",
    officialRange: "135-145 mEq/L",
    description: "Sodium is an electrolyte that is important for fluid balance.",
    clinicalNotes: "Abnormal sodium levels can indicate dehydration or kidney disease.",
    factors: ["Dehydration", "Kidney disease", "Medications"]
  },
  {
    name: "Potassium",
    optimalRange: "3.5-4.5 mEq/L",
    officialRange: "3.5-5.0 mEq/L",
    description: "Potassium is an electrolyte that is important for muscle function and nerve function.",
    clinicalNotes: "Abnormal potassium levels can indicate dehydration or kidney disease.",
    factors: ["Dehydration", "Kidney disease", "Medications"]
  }
];

const ReferenceValues = () => {
  const [activeCategory, setActiveCategory] = useState("cardiovascular");
  const isMobile = useIsMobile();

  const categories = [
    { id: "cardiovascular", label: "Cardiovascular", icon: "❤️" },
    { id: "metabolic", label: "Metabolic", icon: "⚡" },
    { id: "vitamins", label: "Vitamins & Nutrients", icon: "🍊" },
    { id: "minerals", label: "Minerals & Trace Elements", icon: "⚗️" },
    { id: "hormones", label: "Hormones & Thyroid", icon: "🧬" },
    { id: "longevity", label: "Advanced Longevity", icon: "🔬" },
    { id: "specialized", label: "Specialized Testing", icon: "🧪" },
    { id: "immune", label: "Immune & Inflammatory", icon: "🛡️" },
    { id: "liver", label: "Liver & Detox", icon: "🫘" },
    { id: "kidney", label: "Kidney & Electrolytes", icon: "💧" }
  ];

  const CategoryMenu = ({ categories, activeCategory, setActiveCategory, className = "" }) => (
    <div className={`space-y-1 ${className}`}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "ghost"}
          className={`w-full justify-start text-left h-auto py-3 px-4 ${
            activeCategory === category.id 
              ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white" 
              : "hover:bg-slate-100"
          }`}
          onClick={() => setActiveCategory(category.id)}
        >
          <span className="mr-3 text-lg">{category.icon}</span>
          <span className="text-sm font-medium leading-tight">{category.label}</span>
        </Button>
      ))}
    </div>
  );

  const renderBiomarkerTable = (biomarkers) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-4 font-semibold text-slate-700">Biomarker</th>
            <th className="text-left py-3 px-2 font-semibold text-emerald-700 min-w-[120px]">Optimal Range</th>
            <th className="text-left py-3 px-2 font-semibold text-slate-500 min-w-[120px]">Official Range</th>
            <th className="text-center py-3 px-2 font-semibold text-slate-500 w-12">Info</th>
          </tr>
        </thead>
        <tbody>
          {biomarkers.map((biomarker, index) => (
            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-3 px-4 font-medium text-slate-800">{biomarker.name}</td>
              <td className="py-3 px-2">
                <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  {biomarker.optimalRange}
                </Badge>
              </td>
              <td className="py-3 px-2">
                <Badge variant="outline" className="text-slate-600">
                  {biomarker.officialRange}
                </Badge>
              </td>
              <td className="py-3 px-2 text-center">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Info className="h-4 w-4 text-slate-400" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4" side="left">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">{biomarker.name}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{biomarker.description}</p>
                      </div>
                      
                      {biomarker.clinicalNotes && (
                        <div>
                          <h5 className="font-medium text-slate-700 mb-1 flex items-center gap-1">
                            <BookOpen className="h-3 w-3" />
                            Clinical Notes
                            {biomarker.expertSource && (
                              <Badge variant="outline" className="ml-1 text-xs">
                                {biomarker.expertSource}
                              </Badge>
                            )}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed">{biomarker.clinicalNotes}</p>
                        </div>
                      )}
                      
                      {biomarker.factors && (
                        <div>
                          <h5 className="font-medium text-slate-700 mb-1">Key Factors</h5>
                          <ul className="text-xs text-slate-600 space-y-1">
                            {biomarker.factors.map((factor, idx) => (
                              <li key={idx} className="flex items-start gap-1">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                <span>{factor}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const getBiomarkersForCategory = (categoryId) => {
    switch (categoryId) {
      case "cardiovascular": return cardiovascularBiomarkers;
      case "metabolic": return metabolicBiomarkers;
      case "vitamins": return vitaminsBiomarkers;
      case "minerals": return mineralsBiomarkers;
      case "hormones": return hormonesBiomarkers;
      case "longevity": return longevityBiomarkers;
      case "specialized": return specializedBiomarkers;
      case "immune": return immuneBiomarkers;
      case "liver": return liverBiomarkers;
      case "kidney": return kidneyBiomarkers;
      default: return [];
    }
  };

  return (
    <section id="reference-values" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Reference Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Optimal biomarker ranges based on cutting-edge longevity research and expert recommendations
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="bg-white">
              <User className="h-3 w-3 mr-1" />
              Expert Sources
            </Badge>
            <Badge variant="outline" className="bg-white">
              <BookOpen className="h-3 w-3 mr-1" />
              Research-Based
            </Badge>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Navigation */}
          {isMobile ? (
            <div className="lg:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Menu className="h-4 w-4 mr-2" />
                    {categories.find(cat => cat.id === activeCategory)?.label || "Select Category"}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Biomarker Categories</SheetTitle>
                    <SheetDescription>
                      Select a category to view optimal reference values
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <CategoryMenu 
                      categories={categories}
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            /* Desktop Navigation */
            <div className="hidden lg:block w-80 flex-shrink-0">
              <Card className="sticky top-24">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Biomarker Categories</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CategoryMenu 
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                </CardContent>
              </Card>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {categories.find(cat => cat.id === activeCategory)?.icon}
                  </span>
                  <div>
                    <CardTitle className="text-xl">
                      {categories.find(cat => cat.id === activeCategory)?.label}
                    </CardTitle>
                    <p className="text-sm text-slate-600 mt-1">
                      Evidence-based optimal ranges for longevity and health optimization
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {renderBiomarkerTable(getBiomarkersForCategory(activeCategory))}
              </CardContent>
            </Card>

            {/* Testing Philosophy */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-xl">🔄</span>
                  "Measure, Do, Measure" Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">📊</div>
                    <h4 className="font-semibold text-slate-800 mb-2">1. Measure</h4>
                    <p className="text-sm text-slate-600">Get comprehensive testing to identify deficiencies and establish baseline values</p>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. Do</h4>
                    <p className="text-sm text-slate-600">Implement personalized interventions based on your specific biomarker results</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">📈</div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Re-measure</h4>
                    <p className="text-sm text-slate-600">Track progress and adjust strategies based on follow-up testing results</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceValues;
