import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info } from "lucide-react";
import { useState } from "react";

const ReferenceValues = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cardiovascular");

  const biomarkerCategories = [
    {
      category: "Cardiovascular",
      shortName: "Cardio",
      expert: "Dr. Peter Attia, Dr. Thomas Dayspring, Dr. Ulrich Strunz, Thiemo Osterhaus",
      markers: [
        { 
          name: "Total Cholesterol", 
          optimal: "< 200", 
          official: "< 240", 
          unit: "mg/dL",
          description: "Total amount of cholesterol in blood. Lower levels associated with reduced cardiovascular risk.",
          clinical: "Official ranges allow higher levels but optimal ranges focus on longevity. Strunz recommends < 180 mg/dL, Osterhaus emphasizes < 200 mg/dL for optimal health."
        },
        { 
          name: "LDL Cholesterol", 
          optimal: "< 100", 
          official: "< 160", 
          unit: "mg/dL",
          description: "Low-density lipoprotein, often called 'bad' cholesterol. Primary target for cardiovascular risk reduction.",
          clinical: "Optimal levels significantly lower than official recommendations. Strunz targets < 70 mg/dL for high-risk patients, Osterhaus < 100 mg/dL. One of the 'bad' lipoproteins that carries ApoB."
        },
        { 
          name: "HDL Cholesterol", 
          optimal: "> 60", 
          official: "> 40 (M), > 50 (F)", 
          unit: "mg/dL",
          description: "High-density lipoprotein, 'good' cholesterol that helps remove other cholesterol from arteries.",
          clinical: "Higher levels provide cardioprotective benefits. Strunz emphasizes HDL > 60 mg/dL for both sexes, Osterhaus recommends > 50 mg/dL for women, > 40 mg/dL for men."
        },
        { 
          name: "Triglycerides", 
          optimal: "< 100", 
          official: "< 150", 
          unit: "mg/dL",
          description: "Blood fats that increase cardiovascular risk when elevated. Strongly linked to metabolic health.",
          clinical: "Optimal levels significantly lower than official cutoffs. Strunz targets < 80 mg/dL, Osterhaus < 100 mg/dL for metabolic optimization. Another type of fat transported in the blood."
        },
        { 
          name: "Omega-3 Index", 
          optimal: "> 8", 
          official: "4-11", 
          unit: "%",
          description: "Percentage of EPA and DHA in red blood cell membranes. Critical for cardiovascular health and lipid metabolism.",
          clinical: "Osterhaus emphasizes > 8% for optimal cardiovascular protection. Low index linked to higher mortality risk - 'the new smoking'. Directly impacts lipid profiles by reducing triglycerides, supporting HDL function, and reducing inflammatory markers. Essential for membrane fluidity and cardiovascular disease prevention."
        },
        { 
          name: "Apolipoprotein B (ApoB)", 
          optimal: "< 80", 
          official: "< 120", 
          unit: "mg/dL",
          description: "Found on all 'bad' lipoproteins (like LDL) and strongly correlated with increased cardiovascular disease risk. More informative than LDL alone.",
          clinical: "Optimal levels focus on particle count rather than just cholesterol content. Strunz recommends < 70 mg/dL, Osterhaus < 80 mg/dL."
        },
        { 
          name: "Lipoprotein (a)", 
          optimal: "< 30", 
          official: "< 50", 
          unit: "mg/dL",
          description: "Genetic risk factor for cardiovascular disease. Independent predictor of cardiovascular events.",
          clinical: "Lower levels preferred as this is largely genetically determined and difficult to modify. Osterhaus recommends < 30 mg/dL."
        },
        { 
          name: "Homocysteine", 
          optimal: "< 8", 
          official: "< 15", 
          unit: "μmol/L",
          description: "Amino acid whose elevated levels are linked to cardiovascular risk. Often correlates with deficiencies in Vitamin B6, B9 (Folic acid), or B12.",
          clinical: "Strunz emphasizes < 6 μmol/L, Osterhaus < 8 μmol/L. Lower levels indicate better methylation and B-vitamin status."
        },
        { 
          name: "Blood Pressure (Systolic)", 
          optimal: "110-120", 
          official: "< 140", 
          unit: "mmHg",
          description: "Critical for cardiovascular health. Hypertension often goes unnoticed in early stages.",
          clinical: "Regular monitoring especially important for women in/after menopause and men with erectile dysfunction, which can be early warning of blood vessel issues. Osterhaus targets < 130 mmHg."
        },
        { 
          name: "Blood Pressure (Diastolic)", 
          optimal: "70-80", 
          official: "< 90", 
          unit: "mmHg",
          description: "Lower number in blood pressure reading, reflects pressure when heart is resting between beats.",
          clinical: "Normal values typically around 80. Important to monitor regularly as part of cardiovascular risk assessment. Osterhaus recommends < 85 mmHg."
        },
        { 
          name: "C-Reactive Protein", 
          optimal: "< 1.0", 
          official: "< 3.0", 
          unit: "mg/L",
          description: "Marker of systemic inflammation and general inflammation in the body. Elevated levels predict cardiovascular events.",
          clinical: "Should always be measured alongside Ferritin as inflammation can falsely elevate ferritin levels. High CRP indicates 'silent inflammation' contributing to aging. Osterhaus emphasizes < 1.0 mg/L for optimal health."
        }
      ]
    },
    {
      category: "Metabolic",
      shortName: "Metabolic",
      expert: "Dr. Benjamin Bikman, Dr. Jason Fung, Dr. Ulrich Strunz, Thiemo Osterhaus",
      markers: [
        { 
          name: "Fasting Glucose", 
          optimal: "70-100", 
          official: "70-99", 
          unit: "mg/dL",
          description: "Blood sugar after 8+ hours fasting. Reflects glucose homeostasis and insulin sensitivity.",
          clinical: "Optimal range prevents progression to prediabetes. Strunz targets 70-80 mg/dL, Osterhaus < 100 mg/dL for metabolic flexibility."
        },
        { 
          name: "HbA1c", 
          optimal: "< 5.3", 
          official: "< 5.7", 
          unit: "%",
          description: "Long-term blood sugar providing average blood glucose over several months. Key diagnostic marker for diabetes and relevant for longevity.",
          clinical: "Optimal levels prevent glycation damage. Strunz recommends < 5.2%, Osterhaus < 5.3% for longevity optimization. Measurement method can influence results."
        },
        { 
          name: "HOMA Index", 
          optimal: "< 1.0", 
          official: "< 2.5", 
          unit: "",
          description: "Reflects insulin sensitivity and resistance, serving as indicator for pre-diabetic states. Often not routinely measured in conventional medicine.",
          clinical: "Lower scores indicate better insulin sensitivity. Strunz emphasizes < 0.8 for metabolic optimization."
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
          name: "Blood Sugar Spikes", 
          optimal: "Minimal", 
          official: "Variable", 
          unit: "mg/dL",
          description: "Rapid increases in blood glucose are undesirable as they can lead to energy crashes and cravings. Can be monitored with CGM.",
          clinical: "Important for stable energy, weight management, and type 2 diabetes prevention. Continuous glucose monitoring recommended."
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
          optimal: "80-150 (F), 100-200 (M)", 
          official: "15-200 (F), 30-400 (M)", 
          unit: "ng/mL",
          description: "Primary marker for iron stores. Low ferritin indicates iron deficiency even if hemoglobin is normal. Can be falsely elevated by inflammation (CRP).",
          clinical: "Very common deficiency especially in women of childbearing age, athletes, vegetarians. Osterhaus optimal ranges: women 80-150 ng/mL, men 100-200 ng/mL. Always measure with HB, Transferrin Saturation, and CRP."
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
      shortName: "Vitamins",
      expert: "Dr. Rhonda Patrick, Dr. Michael Holick, Dr. Helena Orfanos-Boeckel, Thiemo Osterhaus",
      markers: [
        { 
          name: "Vitamin D (25-OH)", 
          optimal: "40-60", 
          official: "20-50", 
          unit: "ng/mL",
          description: "Crucial for immune function, bone health, mood regulation, neurotransmitter formation, and hormone modulation. Up to 60% of Germans estimated deficient.",
          clinical: "Co-factors: Vitamin K2, Magnesium, Calcium, Boron. Higher doses recommended (2500 IU summer, 5000 IU winter). Critical for fertility and egg quality. Osterhaus targets 40-60 ng/mL."
        },
        { 
          name: "Vitamin D (1,25-OH)", 
          optimal: "25-65", 
          official: "19-67", 
          unit: "pg/mL",
          description: "Active form of Vitamin D. Testing alongside 25-OH particularly relevant for immune system problems or autoimmune diseases.",
          clinical: "Helps understand Vitamin D metabolism in individuals with immune dysfunction or autoimmune conditions."
        },
        { 
          name: "Vitamin K2 (MK-7)", 
          optimal: "1.0-8.0", 
          official: "0.13-1.88", 
          unit: "ng/mL",
          description: "Vital for bone health (regulating calcium distribution) and heart health. Works synergistically with Vitamin D to ensure calcium goes to bones, not arteries.",
          clinical: "Studies exploring effects on immune health, athletic performance, muscle regeneration, inflammation reduction, mental health."
        },
        { 
          name: "Vitamin C", 
          optimal: "> 1.0", 
          official: "0.4-2.0", 
          unit: "mg/dL",
          description: "'Queen of all vitamins' - crucial for immune system, collagen formation, nerve cells. Key antioxidant and co-factor for Cortisol and DHEA production.",
          clinical: "Essential for iron absorption. Often underestimated - people believe they get enough from diet. Important for fertility and egg quality."
        },
        { 
          name: "B12 (Holotranscobalamin)", 
          optimal: "> 400", 
          official: "200-900", 
          unit: "pg/mL",
          description: "Essential for nervous system function and reducing fatigue. Deficiency can cause irreversible nerve damage. More accurate than total B12.",
          clinical: "Critical for vegetarians/vegans. High doses recommended for neurodegenerative/psychiatric diseases and exhaustion. Osterhaus emphasizes > 400 pg/mL. Works with CoQ10 for mitochondrial function."
        },
        { 
          name: "Folate (Vitamin B9)", 
          optimal: "> 10", 
          official: "3-17", 
          unit: "ng/mL",
          description: "Essential for normal blood formation and reducing fatigue. Increased demand in women of childbearing age, pregnancy, and lactation.",
          clinical: "Higher levels support optimal methylation. Orfanos-Boeckel emphasizes > 20 ng/mL, Osterhaus > 10 ng/mL for cardiovascular health."
        },
        { 
          name: "Vitamin B6 (Pyridoxine)", 
          optimal: "35-110", 
          official: "20-125", 
          unit: "nmol/L",
          description: "Important for steroid hormone synthesis. Deficiency linked to homocysteine levels and can affect mood swings and psychological well-being.",
          clinical: "Care should be taken with synthetic forms. Higher levels support brain function and immune health."
        },
        { 
          name: "Vitamin B5 (Pantothenic Acid)", 
          optimal: "200-1800", 
          official: "200-1800", 
          unit: "μg/L",
          description: "Crucial co-factor for Cortisol and DHEA production in adrenal glands, especially beneficial for exhaustion and burnout.",
          clinical: "Essential for adrenal function and stress response. Works with Vitamin C for DHEA production."
        },
        { 
          name: "Vitamin B3 (Niacin)", 
          optimal: "2.4-6.4", 
          official: "2.4-6.4", 
          unit: "μmol/L",
          description: "Plays role in formation of NAD+ and ATP (energy molecules). Important for cellular energy production.",
          clinical: "Critical for energy metabolism and cellular function."
        },
        { 
          name: "Vitamin B2 (Riboflavin)", 
          optimal: "137-370", 
          official: "137-370", 
          unit: "nmol/L",
          description: "Essential for energy metabolism. Deficiency can manifest as cracked mouth corners.",
          clinical: "Important for cellular energy production and maintaining healthy mucous membranes."
        },
        { 
          name: "Biotin (Vitamin B7/H)", 
          optimal: "200-500", 
          official: "200-500", 
          unit: "ng/L",
          description: "Essential for hair root strength, overall hair growth, and nail health. Often used in 'biotin cures' for hair loss.",
          clinical: "Critical for maintaining healthy hair and nails."
        },
        { 
          name: "Vitamin A", 
          optimal: "1.05-2.27", 
          official: "1.05-2.27", 
          unit: "μmol/L",
          description: "Essential for vision, immune function, and skin health. Deficiency can contribute to dry and pale skin.",
          clinical: "Important for maintaining healthy skin and immune function."
        },
        { 
          name: "Vitamin E", 
          optimal: "12-42", 
          official: "5-20", 
          unit: "μmol/L",
          description: "Fat-soluble antioxidant protecting cell membranes. Deficiency can contribute to dry skin, but high doses can be harmful.",
          clinical: "Balance is key - some studies show harm from very high doses. Orfanos-Boeckel recommends 20-35 μmol/L."
        }
      ]
    },
    {
      category: "Minerals & Trace Elements",
      shortName: "Minerals",
      expert: "Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz, Thiemo Osterhaus",
      markers: [
        { 
          name: "Iron (Ferritin)", 
          optimal: "80-150 (F), 100-200 (M)", 
          official: "15-200 (F), 30-400 (M)", 
          unit: "μg/L",
          description: "Primary iron storage marker. Symptoms of deficiency: chronic fatigue, hair loss, brittle nails, concentration problems, reduced fertility.",
          clinical: "Co-factors: Vitamin C, B12, Folic Acid, Copper. Common deficiency in menstruating women, athletes, vegetarians. Can be falsely elevated by inflammation. Osterhaus: women 80-150 μg/L, men 100-200 μg/L."
        },
        { 
          name: "Hemoglobin (HB)", 
          optimal: "12-16 (F), 14-18 (M)", 
          official: "12-15.5 (F), 13.5-17.5 (M)", 
          unit: "g/dL",
          description: "Oxygen-carrying protein in red blood cells. Used to diagnose anemia with cut-offs: women <12, men <13, pregnant women <11 g/dL.",
          clinical: "Always measure alongside Ferritin, Transferrin Saturation, and CRP for accurate iron status assessment."
        },
        { 
          name: "Magnesium (Whole Blood)", 
          optimal: "2.0-2.6", 
          official: "1.7-2.2", 
          unit: "mg/dL",
          description: "Involved in 600+ metabolic processes. Crucial for muscle function, nervous system, energy production, neurotransmitter formation, sleep.",
          clinical: "~80% population deficient. High demand for athletes and high-stress professions. Whole blood more accurate than serum. Various forms offer different benefits."
        },
        { 
          name: "Zinc", 
          optimal: "90-150", 
          official: "70-120", 
          unit: "μg/dL",
          description: "Important for immune system, cell division, collagen formation, steroid hormone synthesis. Deficiency: hair loss, brittle nails, cracked mouth corners.",
          clinical: "Critical for vegetarians/vegans due to phytate binding. Recommended for athletes and gut barrier healing."
        },
        { 
          name: "Calcium", 
          optimal: "9.5-10.2", 
          official: "8.5-10.5", 
          unit: "mg/dL",
          description: "Essential for bone/tooth formation and muscle function. Requires adequate Vitamin D for proper absorption.",
          clinical: "People avoiding dairy often show deficiency. Works synergistically with Vitamin D and K2."
        },
        { 
          name: "Iodine", 
          optimal: "100-199", 
          official: "52-109", 
          unit: "μg/L",
          description: "Essential for normal thyroid function and cognitive function. Many regions (like Germany) are iodine-poor.",
          clinical: "Common deficiency in those consuming little iodized salt or fish. High doses used for thyroid support in fertility contexts."
        },
        { 
          name: "Selenium", 
          optimal: "120-150", 
          official: "70-150", 
          unit: "μg/L",
          description: "Important for protecting cells from oxidative stress, immune system, and thyroid function. European soil often selenium-poor.",
          clinical: "Common deficiencies due to poor soil. Higher doses may be needed than standard recommendations, but high doses can be dangerous."
        },
        { 
          name: "Potassium", 
          optimal: "4.0-4.5", 
          official: "3.5-5.0", 
          unit: "mmol/L",
          description: "Can be supplemented during fasting to help prevent muscle cramps. Essential electrolyte for muscle and nerve function.",
          clinical: "Higher levels within range support cardiovascular health and blood pressure control."
        },
        { 
          name: "Copper", 
          optimal: "70-140", 
          official: "70-140", 
          unit: "μg/dL",
          description: "Co-factor whose deficiency can impair iron absorption. Essential for iron metabolism and connective tissue.",
          clinical: "Balance with zinc crucial. Orfanos-Boeckel monitors copper:zinc ratio for optimal health."
        },
        { 
          name: "Lithium (trace)", 
          optimal: "5-20", 
          official: "Variable", 
          unit: "μg/L",
          description: "Interesting trace element with positive effects on mood and neuroprotection.",
          clinical: "Emerging research on benefits for mental health and neuroprotection at trace levels."
        },
        { 
          name: "Boron", 
          optimal: "20-100", 
          official: "Variable", 
          unit: "μg/L",
          description: "Co-factor for Vitamin D function and can be supplemented for bone health.",
          clinical: "Supports Vitamin D function and bone mineralization."
        }
      ]
    },
    {
      category: "Hormones & Thyroid",
      shortName: "Hormones",
      expert: "Dr. David Brownstein, Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz, Thiemo Osterhaus",
      markers: [
        { 
          name: "TSH", 
          optimal: "1.0-2.0", 
          official: "0.4-4.0", 
          unit: "mIU/L",
          description: "Thyroid Stimulating Hormone. While commonly measured, TSH alone is insufficient for comprehensive thyroid assessment.",
          clinical: "Narrower optimal range for metabolic efficiency. Orfanos-Boeckel targets 1.0-1.5 mIU/L, Osterhaus 1.0-2.0 mIU/L. Thyroid issues linked to hair loss, fatigue, fertility problems."
        },
        { 
          name: "Free T3 (fT3)", 
          optimal: "3.0-4.0", 
          official: "2.3-4.2", 
          unit: "pg/mL",
          description: "Active thyroid hormone that reflects actual thyroid function better than TSH alone.",
          clinical: "Optimal levels ensure adequate cellular metabolism. Orfanos-Boeckel emphasizes upper third of range. Requires Iodine, Selenium, Tyrosine as co-factors."
        },
        { 
          name: "Free T4 (fT4)", 
          optimal: "1.3-1.8", 
          official: "0.8-1.8", 
          unit: "ng/dL",
          description: "Thyroid prohormone converted to active T3 in tissues.",
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
          name: "Testosterone (Total)", 
          optimal: "500-900", 
          official: "270-1070", 
          unit: "ng/dL",
          description: "Important for dopaminergic system, acetylcholine (learning, memory), prevents depression, irritability, cognitive impairment. Neuroprotective.",
          clinical: "Men in 30s-40s can experience deficiency. Must measure SHBG to calculate free testosterone. Co-factors: Vitamin D3, B6, Zinc, Magnesium."
        },
        { 
          name: "Free Testosterone", 
          optimal: "9-27", 
          official: "6.8-21.5", 
          unit: "pg/mL",
          description: "Physiologically active testosterone calculated from total testosterone and SHBG.",
          clinical: "More accurate assessment of testosterone status than total testosterone alone."
        },
        { 
          name: "Estradiol (E2)", 
          optimal: "100-200", 
          official: "15-350", 
          unit: "pg/mL",
          description: "Important for happiness, well-being, serotonergic and dopaminergic systems, acetylcholine (learning, memory). Protective against cardiovascular disease.",
          clinical: "Can be measured in serum or saliva. Decline during menopause can increase blood pressure. Deficiency causes depression, cognitive issues, sleep disturbances."
        },
        { 
          name: "Progesterone", 
          optimal: "15-25", 
          official: "1-20", 
          unit: "ng/mL",
          description: "Important for relaxation ('natural Valium'), mood stabilization, sleep quality, GABAergic system. Deficiency causes irritability, restlessness, sleep issues.",
          clinical: "Can be measured in serum or saliva (preferred for free hormones). For women, test on cycle day 19-21. Orfanos-Boeckel targets optimal ratios with estrogen."
        },
        { 
          name: "DHEA-S", 
          optimal: "350-500", 
          official: "80-560", 
          unit: "μg/dL",
          description: "Precursor hormone for Testosterone and Estrogen production. Often described as 'healing' hormone. Co-factors: Vitamin C and B5.",
          clinical: "Higher levels associated with stress resilience. Strunz targets 400-450 μg/dL."
        },
        { 
          name: "Estriol (E3)", 
          optimal: "10-40", 
          official: "Variable", 
          unit: "pg/mL",
          description: "Underrated hormone important for mucous membrane hydration, helping prevent dryness and inflammation.",
          clinical: "Important for maintaining healthy mucous membranes and preventing inflammatory conditions."
        },
        { 
          name: "SHBG", 
          optimal: "18-54", 
          official: "18-54", 
          unit: "nmol/L",
          description: "Sex Hormone-Binding Globulin transports sex hormones. Essential for calculating free (bioavailable) testosterone.",
          clinical: "Must be measured alongside total testosterone for accurate assessment of hormonal status."
        },
        { 
          name: "Cortisol (AM)", 
          optimal: "12-22", 
          official: "6-23", 
          unit: "μg/dL",
          description: "Primary stress hormone, should be highest in morning and decline throughout day.",
          clinical: "Optimal morning levels indicate healthy adrenal function. Orfanos-Boeckel emphasizes circadian rhythm optimization."
        }
      ]
    },
    {
      category: "Advanced Longevity",
      shortName: "Longevity",
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
          name: "CoQ10 (Ubiquinol)", 
          optimal: "> 2.5", 
          official: "0.4-1.9", 
          unit: "μg/mL",
          description: "Vital for mitochondrial energy production ('fuel for the furnace'), heart health, combating chronic fatigue and burnout. Levels decline with age.",
          clinical: "Works with Vitamin B12 for mitochondrial function. Higher levels support energy production and cardiovascular health."
        },
        { 
          name: "Glutathione", 
          optimal: "> 900", 
          official: "600-1200", 
          unit: "μmol/L",
          description: "Master antioxidant and main detoxification molecule. Protects cells, supports immune system, safeguards gut and brain barriers.",
          clinical: "Deficiency common due to environmental toxins. Orfanos-Boeckel targets > 1000 μmol/L for optimal detox capacity."
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
          name: "Epigenetic Age", 
          optimal: "< Chronological", 
          official: "Variable", 
          unit: "Years",
          description: "Biological markers estimating biological age, which may differ from chronological age. Lifestyle factors significantly influence this marker.",
          clinical: "Lower biological age indicates better health span. Diet and exercise can significantly influence this marker."
        },
        { 
          name: "VO2 Max", 
          optimal: "> 35 (F), > 42 (M)", 
          official: "Variable", 
          unit: "mL/kg/min",
          description: "Maximum oxygen consumption during intense exercise. Strong correlation with overall physical condition and life expectancy.",
          clinical: "Being advocated as standard for general medical check-ups due to strong correlation with longevity."
        },
        { 
          name: "Advanced Glycation End Products", 
          optimal: "< 2.0", 
          official: "< 3.0", 
          unit: "AU",
          description: "Protein modifications from glucose that accumulate with age and diabetes.",
          clinical: "Lower levels indicate better glucose control and reduced aging acceleration."
        }
      ]
    },
    {
      category: "Specialized Testing",
      shortName: "Specialized",
      expert: "Various Longevity Experts",
      markers: [
        { 
          name: "Heavy Metals (Mercury)", 
          optimal: "< 5", 
          official: "< 20", 
          unit: "μg/L",
          description: "Exposure significant concern for brain health, linked to neurodegenerative diseases like Alzheimer's and Parkinson's.",
          clinical: "Testing recommended due to environmental exposure and brain health implications."
        },
        { 
          name: "Heavy Metals (Aluminum)", 
          optimal: "< 10", 
          official: "< 50", 
          unit: "μg/L",
          description: "Another toxic metal of concern for brain health and neurodegenerative diseases.",
          clinical: "Environmental exposure common, testing recommended for comprehensive health assessment."
        },
        { 
          name: "Creatine Kinase", 
          optimal: "< 200", 
          official: "< 190 (F), < 308 (M)", 
          unit: "U/L",
          description: "Enzyme that can indicate muscle damage or inflammation.",
          clinical: "Elevated levels may indicate muscle damage from exercise or other causes."
        },
        { 
          name: "LDH", 
          optimal: "< 250", 
          official: "< 248", 
          unit: "U/L",
          description: "Lactate Dehydrogenase - enzyme that can indicate tissue damage or disease.",
          clinical: "General marker of cellular damage, useful for overall health assessment."
        },
        { 
          name: "Tryptophan", 
          optimal: "40-80", 
          official: "Variable", 
          unit: "μmol/L",
          description: "Precursor for Serotonin and Melatonin (mood and sleep regulation).",
          clinical: "Important for neurotransmitter synthesis and sleep-wake cycle regulation."
        },
        { 
          name: "Tyrosine", 
          optimal: "50-120", 
          official: "Variable", 
          unit: "μmol/L",
          description: "Essential for thyroid hormone production and neurotransmitter synthesis.",
          clinical: "Critical for thyroid function and cognitive performance."
        },
        { 
          name: "GABA", 
          optimal: "2-20", 
          official: "Variable", 
          unit: "μmol/L",
          description: "Inhibitory neurotransmitter for relaxation and anxiety reduction.",
          clinical: "Important for stress management and nervous system regulation."
        },
        { 
          name: "L-Arginine", 
          optimal: "80-150", 
          official: "Variable", 
          unit: "μmol/L",
          description: "Widens blood vessels, increases nitric oxide synthesis for better oxygen supply. Referred to as 'natural Viagra'.",
          clinical: "Important for cardiovascular health, endurance, and circulation."
        },
        { 
          name: "Essential Amino Acids", 
          optimal: "Within Range", 
          official: "Variable", 
          unit: "μmol/L",
          description: "Nine amino acids the body cannot produce, important for protein synthesis and muscle building.",
          clinical: "Critical for maintaining muscle mass and overall protein metabolism."
        }
      ]
    },
    {
      category: "Immune & Inflammatory",
      shortName: "Immune",
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
      shortName: "Liver",
      expert: "Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz, Thiemo Osterhaus",
      markers: [
        { 
          name: "GOT (AST)", 
          optimal: "< 25", 
          official: "< 40", 
          unit: "U/L",
          description: "Glutamate Oxaloacetate Transaminase (AST), liver enzyme indicating hepatocellular damage and liver function.",
          clinical: "Lower levels within normal range indicate better cellular health and liver function. Osterhaus targets < 25 U/L."
        },
        { 
          name: "GPT (ALT)", 
          optimal: "< 25", 
          official: "< 40", 
          unit: "U/L",
          description: "Glutamate Pyruvate Transaminase (ALT), liver enzyme that indicates hepatocellular damage.",
          clinical: "Lower levels indicate better liver health. Orfanos-Boeckel targets < 20 U/L, Osterhaus < 25 U/L for optimal function."
        },
        { 
          name: "Gamma GT", 
          optimal: "< 30", 
          official: "< 60", 
          unit: "U/L",
          description: "Gamma-Glutamyl Transferase, enzyme involved in glutathione metabolism and detox. Elevated levels correlated with higher risk of earlier mortality.",
          clinical: "Lower levels indicate better liver function and glutathione status. Strunz targets < 25 U/L, Osterhaus < 30 U/L."
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
      shortName: "Kidney",
      expert: "Dr. Helena Orfanos-Boeckel, Dr. Ulrich Strunz, Thiemo Osterhaus",
      markers: [
        { 
          name: "Cystatin C", 
          optimal: "0.5-0.9", 
          official: "0.51-0.98", 
          unit: "mg/L",
          description: "More accurate marker of kidney function than creatinine, not affected by muscle mass.",
          clinical: "Better indicator of kidney function, especially in elderly or those with low muscle mass."
        },
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
          clinical: "Higher levels indicate better kidney function and longevity. Orfanos-Boeckel targets > 100, Osterhaus > 90."
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

        {/* Mobile Navigation - Dropdown */}
        <div className="block md:hidden mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {biomarkerCategories.map((category) => (
                <SelectItem key={category.category} value={category.category}>
                  {category.category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Navigation - Compact Tabs */}
        <div className="hidden md:block">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 xl:grid-cols-10 mb-8 h-auto">
              {biomarkerCategories.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="text-xs p-2 h-auto whitespace-nowrap"
                >
                  <span className="hidden xl:inline">{category.category}</span>
                  <span className="xl:hidden">{category.shortName}</span>
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
        </div>

        {/* Mobile Content Display */}
        <div className="block md:hidden">
          {biomarkerCategories
            .filter(category => category.category === selectedCategory)
            .map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl text-slate-800">
                      {category.category} Biomarkers
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      Experts: {category.expert}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px] min-w-[120px]">Biomarker</TableHead>
                          <TableHead className="text-center min-w-[100px]">Optimal</TableHead>
                          <TableHead className="text-center min-w-[100px]">Official</TableHead>
                          <TableHead className="text-center min-w-[60px]">Unit</TableHead>
                          <TableHead className="w-[40px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {category.markers.map((marker, index) => (
                          <TableRow key={index} className="hover:bg-slate-50">
                            <TableCell className="font-medium text-xs">{marker.name}</TableCell>
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
                                    <Info className="h-3 w-3" />
                                  </button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-72">
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
            ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800">Optimal Ranges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-emerald-700">
                Based on latest longevity research from leading experts including Dr. Strunz, Dr. Orfanos-Boeckel, and Thiemo Osterhaus, 
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
              <CardTitle className="text-lg text-blue-800">Testing Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700">
                "Measure, Do, Measure" - Test first to identify deficiencies, implement changes, 
                then re-test to evaluate effectiveness. Individualized approach with professional guidance recommended.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReferenceValues;
