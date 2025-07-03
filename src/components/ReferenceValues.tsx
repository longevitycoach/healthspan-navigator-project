import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info, User, BookOpen, Users, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import CategoryMenu from "./CategoryMenu";

const cardiovascularBiomarkers = [
  {
    name: "ApoB (Apolipoprotein B)",
    optimalRange: "< 80 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "Found on all 'bad' lipoproteins (like LDL), strongly correlated with increased cardiovascular disease risk. More informative than LDL alone.",
    clinicalNotes: "Essential marker for cardiovascular risk assessment, superior to LDL-C for risk prediction. This marker is found on all 'bad' lipoproteins and provides better cardiovascular risk stratification than traditional cholesterol panels.",
    factors: ["Diet", "Exercise", "Statins", "Genetics"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Lipoprotein(a) [Lp(a)]",
    optimalRange: "< 30 mg/dL",
    officialRange: "< 75 nmol/L",
    description: "Genetic risk factor for cardiovascular disease, independent of other lipid parameters.",
    clinicalNotes: "Managing Lp(a) levels may require specialized interventions and monitoring. Genetic component makes it less responsive to lifestyle changes. A genetic risk factor for cardiovascular disease that operates independently of other cholesterol markers.",
    factors: ["Genetics", "Niacin", "PCSK9 Inhibitors"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "HDL Cholesterol",
    optimalRange: "> 50 mg/dL (women), > 40 mg/dL (men)",
    officialRange: "> 40 mg/dL (men), > 50 mg/dL (women)",
    description: "High-density lipoprotein, often referred to as 'good cholesterol'. Higher levels are generally protective.",
    clinicalNotes: "Essential component of cardiovascular risk assessment, though quality matters more than quantity. Functions as reverse cholesterol transport system.",
    factors: ["Exercise", "Diet", "Genetics", "Alcohol (moderate)"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "LDL Cholesterol",
    optimalRange: "< 100 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "Low-density lipoprotein, one of the 'bad' lipoproteins that carries ApoB.",
    clinicalNotes: "Traditional marker for cardiovascular risk, though ApoB is more predictive. Still important for overall lipid profile assessment.",
    factors: ["Diet", "Exercise", "Genetics", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Triglycerides",
    optimalRange: "< 100 mg/dL",
    officialRange: "< 150 mg/dL",
    description: "Type of fat transported in the blood, influenced by diet and metabolic health.",
    clinicalNotes: "Elevated levels associated with increased cardiovascular risk and metabolic dysfunction. Responds well to dietary modifications.",
    factors: ["Diet", "Exercise", "Alcohol", "Genetics"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Omega-3 Index",
    optimalRange: "> 8%",
    officialRange: "4-8%",
    description: "Percentage of EPA and DHA in red blood cell membranes. Low levels linked to higher mortality risk, called 'the new smoking'.",
    clinicalNotes: "Critical for cardiovascular health, brain function, and inflammation control. Most people have insufficient levels due to poor Omega-3 to Omega-6 ratios. Best measured in EDTA blood samples, not serum.",
    factors: ["Fish consumption", "Supplementation", "Diet quality", "Antioxidants (co-factor)"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Homocysteine",
    optimalRange: "< 8 µmol/L",
    officialRange: "< 15 µmol/L",
    description: "Amino acid whose elevated levels are linked to cardiovascular risk. Often correlates with B-vitamin deficiencies.",
    clinicalNotes: "Elevated levels indicate increased cardiovascular risk and potential B6, B9, or B12 deficiencies. High homocysteine often correlates with deficiencies in Vitamin B6, Vitamin B9 (Folic acid), or Vitamin B12.",
    factors: ["Vitamin B6", "Vitamin B9 (Folate)", "Vitamin B12", "Genetics"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "hs-CRP (High-Sensitivity C-Reactive Protein)",
    optimalRange: "< 1 mg/L",
    officialRange: "< 3 mg/L",
    description: "Marker of general inflammation in the body. High levels indicate 'silent inflammation' contributing to aging.",
    clinicalNotes: "Should always be measured with ferritin as inflammation can falsely elevate ferritin levels. High CRP indicates 'silent inflammation' which contributes to aging (inflammaging).",
    factors: ["Diet", "Exercise", "Stress", "Infections"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Blood Pressure (Systolic/Diastolic)",
    optimalRange: "< 120/80 mmHg",
    officialRange: "< 130/80 mmHg",
    description: "Critical for cardiovascular health. Hypertension often goes unnoticed in early stages.",
    clinicalNotes: "Regularly monitor, especially for women in/after menopause due to hormonal shifts, and men experiencing erectile dysfunction, which can be an early warning sign of blood vessel issues.",
    factors: ["Diet", "Exercise", "Stress", "Sleep", "Sodium intake"],
    expertSource: "Various Medical Guidelines"
  }
];

const metabolicBiomarkers = [
  {
    name: "Fasting Glucose",
    optimalRange: "< 100 mg/dL",
    officialRange: "70-99 mg/dL",
    description: "Blood sugar levels after overnight fast. Values over 100 mg/dL indicate disturbed glucose metabolism.",
    clinicalNotes: "Key marker for metabolic health and diabetes risk assessment. Essential for longevity optimization.",
    factors: ["Diet", "Exercise", "Stress", "Sleep"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "HbA1c (Hemoglobin A1c)",
    optimalRange: "< 5.3%",
    officialRange: "< 5.7%",
    description: "Average blood sugar level over 2-3 months. Key diagnostic marker for diabetes and longevity parameter.",
    clinicalNotes: "Values from 5.7% indicate beginning disturbance. Measurement method can influence results. Provides an average blood sugar level over several months and is a relevant parameter for longevity.",
    factors: ["Diet", "Exercise", "Medications", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "HOMA Index",
    optimalRange: "< 2.0",
    officialRange: "< 2.5",
    description: "Reflects insulin sensitivity and resistance, serving as indicator for pre-diabetic states.",
    clinicalNotes: "Often not routinely measured in conventional medicine but crucial for metabolic assessment. This index reflects insulin sensitivity and resistance, serving as an indicator for pre-diabetic states.",
    factors: ["Diet", "Exercise", "Body weight", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Continuous Glucose Monitoring (CGM)",
    optimalRange: "70-140 mg/dL (minimal spikes)",
    officialRange: "Not established",
    description: "Monitors blood sugar spikes throughout the day. Rapid increases are undesirable as they can lead to energy crashes and cravings.",
    clinicalNotes: "Important for individuals aiming for stable energy, weight management, and prevention of type 2 diabetes. Can reveal glucose patterns not visible in single measurements.",
    factors: ["Diet timing", "Food composition", "Exercise", "Stress", "Sleep"],
    expertSource: "Thiemo Osterhaus"
  }
];

const vitaminsBiomarkers = [
  {
    name: "Vitamin D (25-OH)",
    optimalRange: "40-60 ng/mL",
    officialRange: "30-100 ng/mL",
    description: "Crucial for immune function, bone health, mood regulation, neurotransmitter formation, and hormone modulation.",
    clinicalNotes: "Up to 60% of Germans estimated deficient, especially in winter. Higher doses recommended than official guidelines (2500 IU summer, 5000 IU winter). Important for brain health, protecting against autoimmune diseases, and preventing 'winter blues' or depression. Critical for fertility and egg quality.",
    factors: ["Sun exposure", "Supplementation", "Skin color", "Geographic location", "Vitamin K2 (co-factor)", "Magnesium (co-factor)"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin D (1,25-OH)",
    optimalRange: "Varies",
    officialRange: "19-67 pg/mL",
    description: "Active form of Vitamin D. Testing alongside 25-OH can be relevant for immune system problems or autoimmune diseases.",
    clinicalNotes: "Helps understand Vitamin D metabolism, particularly important for autoimmune conditions. This is the active form of Vitamin D and testing this in addition to 25-OH Vitamin D can be particularly relevant for individuals with immune system problems.",
    factors: ["Kidney function", "PTH levels", "Calcium status"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin K2 (MK-7)",
    optimalRange: "> 1 ng/mL",
    officialRange: "No official range",
    description: "Vital for bone health (calcium distribution) and heart health. Works synergistically with Vitamin D.",
    clinicalNotes: "Ensures calcium is deposited in bones, not arteries. Studies explore effects on immune health and athletic performance. Works synergistically with Vitamin D to ensure calcium is deposited in bones and not in arteries.",
    factors: ["Diet", "Supplementation", "Gut bacteria"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin C",
    optimalRange: "> 12 mg/L",
    officialRange: "4-15 mg/L",
    description: "'Queen of vitamins' - crucial for immune system, collagen formation, nerve health. Key antioxidant and co-factor for cortisol/DHEA production.",
    clinicalNotes: "Essential for iron absorption, often underestimated. Important for fertility and egg quality. Crucial for a strong immune system, collagen formation, and healthy nerve cells. Co-factor for Cortisol and DHEA production.",
    factors: ["Diet", "Supplementation", "Stress", "Smoking"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin B12 (Holotranscobalamin)",
    optimalRange: "> 400 pg/mL",
    officialRange: "200-1100 pg/mL",
    description: "Essential for nervous system function and reducing fatigue. Deficiency can cause irreversible nerve damage.",
    clinicalNotes: "Critical for vegetarians/vegans. High doses recommended for neurodegenerative diseases. Holotranscobalamin more accurate than total B12. Particularly critical for vegetarians and vegans as it is primarily found in animal products.",
    factors: ["Diet", "Absorption", "Age", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Folate (Vitamin B9)",
    optimalRange: "> 10 ng/mL",
    officialRange: "> 3.1 ng/mL",
    description: "Essential for blood formation and reducing fatigue. Increased demand in women of childbearing age.",
    clinicalNotes: "Critical during pregnancy and lactation. Works with B12 and B6 to control homocysteine. Essential for normal blood formation and there is an increased demand in women of childbearing age.",
    factors: ["Diet", "Pregnancy", "Alcohol", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "B-Complex Vitamins",
    optimalRange: "Varies by vitamin",
    officialRange: "Varies by vitamin",
    description: "Complex of vitamins vital for energy production, nerve function, blood formation, and neurotransmitter synthesis.",
    clinicalNotes: "A comprehensive B-complex is recommended over individual B vitamins for balanced intake. Especially important for brain health, nervous system support during stress, and for the gut-brain axis in managing pain.",
    factors: ["Diet", "Stress", "Age", "Absorption"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin B6 (Pyridoxine)",
    optimalRange: "20-50 ng/mL",
    officialRange: "5-50 ng/mL",
    description: "Important for steroid hormone synthesis. Deficiency linked to homocysteine levels and mood swings.",
    clinicalNotes: "Important for steroid hormone synthesis. Its deficiency is linked to homocysteine levels and can affect mood swings and psychological well-being. Care should be taken with synthetic forms.",
    factors: ["Diet", "Hormonal status", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Vitamin B5 (Pantothenic Acid)",
    optimalRange: "0.5-1.8 mg/L",
    officialRange: "Not established",
    description: "Crucial co-factor for Cortisol and DHEA production in the adrenal glands.",
    clinicalNotes: "A crucial co-factor for Cortisol and DHEA production in the adrenal glands, especially beneficial for exhaustion and burnout.",
    factors: ["Stress", "Adrenal function", "Diet"],
    expertSource: "Thiemo Osterhaus"
  }
];

const mineralsBiomarkers = [
  {
    name: "Ferritin",
    optimalRange: "100-120 µg/L (women), 100-150 µg/L (men)",
    officialRange: "15-150 µg/L (women), 30-400 µg/L (men)",
    description: "Primary marker for iron stores. Low levels indicate iron deficiency even if hemoglobin is normal.",
    clinicalNotes: "Very common deficiency, especially in menstruating women, athletes, vegetarians. Can be falsely elevated by inflammation (check CRP). Symptoms include chronic fatigue, hair loss, brittle nails, concentration problems, and reduced fertility. Always include Hemoglobin, Transferrin Saturation, and CRP alongside Ferritin for accurate diagnosis.",
    factors: ["Menstruation", "Diet", "Absorption", "Blood loss", "Vitamin C (co-factor)"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Hemoglobin (HB)",
    optimalRange: "> 12 g/dL (women), > 13 g/dL (men)",
    officialRange: "12-15.5 g/dL (women), 13.5-17.5 g/dL (men)",
    description: "The protein in red blood cells that carries oxygen. Used to diagnose anemia.",
    clinicalNotes: "Used to diagnose anemia (blood deficiency), with defined cut-offs for women (<12 g/dL), men (<13 g/dL), and pregnant women (<11 g/dL).",
    factors: ["Iron status", "B12", "Folate", "Chronic disease"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Magnesium (Whole Blood)",
    optimalRange: "2.2-2.6 mg/dL",
    officialRange: "1.7-2.2 mg/dL",
    description: "Involved in 600+ metabolic processes. Crucial for muscle function, nervous system, energy production, neurotransmitter formation.",
    clinicalNotes: "~80% of population deficient. High demand for athletes and high-stress individuals. Whole blood analysis more accurate than serum. Crucial for muscle function, energy production (ATP synthesis depends on Magnesium), and sleep quality.",
    factors: ["Diet", "Stress", "Exercise", "Medications"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Zinc",
    optimalRange: "90-110 µg/dL",
    officialRange: "60-120 µg/dL",
    description: "Important for immune system, cell division, collagen formation, steroid hormone synthesis. Deficiency causes hair loss, brittle nails.",
    clinicalNotes: "Critical for vegetarians/vegans due to phytate binding. Recommended for athletes and gut barrier healing. Important for synthesis of steroid hormones (Testosterone, Progesterone, Estrogen).",
    factors: ["Diet", "Phytates", "Absorption", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Selenium",
    optimalRange: "100-150 µg/L",
    officialRange: "50-200 µg/L",
    description: "Important for oxidative stress protection, immune system, antioxidant function, and thyroid health.",
    clinicalNotes: "European soil often selenium-poor, leading to common deficiencies. Higher doses may be needed than standard recommendations. Vital for healthy antioxidant and thyroid function.",
    factors: ["Soil content", "Diet", "Geographic location"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Iodine",
    optimalRange: "100-199 µg/L",
    officialRange: "50-125 µg/L",
    description: "Essential for normal thyroid function and cognitive function.",
    clinicalNotes: "Many regions (like Germany) are iodine-poor. Common in those consuming little iodized salt or fish. High doses can be used for thyroid support in fertility contexts.",
    factors: ["Geographic location", "Salt intake", "Fish consumption"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Calcium",
    optimalRange: "9.5-10.5 mg/dL",
    officialRange: "8.5-10.5 mg/dL",
    description: "Essential for normal bone and tooth formation and muscle function.",
    clinicalNotes: "Requires adequate Vitamin D for proper absorption. People who avoid dairy products often show a deficiency.",
    factors: ["Vitamin D", "Diet", "Parathyroid function"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Copper",
    optimalRange: "70-140 µg/dL",
    officialRange: "70-140 µg/dL",
    description: "A co-factor whose deficiency can impair iron absorption.",
    clinicalNotes: "A co-factor whose deficiency can impair iron absorption. Important for connective tissue formation.",
    factors: ["Diet", "Zinc balance", "Absorption"],
    expertSource: "Thiemo Osterhaus"
  }
];

const hormonesBiomarkers = [
  {
    name: "TSH (Thyroid Stimulating Hormone)",
    optimalRange: "1.0-2.0 mIU/L",
    officialRange: "0.4-4.0 mIU/L",
    description: "While commonly measured, TSH alone is insufficient for comprehensive thyroid assessment.",
    clinicalNotes: "Should be evaluated alongside fT3 and fT4 for complete thyroid function assessment. Experts emphasize that TSH alone is insufficient for a comprehensive assessment of thyroid function.",
    factors: ["Thyroid disease", "Stress", "Medications", "Age"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "fT3 (Free Triiodothyronine)",
    optimalRange: "3.0-4.2 pg/mL",
    officialRange: "2.3-4.2 pg/mL",
    description: "The active thyroid hormone, critical for metabolism and energy.",
    clinicalNotes: "More indicative of thyroid function than TSH alone. Essential for comprehensive assessment. The active thyroid hormone critical for metabolism and energy.",
    factors: ["Thyroid health", "Iodine", "Selenium", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "fT4 (Free Thyroxine)",
    optimalRange: "1.0-1.8 ng/dL",
    officialRange: "0.8-1.8 ng/dL",
    description: "Precursor to fT3, important for overall thyroid function assessment.",
    clinicalNotes: "Should be evaluated with fT3 and TSH for complete picture. A precursor to fT3 and important for overall thyroid function assessment.",
    factors: ["Thyroid health", "Medications", "Stress"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Testosterone (Free)",
    optimalRange: "15-25 pg/mL (men), 1-4 pg/mL (women)",
    officialRange: "9-30 pg/mL (men), 0.3-3.2 pg/mL (women)",
    description: "Important for dopaminergic system, learning, memory, concentration. Has neuroprotective qualities.",
    clinicalNotes: "Men in 30s-40s can experience deficiency. Measure SHBG alongside total testosterone to calculate free testosterone. Important for the dopaminergic system, acetylcholine (learning, memory, concentration), and can help prevent depression and cognitive impairment.",
    factors: ["Vitamin D3", "Vitamin B6", "Zinc", "Magnesium", "Age"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Estradiol (E2)",
    optimalRange: "20-40 pg/mL (women)",
    officialRange: "30-400 pg/mL (cycling women)",
    description: "Important for happiness, well-being, serotonergic/dopaminergic systems, and acetylcholine (learning/memory).",
    clinicalNotes: "Protective against cardiovascular disease in women. Decline during menopause can increase blood pressure. Important for the proper functioning of the serotonergic and dopaminergic systems.",
    factors: ["Age", "Menopause", "Stress", "Body weight"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Progesterone",
    optimalRange: "5-20 ng/mL (luteal phase)",
    officialRange: "0.2-25 ng/mL",
    description: "Important for relaxation, mood stabilization, sleep quality, GABAergic system. Deficiency causes irritability, sleep issues.",
    clinicalNotes: "Test on cycle day 19-21 for women. Can be measured in serum or saliva (saliva preferred for free hormones). Important for the GABAergic system (which promotes calm) and deficiency can lead to irritability and sleep disturbances.",
    factors: ["Stress", "Age", "Cycle phase", "Sleep"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "DHEA (Dehydroepiandrosterone)",
    optimalRange: "200-400 µg/dL",
    officialRange: "85-690 µg/dL",
    description: "Precursor hormone for testosterone and estrogen production. Often described as 'healing' hormone.",
    clinicalNotes: "Vitamin C and Pantothenic acid (B5) are crucial co-factors for production. A precursor hormone that the body uses to produce Testosterone and Estrogen.",
    factors: ["Age", "Stress", "Vitamin C", "Vitamin B5"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "SHBG (Sex Hormone-Binding Globulin)",
    optimalRange: "18-54 nmol/L (men), 18-144 nmol/L (women)",
    officialRange: "18-54 nmol/L (men), 18-144 nmol/L (women)",
    description: "A binding protein that transports sex hormones in the blood.",
    clinicalNotes: "Essential to measure alongside total testosterone to accurately calculate free (bioavailable) testosterone.",
    factors: ["Age", "Thyroid function", "Insulin resistance"],
    expertSource: "Thiemo Osterhaus"
  }
];

const liverBiomarkers = [
  {
    name: "ALT (GPT)",
    optimalRange: "< 30 U/L",
    officialRange: "7-55 U/L",
    description: "Glutamate Pyruvate Transaminase - enzyme indicating liver function and potential damage.",
    clinicalNotes: "Elevated levels indicate liver stress or damage. Part of comprehensive liver function assessment.",
    factors: ["Alcohol", "Medications", "Liver disease", "Diet"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "AST (GOT)", 
    optimalRange: "< 30 U/L",
    officialRange: "8-48 U/L",
    description: "Glutamate Oxaloacetate Transaminase - enzyme indicating liver function and potential damage.",
    clinicalNotes: "Can also indicate muscle damage, should be interpreted with other liver markers. Part of liver function assessment panel.",
    factors: ["Alcohol", "Medications", "Liver disease", "Exercise"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Gamma-GT",
    optimalRange: "< 30 U/L",
    officialRange: "9-48 U/L",
    description: "Gamma-Glutamyl Transferase - elevated levels correlated with higher risk of earlier mortality.",
    clinicalNotes: "Sensitive marker for liver stress and alcohol consumption. Elevated levels have been correlated with a higher risk of earlier mortality.",
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
    clinicalNotes: "Basic marker for kidney function assessment. Should be interpreted alongside eGFR and other kidney markers.",
    factors: ["Kidney disease", "Dehydration", "Muscle mass"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Cystatin C",
    optimalRange: "0.5-0.9 mg/L",
    officialRange: "0.5-1.0 mg/L",
    description: "More sensitive marker for kidney function than creatinine, less affected by muscle mass.",
    clinicalNotes: "Superior to creatinine for early kidney function assessment. More sensitive marker for kidney function than creatinine and less affected by muscle mass.",
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

const longevityBiomarkers = [
  {
    name: "CoQ10 (Ubiquinol)",
    optimalRange: "> 2.5 µg/mL",
    officialRange: "0.4-1.8 µg/mL",
    description: "Vital for mitochondrial energy production, heart health, combating chronic fatigue. Levels decline with age.",
    clinicalNotes: "Works with Vitamin B12 for mitochondrial function. Essential for cellular energy production. Vital for mitochondrial energy production ('fuel for the furnace') and heart health.",
    factors: ["Age", "Statin use", "Heart disease", "Supplementation"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "Glutathione",
    optimalRange: "900-1400 µmol/L",
    officialRange: "550-1100 µmol/L",
    description: "Master antioxidant and main detoxification molecule. Protects cells, supports immune system, guards gut/brain barriers.",
    clinicalNotes: "Deficiency common due to environmental toxins. Critical for detoxification and cellular protection. Considered the body's 'master antioxidant' and main detoxification molecule.",
    factors: ["Environmental toxins", "Age", "Stress", "Diet"],
    expertSource: "Thiemo Osterhaus"
  },
  {
    name: "VO2 Max",
    optimalRange: "> 50 mL/kg/min (men), > 40 mL/kg/min (women)",
    officialRange: "Varies by age/fitness",
    description: "Maximum rate of oxygen consumption during intense exercise. Strong correlation with physical condition and life expectancy.",
    clinicalNotes: "Has a strong correlation with overall physical condition and life expectancy. Its measurement is being advocated as a standard for general medical check-ups.",
    factors: ["Cardiovascular fitness", "Age", "Training", "Genetics"],
    expertSource: "Longevity Research"
  },
  {
    name: "Epigenetic Age / Aging Clocks",
    optimalRange: "< Chronological Age",
    officialRange: "Not established",
    description: "Biological markers that estimate biological age, which may differ from chronological age.",
    clinicalNotes: "Lifestyle factors like diet and exercise can significantly influence this marker. These are biological markers that can estimate a person's biological age.",
    factors: ["Diet", "Exercise", "Sleep", "Stress management"],
    expertSource: "Longevity Research"
  },
  {
    name: "Taurine",
    optimalRange: "40-100 µmol/L",
    officialRange: "Not established",
    description: "Shows promising longevity effects in animal studies, important for nerve metabolism.",
    clinicalNotes: "Shows promising longevity effects in animal studies, also important for nerve metabolism. Research suggests potential anti-aging benefits.",
    factors: ["Diet", "Supplementation", "Age"],
    expertSource: "Longevity Research"  
  },
  {
    name: "NAD+ / NADH Ratio",
    optimalRange: "> 3:1",
    officialRange: "Not established", 
    description: "Critical for cellular energy production and DNA repair. Declines with age.",
    clinicalNotes: "Essential for mitochondrial function and cellular repair processes. Supplementation with NAD+ precursors being studied for longevity benefits.",
    factors: ["Age", "Exercise", "Fasting", "Sleep"],
    expertSource: "Longevity Research"
  }
];

const specializedBiomarkers = [
  {
    name: "Heavy Metals Panel (Mercury, Aluminum, Lead)",
    optimalRange: "< Detection Limit",
    officialRange: "Varies by metal",
    description: "Exposure to these toxins is significant concern for brain health and linked to neurodegenerative diseases.",
    clinicalNotes: "Exposure to these toxins is a significant concern for brain health and is linked to neurodegenerative diseases like Alzheimer's and Parkinson's. Testing for them is recommended.",
    factors: ["Environmental exposure", "Dental work", "Diet", "Occupational exposure"],
    expertSource: "Environmental Medicine"
  },
  {
    name: "Amino Acids Panel",
    optimalRange: "Varies by amino acid",
    officialRange: "Varies by amino acid",
    description: "Measuring individual amino acids helps assess protein metabolism, neurotransmitter synthesis, and hormone production.",
    clinicalNotes: "Helps assess protein metabolism, neurotransmitter synthesis, and hormone production. Includes essential amino acids the body cannot produce.",
    factors: ["Diet", "Protein intake", "Absorption", "Metabolism"],
    expertSource: "Functional Medicine"
  },
  {
    name: "Short-Chain Fatty Acids (SCFA)",
    optimalRange: "High diversity",
    officialRange: "Not established",
    description: "Beneficial metabolites produced by gut bacteria. Important indicators of gut health.",
    clinicalNotes: "Their levels, assessed through microbiome analysis, are important indicators of gut health and can influence the gut barrier.",
    factors: ["Gut microbiome", "Fiber intake", "Diet quality"],
    expertSource: "Microbiome Research"
  },
  {
    name: "Microbiome Analysis",
    optimalRange: "High diversity",
    officialRange: "Not established",
    description: "Assessment of gut bacterial composition and metabolite production.",
    clinicalNotes: "Can help explain general, non-specific symptoms such as fatigue, body aches, and sensitive skin, linking them to gut imbalances.",
    factors: ["Diet", "Antibiotics", "Stress", "Environment"],
    expertSource: "Microbiome Research"
  },
  {
    name: "Food Intolerance Panel",
    optimalRange: "No significant reactions",
    officialRange: "Not established",
    description: "Identifies specific foods that trigger symptoms and contribute to gut inflammation.",
    clinicalNotes: "Can help identify specific foods (e.g., fructose, lactose, gluten) that trigger symptoms and contribute to gut inflammation.",
    factors: ["Gut health", "Immune system", "Genetics"],
    expertSource: "Functional Medicine"
  },
  {
    name: "Gut Permeability (Leaky Gut) Test",
    optimalRange: "Normal barrier function",
    officialRange: "Not established",
    description: "Assesses integrity of intestinal barrier. Increased permeability allows toxins to enter bloodstream.",
    clinicalNotes: "These tests assess the integrity of the intestinal barrier. Increased permeability allows toxins and undigested food particles to enter the bloodstream, triggering inflammation.",
    factors: ["Diet", "Stress", "Medications", "Infections"],
    expertSource: "Functional Medicine"
  }
];

const germanExperts = [
  {
    name: "Prof. Dr. Sven Voelpel",
    specialty: "Aging Research & Nutrition",
    description: "Professor focused on scientifically-backed nutrition and lifestyle interventions to slow and reverse aging, with research on autophagy and dietary effects on cancer cells."
  },
  {
    name: "Prof. Dr. Dr. Jürgen Gießing",
    specialty: "Sports Science & Creatine Research",
    description: "Professor studying creatine's effects on muscle metabolism, brain function, and neurodegenerative diseases, plus supplement quality control."
  },
  {
    name: "Dr. Christina Enzmann",
    specialty: "Women's Health & Functional Medicine",
    description: "Gynecologist expert in menopause, researching molecular mechanisms like the gut-hormone axis and nutrient deficiencies."
  },
  {
    name: "Prof. Dr. Gregor Hasler",
    specialty: "Gut-Brain Axis",
    description: "Psychiatrist and neuroscientist studying how gut bacteria and their metabolites affect mental health at the molecular level."
  },
  {
    name: "Prof. Dr. Klaus Günther",
    specialty: "Micronutrient Diagnostics",
    description: "Specialist focusing on iron deficiency and molecular diagnostics of essential trace elements."
  },
  {
    name: "Dr. Darja Wagner",
    specialty: "Fertility & Reproductive Health",
    description: "Biologist optimizing egg and sperm quality through nutrition and micronutrients, researching MTHFR gene effects on folate metabolism."
  },
  {
    name: "Dr. Reinhard Hannen",
    specialty: "Reproductive Medicine",
    description: "Specialist integrating molecular diagnostics into fertility treatments, focusing on thyroid hormones and environmental toxins."
  },
  {
    name: "Dr. Alina Lessenich",
    specialty: "Brain Health & Neurodegeneration",
    description: "Expert researching neurodegenerative diseases and neuroinflammation, advocating molecular interventions like magnesium L-threonate."
  },
  {
    name: "Thiemo Osterhaus",
    specialty: "Blood Diagnostics & Personalized Medicine",
    description: "Expert in developing optimal biomarker ranges and holistic, evidence-based molecular and nutrient medicine."
  },
  {
    name: "Prof. Dr. Andreas Michalsen",
    specialty: "Naturopathy & Nutritional Medicine",
    description: "Renowned expert researching molecular and cellular effects of fasting and plant-based diets."
  },
  {
    name: "Prof. Dr. Michael Roden",
    specialty: "Diabetes & Metabolic Research",
    description: "Director of German Diabetes Center, researching molecular mechanisms of insulin resistance and epigenetic regulation."
  },
  {
    name: "Prof. Dr. Jörn Walter",
    specialty: "Epigenetics",
    description: "Leading epigeneticist at University of Saarland, known for foundational research on DNA methylation and epigenomics."
  },
  {
    name: "Prof. Dr. Bernd Kleine-Gunk",
    specialty: "Preventive Medicine & Anti-Aging",
    description: "Chief physician prominent in preventive medicine, epigenetics, anti-aging, and lifestyle medicine."
  }
];

const internationalExperts = [
  {
    name: "Bryan Johnson",
    specialty: "Biohacking Pioneer",
    description: "Entrepreneur achieving organ-specific biological ages decades younger through $2M/year regimen of diet, exercise, and medical monitoring.",
    achievement: "Biological age: ~18-25 across different organs"
  },
  {
    name: "Dave Pascoe",
    specialty: "Systems Engineering & Longevity",
    description: "Retired systems engineer ranked ahead of Bryan Johnson in Rejuvenation Olympics for slowest biological aging.",
    achievement: "#1 in Rejuvenation Olympics at age 61"
  },
  {
    name: "David Sinclair",
    specialty: "Genetics & Epigenetic Reprogramming",
    description: "Harvard geneticist and founder of Tally Health, researching epigenetic reprogramming and longevity interventions.",
    achievement: "Claims 10-year biological age reduction"
  },
  {
    name: "Dr. Mark Hyman",
    specialty: "Functional Medicine",
    description: "Functional medicine leader attributing youthful biomarkers to nutrition, exercise, and meditation.",
    achievement: "Biological age 43 at chronological age 64"
  },
  {
    name: "Steve Horvath",
    specialty: "Epigenetic Clock Creator",
    description: "German-born geneticist who created the epigenetic clock for measuring biological age via DNA methylation."
  },
  {
    name: "Aubrey de Grey",
    specialty: "Longevity Research",
    description: "Advocates for damage repair strategies to reverse aging, known for the 'seven deadly causes' of aging theory."
  },
  {
    name: "Dr. Rhonda Patrick",
    specialty: "Biomedical Science Communication",
    description: "Biomedical scientist widely followed for podcasts on nutrition, molecular medicine, and longevity science."
  },
  {
    name: "Peter Attia, MD",
    specialty: "Longevity Medicine",
    description: "Physician and podcast host influential in translating longevity science and metabolic health for broad audiences."
  },
  {
    name: "Valter Longo",
    specialty: "Fasting Research",
    description: "Researcher known for Fasting Mimicking Diet and youthful biomarkers through dietary interventions."
  },
  {
    name: "Matt Kaeberlein",
    specialty: "Aging Biology",
    description: "University of Washington researcher studying rapamycin and mTOR pathway as key regulators of aging."
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
    { id: "longevity", label: "Longevity", icon: "🧪" },
    { id: "specialized", label: "Specialized", icon: "🔬" }
  ];

  const ExpertSourcesModal = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Badge variant="outline" className="bg-white cursor-pointer hover:bg-slate-50">
          <User className="h-3 w-3 mr-1" />
          Expert Sources
        </Badge>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Expert Sources & Longevity Pioneers
          </DialogTitle>
          <DialogDescription>
            Leading scientists, clinicians, and biohackers driving advances in longevity, epigenetics, and molecular medicine
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {/* German Experts Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-red-600" />
                <h3 className="text-lg font-semibold text-slate-800">German Experts</h3>
                <Badge variant="secondary">{germanExperts.length} experts</Badge>
              </div>
              <div className="grid gap-3">
                {germanExperts.map((expert, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-slate-800">{expert.name}</h4>
                        <Badge variant="outline" className="text-xs">{expert.specialty}</Badge>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{expert.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* International Experts Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-4 w-4 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-800">International Experts & Biohacking Pioneers</h3>
                <Badge variant="secondary">{internationalExperts.length} experts</Badge>
              </div>
              <div className="grid gap-3">
                {internationalExperts.map((expert, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-slate-800">{expert.name}</h4>
                        <Badge variant="outline" className="text-xs">{expert.specialty}</Badge>
                      </div>
                      {expert.achievement && (
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 text-xs">
                          🏆 {expert.achievement}
                        </Badge>
                      )}
                      <p className="text-sm text-slate-600 leading-relaxed">{expert.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Blue Zones & Special Populations */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-4 w-4 text-emerald-600" />
                <h3 className="text-lg font-semibold text-slate-800">Blue Zones & Exceptional Populations</h3>
              </div>
              <Card className="p-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800">Blue Zones Residents</h4>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                    🌍 Global Longevity Hotspots
                  </Badge>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Populations in Okinawa, Sardinia, Ikaria, and other Blue Zones consistently show biological ages much younger than their chronological ages, attributed to plant-based diets, physical activity, social ties, and low stress.
                  </p>
                </div>
              </Card>
            </div>

            {/* Methodology Note */}
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold text-slate-800 mb-2">Methodology & Verification</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                This curated list includes experts who have demonstrated measurable impacts on biological aging through research, clinical practice, or personal experimentation. Many have achieved documented biological ages significantly younger than their chronological ages through evidence-based interventions.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
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
      case "longevity": return longevityBiomarkers;
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
            <ExpertSourcesModal />
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

            {/* Call to Action for Detailed Reference Values */}
            <Card className="mt-6 bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200">
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
        </div>
      </div>
    </section>
  );
};

export default ReferenceValues;
