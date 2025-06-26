import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ExternalLink } from "lucide-react";

interface Company {
  name: string;
  location: string;
  funding: string;
  founded: string;
  focus: string;
  description: string;
  category: 'clinical' | 'consumer' | 'research';
  url?: string;
  rank?: number;
}

const MarketAnalysisChart = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const globalTop50Companies: Company[] = [
    // Top 10 Global Leaders
    {
      name: "Altos Labs",
      location: "San Francisco, CA",
      funding: "$3B",
      founded: "2021",
      focus: "Cellular reprogramming",
      description: "Backed by Jeff Bezos, staffed by Nobel Prize winners for cellular programming research and anti-aging therapeutics.",
      category: "research",
      rank: 1,
      url: "https://altoslabs.com"
    },
    {
      name: "Retro Biosciences",
      location: "San Francisco, CA",
      funding: "$1B",
      founded: "2021",
      focus: "Lifespan extension",
      description: "Cellular rejuvenation and lifespan extension research with significant venture backing.",
      category: "research",
      rank: 2,
      url: "https://retro.bio"
    },
    {
      name: "Hevolution Foundation",
      location: "Riyadh, Saudi Arabia",
      funding: "$1B",
      founded: "2020",
      focus: "Longevity research funding",
      description: "Foundation dedicated to funding longevity research globally with substantial government backing.",
      category: "research",
      rank: 3,
      url: "https://hevolutionfoundation.com"
    },
    {
      name: "Sunday Natural",
      location: "Berlin, Germany",
      funding: "$875M",
      founded: "2014",
      focus: "Premium supplements",
      description: "Premium natural supplements and longevity nutrition platform with major acquisition exit.",
      category: "consumer",
      rank: 4,
      url: "https://www.sunday.de/en/"
    },
    {
      name: "Abogen Biosciences",
      location: "Suzhou, China",
      funding: "$700M",
      founded: "2019",
      focus: "Biotechnology therapeutics",
      description: "Chinese biotech with substantial Series C funding for therapeutic development.",
      category: "clinical",
      rank: 5,
      url: "https://abogenbio.com"
    },
    {
      name: "BioSplice Therapeutics",
      location: "San Diego, CA",
      funding: "$561.5M",
      founded: "2017",
      focus: "Alternative splicing therapeutics",
      description: "Developing therapeutics based on alternative splicing technology for age-related diseases.",
      category: "clinical",
      rank: 6,
      url: "https://biosplicetherapeutics.com"
    },
    {
      name: "Human Longevity Inc.",
      location: "San Diego, CA",
      funding: "$399.8M",
      founded: "2013",
      focus: "Precision medicine",
      description: "Genomics and precision medicine platform for health optimization and longevity.",
      category: "clinical",
      rank: 7,
      url: "https://humanlongevity.com"
    },
    {
      name: "ŌURA",
      location: "Finland/US",
      funding: "$200M",
      founded: "2013",
      focus: "Smart wearables",
      description: "Health tracking wearables with advanced biometric monitoring for optimization.",
      category: "consumer",
      rank: 8,
      url: "https://ouraring.com"
    },
    {
      name: "BioAge Labs",
      location: "Richmond, CA",
      funding: "$198M",
      founded: "2015",
      focus: "Metabolic diseases",
      description: "Public company developing therapeutics for obesity and metabolic diseases of aging.",
      category: "clinical",
      rank: 9,
      url: "https://bioagelabs.com"
    },
    {
      name: "Unity Biotechnology",
      location: "San Francisco, CA",
      funding: "$176M",
      founded: "2011",
      focus: "Senolytic therapies",
      description: "Pioneer in senolytic drug development for age-related diseases.",
      category: "clinical",
      rank: 10,
      url: "https://unitybiotechnology.com"
    },
    // Additional Notable Companies (including new ones from the table)
    {
      name: "Function Health",
      location: "Austin, TX",
      funding: "$106M",
      founded: "2021",
      focus: "Preventive health testing",
      description: "Direct-to-consumer comprehensive health dashboards with expert interpretation.",
      category: "consumer",
      rank: 11,
      url: "https://functionhealth.com"
    },
    {
      name: "Juvenescence",
      location: "Douglas, Isle of Man",
      funding: "$100M",
      founded: "2017",
      focus: "Anti-aging drug development",
      description: "Multi-platform approach to developing therapies for age-related diseases.",
      category: "clinical",
      rank: 12,
      url: "https://juvenescence.life"
    },
    {
      name: "Insilico Medicine",
      location: "New York, NY",
      funding: "$95M",
      founded: "2014",
      focus: "AI drug discovery",
      description: "AI-powered drug discovery platform focused on aging and age-related diseases.",
      category: "research",
      rank: 13,
      url: "https://insilico.com"
    },
    {
      name: "Rubedo Life Sciences",
      location: "Sunnyvale, CA",
      funding: "$87M",
      founded: "2018",
      focus: "Senolytic therapies",
      description: "Developing next-generation senolytic therapies for age-related diseases.",
      category: "clinical",
      rank: 14,
      url: "https://rubedolife.com"
    },
    {
      name: "Timeline",
      location: "Lausanne, Switzerland",
      funding: "$66M",
      founded: "2012",
      focus: "Mitochondrial health",
      description: "Series D funding led by L'Oréal and Nestlé for Mitopure technology advancing longevity applications.",
      category: "consumer",
      rank: 15,
      url: "https://timeline.bio"
    },
    {
      name: "Neko Health",
      location: "Stockholm, Sweden",
      funding: "$60M",
      founded: "2018",
      focus: "Sensor-based AI platform",
      description: "Co-founded by Spotify's Daniel Ek, combining biometric monitoring with AI-driven health insights.",
      category: "consumer",
      url: "https://nekohealth.com"
    },
    {
      name: "Life Biosciences",
      location: "Boston, MA",
      funding: "$50M",
      founded: "2017",
      focus: "Multi-platform longevity",
      description: "Comprehensive approach to longevity research across multiple therapeutic areas.",
      category: "research",
      rank: 16,
      url: "https://lifebiosciences.com"
    },
    {
      name: "Loyal",
      location: "San Francisco, CA",
      funding: "$45M",
      founded: "2019",
      focus: "Dog longevity drugs",
      description: "Developing FDA-approved drugs to extend healthy lifespan in dogs.",
      category: "clinical",
      rank: 17,
      url: "https://loyalfordogs.com"
    },
    {
      name: "Shanghai Rejuvelab",
      location: "Shanghai, China",
      funding: "$45M",
      founded: "2020",
      focus: "Anti-aging devices",
      description: "Intelligent anti-aging devices and treatments for cellular rejuvenation.",
      category: "clinical",
      rank: 18,
      url: "https://rejuvelab.com"
    },
    {
      name: "Gero",
      location: "Singapore",
      funding: "$40M",
      founded: "2015",
      focus: "AI-driven longevity",
      description: "Singapore-based AI platform for longevity research and biomarker development.",
      category: "research",
      rank: 19,
      url: "https://gero.ai"
    },
    {
      name: "Orbem",
      location: "Munich, Germany",
      funding: "$32M",
      founded: "2019",
      focus: "AI-powered MRI platform",
      description: "Germany's most technically sophisticated longevity AI company with clinical expertise and advanced AI for medical imaging.",
      category: "clinical",
      url: "https://orbem.ai"
    },
    {
      name: "Vandria",
      location: "Basel, Switzerland",
      funding: "$30.7M",
      founded: "2020",
      focus: "Mitophagy inducers",
      description: "Swiss biotech developing mitophagy inducers for cellular rejuvenation therapies.",
      category: "clinical",
      rank: 20,
      url: "https://vandria.com"
    },
    {
      name: "Fountain Life",
      location: "Dallas, TX",
      funding: "$30M",
      founded: "2019",
      focus: "Precision diagnostics",
      description: "Longevity-focused precision diagnostics and health optimization clinics.",
      category: "consumer",
      rank: 21,
      url: "https://fountainlife.com"
    },
    {
      name: "Advancexo",
      location: "China",
      funding: "$25M",
      founded: "2018",
      focus: "Exosome therapeutics",
      description: "Lyophilized exosomes for regenerative medicine and anti-aging applications.",
      category: "clinical",
      rank: 22,
      url: "https://advancexo.com"
    },
    {
      name: "Bioniq",
      location: "London, UK",
      funding: "$20.7M",
      founded: "2019",
      focus: "Personalized supplements",
      description: "Biomarker analysis combined with genetic profiling for customized supplementation.",
      category: "consumer",
      url: "https://bioniq.com"
    },
    {
      name: "HAOMA",
      location: "China",
      funding: "$18M",
      founded: "2020",
      focus: "Multi-omics AI platform",
      description: "AI platform leveraging multi-omics data for longevity research and applications.",
      category: "research",
      rank: 23,
      url: "https://haoma.ai"
    },
    {
      name: "Aware Health",
      location: "Berlin, Germany",
      funding: "$15M",
      founded: "2019",
      focus: "Preventive medicine",
      description: "Comprehensive blood testing and preventive medicine platform with advanced biomarker analysis.",
      category: "consumer",
      rank: 24,
      url: "https://www.aware.app/en/"
    },
    {
      name: "Deep Longevity",
      location: "Hong Kong, China",
      funding: "$14M",
      founded: "2020",
      focus: "AI aging clocks",
      description: "AI-driven longevity research with advanced aging clock technology for health optimization.",
      category: "research",
      rank: 25,
      url: "https://deep-longevity.com"
    },
    {
      name: "Genetron Health",
      location: "Beijing, China",
      funding: "$12M",
      founded: "2015",
      focus: "Precision oncology",
      description: "Precision oncology and genomics platform with applications in longevity research.",
      category: "clinical",
      rank: 26,
      url: "https://genetronhealth.com"
    },
    {
      name: "Jupiter Neurosciences",
      location: "Jupiter, FL",
      funding: "$11M",
      founded: "2019",
      focus: "Neuroinflammation",
      description: "Developing treatments for neuroinflammation and age-related cognitive decline.",
      category: "clinical",
      rank: 27,
      url: "https://jupiterneurosciences.com"
    },
    {
      name: "Rejuvenate Bio",
      location: "San Diego, CA",
      funding: "$10M",
      founded: "2018",
      focus: "Gene therapy for aging",
      description: "Gene therapy approaches to address fundamental mechanisms of aging.",
      category: "clinical",
      rank: 28,
      url: "https://rejuvenatebio.com"
    },
    {
      name: "Epiterna",
      location: "Lausanne, Switzerland",
      funding: "$10M",
      founded: "2022",
      focus: "Drug screening platform",
      description: "University spinoff with accelerated drug evaluation platform for longevity therapeutics.",
      category: "research",
      rank: 29,
      url: "https://epiterna.com"
    },
    {
      name: "Senisca",
      location: "Exeter, UK",
      funding: "$9.1M",
      founded: "2020",
      focus: "RNA splicing",
      description: "UK biotech focusing on RNA splicing and senotherapeutics for age-related diseases.",
      category: "clinical",
      rank: 30,
      url: "https://senisca.co"
    },
    {
      name: "Turn Biotechnologies",
      location: "Mountain View, CA",
      funding: "$9M",
      founded: "2018",
      focus: "mRNA reprogramming",
      description: "mRNA-based cellular reprogramming technology for tissue regeneration.",
      category: "clinical",
      rank: 31,
      url: "https://turnbiotechnologies.com"
    },
    {
      name: "Genflow Biosciences",
      location: "London, UK",
      funding: "$8.5M",
      founded: "2019",
      focus: "Gene therapy",
      description: "Public company developing gene therapy approaches for longevity and healthspan extension.",
      category: "clinical",
      rank: 32,
      url: "https://genflowbio.com"
    },
    {
      name: "Cellbricks",
      location: "Berlin, Germany",
      funding: "$8M",
      founded: "2015",
      focus: "3D bioprinting systems",
      description: "Molecular medicine focused on bio-fabrication technology for artificially manufactured organs.",
      category: "clinical",
      rank: 33,
      url: "https://cellbricks.com"
    },
    {
      name: "Akribion Therapeutics",
      location: "Zwingenberg, Germany",
      funding: "$8M",
      founded: "2020",
      focus: "RNA-guided cell depletion",
      description: "RNA-guided programmable cell depletion technology for therapeutic applications.",
      category: "clinical",
      rank: 34,
      url: "https://www.akribion-therapeutics.com"
    },
    {
      name: "clook.bio",
      location: "London, UK",
      funding: "$7.5M",
      founded: "2020",
      focus: "Stem cell therapies",
      description: "Stem cell-based therapies for regenerative medicine and longevity applications.",
      category: "clinical",
      rank: 35,
      url: "https://clook.bio"
    },
    {
      name: "Cellvie",
      location: "Zurich, Switzerland",
      funding: "$5.5M",
      founded: "2020",
      focus: "Mitochondrial transplantation",
      description: "Swiss biotech developing mitochondrial transplantation therapy for cellular rejuvenation.",
      category: "clinical",
      rank: 36,
      url: "https://cellvie.com"
    },
    {
      name: "Liv Longevity Labs",
      location: "Berlin, Germany",
      funding: "$5M",
      founded: "2024",
      focus: "Cellular aging tests",
      description: "Consumer-focused longevity solutions with TruAge cellular aging test and AI-based personalized recommendations.",
      category: "consumer",
      rank: 37,
      url: "https://liv.health"
    },
    {
      name: "GlycanAge",
      location: "London, UK",
      funding: "$4.7M",
      founded: "2019",
      focus: "Glycan biomarkers",
      description: "Biological age measurement using glycan-based molecular biomarker assessment.",
      category: "clinical",
      rank: 38,
      url: "https://glycanage.com"
    },
    {
      name: "LIfT BioSciences",
      location: "London, UK",
      funding: "$4.5M",
      founded: "2019",
      focus: "Cell therapy",
      description: "Cell therapy applications for regenerative medicine and longevity.",
      category: "clinical",
      rank: 39,
      url: "https://liftbiosciences.com"
    },
    {
      name: "AERA Health",
      location: "Munich, Germany",
      funding: "$4M",
      founded: "2021",
      focus: "P4 preventive medicine",
      description: "Preventive and longevity medicine platform with personalized health optimization.",
      category: "consumer",
      rank: 40,
      url: "https://www.aera.health"
    },
    {
      name: "for you eHealth",
      location: "Weiden, Germany",
      funding: "$3.91M",
      founded: "2016",
      focus: "At-home health testing",
      description: "At-home health testing and biomarker analysis for personalized health optimization.",
      category: "consumer",
      rank: 41,
      url: "https://www.foryouehealth.de/"
    },
    {
      name: "Velabs Therapeutics",
      location: "Heidelberg, Germany",
      funding: "$3.81M",
      founded: "2018",
      focus: "Senolytic antibodies",
      description: "Senolytic antibody therapies for age-related disease treatment.",
      category: "clinical",
      rank: 42,
      url: "https://www.cbinsights.com/company/velabs-therapeutics"
    },
    {
      name: "Shift Bioscience",
      location: "Cambridge, UK",
      funding: "$3.5M",
      founded: "2017",
      focus: "Mitochondrial rejuvenation",
      description: "Mitochondrial-focused therapies for cellular rejuvenation and longevity.",
      category: "research",
      rank: 43,
      url: "https://shiftbioscience.com"
    },
    {
      name: "Tolion Health",
      location: "Prague, Czech Republic",
      funding: "$3M",
      founded: "2020",
      focus: "AI brain health",
      description: "AI-driven brain health optimization app for cognitive longevity.",
      category: "consumer",
      rank: 44,
      url: "https://tolion.com"
    },
    {
      name: "Albatroz Therapeutics",
      location: "Singapore",
      funding: "$3M",
      founded: "2019",
      focus: "Longevity therapeutics",
      description: "Singapore-based therapeutics company focused on aging-related diseases.",
      category: "clinical",
      rank: 45,
      url: "https://albatroztherapeutics.com"
    },
    {
      name: "Biopeak",
      location: "Bengaluru, India",
      funding: "$3M",
      founded: "2020",
      focus: "Preventive healthcare",
      description: "Personalized preventive healthcare platform with longevity focus.",
      category: "consumer",
      rank: 46,
      url: "https://biopeak.in"
    },
    {
      name: "Repair Biotechnologies",
      location: "New York, NY",
      funding: "$3M",
      founded: "2018",
      focus: "Cardiovascular aging",
      description: "Therapies targeting cardiovascular aspects of aging and longevity.",
      category: "clinical",
      rank: 47,
      url: "https://repairbiotechnologies.com"
    },
    {
      name: "Ichor Therapeutics",
      location: "New York, NY",
      funding: "$2.5M",
      founded: "2017",
      focus: "Senolytic drugs",
      description: "Early-stage senolytic drug development for age-related diseases.",
      category: "clinical",
      rank: 48,
      url: "https://ichortherapeutics.com"
    },
    {
      name: "EvaGene",
      location: "Sofia, Bulgaria",
      funding: "$2.5M",
      founded: "2019",
      focus: "DNA testing",
      description: "Home-based DNA testing specifically designed for longevity optimization.",
      category: "consumer",
      rank: 49,
      url: "https://evagene.me"
    },
    {
      name: "HealthCaters",
      location: "Berlin, Germany",
      funding: "$1.2M",
      founded: "2020",
      focus: "AI health screening",
      description: "AI-powered health screening stations for comprehensive health monitoring.",
      category: "consumer",
      rank: 50,
      url: "https://healthcaters.com"
    }
  ];

  const getFundingSize = (funding: string): number => {
    // Extract numeric value and convert to millions for consistent scaling
    const numStr = funding.replace(/[$€,B]/g, '').replace('M', '');
    let num = parseFloat(numStr);
    
    if (funding.includes('B')) {
      num = num * 1000; // Convert billions to millions
    }
    
    return Math.max(num, 1); // Ensure minimum value of 1M for scaling
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'clinical': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'consumer': return 'bg-green-100 text-green-800 border-green-200';
      case 'research': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMarketPosition = (funding: string, category: string, index: number): { x: number; y: number } => {
    const fundingSize = getFundingSize(funding);
    
    // Find max funding for scaling (Altos Labs has $3B = 3000M)
    const maxFunding = 3000;
    const minFunding = 1;
    
    // Use logarithmic scale for better distribution
    const logFunding = Math.log10(fundingSize);
    const logMax = Math.log10(maxFunding);
    const logMin = Math.log10(minFunding);
    
    // Map to X position with proper scaling (60px to 900px range)
    const normalizedPosition = (logFunding - logMin) / (logMax - logMin);
    let xPosition = 60 + (normalizedPosition * 840); // 840px range (900-60)
    
    // Add some randomness to prevent exact overlap while maintaining order
    const randomOffset = (Math.random() - 0.5) * 30; // ±15px random offset
    xPosition += randomOffset;
    
    // Ensure bounds
    xPosition = Math.max(Math.min(xPosition, 900), 60);
    
    let categoryY = 150; // Default middle position
    if (category === 'clinical') categoryY = 80;
    else if (category === 'consumer') categoryY = 220;  
    else if (category === 'research') categoryY = 360;
    
    // Add vertical scatter to prevent overlapping - use index-based offset
    const scatterY = ((index % 7) - 3) * 15; // Vertical scatter
    
    return {
      x: xPosition,
      y: Math.max(Math.min(categoryY + scatterY, 420), 60)
    };
  };

  const CompanyBubble = ({ company, region, index }: { company: Company; region: string; index: number }) => {
    const position = getMarketPosition(company.funding, company.category, index);
    const fundingSize = getFundingSize(company.funding);
    // Halved the size calculation - reduced from previous values
    const size = Math.max(Math.log10(fundingSize) * 36 + 30, 60); // Halved from 72 and 60 to 36 and 30, min from 120 to 60
    
    const handleClick = () => {
      if (company.url) {
        window.open(company.url, '_blank', 'noopener,noreferrer');
      }
    };
    
    return (
      <HoverCard openDelay={200} closeDelay={300}>
        <HoverCardTrigger asChild>
          <div
            className={`absolute transition-all duration-200 hover:scale-110 ${company.url ? 'cursor-pointer' : 'cursor-default'}`}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            onClick={handleClick}
          >
            <div className={`w-full h-full rounded-full border-2 flex items-center justify-center text-xs font-semibold ${getCategoryColor(company.category)} hover:shadow-lg`}>
              <span className="text-center px-1 leading-tight">
                {company.name.split(' ')[0]}
              </span>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{company.name}</h4>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getCategoryColor(company.category)}>
                  {company.category}
                </Badge>
                {company.rank && (
                  <Badge variant="secondary" className="text-xs">
                    #{company.rank}
                  </Badge>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Location:</strong> {company.location}</p>
              <p><strong>Founded:</strong> {company.founded}</p>
              <p><strong>Funding:</strong> {company.funding}</p>
              <p><strong>Focus:</strong> {company.focus}</p>
            </div>
            <p className="text-sm">{company.description}</p>
            {company.url && (
              <div className="flex items-center gap-2 pt-2 border-t">
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <a 
                  href={company.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-blue-600 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit website
                </a>
              </div>
            )}
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  };

  const filteredCompanies = selectedCategory === 'all' 
    ? globalTop50Companies 
    : globalTop50Companies.filter(company => company.category === selectedCategory);

  return (
    <div className="w-full space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Global Longevity Market Analysis
        </h3>
        <p className="text-slate-600 mb-4">
          Interactive visualization of the top longevity companies worldwide by funding and focus area
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4 text-sm text-left">
          <h4 className="font-semibold mb-2">Market Overview</h4>
          <p className="mb-2">
            The top 50 longevity startups have collectively raised over <strong>$8.1 billion</strong> in disclosed funding, 
            with an average of <strong>$169 million</strong> per company. This represents part of the broader $8.5 billion 
            global longevity investment in 2024, a 220% increase from 2023.
          </p>
          <p>
            <strong>Europe</strong> hosts 15 companies (30%) in the top 50, with <strong>Switzerland</strong> leading 
            with 4 companies. <strong>Germany</strong> demonstrates scientific excellence with 3 companies focusing on 
            AI-powered clinical solutions and bioprinting. <strong>China</strong> represents 12% with 6 companies 
            showing rapid growth in biotechnology innovation.
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Clinical Solutions</Badge>
          <Badge className="bg-green-100 text-green-800 border-green-200">Consumer Health</Badge>
          <Badge className="bg-purple-100 text-purple-800 border-purple-200">Research & Development</Badge>
        </div>
      </div>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="global">Global Top 50</TabsTrigger>
          <TabsTrigger value="european">European Leaders</TabsTrigger>
          <TabsTrigger value="german">German Market</TabsTrigger>
          <TabsTrigger value="analysis">Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="mt-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Global Longevity Funding Landscape</span>
                <div className="flex gap-2">
                  <Button 
                    variant={selectedCategory === 'all' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('all')}
                  >
                    All ({globalTop50Companies.length})
                  </Button>
                  <Button 
                    variant={selectedCategory === 'clinical' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('clinical')}
                  >
                    Clinical ({globalTop50Companies.filter(c => c.category === 'clinical').length})
                  </Button>
                  <Button 
                    variant={selectedCategory === 'consumer' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('consumer')}
                  >
                    Consumer ({globalTop50Companies.filter(c => c.category === 'consumer').length})
                  </Button>
                  <Button 
                    variant={selectedCategory === 'research' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedCategory('research')}
                  >
                    Research ({globalTop50Companies.filter(c => c.category === 'research').length})
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border overflow-hidden">
                {/* Y-Axis with horizontal lines and labels */}
                <div className="absolute left-2 top-4 text-sm font-medium text-gray-700 transform -rotate-90 origin-left">
                  Market Focus
                </div>
                
                {/* Horizontal dotted lines for better category separation */}
                <div className="absolute left-0 right-0 top-20 border-t border-dashed border-gray-400"></div>
                <div className="absolute left-0 right-0 top-1/3 border-t border-dashed border-gray-400"></div>
                <div className="absolute left-0 right-0 top-2/3 border-t border-dashed border-gray-400"></div>
                
                <div className="absolute left-8 top-8 text-sm font-bold text-blue-700">Clinical Solutions</div>
                <div className="absolute left-8 top-1/3 text-sm font-bold text-green-700">Consumer Health</div>
                <div className="absolute left-8 bottom-24 text-sm font-bold text-purple-700">Research & Development</div>
                
                {/* X-Axis with logarithmic scale markers */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
                  Funding Size (Logarithmic Scale)
                </div>
                <div className="absolute bottom-6 left-16 text-xs text-gray-600">$1M</div>
                <div className="absolute bottom-6 left-40 text-xs text-gray-600">$10M</div>
                <div className="absolute bottom-6 left-64 text-xs text-gray-600">$100M</div>
                <div className="absolute bottom-6 right-20 text-xs text-gray-600">$3B</div>
                
                {filteredCompanies.map((company, index) => (
                  <CompanyBubble key={`${company.name}-${index}`} company={company} region="global" index={index} />
                ))}
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$8.1B+</div>
                    <div className="text-sm text-gray-600">Total disclosed funding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{globalTop50Companies.length}</div>
                    <div className="text-sm text-gray-600">Top companies tracked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$169M</div>
                    <div className="text-sm text-gray-600">Average funding size</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="european" className="mt-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>European Longevity Leaders</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border overflow-hidden">
                {/* Y-Axis with dotted lines */}
                <div className="absolute left-2 top-4 text-sm font-medium text-gray-700 transform -rotate-90 origin-left">Market Focus</div>
                <div className="absolute left-0 right-0 top-16 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-0 right-0 top-1/3 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-0 right-0 top-2/3 border-t border-dashed border-gray-300"></div>
                
                <div className="absolute left-8 top-12 text-sm font-medium text-blue-700">Clinical Solutions</div>
                <div className="absolute left-8 top-1/3 text-sm font-medium text-green-700">Consumer Health</div>
                <div className="absolute left-8 bottom-20 text-sm font-medium text-purple-700">Research & Development</div>
                
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">Funding Size</div>
                <div className="absolute bottom-6 left-8 text-xs text-gray-600">€5M</div>
                <div className="absolute bottom-6 left-1/3 text-xs text-gray-600">€20M</div>
                <div className="absolute bottom-6 right-20 text-xs text-gray-600">€60M+</div>
                
                {globalTop50Companies
                  .filter(company => ['Switzerland', 'London', 'Stockholm', 'Newcastle', 'Exeter', 'Germany'].some(location => company.location.includes(location)))
                  .map((company, index) => (
                    <CompanyBubble key={`european-${company.name}-${index}`} company={company} region="european" index={index} />
                  ))}
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Swiss Excellence</h4>
                    <p className="text-sm">Timeline ($66M), Vandria ($30.7M), Epiterna ($10M), Cellvie ($5.5M)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">UK Innovation</h4>
                    <p className="text-sm">Strong pipeline in senotherapeutics and biomarkers</p>
                  </div>
                  <div>         
                    <h4 className="font-semibold mb-2">Nordic Leadership</h4>
                    <p className="text-sm">Neko Health leads consumer platform innovation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="german" className="mt-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>German Market Position</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-red-50 to-yellow-50 rounded-lg border overflow-hidden">
                {/* Y-Axis with dotted lines */}
                <div className="absolute left-2 top-4 text-sm font-medium text-gray-700 transform -rotate-90 origin-left">Market Focus</div>
                <div className="absolute left-0 right-0 top-16 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-0 right-0 top-1/3 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-0 right-0 top-2/3 border-t border-dashed border-gray-300"></div>
                
                <div className="absolute left-8 top-12 text-sm font-medium text-blue-700">Clinical Solutions</div>
                <div className="absolute left-8 top-1/3 text-sm font-medium text-green-700">Consumer Health</div>
                <div className="absolute left-8 bottom-20 text-sm font-medium text-purple-700">Research & Development</div>
                
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">Funding Size</div>
                <div className="absolute bottom-6 left-8 text-xs text-gray-600">€1M</div>
                <div className="absolute bottom-6 left-1/3 text-xs text-gray-600">€10M</div>
                <div className="absolute bottom-6 right-20 text-xs text-gray-600">€30M+</div>
                
                {globalTop50Companies
                  .filter(company => company.location.includes('Germany'))
                  .map((company, index) => (
                    <CompanyBubble key={`german-${company.name}-${index}`} company={company} region="german" index={index} />
                  ))}
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Clinical AI Leadership</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Orbem: $32M AI-powered MRI platform</li>
                        <li>• Cellbricks: 3D bioprinting for organs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Consumer Innovation</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Liv Longevity Labs: TruAge testing</li>
                        <li>• Growing Berlin longevity ecosystem</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Strategic Position</h4>
                    <p className="text-sm">
                      Germany demonstrates strong technical capabilities in clinical AI and bioprinting, 
                      with Berlin emerging as a key European longevity hub complementing Switzerland's leadership.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Funding Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>Top 10 Companies</span>
                    <span className="font-bold">$7.4B (91%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>Companies 11-25</span>
                    <span className="font-bold">$500M (6%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span>Companies 26-50</span>
                    <span className="font-bold">$200M (3%)</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Insights</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Extreme concentration in top tier companies</li>
                    <li>• Capital-intensive nature of longevity research</li>
                    <li>• Strong institutional backing required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>🇺🇸 United States</span>
                    <span className="font-bold">20 companies (40%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>🇪🇺 Europe</span>
                    <span className="font-bold">15 companies (30%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                    <span>🇨🇳 China</span>
                    <span className="font-bold">6 companies (12%)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>🌏 Other</span>
                    <span className="font-bold">9 companies (18%)</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold mb-2">European Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Switzerland: 4 companies, strong corporate backing</li>
                    <li>• UK: 6 companies, research excellence</li>
                    <li>• Germany: 3 companies, technical innovation</li>
                    <li>• Strong regulatory and academic environment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketAnalysisChart;
