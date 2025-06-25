
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
      expert: "Dr. Peter Attia, Dr. Thomas Dayspring, Dr. Ulrich Strunz",
      markers: [
        { 
          name: "Total Cholesterol", 
          optimal: "< 200", 
          official: "< 240", 
          unit: "mg/dL",
          description: "Total amount of cholesterol in blood. Lower levels associated with reduced cardiovascular risk.",
          clinical: "Official ranges allow higher levels but optimal ranges focus on longevity. Strunz recommends < 180 mg/dL for optimal health."
        },
        { 
          name: "LDL Cholesterol", 
          optimal: "< 100", 
          official: "< 160", 
          unit: "mg/dL",
          description: "Low-density lipoprotein, often called 'bad' cholesterol. Primary target for cardiovascular risk reduction.",
          clinical: "Optimal levels significantly lower than official recommendations. Strunz targets < 70 mg/dL for high-risk patients."
        },
        { 
          name: "HDL Cholesterol", 
          optimal: "> 60", 
          official: "> 40 (M), > 50 (F)", 
          unit: "mg/dL",
          description: "High-density lipoprotein, 'good' cholesterol that helps remove other cholesterol from arteries.",
          clinical: "Higher levels provide cardioprotective benefits. Strunz emphasizes HDL > 60 mg/dL for both sexes."
        },
        { 
          name: "Triglycerides", 
          optimal: "< 100", 
          official: "< 150", 
          unit: "mg/dL",
          description: "Blood fats that increase cardiovascular risk when elevated. Strongly linked to metabolic health.",
          clinical: "Optimal levels significantly lower than official cutoffs. Strunz targets < 80 mg/dL for metabolic optimization."
        },
        { 
          name: "C-Reactive Protein", 
          optimal: "< 1.0", 
          official: "< 3.0", 
          unit: "mg/L",
          description: "Marker of systemic inflammation. Elevated levels predict cardiovascular events.",
          clinical: "Lower levels indicate reduced inflammatory burden. Orfanos-Boeckel emphasizes < 0.5 mg/L for longevity."
        },
        { 
          name: "ApoB", 
          optimal: "< 80", 
          official: "< 120", 
          unit: "mg/dL",
          description: "Apolipoprotein B, reflects number of atherogenic particles. Better predictor than LDL-C.",
          clinical: "Optimal levels focus on particle count rather than just cholesterol content. Strunz recommends < 70 mg/dL."
        },
        { 
          name: "Lp(a)", 
          optimal: "< 30", 
          official: "< 50", 
          unit: "mg/dL",
          description: "Lipoprotein(a), genetically determined cardiovascular risk factor. Independent predictor.",
          clinical: "Lower levels preferred as this is largely genetically determined and difficult to modify."
        },
        { 
          name: "Homocysteine", 
          optimal: "< 7", 
          official: "< 15", 
          unit: "μmol/L",
          description: "Amino acid metabolite, elevated levels associated with cardiovascular and neurodegenerative disease.",
          clinical: "Strunz emphasizes < 6 μmol/L. Lower levels indicate better methylation and B-vitamin status."
        },
        { 
          name: "Fibrinogen", 
          optimal: "200-300", 
          official: "200-400", 
          unit: "mg/dL",
          description: "Blood clotting protein, elevated levels increase thrombotic risk and cardiovascular events.",
          clinical: "Lower levels within normal range reduce clotting risk. Strunz targets 200-280 mg/dL."
        },
        { 
          name: "D-Dimer", 
          optimal: "< 0.5", 
          official: "< 0.5", 
          unit: "mg/L",
          description: "Fibrin degradation product, marker of blood clot formation and breakdown.",
          clinical: "Lower levels indicate less thrombotic activity. Important for cardiovascular risk assessment."
        }
      ]
    },
    {
      category: "Metabolic",
      expert: "Dr. Benjamin Bikman, Dr. Jason Fung, Dr. Ulrich Strunz",
      markers: [
        { 
          name: "Fasting Glucose", 
          optimal: "70-85", 
          official: "70-99", 
          unit: "mg/dL",
          description: "Blood sugar after 8+ hours fasting. Reflects glucose homeostasis and insulin sensitivity.",
          clinical: "Optimal range prevents progression to prediabetes. Strunz targets 70-80 mg/dL for metabolic flexibility."
        },
        { 
          name: "HbA1c", 
          optimal: "< 5.3", 
          official: "< 5.7", 
          unit: "%",
          description: "Average blood glucose over 2-3 months. Gold standard for diabetes diagnosis and monitoring.",
          clinical: "Optimal levels prevent glycation damage. Strunz recommends < 5.2% for longevity optimization."
        },
        { 
          name: "Fasting Insulin", 
          optimal: "< 5", 
          official: "2-25", 
          unit: "μIU/mL",
          description: "Insulin levels after fasting. Early marker of insulin resistance before glucose elevation.",
          clinical: "Lower levels indicate better insulin sensitivity. Strunz targets < 3 μIU/mL for optimal metabolic health."
        },
        { 
          name: "HOMA-IR", 
          optimal: "< 1.0", 
          official: "< 2.5", 
          unit: "",
          description: "Homeostatic Model Assessment of Insulin Resistance. Calculated from glucose and insulin.",
          clinical: "Lower scores indicate better insulin sensitivity. Strunz emphasizes < 0.8 for metabolic optimization."
        },
        { 
          name: "Uric Acid", 
          optimal: "4.0-5.5", 
          official: "3.4-7.0", 
          unit: "mg/dL",
          description: "End product of purine metabolism. Associated with gout, kidney stones, and metabolic syndrome.",
          clinical: "Optimal range balances antioxidant benefits with metabolic risk. Strunz targets 4.0-5.0 mg/dL."
        },
        { 
          name: "Ferritin", 
          optimal: "50-150 (M), 30-100 (F)", 
          official: "30-400 (M), 15-200 (F)", 
          unit: "ng/mL",
          description: "Iron storage protein. Reflects iron status and can indicate inflammation.",
          clinical: "Strunz emphasizes lower ferritin levels to reduce oxidative stress and inflammation."
        },
        { 
          name: "Adiponectin", 
          optimal: "> 10", 
          official: "3-30", 
          unit: "μg/mL",
          description: "Adipokine that regulates glucose and fatty acid metabolism. Higher levels are protective.",
          clinical: "Higher levels associated with better insulin sensitivity and reduced diabetes risk."
        },
        { 
          name: "Leptin", 
          optimal: "5-15", 
          official: "1-50", 
          unit: "ng/mL",
          description: "Satiety hormone produced by fat cells. Elevated levels indicate leptin resistance.",
          clinical: "Lower levels within normal range indicate better metabolic health and appetite regulation."
        }
      ]
    },
    {
      category: "Vitamins & Nutrients",
      expert: "Dr. Rhonda Patrick, Dr. Michael Holick, Dr. Helena Orfanos-Boeckel",
      markers: [
        { 
          name: "Vitamin D", 
          optimal: "40-60", 
          official: "20-50", 
          unit: "ng/mL",
          description: "25-hydroxyvitamin D, hormone regulating calcium, immune function, and gene expression.",
          clinical: "Orfanos-Boeckel recommends 50-70 ng/mL for immune optimization and cancer prevention."
        },
        { 
          name: "B12", 
          optimal: "> 500", 
          official: "200-900", 
          unit: "pg/mL",
          description: "Vitamin B12, essential for nerve function, DNA synthesis, and red blood cell formation.",
          clinical: "Higher levels prevent subclinical deficiency. Orfanos-Boeckel targets > 600 pg/mL for neurological health."
        },
        { 
          name: "Folate", 
          optimal: "> 15", 
          official: "3-17", 
          unit: "ng/mL",
          description: "Vitamin B9, crucial for DNA synthesis, methylation, and preventing neural tube defects.",
          clinical: "Higher levels support optimal methylation. Orfanos-Boeckel emphasizes > 20 ng/mL for cardiovascular health."
        },
        { 
          name: "Vitamin C", 
          optimal: "> 1.0", 
          official: "0.4-2.0", 
          unit: "mg/dL",
          description: "Essential antioxidant vitamin, supports immune function and collagen synthesis.",
          clinical: "Orfanos-Boeckel targets > 1.2 mg/dL for optimal antioxidant protection and immune function."
        },
        { 
          name: "Magnesium", 
          optimal: "2.0-2.6", 
          official: "1.7-2.2", 
          unit: "mg/dL",
          description: "Essential mineral for over 300 enzymatic reactions, energy metabolism, and muscle function.",
          clinical: "Higher levels support cardiovascular and neurological health. Orfanos-Boeckel recommends upper optimal range."
        },
        { 
          name: "Zinc", 
          optimal: "90-150", 
          official: "70-120", 
          unit: "μg/dL",
          description: "Essential trace element for immune function, wound healing, and protein synthesis.",
          clinical: "Optimal levels support immune function and tissue repair. Orfanos-Boeckel targets 100-130 μg/dL."
        },
        { 
          name: "Selenium", 
          optimal: "120-150", 
          official: "70-150", 
          unit: "μg/L",
          description: "Essential trace element with antioxidant properties, supports thyroid function.",
          clinical: "Higher levels within range provide optimal antioxidant protection. Orfanos-Boeckel recommends 130-150 μg/L."
        },
        { 
          name: "Vitamin B1 (Thiamine)", 
          optimal: "70-180", 
          official: "66-200", 
          unit: "nmol/L",
          description: "Essential for energy metabolism and nervous system function.",
          clinical: "Optimal levels support neurological health and energy production. Orfanos-Boeckel targets 100-160 nmol/L."
        },
        { 
          name: "Vitamin B6", 
          optimal: "35-110", 
          official: "20-125", 
          unit: "nmol/L",
          description: "Important for protein metabolism, neurotransmitter synthesis, and immune function.",
          clinical: "Higher levels within range support optimal brain function and immune health."
        },
        { 
          name: "Vitamin E", 
          optimal: "12-42", 
          official: "5-20", 
          unit: "μmol/L",
          description: "Fat-soluble antioxidant vitamin protecting cell membranes from oxidative damage.",
          clinical: "Higher levels provide enhanced antioxidant protection. Orfanos-Boeckel recommends 20-35 μmol/L."
        },
        { 
          name: "Vitamin K2", 
          optimal: "1.0-8.0", 
          official: "0.13-1.88", 
          unit: "ng/mL",
          description: "Essential for bone health and cardiovascular function, directs calcium to bones.",
          clinical: "Higher levels support optimal bone mineralization and prevent arterial calcification."
        },
        { 
          name: "Copper", 
          optimal: "70-140", 
          official: "70-140", 
          unit: "μg/dL",
          description: "Essential trace element for iron metabolism, connective tissue, and antioxidant enzymes.",
          clinical: "Balance with zinc is crucial. Orfanos-Boeckel monitors copper:zinc ratio for optimal health."
        }
      ]
    },
    {
      category: "Hormones & Thyroid",
      expert: "Dr. David Brownstein, Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz",
      markers: [
        { 
          name: "TSH", 
          optimal: "1.0-2.0", 
          official: "0.4-4.0", 
          unit: "mIU/L",
          description: "Thyroid Stimulating Hormone, regulates thyroid function and metabolic rate.",
          clinical: "Narrower optimal range for maintaining metabolic efficiency. Orfanos-Boeckel targets 1.0-1.5 mIU/L."
        },
        { 
          name: "Free T3", 
          optimal: "3.0-4.0", 
          official: "2.3-4.2", 
          unit: "pg/mL",
          description: "Active thyroid hormone, reflects actual thyroid function better than TSH alone.",
          clinical: "Optimal levels ensure adequate cellular metabolism. Orfanos-Boeckel emphasizes upper third of range."
        },
        { 
          name: "Free T4", 
          optimal: "1.3-1.8", 
          official: "0.8-1.8", 
          unit: "ng/dL",
          description: "Thyroid prohormone, converted to active T3 in tissues.",
          clinical: "Higher end of range often optimal for energy and metabolism. Orfanos-Boeckel targets 1.4-1.7 ng/dL."
        },
        { 
          name: "Reverse T3", 
          optimal: "< 20", 
          official: "9-27", 
          unit: "ng/dL",
          description: "Inactive form of T3 that can block T3 receptors, elevated in stress and illness.",
          clinical: "Lower levels indicate better thyroid function. Orfanos-Boeckel emphasizes < 15 ng/dL for optimal metabolism."
        },
        { 
          name: "Testosterone (M)", 
          optimal: "500-900", 
          official: "270-1070", 
          unit: "ng/dL",
          description: "Primary male sex hormone, affects muscle mass, bone density, and overall vitality.",
          clinical: "Higher levels within range support healthy aging. Strunz targets 600-800 ng/dL for men over 40."
        },
        { 
          name: "Estradiol (F)", 
          optimal: "100-200", 
          official: "15-350", 
          unit: "pg/mL",
          description: "Primary female sex hormone, varies with menstrual cycle and menopause status.",
          clinical: "Optimal levels depend on life stage. Orfanos-Boeckel emphasizes bioidentical hormone optimization."
        },
        { 
          name: "DHEA-S", 
          optimal: "350-500", 
          official: "80-560", 
          unit: "μg/dL",
          description: "Dehydroepiandrosterone sulfate, adrenal hormone precursor declining with age.",
          clinical: "Higher levels within range associated with better stress resilience. Strunz targets 400-450 μg/dL."
        },
        { 
          name: "Cortisol (AM)", 
          optimal: "12-22", 
          official: "6-23", 
          unit: "μg/dL",
          description: "Primary stress hormone, should be highest in morning and decline throughout day.",
          clinical: "Optimal morning levels indicate healthy adrenal function. Orfanos-Boeckel emphasizes circadian rhythm optimization."
        },
        { 
          name: "Progesterone (F)", 
          optimal: "15-25", 
          official: "1-20", 
          unit: "ng/mL",
          description: "Hormone essential for reproductive health and neuroprotection in women.",
          clinical: "Higher levels support mood stability and bone health. Orfanos-Boeckel targets optimal ratios with estrogen."
        },
        { 
          name: "Growth Hormone", 
          optimal: "0.5-3.0", 
          official: "0-10", 
          unit: "ng/mL",
          description: "Anabolic hormone promoting growth, muscle mass, and metabolic health.",
          clinical: "Moderate levels support healthy aging without excessive IGF-1 elevation."
        },
        { 
          name: "Melatonin", 
          optimal: "10-60", 
          official: "1-20", 
          unit: "pg/mL",
          description: "Sleep hormone and powerful antioxidant, declines significantly with age.",
          clinical: "Higher levels support better sleep quality and antioxidant protection. Orfanos-Boeckel recommends supplementation."
        }
      ]
    },
    {
      category: "Advanced Longevity",
      expert: "Dr. David Sinclair, Dr. Valter Longo, Dr. Ulrich Strunz",
      markers: [
        { 
          name: "IGF-1", 
          optimal: "150-250", 
          official: "84-400", 
          unit: "ng/mL",
          description: "Insulin-like Growth Factor 1, mediates growth hormone effects. Complex relationship with aging.",
          clinical: "Moderate levels balance growth benefits with longevity considerations. Strunz targets 180-220 ng/mL."
        },
        { 
          name: "NAD+", 
          optimal: "> 40", 
          official: "20-60", 
          unit: "μM",
          description: "Nicotinamide adenine dinucleotide, crucial for cellular energy and DNA repair.",
          clinical: "Higher levels associated with better cellular function and longevity. Emerging biomarker for aging."
        },
        { 
          name: "Klotho", 
          optimal: "> 800", 
          official: "500-1200", 
          unit: "pg/mL",
          description: "Anti-aging protein that regulates phosphate metabolism and oxidative stress.",
          clinical: "Higher levels associated with longevity and neuroprotection. Research-based longevity marker."
        },
        { 
          name: "Telomere Length", 
          optimal: "> Age Average", 
          official: "Variable", 
          unit: "T/S Ratio",
          description: "Protective DNA-protein structures at chromosome ends, shorter with age.",
          clinical: "Longer telomeres associated with cellular health and longevity. Lifestyle interventions can influence length."
        },
        { 
          name: "Advanced Glycation End Products", 
          optimal: "< 2.0", 
          official: "< 3.0", 
          unit: "AU",
          description: "Protein modifications from glucose that accumulate with age and diabetes.",
          clinical: "Lower levels indicate better glucose control and reduced aging acceleration."
        },
        { 
          name: "Interleukin-6", 
          optimal: "< 1.5", 
          official: "< 3.4", 
          unit: "pg/mL",
          description: "Pro-inflammatory cytokine elevated in aging and chronic disease.",
          clinical: "Lower levels indicate reduced inflammaging. Strunz emphasizes < 1.0 pg/mL for longevity."
        },
        { 
          name: "mTOR Activity", 
          optimal: "Moderate", 
          official: "Variable", 
          unit: "Relative",
          description: "Mechanistic target of rapamycin, key pathway regulating cellular growth and autophagy.",
          clinical: "Balanced mTOR activity supports growth when needed and autophagy for cellular cleanup."
        },
        { 
          name: "Autophagy Markers", 
          optimal: "Elevated", 
          official: "Variable", 
          unit: "Relative",
          description: "Cellular self-cleaning process that removes damaged proteins and organelles.",
          clinical: "Enhanced autophagy associated with longevity and reduced age-related diseases."
        },
        { 
          name: "Mitochondrial Function", 
          optimal: "High", 
          official: "Variable", 
          unit: "Relative",
          description: "Cellular powerhouses that decline with age, affecting energy production.",
          clinical: "Better mitochondrial function supports healthy aging and energy metabolism."
        }
      ]
    },
    {
      category: "Immune & Inflammatory",
      expert: "Dr. Mark Hyman, Dr. Terry Wahls, Dr. Helena Orfanos-Boeckel",
      markers: [
        { 
          name: "ESR", 
          optimal: "< 10", 
          official: "< 30", 
          unit: "mm/hr",
          description: "Erythrocyte Sedimentation Rate, non-specific marker of inflammation and tissue damage.",
          clinical: "Lower levels indicate reduced systemic inflammation. Orfanos-Boeckel targets < 5 mm/hr."
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
          clinical: "Higher levels often indicate better immune surveillance. Orfanos-Boeckel emphasizes 30-40%."
        },
        { 
          name: "NK Cells", 
          optimal: "> 15", 
          official: "7-40", 
          unit: "%",
          description: "Natural Killer cells that destroy virally infected and cancerous cells.",
          clinical: "Higher percentages associated with better immune surveillance and cancer protection."
        },
        { 
          name: "IgA", 
          optimal: "100-300", 
          official: "70-400", 
          unit: "mg/dL",
          description: "Immunoglobulin A, primary antibody for mucosal immunity.",
          clinical: "Optimal levels support gut and respiratory immunity. Orfanos-Boeckel targets 150-250 mg/dL."
        },
        { 
          name: "IgG", 
          optimal: "700-1600", 
          official: "700-1600", 
          unit: "mg/dL",
          description: "Immunoglobulin G, most abundant antibody in blood circulation.",
          clinical: "Balanced levels indicate proper immune function and memory response."
        },
        { 
          name: "IgM", 
          optimal: "40-230", 
          official: "40-230", 
          unit: "mg/dL",
          description: "Immunoglobulin M, first antibody produced in immune response.",
          clinical: "Optimal levels support acute immune responses and early pathogen detection."
        },
        { 
          name: "TNF-α", 
          optimal: "< 8.0", 
          official: "< 8.1", 
          unit: "pg/mL",
          description: "Tumor necrosis factor alpha, pro-inflammatory cytokine involved in systemic inflammation.",
          clinical: "Lower levels indicate reduced chronic inflammation and better metabolic health."
        },
        { 
          name: "IL-10", 
          optimal: "> 2.0", 
          official: "0.5-2.0", 
          unit: "pg/mL",
          description: "Interleukin-10, anti-inflammatory cytokine that helps regulate immune responses.",
          clinical: "Higher levels indicate better anti-inflammatory capacity and immune regulation."
        }
      ]
    },
    {
      category: "Liver & Detox",
      expert: "Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz",
      markers: [
        { 
          name: "ALT", 
          optimal: "< 25", 
          official: "< 40", 
          unit: "U/L",
          description: "Alanine aminotransferase, liver enzyme that indicates hepatocellular damage.",
          clinical: "Lower levels indicate better liver health. Orfanos-Boeckel targets < 20 U/L for optimal function."
        },
        { 
          name: "AST", 
          optimal: "< 25", 
          official: "< 40", 
          unit: "U/L",
          description: "Aspartate aminotransferase, enzyme found in liver and other tissues.",
          clinical: "Lower levels within normal range indicate better cellular health and liver function."
        },
        { 
          name: "GGT", 
          optimal: "< 30", 
          official: "< 60", 
          unit: "U/L",
          description: "Gamma-glutamyl transferase, enzyme involved in glutathione metabolism and detox.",
          clinical: "Lower levels indicate better liver function and glutathione status. Strunz targets < 25 U/L."
        },
        { 
          name: "Bilirubin", 
          optimal: "0.3-1.2", 
          official: "0.3-1.2", 
          unit: "mg/dL",
          description: "Breakdown product of red blood cells, processed by the liver.",
          clinical: "Balanced levels indicate proper liver function and red blood cell turnover."
        },
        { 
          name: "Albumin", 
          optimal: "4.0-5.0", 
          official: "3.5-5.0", 
          unit: "g/dL",
          description: "Major protein produced by liver, reflects liver synthetic function and nutritional status.",
          clinical: "Higher levels within range indicate better liver function and protein synthesis."
        },
        { 
          name: "Glutathione", 
          optimal: "> 900", 
          official: "600-1200", 
          unit: "μmol/L",
          description: "Master antioxidant produced by liver, crucial for detoxification and cellular protection.",
          clinical: "Higher levels provide better antioxidant protection and detox capacity. Orfanos-Boeckel targets > 1000 μmol/L."
        },
        { 
          name: "Phase I Detox", 
          optimal: "Normal", 
          official: "Variable", 
          unit: "Relative",
          description: "Cytochrome P450 enzyme system for initial toxin processing.",
          clinical: "Balanced Phase I activity prevents accumulation of toxic intermediates."
        },
        { 
          name: "Phase II Detox", 
          optimal: "High", 
          official: "Variable", 
          unit: "Relative",
          description: "Conjugation reactions that neutralize toxins for elimination.",
          clinical: "Enhanced Phase II activity ensures efficient toxin elimination and reduced oxidative stress."
        }
      ]
    },
    {
      category: "Kidney & Electrolytes",
      expert: "Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz",
      markers: [
        { 
          name: "Creatinine", 
          optimal: "0.8-1.2", 
          official: "0.6-1.2", 
          unit: "mg/dL",
          description: "Waste product filtered by kidneys, marker of kidney function.",
          clinical: "Lower levels within normal range often indicate better kidney function and muscle mass."
        },
        { 
          name: "BUN", 
          optimal: "10-20", 
          official: "7-20", 
          unit: "mg/dL",
          description: "Blood urea nitrogen, waste product filtered by kidneys.",
          clinical: "Optimal levels indicate proper kidney function and protein metabolism."
        },
        { 
          name: "eGFR", 
          optimal: "> 90", 
          official: "> 90", 
          unit: "mL/min/1.73m²",
          description: "Estimated glomerular filtration rate, best overall measure of kidney function.",
          clinical: "Higher levels indicate better kidney function and longevity. Orfanos-Boeckel targets > 100."
        },
        { 
          name: "Sodium", 
          optimal: "138-142", 
          official: "136-145", 
          unit: "mmol/L",
          description: "Major electrolyte regulating fluid balance and blood pressure.",
          clinical: "Optimal narrow range supports proper cellular function and blood pressure regulation."
        },
        { 
          name: "Potassium", 
          optimal: "4.0-4.5", 
          official: "3.5-5.0", 
          unit: "mmol/L",
          description: "Essential electrolyte for muscle and nerve function, blood pressure regulation.",
          clinical: "Higher levels within range support cardiovascular health and blood pressure control."
        },
        { 
          name: "Chloride", 
          optimal: "100-106", 
          official: "98-107", 
          unit: "mmol/L",
          description: "Electrolyte that helps maintain fluid balance and acid-base status.",
          clinical: "Balanced levels support proper hydration and acid-base balance."
        },
        { 
          name: "Phosphorus", 
          optimal: "3.0-4.0", 
          official: "2.5-4.5", 
          unit: "mg/dL",
          description: "Essential mineral for bone health, energy metabolism, and cellular function.",
          clinical: "Optimal levels support bone health and energy production. Orfanos-Boeckel targets 3.2-3.8 mg/dL."
        },
        { 
          name: "Calcium", 
          optimal: "9.5-10.2", 
          official: "8.5-10.5", 
          unit: "mg/dL",
          description: "Essential mineral for bone health, muscle function, and nerve transmission.",
          clinical: "Optimal levels support bone health and proper muscle function."
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
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-8">
            {biomarkerCategories.map((category) => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
                className="text-xs sm:text-sm px-1 sm:px-2"
              >
                {category.category.replace(' & ', ' & ')}
              </TabsTrigger>
            ))}
          </TabsList>

          {biomarkerCategories.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-2xl text-slate-800">
                      {category.category} Biomarkers
                    </CardTitle>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      Experts: {category.expert}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[160px] min-w-[160px]">Biomarker</TableHead>
                          <TableHead className="text-center min-w-[120px]">Optimal Range</TableHead>
                          <TableHead className="text-center min-w-[120px]">Official Range</TableHead>
                          <TableHead className="text-center min-w-[80px]">Unit</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.markers.map((marker, index) => (
                          <TableRow key={index} className="hover:bg-slate-50">
                            <TableCell className="font-medium text-sm">{marker.name}</TableCell>
                            <TableCell className="text-center">
                              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs">
                                {marker.optimal}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="outline" className="text-slate-600 text-xs">
                                {marker.official}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center text-xs text-slate-500">
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
                  </div>
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
                Based on latest longevity research from leading experts including Dr. Strunz and Dr. Orfanos-Boeckel, 
                representing values associated with healthspan optimization and reduced disease risk.
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
                and disease detection, often wider than optimal ranges for longevity.
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
                practitioners including German experts Dr. Strunz and Dr. Orfanos-Boeckel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferenceValues;
