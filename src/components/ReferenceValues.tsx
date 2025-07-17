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
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "Lipoprotein(a) [Lp(a)]",
    optimalRange: "< 30 mg/dL",
    officialRange: "< 75 nmol/L",
    description: "Genetic risk factor for cardiovascular disease, independent of other lipid parameters.",
    clinicalNotes: "Managing Lp(a) levels may require specialized interventions and monitoring. Genetic component makes it less responsive to lifestyle changes. A genetic risk factor for cardiovascular disease that operates independently of other cholesterol markers.",
    factors: ["Genetics", "Niacin", "PCSK9 Inhibitors"],
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "HDL Cholesterol",
    optimalRange: "> 50 mg/dL (women), > 40 mg/dL (men)",
    officialRange: "> 40 mg/dL (men), > 50 mg/dL (women)",
    description: "High-density lipoprotein, often referred to as 'good cholesterol'. Higher levels are generally protective.",
    clinicalNotes: "Essential component of cardiovascular risk assessment, though quality matters more than quantity. Functions as reverse cholesterol transport system.",
    factors: ["Exercise", "Diet", "Genetics", "Alcohol (moderate)"],
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "LDL Cholesterol",
    optimalRange: "< 100 mg/dL",
    officialRange: "< 130 mg/dL",
    description: "Low-density lipoprotein, one of the 'bad' lipoproteins that carries ApoB.",
    clinicalNotes: "Traditional marker for cardiovascular risk, though ApoB is more predictive. Still important for overall lipid profile assessment.",
    factors: ["Diet", "Exercise", "Genetics", "Medications"],
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "Triglycerides",
    optimalRange: "< 100 mg/dL",
    officialRange: "< 150 mg/dL",
    description: "Type of fat transported in the blood, influenced by diet and metabolic health.",
    clinicalNotes: "Elevated levels associated with increased cardiovascular risk and metabolic dysfunction. Responds well to dietary modifications.",
    factors: ["Diet", "Exercise", "Alcohol", "Genetics"],
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "Omega-3 Index",
    optimalRange: "> 8%",
    officialRange: "4-8%",
    description: "Percentage of EPA and DHA in red blood cell membranes. Low levels linked to higher mortality risk, called 'the new smoking'.",
    clinicalNotes: "Critical for cardiovascular health, brain function, and inflammation control. Most people have insufficient levels due to poor Omega-3 to Omega-6 ratios. Best measured in EDTA blood samples, not serum.",
    factors: ["Fish consumption", "Supplementation", "Diet quality", "Antioxidants (co-factor)"],
    expertSource: "Prof. Dr. Ingo Froböse"
  },
  {
    name: "Homocysteine",
    optimalRange: "< 8 µmol/L",
    officialRange: "< 15 µmol/L",
    description: "Amino acid whose elevated levels are linked to cardiovascular risk. Often correlates with B-vitamin deficiencies.",
    clinicalNotes: "Elevated levels indicate increased cardiovascular risk and potential B6, B9, or B12 deficiencies. High homocysteine often correlates with deficiencies in Vitamin B6, Vitamin B9 (Folic acid), or Vitamin B12.",
    factors: ["Vitamin B6", "Vitamin B9 (Folate)", "Vitamin B12", "Genetics"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "hs-CRP (High-Sensitivity C-Reactive Protein)",
    optimalRange: "< 1 mg/L",
    officialRange: "< 3 mg/L",
    description: "Marker of general inflammation in the body. High levels indicate 'silent inflammation' contributing to aging.",
    clinicalNotes: "Should always be measured with ferritin as inflammation can falsely elevate ferritin levels. High CRP indicates 'silent inflammation' which contributes to aging (inflammaging).",
    factors: ["Diet", "Exercise", "Stress", "Infections"],
    expertSource: "Dr. Ulrich Strunz"
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
    expertSource: "Jessie Inchauspé"
  },
  {
    name: "HbA1c (Hemoglobin A1c)",
    optimalRange: "< 5.3%",
    officialRange: "< 5.7%",
    description: "Average blood sugar level over 2-3 months. Key diagnostic marker for diabetes and longevity parameter.",
    clinicalNotes: "Values from 5.7% indicate beginning disturbance. Measurement method can influence results. Provides an average blood sugar level over several months and is a relevant parameter for longevity.",
    factors: ["Diet", "Exercise", "Medications", "Stress"],
    expertSource: "Jessie Inchauspé"
  },
  {
    name: "HOMA Index",
    optimalRange: "< 2.0",
    officialRange: "< 2.5",
    description: "Reflects insulin sensitivity and resistance, serving as indicator for pre-diabetic states.",
    clinicalNotes: "Often not routinely measured in conventional medicine but crucial for metabolic assessment. This index reflects insulin sensitivity and resistance, serving as an indicator for pre-diabetic states.",
    factors: ["Diet", "Exercise", "Body weight", "Stress"],
    expertSource: "Jessie Inchauspé"
  },
  {
    name: "Continuous Glucose Monitoring (CGM)",
    optimalRange: "Time in range 70-180 mg/dL: >70%, Mean glucose <140 mg/dL",
    officialRange: "Fasting: 70-100 mg/dL, Random: <200 mg/dL",
    description: "Real-time glucose variability and patterns over 14 days",
    clinicalNotes: "Provides insights into metabolic flexibility, meal responses, and optimal eating patterns for individual optimization. Can reveal glucose patterns not visible in single measurements.",
    factors: ["Diet timing", "Food composition", "Exercise", "Stress", "Sleep"],
    expertSource: "Inchauspé Glucose Goddess"
  },
  {
    name: "Glucose Variability Index (GVI)",
    optimalRange: "<1.2",
    officialRange: "Not established",
    description: "Glucose stability measurement from CGM data",
    clinicalNotes: "Lower variability indicates better metabolic health and reduced diabetes risk. Measures glucose stability throughout the day.",
    factors: ["Meal timing", "Food composition", "Exercise timing", "Sleep"],
    expertSource: "Inchauspé Glucose Goddess"
  },
  {
    name: "Dawn Phenomenon Glucose Rise",
    optimalRange: "<20 mg/dL increase",
    officialRange: "Not established",
    description: "Morning glucose elevation from CGM",
    clinicalNotes: "Smaller rise indicates better glucose control and insulin sensitivity. Normal cortisol awakening response.",
    factors: ["Sleep quality", "Cortisol rhythm", "Insulin sensitivity", "Evening meal timing"],
    expertSource: "Inchauspé Glucose Goddess"
  },
  {
    name: "Post-Meal Glucose Spike",
    optimalRange: "<40 mg/dL above baseline",
    officialRange: "Not established", 
    description: "Maximum glucose increase after meals",
    clinicalNotes: "Smaller spikes indicate better metabolic flexibility and reduced inflammatory response to food.",
    factors: ["Food composition", "Meal order", "Exercise", "Fiber intake"],
    expertSource: "Inchauspé Glucose Goddess"
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
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Vitamin D (1,25-OH)",
    optimalRange: "Varies",
    officialRange: "19-67 pg/mL",
    description: "Active form of Vitamin D. Testing alongside 25-OH can be relevant for immune system problems or autoimmune diseases.",
    clinicalNotes: "Helps understand Vitamin D metabolism, particularly important for autoimmune conditions. This is the active form of Vitamin D and testing this in addition to 25-OH Vitamin D can be particularly relevant for individuals with immune system problems.",
    factors: ["Kidney function", "PTH levels", "Calcium status"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Vitamin K2 (MK-7)",
    optimalRange: "> 1 ng/mL",
    officialRange: "No official range",
    description: "Vital for bone health (calcium distribution) and heart health. Works synergistically with Vitamin D.",
    clinicalNotes: "Ensures calcium is deposited in bones, not arteries. Studies explore effects on immune health and athletic performance. Works synergistically with Vitamin D to ensure calcium is deposited in bones and not in arteries.",
    factors: ["Diet", "Supplementation", "Gut bacteria"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Vitamin C",
    optimalRange: "> 12 mg/L",
    officialRange: "4-15 mg/L",
    description: "'Queen of vitamins' - crucial for immune system, collagen formation, nerve health. Key antioxidant and co-factor for cortisol/DHEA production.",
    clinicalNotes: "Essential for iron absorption, often underestimated. Important for fertility and egg quality. Crucial for a strong immune system, collagen formation, and healthy nerve cells. Co-factor for Cortisol and DHEA production.",
    factors: ["Diet", "Supplementation", "Stress", "Smoking"],
    expertSource: "Prof. Dr. Bernd Kleine-Gunk"
  },
  {
    name: "Vitamin B12 (Holotranscobalamin)",
    optimalRange: "> 400 pg/mL",
    officialRange: "200-1100 pg/mL",
    description: "Essential for nervous system function and reducing fatigue. Deficiency can cause irreversible nerve damage.",
    clinicalNotes: "Critical for vegetarians/vegans. High doses recommended for neurodegenerative diseases. Holotranscobalamin more accurate than total B12. Particularly critical for vegetarians and vegans as it is primarily found in animal products.",
    factors: ["Diet", "Absorption", "Age", "Medications"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Folate (Vitamin B9)",
    optimalRange: "> 10 ng/mL",
    officialRange: "> 3.1 ng/mL",
    description: "Essential for blood formation and reducing fatigue. Increased demand in women of childbearing age.",
    clinicalNotes: "Critical during pregnancy and lactation. Works with B12 and B6 to control homocysteine. Essential for normal blood formation and there is an increased demand in women of childbearing age.",
    factors: ["Diet", "Pregnancy", "Alcohol", "Medications"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "B-Complex Vitamins",
    optimalRange: "Varies by vitamin",
    officialRange: "Varies by vitamin",
    description: "Complex of vitamins vital for energy production, nerve function, blood formation, and neurotransmitter synthesis.",
    clinicalNotes: "A comprehensive B-complex is recommended over individual B vitamins for balanced intake. Especially important for brain health, nervous system support during stress, and for the gut-brain axis in managing pain.",
    factors: ["Diet", "Stress", "Age", "Absorption"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Vitamin B6 (Pyridoxine)",
    optimalRange: "20-50 ng/mL",
    officialRange: "5-50 ng/mL",
    description: "Important for steroid hormone synthesis. Deficiency linked to homocysteine levels and mood swings.",
    clinicalNotes: "Important for steroid hormone synthesis. Its deficiency is linked to homocysteine levels and can affect mood swings and psychological well-being. Care should be taken with synthetic forms.",
    factors: ["Diet", "Hormonal status", "Stress"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Vitamin B5 (Pantothenic Acid)",
    optimalRange: "0.5-1.8 mg/L",
    officialRange: "Not established",
    description: "Crucial co-factor for Cortisol and DHEA production in the adrenal glands.",
    clinicalNotes: "A crucial co-factor for Cortisol and DHEA production in the adrenal glands, especially beneficial for exhaustion and burnout.",
    factors: ["Stress", "Adrenal function", "Diet"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
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
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "Hemoglobin (HB)",
    optimalRange: "> 12 g/dL (women), > 13 g/dL (men)",
    officialRange: "12-15.5 g/dL (women), 13.5-17.5 g/dL (men)",
    description: "The protein in red blood cells that carries oxygen. Used to diagnose anemia.",
    clinicalNotes: "Used to diagnose anemia (blood deficiency), with defined cut-offs for women (<12 g/dL), men (<13 g/dL), and pregnant women (<11 g/dL).",
    factors: ["Iron status", "B12", "Folate", "Chronic disease"],
    expertSource: "Dr. Ulrich Strunz"
  },
  {
    name: "Magnesium (Whole Blood)",
    optimalRange: "2.2-2.6 mg/dL",
    officialRange: "1.7-2.2 mg/dL",
    description: "Involved in 600+ metabolic processes. Crucial for muscle function, nervous system, energy production, neurotransmitter formation.",
    clinicalNotes: "~80% of population deficient. High demand for athletes and high-stress individuals. Whole blood analysis more accurate than serum. Crucial for muscle function, energy production (ATP synthesis depends on Magnesium), and sleep quality.",
    factors: ["Diet", "Stress", "Exercise", "Medications"],
    expertSource: "Prof. Dr. Ingo Froböse"
  },
  {
    name: "Zinc",
    optimalRange: "90-110 µg/dL",
    officialRange: "60-120 µg/dL",
    description: "Important for immune system, cell division, collagen formation, steroid hormone synthesis. Deficiency causes hair loss, brittle nails.",
    clinicalNotes: "Critical for vegetarians/vegans due to phytate binding. Recommended for athletes and gut barrier healing. Important for synthesis of steroid hormones (Testosterone, Progesterone, Estrogen).",
    factors: ["Diet", "Phytates", "Absorption", "Stress"],
    expertSource: "Prof. Dr. Ingo Froböse"
  },
  {
    name: "Selenium",
    optimalRange: "100-150 µg/L",
    officialRange: "50-200 µg/L",
    description: "Important for oxidative stress protection, immune system, antioxidant function, and thyroid health.",
    clinicalNotes: "European soil often selenium-poor, leading to common deficiencies. Higher doses may be needed than standard recommendations. Vital for healthy antioxidant and thyroid function.",
    factors: ["Soil content", "Diet", "Geographic location"],
    expertSource: "Prof. Dr. Bernd Kleine-Gunk"
  },
  {
    name: "Iodine",
    optimalRange: "100-199 µg/L",
    officialRange: "50-125 µg/L",
    description: "Essential for normal thyroid function and cognitive function.",
    clinicalNotes: "Many regions (like Germany) are iodine-poor. Common in those consuming little iodized salt or fish. High doses can be used for thyroid support in fertility contexts.",
    factors: ["Geographic location", "Salt intake", "Fish consumption"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Calcium",
    optimalRange: "9.5-10.5 mg/dL",
    officialRange: "8.5-10.5 mg/dL",
    description: "Essential for normal bone and tooth formation and muscle function.",
    clinicalNotes: "Requires adequate Vitamin D for proper absorption. People who avoid dairy products often show a deficiency.",
    factors: ["Vitamin D", "Diet", "Parathyroid function"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Copper",
    optimalRange: "70-140 µg/dL",
    officialRange: "70-140 µg/dL",
    description: "A co-factor whose deficiency can impair iron absorption.",
    clinicalNotes: "A co-factor whose deficiency can impair iron absorption. Important for connective tissue formation. Balance with zinc is crucial - excess copper accelerates aging while adequate selenium protects.",
    factors: ["Diet", "Zinc balance", "Absorption"],
    expertSource: "Prof. Dr. Bernd Kleine-Gunk"
  },
  {
    name: "Lithium (Micro-dose)",
    optimalRange: "1-5 mg/day",
    officialRange: "No official range",
    description: "Trace mineral showing the most promising longevity benefits in current research.",
    clinicalNotes: "Studies show 46% lifespan increase in animal models. Provides neuroprotection, reduces dementia risk, supports mood stabilization, and protects against telomere shortening. Currently the most discussed 'hot' longevity supplement with substantial research backing.",
    factors: ["Supplementation", "Water source", "Geographic location"],
    expertSource: "Multiple Longevity Researchers"
  },
  {
    name: "Boron",
    optimalRange: "1-3 mg/day",
    officialRange: "No established RDA",
    description: "Essential for bone health, hormone metabolism, and cognitive function.",
    clinicalNotes: "Supports bone mineralization, testosterone and estrogen metabolism, and brain function. Often overlooked despite beneficial effects on multiple body systems.",
    factors: ["Diet", "Supplementation", "Soil content"],
    expertSource: "Prof. Dr. Ingo Froböse"
  },
  {
    name: "Silicon",
    optimalRange: "5-20 mg/day",
    officialRange: "No established range",
    description: "Supports connective tissue, bone health, and skin integrity.",
    clinicalNotes: "Important for collagen synthesis, bone formation, and maintaining healthy skin, hair, and nails. Often deficient in modern diets.",
    factors: ["Diet", "Age", "Processing of foods"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Molybdenum",
    optimalRange: "45-2000 µg/day",
    officialRange: "45 µg/day",
    description: "Essential trace mineral for enzyme function and sulfur amino acid metabolism.",
    clinicalNotes: "Important for detoxification processes and protein metabolism. Deficiency rare but can affect sulfur metabolism.",
    factors: ["Diet", "Soil content", "Processing"],
    expertSource: "Trace Mineral Research"
  },
  {
    name: "Chromium",
    optimalRange: "25-200 µg/day",
    officialRange: "35 µg/day (men), 25 µg/day (women)",
    description: "Supports glucose metabolism and insulin sensitivity.",
    clinicalNotes: "Important for glucose tolerance and may help with blood sugar control. Levels can be depleted by high sugar intake.",
    factors: ["Diet", "Blood sugar control", "Exercise"],
    expertSource: "Metabolic Health Research"
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
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "fT3 (Free Triiodothyronine)",
    optimalRange: "3.0-4.2 pg/mL",
    officialRange: "2.3-4.2 pg/mL",
    description: "The active thyroid hormone, critical for metabolism and energy.",
    clinicalNotes: "More indicative of thyroid function than TSH alone. Essential for comprehensive assessment. The active thyroid hormone critical for metabolism and energy.",
    factors: ["Thyroid health", "Iodine", "Selenium", "Stress"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "fT4 (Free Thyroxine)",
    optimalRange: "1.0-1.8 ng/dL",
    officialRange: "0.8-1.8 ng/dL",
    description: "Precursor to fT3, important for overall thyroid function assessment.",
    clinicalNotes: "Should be evaluated with fT3 and TSH for complete picture. A precursor to fT3 and important for overall thyroid function assessment.",
    factors: ["Thyroid health", "Medications", "Stress"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Testosterone (Free)",
    optimalRange: "15-25 pg/mL (men), 1-4 pg/mL (women)",
    officialRange: "9-30 pg/mL (men), 0.3-3.2 pg/mL (women)",
    description: "Important for dopaminergic system, learning, memory, concentration. Has neuroprotective qualities.",
    clinicalNotes: "Men in 30s-40s can experience deficiency. Measure SHBG alongside total testosterone to calculate free testosterone. Important for the dopaminergic system, acetylcholine (learning, memory, concentration), and can help prevent depression and cognitive impairment.",
    factors: ["Vitamin D3", "Vitamin B6", "Zinc", "Magnesium", "Age"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Estradiol (E2)",
    optimalRange: "20-40 pg/mL (women)",
    officialRange: "30-400 pg/mL (cycling women)",
    description: "Important for happiness, well-being, serotonergic/dopaminergic systems, and acetylcholine (learning/memory).",
    clinicalNotes: "Protective against cardiovascular disease in women. Decline during menopause can increase blood pressure. Important for the proper functioning of the serotonergic and dopaminergic systems.",
    factors: ["Age", "Menopause", "Stress", "Body weight"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Progesterone",
    optimalRange: "5-20 ng/mL (luteal phase)",
    officialRange: "0.2-25 ng/mL",
    description: "Important for relaxation, mood stabilization, sleep quality, GABAergic system. Deficiency causes irritability, sleep issues.",
    clinicalNotes: "Test on cycle day 19-21 for women. Can be measured in serum or saliva (saliva preferred for free hormones). Important for the GABAergic system (which promotes calm) and deficiency can lead to irritability and sleep disturbances.",
    factors: ["Stress", "Age", "Cycle phase", "Sleep"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "DHEA (Dehydroepiandrosterone)",
    optimalRange: "200-400 µg/dL",
    officialRange: "85-690 µg/dL",
    description: "Precursor hormone for testosterone and estrogen production. Often described as 'healing' hormone.",
    clinicalNotes: "Vitamin C and Pantothenic acid (B5) are crucial co-factors for production. A precursor hormone that the body uses to produce Testosterone and Estrogen.",
    factors: ["Age", "Stress", "Vitamin C", "Vitamin B5"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "SHBG (Sex Hormone-Binding Globulin)",
    optimalRange: "18-54 nmol/L (men), 18-144 nmol/L (women)",
    officialRange: "18-54 nmol/L (men), 18-144 nmol/L (women)",
    description: "A binding protein that transports sex hormones in the blood.",
    clinicalNotes: "Essential to measure alongside total testosterone to accurately calculate free (bioavailable) testosterone.",
    factors: ["Age", "Thyroid function", "Insulin resistance"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
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
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "AST (GOT)", 
    optimalRange: "< 30 U/L",
    officialRange: "8-48 U/L",
    description: "Glutamate Oxaloacetate Transaminase - enzyme indicating liver function and potential damage.",
    clinicalNotes: "Can also indicate muscle damage, should be interpreted with other liver markers. Part of liver function assessment panel.",
    factors: ["Alcohol", "Medications", "Liver disease", "Exercise"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Gamma-GT",
    optimalRange: "< 30 U/L",
    officialRange: "9-48 U/L",
    description: "Gamma-Glutamyl Transferase - elevated levels correlated with higher risk of earlier mortality.",
    clinicalNotes: "Sensitive marker for liver stress and alcohol consumption. Elevated levels have been correlated with a higher risk of earlier mortality.",
    factors: ["Alcohol", "Medications", "Liver disease"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
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
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Cystatin C",
    optimalRange: "0.5-0.9 mg/L",
    officialRange: "0.5-1.0 mg/L",
    description: "More sensitive marker for kidney function than creatinine, less affected by muscle mass.",
    clinicalNotes: "Superior to creatinine for early kidney function assessment. More sensitive marker for kidney function than creatinine and less affected by muscle mass.",
    factors: ["Kidney function", "Age", "Inflammation"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "eGFR (Estimated Glomerular Filtration Rate)",
    optimalRange: "> 90 mL/min/1.73 m²",
    officialRange: "> 60 mL/min/1.73 m²",
    description: "Calculated measure of kidney function based on creatinine, age, sex, and race.",
    clinicalNotes: "Standard measure for assessing kidney function and staging chronic kidney disease.",
    factors: ["Age", "Kidney health", "Hydration", "Medications"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
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
    expertSource: "Prof. Dr. Bernd Kleine-Gunk"
  },
  {
    name: "Glutathione",
    optimalRange: "900-1400 µmol/L",
    officialRange: "550-1100 µmol/L",
    description: "Master antioxidant and main detoxification molecule. Protects cells, supports immune system, guards gut/brain barriers.",
    clinicalNotes: "Deficiency common due to environmental toxins. Critical for detoxification and cellular protection. Considered the body's 'master antioxidant' and main detoxification molecule.",
    factors: ["Environmental toxins", "Age", "Stress", "Diet"],
    expertSource: "Prof. Dr. Bernd Kleine-Gunk"
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

// Essential Amino Acids (Dr. Strunz recommendations)
const aminoAcidBiomarkers = [
  {
    name: "Methionine",
    optimalRange: "20-40 μmol/L",
    officialRange: "10-42 μmol/L",
    description: "Essential sulfur-containing amino acid",
    clinicalNotes: "Critical for protein synthesis and methylation reactions. Deficiency affects detoxification and neurotransmitter production.",
    factors: ["Protein intake", "B-vitamin status", "Liver function"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Taurine",
    optimalRange: "40-100 μmol/L",
    officialRange: "20-200 μmol/L",
    description: "Conditionally essential amino acid",
    clinicalNotes: "Cardiovascular protection, neurological function, and bile acid conjugation. Synthesis declines with age.",
    factors: ["Synthesis capacity", "Dietary intake", "Age", "Exercise"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Leucine",
    optimalRange: "100-200 μmol/L",
    officialRange: "70-170 μmol/L",
    description: "Branched-chain amino acid (BCAA)",
    clinicalNotes: "Primary trigger for muscle protein synthesis (mTOR pathway). Essential for muscle maintenance.",
    factors: ["Protein quality", "Exercise", "Insulin sensitivity", "Age"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Isoleucine",
    optimalRange: "50-120 μmol/L",
    officialRange: "40-90 μmol/L",
    description: "Branched-chain amino acid",
    clinicalNotes: "Energy metabolism regulation and muscle recovery. Important for glucose homeostasis.",
    factors: ["Protein intake", "Exercise", "Metabolic health"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Valine",
    optimalRange: "180-350 μmol/L",
    officialRange: "150-300 μmol/L",
    description: "Branched-chain amino acid",
    clinicalNotes: "Muscle metabolism and nervous system function. Works synergistically with other BCAAs.",
    factors: ["Protein balance", "Physical activity", "Stress"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Lysine",
    optimalRange: "120-300 μmol/L",
    officialRange: "100-250 μmol/L",
    description: "Essential amino acid",
    clinicalNotes: "Critical for collagen synthesis, immune function, and calcium absorption. Often limiting in plant proteins.",
    factors: ["Protein quality", "Absorption", "Stress", "Viral infections"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Phenylalanine",
    optimalRange: "45-85 μmol/L",
    officialRange: "35-70 μmol/L",
    description: "Essential aromatic amino acid",
    clinicalNotes: "Precursor to tyrosine, dopamine, norepinephrine. Critical for cognitive function and mood.",
    factors: ["Protein intake", "Aromatic amino acid competition", "PKU genetics"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Histidine",
    optimalRange: "60-120 μmol/L",
    officialRange: "50-100 μmol/L",
    description: "Semi-essential amino acid",
    clinicalNotes: "Histamine precursor and metal chelation. Important for inflammatory regulation.",
    factors: ["Inflammatory status", "Protein intake", "Allergic conditions"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Threonine",
    optimalRange: "80-200 μmol/L",
    officialRange: "70-150 μmol/L",
    description: "Essential amino acid",
    clinicalNotes: "Important for protein synthesis, immune function, and gut barrier integrity.",
    factors: ["Protein quality", "Digestive health", "Immune status"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Tryptophan",
    optimalRange: "40-80 μmol/L",
    officialRange: "30-70 μmol/L",
    description: "Essential aromatic amino acid",
    clinicalNotes: "Precursor to serotonin and melatonin. Critical for mood, sleep, and immune function.",
    factors: ["Protein intake", "Carbohydrate availability", "Mood disorders", "Sleep quality"],
    expertSource: "Dr. Strunz Blood Tuning"
  }
];

// Oxidative Stress Markers (Dr. Strunz recommendations)
const oxidativeStressBiomarkers = [
  {
    name: "Total Antioxidative Capacity (TAC)",
    optimalRange: ">1.5 mmol/L",
    officialRange: "0.8-1.8 mmol/L",
    description: "Overall antioxidant defense capacity",
    clinicalNotes: "Reflects body's total ability to neutralize free radicals. Higher values indicate better cellular protection.",
    factors: ["Antioxidant intake", "Oxidative stress load", "Genetics", "Age"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Oxidative Burden (8-OHdG)",
    optimalRange: "<10 ng/mL",
    officialRange: "2-30 ng/mL",
    description: "DNA oxidative damage marker",
    clinicalNotes: "8-hydroxy-deoxyguanosine indicates DNA damage from oxidative stress. Lower values reflect better cellular protection.",
    factors: ["Antioxidant status", "Environmental toxins", "Stress", "Exercise intensity"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Lipid Peroxidation (MDA)",
    optimalRange: "<2.0 μmol/L",
    officialRange: "1.0-4.0 μmol/L",
    description: "Lipid oxidative damage marker",
    clinicalNotes: "Malondialdehyde reflects membrane damage and cardiovascular risk. Lower levels indicate better membrane integrity.",
    factors: ["Omega-3 status", "Vitamin E", "Oxidative stress", "Inflammation"],
    expertSource: "Dr. Strunz Blood Tuning"
  }
];

// Heavy Metals (Dr. Strunz recommendations)
const heavyMetalsBiomarkers = [
  {
    name: "Mercury (Blood)",
    optimalRange: "<5 μg/L",
    officialRange: "<10 μg/L",
    description: "Neurotoxic heavy metal",
    clinicalNotes: "Accumulates in brain and kidneys. Causes neurological symptoms, cognitive decline, and cardiovascular issues.",
    factors: ["Fish consumption", "Dental amalgams", "Environmental exposure", "Chelation therapy"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Lead (Blood)",
    optimalRange: "<25 μg/L",
    officialRange: "<100 μg/L",
    description: "Neurotoxic heavy metal",
    clinicalNotes: "Affects neurological development, blood pressure, and kidney function. No safe level in children.",
    factors: ["Environmental exposure", "Old paint", "Water contamination", "Occupational exposure"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Cadmium (Blood)",
    optimalRange: "<5 μg/L",
    officialRange: "<10 μg/L",
    description: "Toxic heavy metal",
    clinicalNotes: "Causes kidney damage, bone demineralization, and increases cancer risk. Accumulates with age.",
    factors: ["Smoking", "Food contamination", "Industrial exposure", "Soil pollution"],
    expertSource: "Dr. Strunz Blood Tuning"
  },
  {
    name: "Aluminum (Blood)",
    optimalRange: "<10 μg/L",
    officialRange: "<50 μg/L",
    description: "Neurotoxic metal",
    clinicalNotes: "Linked to neurodegenerative diseases. Crosses blood-brain barrier and accumulates in brain tissue.",
    factors: ["Cookware", "Deodorants", "Vaccines", "Food additives", "Water treatment"],
    expertSource: "Environmental Medicine"
  }
];

// Bone Health Biomarkers (Dr. Orfanos-Boeckel recommendations)
const boneHealthBiomarkers = [
  {
    name: "Beta-Crosslaps (CTX)",
    optimalRange: "Men: 100-400 pg/mL, Women: 50-350 pg/mL",
    officialRange: "Variable by age and gender",
    description: "Bone resorption marker",
    clinicalNotes: "C-terminal telopeptide reflects osteoclast activity. Lower values indicate reduced bone breakdown.",
    factors: ["Age", "Hormones", "Vitamin D", "Physical activity", "Calcium intake"],
    expertSource: "Dr. Orfanos-Boeckel"
  },
  {
    name: "Tartrate-resistant Acid Phosphatase 5b (TRAP5b)",
    optimalRange: "Men: 1.5-4.2 U/L, Women: 1.0-4.2 U/L",
    officialRange: "1.0-6.0 U/L",
    description: "Osteoclast-specific enzyme",
    clinicalNotes: "Highly specific marker of bone resorption. More specific than CTX for bone metabolism.",
    factors: ["Bone turnover rate", "Hormonal status", "Age", "Disease state"],
    expertSource: "Dr. Orfanos-Boeckel"
  },
  {
    name: "Undercarboxylated Osteocalcin (ucOC)",
    optimalRange: "<20% of total osteocalcin",
    officialRange: "Variable",
    description: "Vitamin K2 deficiency marker",
    clinicalNotes: "Higher percentages indicate vitamin K2 insufficiency and poor bone matrix quality.",
    factors: ["Vitamin K2 intake", "Gut health", "Warfarin use", "Age"],
    expertSource: "Dr. Orfanos-Boeckel"
  },
  {
    name: "Procollagen Type 1 N-Propeptide (P1NP)",
    optimalRange: "15-60 ng/mL",
    officialRange: "Variable by age and gender",
    description: "Bone formation marker",
    clinicalNotes: "Reflects osteoblast activity and collagen synthesis. Higher values indicate active bone building.",
    factors: ["Growth", "Hormones", "Nutrition", "Exercise", "Age"],
    expertSource: "Dr. Orfanos-Boeckel"
  }
];

// Neurological Biomarkers (Dr. Orfanos-Boeckel recommendations)
const neurologicalBiomarkers = [
  {
    name: "Brain-Derived Neurotrophic Factor (BDNF)",
    optimalRange: ">20 ng/mL",
    officialRange: "10-25 ng/mL",
    description: "Neuroplasticity and cognitive function marker",
    clinicalNotes: "Promotes neuronal survival and growth. Higher levels support brain health, memory, and learning.",
    factors: ["Exercise", "Sleep", "Stress management", "Nutrition", "Meditation"],
    expertSource: "Dr. Orfanos-Boeckel"
  },
  {
    name: "Neurofilament Light Chain (NfL)",
    optimalRange: "<20 pg/mL",
    officialRange: "Variable by age",
    description: "Neuronal damage marker",
    clinicalNotes: "Indicates axonal damage. Lower values suggest better neuronal integrity and brain health.",
    factors: ["Age", "Neurological health", "Inflammation", "Head trauma"],
    expertSource: "Dr. Orfanos-Boeckel"
  },
  {
    name: "S100 Calcium Binding Protein B (S100B)",
    optimalRange: "<0.15 μg/L",
    officialRange: "<0.5 μg/L",
    description: "Blood-brain barrier integrity marker",
    clinicalNotes: "Lower values indicate better blood-brain barrier function and reduced neuroinflammation.",
    factors: ["Inflammation", "Stress", "Sleep quality", "Head trauma"],
    expertSource: "Dr. Orfanos-Boeckel"
  }
];

// Advanced Inflammatory Markers (Missing from current panel)
const advancedInflammatoryBiomarkers = [
  {
    name: "IL-6 (Interleukin-6)",
    optimalRange: "<1.8 pg/mL",
    officialRange: "<3.4 pg/mL",
    description: "Pro-inflammatory cytokine marker",
    clinicalNotes: "Elevated levels associated with chronic inflammation, cardiovascular disease, and accelerated aging. Often missed in standard panels.",
    factors: ["Chronic inflammation", "Stress", "Diet", "Exercise", "Sleep"],
    expertSource: "Advanced Longevity Research"
  },
  {
    name: "TNF-α (Tumor Necrosis Factor Alpha)",
    optimalRange: "<8.1 pg/mL",
    officialRange: "<15.6 pg/mL", 
    description: "Key inflammatory cytokine",
    clinicalNotes: "Central mediator of inflammation and immune response. Elevated levels accelerate aging and increase disease risk.",
    factors: ["Autoimmune conditions", "Chronic infections", "Gut health", "Stress"],
    expertSource: "Advanced Longevity Research"
  },
  {
    name: "CRP-hs (High-Sensitivity)",
    optimalRange: "<0.5 mg/L",
    officialRange: "<1.0 mg/L",
    description: "Ultra-sensitive inflammation marker",
    clinicalNotes: "More sensitive than standard CRP. Values <0.5 mg/L associated with optimal cardiovascular health and longevity.",
    factors: ["Diet quality", "Exercise", "Sleep", "Stress management", "Gut health"],
    expertSource: "Dr. Strunz & Longevity Research"
  }
];


// Comprehensive Fitness Biomarkers (Froböse recommendations)
// Comprehensive Microbiome Biomarkers (Expert analysis compilation)
const microbiomeBiomarkers = [
  {
    name: "Shannon Diversity Index",
    optimalRange: "5.0-7.6 (stool), 5.6-7.7 (saliva)",
    officialRange: "Not established",
    description: "Most crucial microbiome health marker representing bacterial diversity",
    clinicalNotes: "Higher diversity consistently correlates with better health outcomes. Values below 5.0 indicate significant dysbiosis and compromised gut health.",
    factors: ["Diet diversity", "Fiber intake", "Antibiotics", "Stress", "Age"],
    expertSource: "Giulia Enders"
  },
  {
    name: "Observed Species Count",
    optimalRange: "400-1000 species",
    officialRange: "Not established",
    description: "Total number of different bacterial species in comprehensive gut analysis",
    clinicalNotes: "Complements Shannon diversity. Higher species count indicates healthier, more resilient microbiome ecosystem.",
    factors: ["Plant variety", "Fermented foods", "Environmental exposure", "Lifestyle"],
    expertSource: "Giulia Enders"
  },
  {
    name: "Firmicutes/Bacteroidetes Ratio",
    optimalRange: "2-4 (healthy adults)",
    officialRange: "Variable by age",
    description: "Primary bacterial phyla balance crucial for metabolic health",
    clinicalNotes: "Optimal ratio varies by age: 0.4 in infants, 10.9 in adults, 0.6 in elderly. Higher ratios may indicate obesity risk.",
    factors: ["Diet composition", "Age", "BMI", "Fiber intake"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Firmicutes Abundance",
    optimalRange: "60-80%",
    officialRange: "40-80%",
    description: "Primary bacterial phylum responsible for SCFA production",
    clinicalNotes: "Optimal levels around 80% maximize short-chain fatty acid production. Essential for immune function and gut barrier integrity.",
    factors: ["Fiber intake", "Resistant starch", "Diet quality", "Age"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Bacteroidetes Abundance",
    optimalRange: "15-30%",
    officialRange: "15-30%",
    description: "Key phylum for fiber metabolism and nutrient extraction",
    clinicalNotes: "Optimal levels around 15% for balanced fiber metabolism. Higher levels associated with plant-based diets.",
    factors: ["Plant fiber", "Protein intake", "Geographic location", "Diet type"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Bifidobacterium Levels",
    optimalRange: "2-10%",
    officialRange: "1-10%",
    description: "Critical beneficial bacteria for immune function and infant health",
    clinicalNotes: "Women typically show higher levels than men. Deficiency below 0.5% indicates compromised immune function. Declines significantly with age.",
    factors: ["Age", "Gender", "Prebiotics", "Stress", "Antibiotics"],
    expertSource: "Giulia Enders"
  },
  {
    name: "Faecalibacterium Levels",
    optimalRange: "5-12%",
    officialRange: "2-12%",
    description: "Primary butyrate producer with anti-inflammatory properties",
    clinicalNotes: "F. prausnitzii is crucial for gut health. Levels below 1% indicate reduced anti-inflammatory capacity and increased disease risk.",
    factors: ["Fiber intake", "Inflammation", "Antibiotics", "Diet quality"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Prevotella Abundance",
    optimalRange: "5-30% (plant-based), 0.5-5% (Western diet)",
    officialRange: "0.5-30%",
    description: "Plant fiber specialist varying by geography and diet",
    clinicalNotes: "Higher levels correlate with plant-based diets and improved weight management. Geographic variation is significant.",
    factors: ["Plant intake", "Geographic location", "Diet type", "Fiber variety"],
    expertSource: "Giulia Enders"
  },
  {
    name: "Colonic pH",
    optimalRange: "6.0-6.5",
    officialRange: "5.5-7.0",
    description: "Critical parameter for beneficial bacteria growth",
    clinicalNotes: "Optimal pH 6.0-6.5 promotes beneficial bacteria while suppressing pathogenic species. Often overlooked but crucial marker.",
    factors: ["SCFA production", "Diet", "Bacterial balance", "Inflammation"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Secretory IgA (sIgA)",
    optimalRange: "Variable (consistent levels)",
    officialRange: "Individual baseline",
    description: "Gut immune barrier function indicator",
    clinicalNotes: "Individual variation is high, but consistent levels indicate healthy gut barrier. Depends on protein intake and stress levels.",
    factors: ["Stress", "Protein intake", "Gut health", "Immune status"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Pancreatic Elastase-1",
    optimalRange: "> 200 mcg/g",
    officialRange: "> 200 mcg/g",
    description: "Digestive enzyme function affecting microbiome composition",
    clinicalNotes: "Levels 100-200 mcg/g suggest moderate pancreatic insufficiency. Below 100 mcg/g indicates severe insufficiency affecting nutrient absorption.",
    factors: ["Pancreatic health", "Age", "Inflammation", "Diet"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Zonulin Levels",
    optimalRange: "< 107 ng/mL",
    officialRange: "Not established",
    description: "Intestinal permeability (leaky gut) assessment",
    clinicalNotes: "Critical marker for gut barrier integrity. Elevated levels indicate increased intestinal permeability and systemic inflammation risk.",
    factors: ["Gut health", "Stress", "NSAIDs", "Infections", "Diet"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Calprotectin",
    optimalRange: "< 50 mg/kg",
    officialRange: "< 50 mg/kg",
    description: "Intestinal inflammation marker",
    clinicalNotes: "Elevated levels indicate gut inflammation. Values > 150 mg/kg suggest significant inflammatory bowel conditions.",
    factors: ["Gut inflammation", "Diet", "Stress", "Infections", "Medications"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Short-Chain Fatty Acids (SCFAs)",
    optimalRange: "Butyrate: 10-25 mM, Total: 50-100 mM",
    officialRange: "Not established",
    description: "Most important microbiome metabolites for health",
    clinicalNotes: "Butyrate is crucial for gut health, immune function, and inflammation control. Primary energy source for colonocytes.",
    factors: ["Fiber intake", "Bacterial diversity", "Diet quality", "Resistant starch"],
    expertSource: "Giulia Enders"
  },
  {
    name: "Beta-glucuronidase Activity",
    optimalRange: "Low activity preferred",
    officialRange: "Not established",
    description: "Enzyme affecting estrogen metabolism and toxin clearance",
    clinicalNotes: "High activity can lead to estrogen reactivation and reduced toxin elimination. Important for hormone balance and detoxification.",
    factors: ["Bacterial composition", "Diet", "Fiber intake", "Probiotics"],
    expertSource: "Dr. Helena Orfanos-Boeckel"
  },
  {
    name: "Tryptophan Metabolites",
    optimalRange: "Balanced serotonin/kynurenine ratio",
    officialRange: "Not established",
    description: "Gut-brain axis neurotransmitter pathway markers",
    clinicalNotes: "Critical for mood regulation and neurological health. Imbalances linked to depression and anxiety disorders.",
    factors: ["Gut bacteria", "Inflammation", "Stress", "Diet", "Mental health"],
    expertSource: "Prof. Dr. Bernd Kleine-Gunk"
  },
  {
    name: "Short-Chain Fatty Acids (SCFA)",
    optimalRange: "High diversity and concentration",
    officialRange: "Not established",
    description: "Beneficial metabolites produced by gut bacteria",
    clinicalNotes: "Butyrate, acetate, and propionate levels indicate gut health and influence metabolism, immunity, and brain function.",
    factors: ["Gut microbiome", "Fiber intake", "Diet quality", "Prebiotics"],
    expertSource: "Microbiome Research"
  },
  {
    name: "Microbiome Analysis",
    optimalRange: "High diversity (Shannon >3.5)",
    officialRange: "Not established",
    description: "Assessment of gut bacterial composition and metabolite production",
    clinicalNotes: "Can explain non-specific symptoms like fatigue and inflammation. Links gut health to systemic wellness.",
    factors: ["Diet", "Antibiotics", "Stress", "Environment", "Birth method"],
    expertSource: "Microbiome Research"
  },
  {
    name: "Food Intolerance Panel",
    optimalRange: "No significant IgG reactions",
    officialRange: "Not established",
    description: "Identifies delayed food sensitivities contributing to inflammation",
    clinicalNotes: "Can identify trigger foods causing gut inflammation, brain fog, and systemic symptoms.",
    factors: ["Gut health", "Immune system", "Genetics", "Exposure history"],
    expertSource: "Functional Medicine"
  },
  {
    name: "Gut Permeability (Leaky Gut) Test",
    optimalRange: "Lactulose/Mannitol ratio <0.03",
    officialRange: "Not established",
    description: "Assesses intestinal barrier integrity",
    clinicalNotes: "Increased permeability allows toxins and food particles to enter bloodstream, triggering systemic inflammation.",
    factors: ["Diet", "Stress", "NSAIDs", "Infections", "Alcohol"],
    expertSource: "Functional Medicine"
  }
];

const fitnessPerformanceBiomarkers = [
  {
    name: "VO2 Max",
    optimalRange: "Age-adjusted: >85th percentile for age/gender",
    officialRange: "Variable by age and fitness level",
    description: "Maximum oxygen uptake capacity",
    clinicalNotes: "Strongest predictor of cardiovascular health and all-cause mortality. Declines ~1% per year after age 30.",
    factors: ["Aerobic exercise", "Altitude training", "Genetics", "Body composition"],
    expertSource: "Froböse Sports Medicine"
  },
  {
    name: "Muscle Mass Index (SMI)",
    optimalRange: "Men: >10.75 kg/m², Women: >6.75 kg/m²",
    officialRange: "Variable by age and method",
    description: "Skeletal muscle mass relative to height squared",
    clinicalNotes: "Higher values associated with longevity and metabolic health. Sarcopenia threshold indicator.",
    factors: ["Resistance training", "Protein intake", "Age", "Hormones"],
    expertSource: "Froböse Sports Medicine"
  },
  {
    name: "Handgrip Strength",
    optimalRange: "Age/gender adjusted: >75th percentile",
    officialRange: "Variable by age and gender",
    description: "Proxy for overall muscle strength and frailty",
    clinicalNotes: "Strong predictor of mortality, functional decline, and cognitive health. Simple but powerful biomarker.",
    factors: ["Muscle mass", "Neural activation", "Overall health", "Nutrition"],
    expertSource: "Froböse Sports Medicine"
  },
  {
    name: "Body Fat Percentage",
    optimalRange: "Men: 10-18%, Women: 16-24%",
    officialRange: "Variable by method",
    description: "Proportion of body weight that is fat mass",
    clinicalNotes: "More important than BMI for health assessment. Visceral fat more concerning than subcutaneous.",
    factors: ["Diet", "Exercise", "Hormones", "Age", "Genetics"],
    expertSource: "Froböse Sports Medicine"
  }
];


const germanExperts = [
  {
    name: "Dr. Ulrich Strunz",
    specialty: "Froh- and Drohwerte System",
    description: "Developer of the Frohwerte (happy values) and Drohwerte (threatening values) blood tuning philosophy, emphasizing optimal biomarker ranges for molecular medicine."
  },
  {
    name: "Dr. Helena Orfanos-Boeckel",
    specialty: "Metabolic Medicine & Precision Diagnostics",
    description: "Expert in precision medicine with extensive laboratory diagnostics, specializing in bone health biomarkers, neurological markers, and individualized nutrient therapy."
  },
  {
    name: "Prof. Dr. Ingo Froböse",
    specialty: "Sports Nutrition & Fitness Medicine",
    description: "Leading expert in functional sports nutrition and evidence-based supplementation, emphasizing fitness biomarkers and performance optimization."
  },
  {
    name: "Prof. Dr. Bernd Kleine-Gunk",
    specialty: "Anti-Aging & Longevity Medicine",
    description: "Longevity-focused physician emphasizing holistic approaches combining nutrition, supplementation, and lifestyle modifications for healthy aging."
  },
  {
    name: "Giulia Enders",
    specialty: "Gut Health & Microbiome",
    description: "Medical doctor and bestselling author specializing in gut health optimization through microbiome research, probiotics, and digestive wellness."
  },
  {
    name: "Jessie Inchauspé (Glucose Goddess)",
    specialty: "Glucose Optimization & Metabolic Health",
    description: "Biochemist specializing in glucose management protocols, continuous glucose monitoring optimization, and metabolic flexibility enhancement."
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
  const [viewMode, setViewMode] = useState("traditional"); // "traditional" or "hallmarks"
  const isMobile = useIsMobile();

  const categories = [
    // 🏇 THE FOUR HORSEMEN (Peter Attia's primary mortality causes)
    { id: "cardiovascular", label: "Cardiovascular", icon: "❤️", priority: "horseman", description: "Heart disease & stroke prevention" },
    { id: "metabolic", label: "Metabolic", icon: "⚡", priority: "horseman", description: "Diabetes & insulin resistance" },
    { id: "neurological", label: "Neurological", icon: "🧠", priority: "horseman", description: "Alzheimer's & neurodegenerative diseases" },
    { id: "advanced-inflammatory", label: "Cancer Markers", icon: "🔬", priority: "horseman", description: "Advanced inflammatory & cancer biomarkers" },
    
    // 🏗️ FOUNDATIONAL HEALTH (Supporting the Four Horsemen)
    { id: "vitamins", label: "Vitamins", icon: "🍊", priority: "foundation", description: "Essential micronutrients" },
    { id: "minerals", label: "Minerals", icon: "⚗️", priority: "foundation", description: "Trace elements & cofactors" },
    { id: "hormones", label: "Hormones", icon: "🧬", priority: "foundation", description: "Endocrine system optimization" },
    { id: "microbiome", label: "Microbiome", icon: "🦠", priority: "foundation", description: "Gut health & systemic inflammation" },
    { id: "oxidative-stress", label: "Oxidative Stress", icon: "🔥", priority: "foundation", description: "Cellular damage & aging" },
    
    // 🎯 PERFORMANCE & LONGEVITY
    { id: "fitness-performance", label: "Fitness & Performance", icon: "💪", priority: "performance", description: "Exercise capacity & muscle health" },
    { id: "longevity", label: "Longevity", icon: "🧪", priority: "performance", description: "Biological age & lifespan markers" },
    { id: "amino-acids", label: "Amino Acids", icon: "🧱", priority: "performance", description: "Protein building blocks" },
    { id: "heavy-metals", label: "Heavy Metals", icon: "⚠️", priority: "performance", description: "Toxic element exposure" },
    
    // 🏥 ORGAN FUNCTION
    { id: "liver", label: "Liver", icon: "🫘", priority: "organ", description: "Detoxification & metabolism" },
    { id: "kidney", label: "Kidney", icon: "💧", priority: "organ", description: "Filtration & electrolyte balance" },
    { id: "bone-health", label: "Bone Health", icon: "🦴", priority: "organ", description: "Skeletal integrity & osteoporosis prevention" }
  ];

  // 12 Hallmarks of Aging Categories
  const hallmarksCategories = [
    { 
      id: "genomic-instability", 
      label: "Genomic Instability", 
      icon: "🧬",
      description: "DNA damage accumulation and chromosomal instability",
      biomarkers: ["longevity"] // Maps to existing biomarker categories
    },
    { 
      id: "telomere-attrition", 
      label: "Telomere Attrition", 
      icon: "🔗",
      description: "Progressive shortening of chromosome protective caps",
      biomarkers: ["longevity", "advanced-inflammatory"]
    },
    { 
      id: "epigenetic-alterations", 
      label: "Epigenetic Alterations", 
      icon: "🎭",
      description: "Changes in gene expression patterns without DNA sequence changes",
      biomarkers: ["longevity", "hormones"]
    },
    { 
      id: "loss-proteostasis", 
      label: "Loss of Proteostasis", 
      icon: "🔄",
      description: "Decline in protein quality control and cellular housekeeping",
      biomarkers: ["oxidative-stress", "neurological", "liver"]
    },
    { 
      id: "disabled-macroautophagy", 
      label: "Disabled Macroautophagy", 
      icon: "♻️",
      description: "Impaired cellular recycling and waste removal systems",
      biomarkers: ["metabolic", "longevity", "liver"]
    },
    { 
      id: "deregulated-nutrient-sensing", 
      label: "Deregulated Nutrient Sensing", 
      icon: "⚖️",
      description: "Disrupted metabolic signaling pathways (mTOR, AMPK, insulin)",
      biomarkers: ["metabolic", "enhanced-metabolic", "hormones"]
    },
    { 
      id: "mitochondrial-dysfunction", 
      label: "Mitochondrial Dysfunction", 
      icon: "⚡",
      description: "Decline in cellular energy production and respiratory capacity",
      biomarkers: ["oxidative-stress", "fitness-performance", "metabolic"]
    },
    { 
      id: "cellular-senescence", 
      label: "Cellular Senescence", 
      icon: "🧓",
      description: "Accumulation of permanently growth-arrested cells",
      biomarkers: ["advanced-inflammatory", "longevity"]
    },
    { 
      id: "stem-cell-exhaustion", 
      label: "Stem Cell Exhaustion", 
      icon: "🌱",
      description: "Decline in regenerative capacity and tissue repair",
      biomarkers: ["hormones", "vitamins", "minerals"]
    },
    { 
      id: "altered-intercellular-communication", 
      label: "Altered Intercellular Communication", 
      icon: "📡",
      description: "Disrupted cell-to-cell signaling and tissue coordination",
      biomarkers: ["hormones", "neurological", "advanced-inflammatory"]
    },
    { 
      id: "chronic-inflammation", 
      label: "Chronic Inflammation", 
      icon: "🔥",
      description: "Low-grade systemic inflammation (inflammaging)",
      biomarkers: ["cardiovascular", "advanced-inflammatory", "microbiome"]
    },
    { 
      id: "dysbiosis", 
      label: "Dysbiosis", 
      icon: "🦠",
      description: "Imbalanced gut microbiome affecting systemic health",
      biomarkers: ["microbiome", "specialized"]
    }
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
                  <HoverCardContent className="w-96 p-4 text-left" side="left">
                    <div className="space-y-3 text-left">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2 text-left">{biomarker.name}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed text-left">{biomarker.description}</p>
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
                          <p className="text-xs text-slate-600 leading-relaxed text-left">{biomarker.clinicalNotes}</p>
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
    console.log('Getting biomarkers for category:', categoryId);
    switch (categoryId) {
      case "cardiovascular": return cardiovascularBiomarkers;
      case "metabolic": return metabolicBiomarkers;
      case "vitamins": return vitaminsBiomarkers;
      case "minerals": return mineralsBiomarkers;
      case "hormones": return hormonesBiomarkers;
      case "liver": return liverBiomarkers;
      case "kidney": return kidneyBiomarkers;
      case "longevity": return longevityBiomarkers;
      case "microbiome": return microbiomeBiomarkers;
      case "amino-acids": return aminoAcidBiomarkers;
      case "oxidative-stress": return oxidativeStressBiomarkers;
      case "heavy-metals": return heavyMetalsBiomarkers;
      case "bone-health": return boneHealthBiomarkers;
      case "neurological": return neurologicalBiomarkers;
      case "advanced-inflammatory": return advancedInflammatoryBiomarkers;
      case "fitness-performance": return fitnessPerformanceBiomarkers;
      default: 
        console.warn('Unknown category:', categoryId);
        return [];
    }
  };

  const getCategoryImpactDescription = (categoryId: string): string => {
    switch (categoryId) {
      case "cardiovascular": return "Critical markers for preventing heart disease, stroke, and vascular dysfunction";
      case "metabolic": return "Essential for blood sugar control, diabetes prevention, and metabolic flexibility";
      case "neurological": return "Protect brain health, prevent dementia, and optimize cognitive function";
      case "advanced-inflammatory": return "Early detection markers for cancer risk and chronic inflammation";
      case "hormones": return "Balance endocrine function for energy, mood, and reproductive health";
      case "microbiome": return "Gut health foundation influencing immunity, mood, and systemic inflammation";
      case "vitamins": return "Essential micronutrients for cellular function, immunity, and disease prevention";
      case "minerals": return "Critical cofactors for enzymatic processes, bone health, and energy production";
      case "oxidative-stress": return "Cellular protection against aging, DNA damage, and chronic disease";
      case "fitness-performance": return "Optimize physical capacity, muscle health, and exercise recovery";
      case "longevity": return "Biological age markers and cellular health indicators for lifespan extension";
      case "amino-acids": return "Protein building blocks for muscle synthesis, neurotransmitters, and recovery";
      case "heavy-metals": return "Detect toxic exposures that impair cognition, immunity, and organ function";
      case "liver": return "Optimize detoxification, metabolism, and liver function for overall health";
      case "kidney": return "Maintain filtration capacity, electrolyte balance, and cardiovascular health";
      case "bone-health": return "Prevent osteoporosis, fractures, and maintain skeletal integrity with aging";
      default: return "Evidence-based optimal ranges for longevity and health optimization";
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
          
          {/* View Mode Toggle */}
          <div className="mt-6 flex justify-center">
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("traditional")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "traditional" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Traditional Categories
              </button>
              <button
                onClick={() => setViewMode("hallmarks")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "hallmarks" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                12 Hallmarks of Aging
              </button>
            </div>
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
                  <CardTitle className="text-lg">
                    {viewMode === "traditional" ? "Biomarker Categories" : "12 Hallmarks of Aging"}
                  </CardTitle>
                  {viewMode === "hallmarks" && (
                    <p className="text-sm text-slate-600">
                      Fundamental mechanisms of biological aging
                    </p>
                  )}
                </CardHeader>
                <CardContent className="pt-0">
                  {viewMode === "traditional" ? (
                    <CategoryMenu 
                      categories={categories}
                      activeCategory={activeCategory}
                      setActiveCategory={setActiveCategory}
                    />
                  ) : (
                    <div className="space-y-2">
                      {hallmarksCategories.map((hallmark) => (
                        <button
                          key={hallmark.id}
                          onClick={() => {
                            console.log('Hallmark clicked:', hallmark.label, 'Setting category to:', hallmark.biomarkers[0]);
                            // Set to first biomarker category for this hallmark
                            setActiveCategory(hallmark.biomarkers[0]);
                            // Also switch back to traditional view to see the results
                            setViewMode("traditional");
                          }}
                          className={`w-full text-left p-3 rounded-lg border transition-colors ${
                            hallmark.biomarkers.includes(activeCategory) 
                              ? 'bg-primary/10 border-primary/20' 
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-xl">{hallmark.icon}</span>
                            <div>
                              <h4 className="font-medium text-slate-800 text-sm">{hallmark.label}</h4>
                              <p className="text-xs text-slate-600 mt-1">{hallmark.description}</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {hallmark.biomarkers.map((biomarker) => {
                                  const category = categories.find(c => c.id === biomarker);
                                  return category ? (
                                    <Badge 
                                      key={biomarker} 
                                      variant={biomarker === activeCategory ? "default" : "secondary"} 
                                      className="text-xs"
                                    >
                                      {category.label}
                                    </Badge>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
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
                      {getCategoryImpactDescription(activeCategory)}
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
