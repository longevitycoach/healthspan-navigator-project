
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
      location: "United States",
      funding: "$3B",
      founded: "2021",
      focus: "Cellular reprogramming",
      description: "Backed by Jeff Bezos, staffed by Nobel Prize winners for cellular programming research and anti-aging therapeutics.",
      category: "research",
      rank: 1
    },
    {
      name: "Retro Biosciences",
      location: "San Francisco, CA",
      funding: "$1B",
      founded: "2021",
      focus: "Lifespan extension",
      description: "Cellular rejuvenation and lifespan extension research with significant venture backing.",
      category: "research",
      rank: 2
    },
    {
      name: "BioSplice Therapeutics",
      location: "San Diego, CA",
      funding: "$561.5M",
      founded: "2017",
      focus: "Alternative splicing therapeutics",
      description: "Developing therapeutics based on alternative splicing technology for age-related diseases.",
      category: "clinical",
      rank: 5
    },
    {
      name: "Human Longevity Inc.",
      location: "San Diego, CA",
      funding: "$399.8M",
      founded: "2013",
      focus: "Precision medicine",
      description: "Genomics and precision medicine platform for health optimization and longevity.",
      category: "clinical",
      rank: 6
    },
    {
      name: "ŌURA",
      location: "Finland/US",
      funding: "$200M",
      founded: "2013",
      focus: "Smart wearables",
      description: "Health tracking wearables with advanced biometric monitoring for optimization.",
      category: "consumer",
      rank: 7,
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
      rank: 8
    },
    {
      name: "Unity Biotechnology",
      location: "San Francisco, CA",
      funding: "$176M",
      founded: "2011",
      focus: "Senolytic therapies",
      description: "Pioneer in senolytic drug development for age-related diseases.",
      category: "clinical",
      rank: 9
    },
    {
      name: "Function Health",
      location: "Austin, TX",
      funding: "$106M",
      founded: "2021",
      focus: "Preventive health testing",
      description: "Direct-to-consumer comprehensive health dashboards with expert interpretation.",
      category: "consumer",
      rank: 10,
      url: "https://functionhealth.com"
    },
    // European Leaders
    {
      name: "Timeline",
      location: "Lausanne, Switzerland",
      funding: "$66M",
      founded: "2012",
      focus: "Mitochondrial health",
      description: "Series D funding led by L'Oréal and Nestlé for Mitopure technology advancing longevity applications.",
      category: "consumer",
      rank: 14,
      url: "https://timelinenutrition.com"
    },
    {
      name: "Vandria",
      location: "Basel, Switzerland",
      funding: "$30.7M",
      founded: "2020",
      focus: "Mitophagy inducers",
      description: "Swiss biotech developing mitophagy inducers for cellular rejuvenation therapies.",
      category: "clinical",
      rank: 19
    },
    {
      name: "Epiterna",
      location: "Lausanne, Switzerland",
      funding: "$10M",
      founded: "2022",
      focus: "Drug screening platform",
      description: "University spinoff with accelerated drug evaluation platform for longevity therapeutics.",
      category: "research",
      rank: 27
    },
    {
      name: "Cellvie",
      location: "Zurich, Switzerland",
      funding: "$5.5M",
      founded: "2020",
      focus: "Mitochondrial transplantation",
      description: "Swiss biotech developing mitochondrial transplantation therapy for cellular rejuvenation.",
      category: "clinical",
      rank: 32
    },
    {
      name: "GlycanAge",
      location: "London, UK",
      funding: "$4.7M",
      founded: "2019",
      focus: "Glycan biomarkers",
      description: "Biological age measurement using glycan-based molecular biomarker assessment.",
      category: "clinical",
      rank: 33,
      url: "https://glycanage.com"
    },
    {
      name: "Senisca",
      location: "Exeter, UK",
      funding: "$9.1M",
      founded: "2020",
      focus: "RNA splicing",
      description: "UK biotech focusing on RNA splicing and senotherapeutics for age-related diseases.",
      category: "clinical",
      rank: 28
    },
    {
      name: "Genflow Biosciences",
      location: "London, UK",
      funding: "$8.5M",
      founded: "2019",
      focus: "Gene therapy",
      description: "Public company developing gene therapy approaches for longevity and healthspan extension.",
      category: "clinical",
      rank: 30
    },
    // German Companies
    {
      name: "Liv Longevity Labs",
      location: "Berlin, Germany",
      funding: "Undisclosed",
      founded: "2024",
      focus: "Cellular aging tests",
      description: "Consumer-focused longevity solutions with TruAge cellular aging test and AI-based personalized recommendations.",
      category: "consumer",
      rank: 49
    },
    {
      name: "Orbem",
      location: "Munich, Germany",
      funding: "$32M",
      founded: "2019",
      focus: "AI-powered MRI platform",
      description: "Germany's most technically sophisticated longevity AI company with clinical expertise and advanced AI for medical imaging.",
      category: "clinical"
    },
    {
      name: "Cellbricks",
      location: "Berlin, Germany",
      funding: "Undisclosed",
      founded: "2015",
      focus: "3D bioprinting systems",
      description: "Molecular medicine focused on bio-fabrication technology for artificially manufactured organs.",
      category: "clinical",
      rank: 50
    },
    // Asian Leaders
    {
      name: "Abogen Biosciences",
      location: "Suzhou, China",
      funding: "$700M",
      founded: "2019",
      focus: "Biotechnology therapeutics",
      description: "Chinese biotech with substantial Series C funding for therapeutic development.",
      category: "clinical",
      rank: 4
    },
    {
      name: "Deep Longevity",
      location: "Hong Kong, China",
      funding: "$14M",
      founded: "2020",
      focus: "AI aging clocks",
      description: "AI-driven longevity research with advanced aging clock technology for health optimization.",
      category: "research",
      rank: 23
    },
    {
      name: "Gero",
      location: "Singapore",
      funding: "$40M",
      founded: "2015",
      focus: "AI-driven longevity",
      description: "Singapore-based AI platform for longevity research and biomarker development.",
      category: "research",
      rank: 18
    },
    // Additional Notable Companies
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
      name: "Bioniq",
      location: "London, UK",
      funding: "$20.7M",
      founded: "2019",
      focus: "Personalized supplements",
      description: "Biomarker analysis combined with genetic profiling for customized supplementation.",
      category: "consumer",
      url: "https://bioniq.com"
    }
  ];

  const getFundingSize = (funding: string): number => {
    if (funding.includes('$3B')) return 3000;
    if (funding.includes('$1B')) return 1000;
    if (funding.includes('$700M')) return 700;
    if (funding.includes('$561.5M')) return 561.5;
    if (funding.includes('$399.8M')) return 399.8;
    if (funding.includes('$200M')) return 200;
    if (funding.includes('$198M')) return 198;
    if (funding.includes('$176M')) return 176;
    if (funding.includes('$106M')) return 106;
    if (funding.includes('$66M') || funding.includes('€60M')) return 66;
    if (funding.includes('$45M')) return 45;
    if (funding.includes('$40M')) return 40;
    if (funding.includes('$32M')) return 32;
    if (funding.includes('$30.7M')) return 30.7;
    if (funding.includes('€20.7M')) return 20.7;
    if (funding.includes('€14.1M')) return 14.1;
    if (funding.includes('$14M')) return 14;
    if (funding.includes('$10M')) return 10;
    if (funding.includes('$9.1M')) return 9.1;
    if (funding.includes('$8.5M')) return 8.5;
    if (funding.includes('€5.5M') || funding.includes('$5.5M')) return 5.5;
    if (funding.includes('€4.7M') || funding.includes('$4.7M')) return 4.7;
    if (funding.includes('€4.2M')) return 4.2;
    if (funding.includes('€1.2M')) return 1.2;
    return 2;
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
    const logFunding = Math.log10(fundingSize + 1);
    const baseX = (logFunding - 0.5) * 120; // Improved X scaling
    
    let categoryY = 150; // Default middle position
    if (category === 'clinical') categoryY = 50;
    else if (category === 'consumer') categoryY = 200;  
    else if (category === 'research') categoryY = 350;
    
    const scatter = (index % 5 - 2) * 15; // Better distribution
    
    return {
      x: Math.max(Math.min(baseX + scatter, 480), 20),
      y: categoryY + scatter
    };
  };

  const CompanyBubble = ({ company, region, index }: { company: Company; region: string; index: number }) => {
    const position = getMarketPosition(company.funding, company.category, index);
    const fundingSize = getFundingSize(company.funding);
    const size = Math.max(Math.log10(fundingSize + 1) * 12, 25);
    
    const handleClick = () => {
      if (company.url) {
        window.open(company.url, '_blank', 'noopener,noreferrer');
      }
    };
    
    return (
      <HoverCard>
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
              {company.name.split(' ')[0]}
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
                <span className="text-sm text-blue-600">Click bubble to visit website</span>
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
            with 4 companies. <strong>Germany</strong> demonstrates scientific excellence with 2 companies focusing on 
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
                {/* Improved Y-Axis with horizontal dotted lines */}
                <div className="absolute left-2 top-4 text-sm font-medium text-gray-700 transform -rotate-90 origin-left">
                  Market Focus
                </div>
                
                {/* Horizontal dotted lines for better category separation */}
                <div className="absolute left-0 right-0 top-16 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-0 right-0 top-1/3 border-t border-dashed border-gray-300"></div>
                <div className="absolute left-0 right-0 top-2/3 border-t border-dashed border-gray-300"></div>
                
                <div className="absolute left-8 top-12 text-sm font-medium text-blue-700">Clinical Solutions</div>
                <div className="absolute left-8 top-1/3 text-sm font-medium text-green-700">Consumer Health</div>
                <div className="absolute left-8 bottom-20 text-sm font-medium text-purple-700">Research & Development</div>
                
                {/* Improved X-Axis with better scaling */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
                  Funding Size (Log Scale)
                </div>
                <div className="absolute bottom-6 left-8 text-xs text-gray-600">$1M</div>
                <div className="absolute bottom-6 left-1/4 text-xs text-gray-600">$10M</div>
                <div className="absolute bottom-6 left-1/2 text-xs text-gray-600">$100M</div>
                <div className="absolute bottom-6 right-20 text-xs text-gray-600">$1B+</div>
                
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
                    <li>• Germany: 2 companies, technical innovation</li>
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
