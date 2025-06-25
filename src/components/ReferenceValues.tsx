
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const cardiovascularBiomarkers = [
  {
    name: "ApoB (Apolipoprotein B)",
    optimalRange: "< 80 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "Found on all 'bad' lipoproteins (like LDL), strongly correlated with increased cardiovascular disease risk. More informative than LDL alone.",
    clinicalNotes: "Essential marker for cardiovascular risk assessment, superior to LDL-C for risk prediction.",
    factors: ["Diet", "Exercise", "Statins", "Genetics"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Lipoprotein(a) [Lp(a)]",
    optimalRange: "< 30 mg/dL",
    officialRange: "< 75 nmol/L",
    description: "Genetic risk factor for cardiovascular disease, independent of other lipid parameters.",
    clinicalNotes: "Managing Lp(a) levels may require specialized interventions and monitoring. Genetic component makes it less responsive to lifestyle changes.",
    factors: ["Genetics", "Niacin", "PCSK9 Inhibitors"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "HDL Cholesterol",
    optimalRange: "> 50 mg/dL (women), > 40 mg/dL (men)",
    officialRange: "> 40 mg/dL (men), > 50 mg/dL (women)",
    description: "High-density lipoprotein, often referred to as 'good cholesterol'. Higher levels are generally protective.",
    clinicalNotes: "Essential component of cardiovascular risk assessment, though quality matters more than quantity.",
    factors: ["Exercise", "Diet", "Genetics", "Alcohol (moderate)"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "LDL Cholesterol",
    optimalRange: "< 100 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "Low-density lipoprotein, one of the 'bad' lipoproteins that carries ApoB.",
    clinicalNotes: "Traditional marker for cardiovascular risk, though ApoB is more predictive.",
    factors: ["Diet", "Exercise", "Genetics", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Triglycerides",
    optimalRange: "< 100 mg/dL",
    officialRange: "< 150 mg/dL",
    description: "Type of fat transported in the blood, influenced by diet and metabolic health.",
    clinicalNotes: "Elevated levels associated with increased cardiovascular risk and metabolic dysfunction.",
    factors: ["Diet", "Exercise", "Alcohol", "Genetics"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Omega-3 Index",
    optimalRange: "> 8%",
    officialRange: "4-8%",
    description: "Percentage of EPA and DHA in red blood cell membranes. Low levels linked to higher mortality risk, called 'the new smoking'.",
    clinicalNotes: "Critical for cardiovascular health, brain function, and inflammation control. Most people have insufficient levels due to poor Omega-3 to Omega-6 ratios.",
    factors: ["Fish consumption", "Supplementation", "Diet quality"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Homocysteine",
    optimalRange: "< 8 µmol/L",
    officialRange: "< 15 µmol/L",
    description: "Amino acid whose elevated levels are linked to cardiovascular risk. Often correlates with B-vitamin deficiencies.",
    clinicalNotes: "Elevated levels indicate increased cardiovascular risk and potential B6, B9, or B12 deficiencies.",
    factors: ["Vitamin B6", "Vitamin B9 (Folate)", "Vitamin B12", "Genetics"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "hs-CRP (High-Sensitivity C-Reactive Protein)",
    optimalRange: "< 1 mg/L",
    officialRange: "< 3 mg/L",
    description: "Marker of general inflammation in the body. High levels indicate 'silent inflammation' contributing to aging.",
    clinicalNotes: "Should always be measured with ferritin as inflammation can falsely elevate ferritin levels.",
    factors: ["Diet", "Exercise", "Stress", "Infections"],
    expertSource: "Thiemo Osterhaus"
  }
];

const metabolicBiomarkers = [
  {
    name: "Fasting Glucose",
    optimalRange: "< 100 mg/dL",
    officialRange: "70-99 mg/dL",
    description: "Blood sugar levels after overnight fast. Values over 100 mg/dL indicate disturbed glucose metabolism.",
    clinicalNotes: "Key marker for metabolic health and diabetes risk assessment.",
    factors: ["Diet", "Exercise", "Stress", "Sleep"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "HbA1c (Hemoglobin A1c)",
    optimalRange: "< 5.3%",
    officialRange: "< 5.7%",
    description: "Average blood sugar level over 2-3 months. Key diagnostic marker for diabetes and longevity parameter.",
    clinicalNotes: "Values from 5.7% indicate beginning disturbance. Measurement method can influence results.",
    factors: ["Diet", "Exercise", "Medications", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "HOMA Index",
    optimalRange: "< 2.0",
    officialRange: "< 2.5",
    description: "Reflects insulin sensitivity and resistance, serving as indicator for pre-diabetic states.",
    clinicalNotes: "Often not routinely measured in conventional medicine but crucial for metabolic assessment.",
    factors: ["Diet", "Exercise", "Body weight", "Stress"],
    expertSource: "Thiemo Osterhaus"
  }
];

const vitaminsBiomarkers = [
  {
    name: "Vitamin D (25-OH)",
    optimalRange: "40-60 ng/mL",
    officialRange: "30-100 ng/mL",
    description: "Crucial for immune function, bone health, mood regulation, neurotransmitter formation, and hormone modulation.",
    clinicalNotes: "Up to 60% of Germans estimated deficient, especially in winter. Higher doses recommended than official guidelines (2500 IU summer, 5000 IU winter).",
    factors: ["Sun exposure", "Supplementation", "Skin color", "Geographic location"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin D (1,25-OH)",
    optimalRange: "Varies",
    officialRange: "19-67 pg/mL",
    description: "Active form of Vitamin D. Testing alongside 25-OH can be relevant for immune system problems or autoimmune diseases.",
    clinicalNotes: "Helps understand Vitamin D metabolism, particularly important for autoimmune conditions.",
    factors: ["Kidney function", "PTH levels", "Calcium status"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin K2 (MK-7)",
    optimalRange: "> 1 ng/mL",
    officialRange: "No official range",
    description: "Vital for bone health (calcium distribution) and heart health. Works synergistically with Vitamin D.",
    clinicalNotes: "Ensures calcium is deposited in bones, not arteries. Studies explore effects on immune health and athletic performance.",
    factors: ["Diet", "Supplementation", "Gut bacteria"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin C",
    optimalRange: "> 12 mg/L",
    officialRange: "4-15 mg/L",
    description: "'Queen of vitamins' - crucial for immune system, collagen formation, nerve health. Key antioxidant and co-factor for cortisol/DHEA production.",
    clinicalNotes: "Essential for iron absorption, often underestimated. Important for fertility and egg quality.",
    factors: ["Diet", "Supplementation", "Stress", "Smoking"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin B12 (Holotranscobalamin)",
    optimalRange: "> 400 pg/mL",
    officialRange: "200-1100 pg/mL",
    description: "Essential for nervous system function and reducing fatigue. Deficiency can cause irreversible nerve damage.",
    clinicalNotes: "Critical for vegetarians/vegans. High doses recommended for neurodegenerative diseases. Holotranscobalamin more accurate than total B12.",
    factors: ["Diet", "Absorption", "Age", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Folate (Vitamin B9)",
    optimalRange: "> 10 ng/mL",
    officialRange: "> 3.1 ng/mL",
    description: "Essential for blood formation and reducing fatigue. Increased demand in women of childbearing age.",
    clinicalNotes: "Critical during pregnancy and lactation. Works with B12 and B6 to control homocysteine.",
    factors: ["Diet", "Pregnancy", "Alcohol", "Medications"],
    expertSource: "Thiemo Osterhaus"
  }
];

const mineralsBiomarkers = [
  {
    name: "Ferritin",
    optimalRange: "100-120 µg/L (women), 100-150 µg/L (men)",
    officialRange: "15-150 µg/L (women), 30-400 µg/L (men)",
    description: "Primary marker for iron stores. Low levels indicate iron deficiency even if hemoglobin is normal.",
    clinicalNotes: "Very common deficiency, especially in menstruating women, athletes, vegetarians. Can be falsely elevated by inflammation (check CRP).",
    factors: ["Menstruation", "Diet", "Absorption", "Blood loss"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Magnesium (Whole Blood)",
    optimalRange: "2.2-2.6 mg/dL",
    officialRange: "1.7-2.2 mg/dL",
    description: "Involved in 600+ metabolic processes. Crucial for muscle function, nervous system, energy production, neurotransmitter formation.",
    clinicalNotes: "~80% of population deficient. High demand for athletes and high-stress individuals. Whole blood analysis more accurate than serum.",
    factors: ["Diet", "Stress", "Exercise", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Zinc",
    optimalRange: "90-110 µg/dL",
    officialRange: "60-120 µg/dL",
    description: "Important for immune system, cell division, collagen formation, steroid hormone synthesis. Deficiency causes hair loss, brittle nails.",
    clinicalNotes: "Critical for vegetarians/vegans due to phytate binding. Recommended for athletes and gut barrier healing.",
    factors: ["Diet", "Phytates", "Absorption", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Selenium",
    optimalRange: "100-150 µg/L",
    officialRange: "50-200 µg/L",
    description: "Important for oxidative stress protection, immune system, antioxidant function, and thyroid health.",
    clinicalNotes: "European soil often selenium-poor, leading to common deficiencies. Higher doses may be needed than standard recommendations.",
    factors: ["Soil content", "Diet", "Geographic location"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Iodine",
    optimalRange: "100-199 µg/L",
    officialRange: "50-125 µg/L",
    description: "Essential for normal thyroid function and cognitive function.",
    clinicalNotes: "Many regions (like Germany) are iodine-poor. Common in those consuming little iodized salt or fish.",
    factors: ["Geographic location", "Salt intake", "Fish consumption"],
    expertSource: "Thiemo Osterhaus"
  }
];

const hormonesBiomarkers = [
  {
    name: "TSH (Thyroid Stimulating Hormone)",
    optimalRange: "1.0-2.0 mIU/L",
    officialRange: "0.4-4.0 mIU/L",
    description: "While commonly measured, TSH alone is insufficient for comprehensive thyroid assessment.",
    clinicalNotes: "Should be evaluated alongside fT3 and fT4 for complete thyroid function assessment.",
    factors: ["Thyroid disease", "Stress", "Medications", "Age"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "fT3 (Free Triiodothyronine)",
    optimalRange: "3.0-4.2 pg/mL",
    officialRange: "2.3-4.2 pg/mL",
    description: "The active thyroid hormone, critical for metabolism and energy.",
    clinicalNotes: "More indicative of thyroid function than TSH alone. Essential for comprehensive assessment.",
    factors: ["Thyroid health", "Iodine", "Selenium", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "fT4 (Free Thyroxine)",
    optimalRange: "1.0-1.8 ng/dL",
    officialRange: "0.8-1.8 ng/dL",
    description: "Precursor to fT3, important for overall thyroid function assessment.",
    clinicalNotes: "Should be evaluated with fT3 and TSH for complete picture.",
    factors: ["Thyroid health", "Medications", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Testosterone (Free)",
    optimalRange: "15-25 pg/mL (men), 1-4 pg/mL (women)",
    officialRange: "9-30 pg/mL (men), 0.3-3.2 pg/mL (women)",
    description: "Important for dopaminergic system, learning, memory, concentration. Has neuroprotective qualities.",
    clinicalNotes: "Men in 30s-40s can experience deficiency. Measure SHBG alongside total testosterone to calculate free testosterone.",
    factors: ["Vitamin D3", "Vitamin B6", "Zinc", "Magnesium", "Age"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Estradiol (E2)",
    optimalRange: "20-40 pg/mL (women)",
    officialRange: "30-400 pg/mL (cycling women)",
    description: "Important for happiness, well-being, serotonergic/dopaminergic systems, and acetylcholine (learning/memory).",
    clinicalNotes: "Protective against cardiovascular disease in women. Decline during menopause can increase blood pressure.",
    factors: ["Age", "Menopause", "Stress", "Body weight"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Progesterone",
    optimalRange: "5-20 ng/mL (luteal phase)",
    officialRange: "0.2-25 ng/mL",
    description: "Important for relaxation, mood stabilization, sleep quality, GABAergic system. Deficiency causes irritability, sleep issues.",
    clinicalNotes: "Test on cycle day 19-21 for women. Can be measured in serum or saliva (saliva preferred for free hormones).",
    factors: ["Stress", "Age", "Cycle phase", "Sleep"],
    expertSource: "Thiemo Osterhaus"
  }
];

const liverBiomarkers = [
  {
    name: "ALT (GPT)",
    optimalRange: "< 30 U/L",
    officialRange: "7-55 U/L",
    description: "Glutamate Pyruvate Transaminase - enzyme indicating liver function and potential damage.",
    clinicalNotes: "Elevated levels indicate liver stress or damage.",
    factors: ["Alcohol", "Medications", "Liver disease", "Diet"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "AST (GOT)", 
    optimalRange: "< 30 U/L",
    officialRange: "8-48 U/L",
    description: "Glutamate Oxaloacetate Transaminase - enzyme indicating liver function and potential damage.",
    clinicalNotes: "Can also indicate muscle damage, should be interpreted with other liver markers.",
    factors: ["Alcohol", "Medications", "Liver disease", "Exercise"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Gamma-GT",
    optimalRange: "< 30 U/L",
    officialRange: "9-48 U/L",
    description: "Gamma-Glutamyl Transferase - elevated levels correlated with higher risk of earlier mortality.",
    clinicalNotes: "Sensitive marker for liver stress and alcohol consumption.",
    factors: ["Alcohol", "Medications", "Liver disease"],
    expertSource: "Thiemo Osterhaus"
  }
];

const kidneyBiomarkers = [
  {
    name: "Creatinine",
    optimalRange: "0.7-1.0 mg/dL (women), 0.8-1.2 mg/dL (men)",
    officialRange: "0.5-1.1 mg/dL (women), 0.7-1.3 mg/dL (men)",
    description: "Waste product from muscle metabolism, indicates kidney function.",
    clinicalNotes: "Basic marker for kidney function assessment.",
    factors: ["Kidney disease", "Dehydration", "Muscle mass"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Cystatin C",
    optimalRange: "0.5-0.9 mg/L",
    officialRange: "0.5-1.0 mg/L",
    description: "More sensitive marker for kidney function than creatinine, less affected by muscle mass.",
    clinicalNotes: "Superior to creatinine for early kidney function assessment.",
    factors: ["Kidney function", "Age", "Inflammation"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "eGFR (Estimated Glomerular Filtration Rate)",
    optimalRange: "> 90 mL/min/1.73 m²",
    officialRange: "> 60 mL/min/1.73 m²",
    description: "Calculated measure of kidney function based on creatinine, age, sex, and race.",
    clinicalNotes: "Standard measure for assessing kidney function and staging chronic kidney disease.",
    factors: ["Age", "Kidney health", "Hydration", "Medications"],
    expertSource: "Thiemo Osterhaus"
  }
];

const specializedBiomarkers = [
  {
    name: "CoQ10 (Ubiquinol)",
    optimalRange: "> 2.5 µg/mL",
    officialRange: "0.4-1.8 µg/mL",
    description: "Vital for mitochondrial energy production, heart health, combating chronic fatigue. Levels decline with age.",
    clinicalNotes: "Works with Vitamin B12 for mitochondrial function. Essential for cellular energy production.",
    factors: ["Age", "Statin use", "Heart disease", "Supplementation"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Glutathione",
    optimalRange: "900-1400 µmol/L",
    officialRange: "550-1100 µmol/L",
    description: "Master antioxidant and main detoxification molecule. Protects cells, supports immune system, guards gut/brain barriers.",
    clinicalNotes: "Deficiency common due to environmental toxins. Critical for detoxification and cellular protection.",
    factors: ["Environmental toxins", "Age", "Stress", "Diet"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "DHEA (Dehydroepiandrosterone)",
    optimalRange: "200-400 µg/dL",
    officialRange: "85-690 µg/dL",
    description: "Precursor hormone for testosterone and estrogen production. Often described as 'healing' hormone.",
    clinicalNotes: "Vitamin C and Pantothenic acid (B5) are crucial co-factors for production.",
    factors: ["Age", "Stress", "Vitamin C", "Vitamin B5"],
    expertSource: "Thiemo Osterhaus"
  }
];

const ReferenceValues = () => {
  const [activeCategory, setActiveCategory] = useState("cardiovascular");
  const isMobile = useIsMobile();

  const categories = [
    { id: "cardiovascular", label: "Cardiovascular", icon: "❤️" },
    { id: "metabolic", label: "Metabolic", icon: "⚡" },
    { id: "vitamins", label: "Vitamins", icon: "🍊" },
    { id: "minerals", label: "Minerals", icon: "⚗️" },
    { id: "hormones", label: "Hormones", icon: "🧬" },
    { id: "liver", label: "Liver", icon: "🫘" },
    { id: "kidney", label: "Kidney", icon: "💧" },
    { id: "specialized", label: "Specialized", icon: "🧪" }
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
      case "liver": return liverBiomarkers;
      case "kidney": return kidneyBiomarkers;
      case "specialized": return specializedBiomarkers;
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
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center">
                      <Menu className="h-4 w-4 mr-2" />
                      {categories.find(cat => cat.id === activeCategory)?.label || "Select Category"}
                    </div>
                    <span className="text-lg">
                      {categories.find(cat => cat.id === activeCategory)?.icon}
                    </span>
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
              <Card className="sticky top-6">
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
