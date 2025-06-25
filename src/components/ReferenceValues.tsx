
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const ReferenceValues = () => {
  const biomarkerCategories = [
    {
      category: "Cardiovascular",
      expert: "Dr. Peter Attia, Dr. Thomas Dayspring",
      markers: [
        { 
          name: "Total Cholesterol", 
          optimal: "< 200", 
          official: "< 240", 
          unit: "mg/dL",
          description: "Total amount of cholesterol in blood. Lower levels associated with reduced cardiovascular risk.",
          clinical: "Official ranges allow higher levels but optimal ranges focus on longevity."
        },
        { 
          name: "LDL Cholesterol", 
          optimal: "< 100", 
          official: "< 160", 
          unit: "mg/dL",
          description: "Low-density lipoprotein, often called 'bad' cholesterol. Primary target for cardiovascular risk reduction.",
          clinical: "Optimal levels significantly lower than official recommendations for heart disease prevention."
        },
        { 
          name: "HDL Cholesterol", 
          optimal: "> 60", 
          official: "> 40 (M), > 50 (F)", 
          unit: "mg/dL",
          description: "High-density lipoprotein, 'good' cholesterol that helps remove other cholesterol from arteries.",
          clinical: "Higher levels provide cardioprotective benefits beyond official minimums."
        },
        { 
          name: "Triglycerides", 
          optimal: "< 100", 
          official: "< 150", 
          unit: "mg/dL",
          description: "Blood fats that increase cardiovascular risk when elevated. Strongly linked to metabolic health.",
          clinical: "Optimal levels significantly lower than official cutoffs for metabolic optimization."
        },
        { 
          name: "C-Reactive Protein", 
          optimal: "< 1.0", 
          official: "< 3.0", 
          unit: "mg/L",
          description: "Marker of systemic inflammation. Elevated levels predict cardiovascular events.",
          clinical: "Lower levels indicate reduced inflammatory burden and cardiovascular risk."
        },
        { 
          name: "ApoB", 
          optimal: "< 80", 
          official: "< 120", 
          unit: "mg/dL",
          description: "Apolipoprotein B, reflects number of atherogenic particles. Better predictor than LDL-C.",
          clinical: "Optimal levels focus on particle count rather than just cholesterol content."
        },
        { 
          name: "Lp(a)", 
          optimal: "< 30", 
          official: "< 50", 
          unit: "mg/dL",
          description: "Lipoprotein(a), genetically determined cardiovascular risk factor. Independent predictor.",
          clinical: "Lower levels preferred as this is largely genetically determined and difficult to modify."
        }
      ]
    },
    {
      category: "Metabolic",
      expert: "Dr. Benjamin Bikman, Dr. Jason Fung",
      markers: [
        { 
          name: "Fasting Glucose", 
          optimal: "70-85", 
          official: "70-99", 
          unit: "mg/dL",
          description: "Blood sugar after 8+ hours fasting. Reflects glucose homeostasis and insulin sensitivity.",
          clinical: "Optimal range prevents progression to prediabetes and maintains metabolic flexibility."
        },
        { 
          name: "HbA1c", 
          optimal: "< 5.3", 
          official: "< 5.7", 
          unit: "%",
          description: "Average blood glucose over 2-3 months. Gold standard for diabetes diagnosis and monitoring.",
          clinical: "Optimal levels prevent glycation damage and maintain insulin sensitivity."
        },
        { 
          name: "Fasting Insulin", 
          optimal: "< 5", 
          official: "2-25", 
          unit: "μIU/mL",
          description: "Insulin levels after fasting. Early marker of insulin resistance before glucose elevation.",
          clinical: "Lower levels indicate better insulin sensitivity and metabolic health."
        },
        { 
          name: "HOMA-IR", 
          optimal: "< 1.0", 
          official: "< 2.5", 
          unit: "",
          description: "Homeostatic Model Assessment of Insulin Resistance. Calculated from glucose and insulin.",
          clinical: "Lower scores indicate better insulin sensitivity and metabolic function."
        },
        { 
          name: "Uric Acid", 
          optimal: "4.0-5.5", 
          official: "3.4-7.0", 
          unit: "mg/dL",
          description: "End product of purine metabolism. Associated with gout, kidney stones, and metabolic syndrome.",
          clinical: "Optimal range balances antioxidant benefits with metabolic risk."
        }
      ]
    },
    {
      category: "Hormonal & Nutrients",
      expert: "Dr. Rhonda Patrick, Dr. Michael Holick",
      markers: [
        { 
          name: "Vitamin D", 
          optimal: "40-60", 
          official: "20-50", 
          unit: "ng/mL",
          description: "25-hydroxyvitamin D, hormone regulating calcium, immune function, and gene expression.",
          clinical: "Higher levels associated with better immune function and chronic disease prevention."
        },
        { 
          name: "B12", 
          optimal: "> 500", 
          official: "200-900", 
          unit: "pg/mL",
          description: "Vitamin B12, essential for nerve function, DNA synthesis, and red blood cell formation.",
          clinical: "Higher levels prevent subclinical deficiency and support neurological health."
        },
        { 
          name: "Folate", 
          optimal: "> 15", 
          official: "3-17", 
          unit: "ng/mL",
          description: "Vitamin B9, crucial for DNA synthesis, methylation, and preventing neural tube defects.",
          clinical: "Higher levels support optimal methylation and cardiovascular health."
        },
        { 
          name: "TSH", 
          optimal: "1.0-2.0", 
          official: "0.4-4.0", 
          unit: "mIU/L",
          description: "Thyroid Stimulating Hormone, regulates thyroid function and metabolic rate.",
          clinical: "Narrower optimal range for maintaining metabolic efficiency."
        },
        { 
          name: "Free T3", 
          optimal: "3.0-4.0", 
          official: "2.3-4.2", 
          unit: "pg/mL",
          description: "Active thyroid hormone, reflects actual thyroid function better than TSH alone.",
          clinical: "Optimal levels ensure adequate cellular metabolism."
        },
        { 
          name: "Free T4", 
          optimal: "1.3-1.8", 
          official: "0.8-1.8", 
          unit: "ng/dL",
          description: "Thyroid prohormone, converted to active T3 in tissues.",
          clinical: "Higher end of range often optimal for energy and metabolism."
        }
      ]
    },
    {
      category: "Longevity & Advanced",
      expert: "Dr. David Sinclair, Dr. Valter Longo",
      markers: [
        { 
          name: "Homocysteine", 
          optimal: "< 7", 
          official: "< 15", 
          unit: "μmol/L",
          description: "Amino acid metabolite, elevated levels associated with cardiovascular and neurodegenerative disease.",
          clinical: "Lower levels indicate better methylation and B-vitamin status."
        },
        { 
          name: "IGF-1", 
          optimal: "150-250", 
          official: "84-400", 
          unit: "ng/mL",
          description: "Insulin-like Growth Factor 1, mediates growth hormone effects. Complex relationship with aging.",
          clinical: "Moderate levels balance growth benefits with longevity considerations."
        },
        { 
          name: "DHEA-S", 
          optimal: "350-500", 
          official: "80-560", 
          unit: "μg/dL",
          description: "Dehydroepiandrosterone sulfate, adrenal hormone precursor declining with age.",
          clinical: "Higher levels within range associated with better stress resilience and longevity."
        },
        { 
          name: "Testosterone (M)", 
          optimal: "500-900", 
          official: "270-1070", 
          unit: "ng/dL",
          description: "Primary male sex hormone, affects muscle mass, bone density, and overall vitality.",
          clinical: "Higher levels within range support healthy aging in men."
        },
        { 
          name: "Estradiol (F)", 
          optimal: "100-200", 
          official: "15-350", 
          unit: "pg/mL",
          description: "Primary female sex hormone, varies with menstrual cycle and menopause status.",
          clinical: "Optimal levels depend on life stage and individual factors."
        }
      ]
    },
    {
      category: "Inflammatory & Immune",
      expert: "Dr. Mark Hyman, Dr. Terry Wahls",
      markers: [
        { 
          name: "ESR", 
          optimal: "< 10", 
          official: "< 30", 
          unit: "mm/hr",
          description: "Erythrocyte Sedimentation Rate, non-specific marker of inflammation and tissue damage.",
          clinical: "Lower levels indicate reduced systemic inflammation."
        },
        { 
          name: "White Blood Cells", 
          optimal: "4.5-7.0", 
          official: "4.0-11.0", 
          unit: "×10³/μL",
          description: "Total white blood cell count, reflects immune system status and inflammatory state.",
          clinical: "Optimal range balances immune function without excessive inflammation."
        },
        { 
          name: "Neutrophils", 
          optimal: "45-65", 
          official: "40-70", 
          unit: "%",
          description: "Primary immune cells for bacterial infections, part of innate immune response.",
          clinical: "Balanced levels indicate healthy immune response without chronic activation."
        },
        { 
          name: "Lymphocytes", 
          optimal: "25-40", 
          official: "20-45", 
          unit: "%",
          description: "Adaptive immune cells including T and B cells, crucial for long-term immunity.",
          clinical: "Higher levels often indicate better immune surveillance and response."
        }
      ]
    }
  ];

  return (
    <section id="reference-values" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Reference Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Evidence-based optimal ranges vs. official reference values for key biomarkers focused on longevity and healthspan optimization
          </p>
        </div>

        <Tabs defaultValue="Cardiovascular" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {biomarkerCategories.map((category) => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
                className="text-xs sm:text-sm"
              >
                {category.category.replace(' & ', ' & ')}
              </TabsTrigger>
            ))}
          </TabsList>

          {biomarkerCategories.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-slate-800">
                      {category.category} Biomarkers
                    </CardTitle>
                    <Badge variant="outline" className="text-sm">
                      Expert: {category.expert}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">Biomarker</TableHead>
                        <TableHead className="text-center">Optimal Range</TableHead>
                        <TableHead className="text-center">Official Range</TableHead>
                        <TableHead className="text-center">Unit</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.markers.map((marker, index) => (
                        <TableRow key={index} className="hover:bg-slate-50">
                          <TableCell className="font-medium">{marker.name}</TableCell>
                          <TableCell className="text-center">
                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                              {marker.optimal}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline" className="text-slate-600">
                              {marker.official}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-center text-sm text-slate-500">
                            {marker.unit}
                          </TableCell>
                          <TableCell>
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <button className="text-slate-400 hover:text-slate-600">
                                  <Info className="h-4 w-4" />
                                </button>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold">{marker.name}</h4>
                                  <p className="text-sm text-slate-600">
                                    {marker.description}
                                  </p>
                                  <div className="text-xs text-slate-500 border-t pt-2">
                                    <strong>Clinical Note:</strong> {marker.clinical}
                                  </div>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800">Optimal Ranges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-emerald-700">
                Based on latest longevity research and represent values associated with 
                healthspan optimization and reduced disease risk.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100">
            <CardHeader>
              <CardTitle className="text-lg text-slate-800">Official Ranges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700">
                Standard laboratory reference ranges used for clinical diagnosis 
                and disease detection, often wider than optimal ranges.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800">Expert Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700">
                Recommendations from leading longevity researchers, functional medicine 
                practitioners, and preventive health experts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferenceValues;
