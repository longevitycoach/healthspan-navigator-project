
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Company {
  name: string;
  location: string;
  funding: string;
  founded: string;
  focus: string;
  description: string;
  category: 'clinical' | 'consumer' | 'research';
}

const MarketAnalysisChart = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const germanCompanies: Company[] = [
    {
      name: "Orbem",
      location: "Munich",
      funding: "$32M Series A",
      founded: "2019",
      focus: "AI-powered MRI platform",
      description: "Germany's most technically sophisticated longevity AI company with clinical expertise and advanced AI for medical imaging.",
      category: "clinical"
    },
    {
      name: "Cellbricks",
      location: "Germany",
      funding: "Not disclosed",
      founded: "2015",
      focus: "3D bioprinting systems",
      description: "Molecular medicine focused on bio-fabrication technology for artificially manufactured organs.",
      category: "clinical"
    },
    {
      name: "Liv Longevity Labs",
      location: "Berlin",
      funding: "Not disclosed",
      founded: "2024",
      focus: "TruAge cellular aging test",
      description: "Consumer-focused longevity solutions with AI-based personalized recommendations.",
      category: "consumer"
    },
    {
      name: "HealthCaters",
      location: "Berlin",
      funding: "€1.2M",
      founded: "Recent",
      focus: "360° health assessments",
      description: "Preventive healthcare through AI-powered health coaching and medical self-screening.",
      category: "consumer"
    },
    {
      name: "Aware Health",
      location: "Berlin",
      funding: "€14.1M",
      founded: "Recent",
      focus: "Corporate wellness",
      description: "Healthcare accessibility and employee well-being through comprehensive health monitoring.",
      category: "consumer"
    }
  ];

  const internationalCompanies: Company[] = [
    // Nordic
    {
      name: "Neko Health",
      location: "Stockholm, Sweden",
      funding: "€60M Series A",
      founded: "Recent",
      focus: "Sensor-based AI platform",
      description: "Co-founded by Spotify's Daniel Ek, combining biometric monitoring with AI-driven health insights.",
      category: "consumer"
    },
    // Swiss
    {
      name: "Biolytica",
      location: "Zug, Switzerland",
      funding: "€5.3M Seed",
      founded: "Recent",
      focus: "Real-time biosensor technology",
      description: "Continuous monitoring and AI-driven analysis for personalized optimization recommendations.",
      category: "clinical"
    },
    {
      name: "Epiterna",
      location: "Lausanne, Switzerland",
      funding: "Not disclosed",
      founded: "2022",
      focus: "Drug evaluation platform",
      description: "University spinoff with accelerated drug evaluation for longevity therapeutics.",
      category: "research"
    },
    // UK
    {
      name: "Bioniq",
      location: "London, UK",
      funding: "€20.7M",
      founded: "Recent",
      focus: "Personalized supplements",
      description: "Biomarker analysis combined with genetic profiling for customized supplementation.",
      category: "consumer"
    },
    {
      name: "GlycanAge",
      location: "Newcastle, UK",
      funding: "€4.2M",
      founded: "Recent",
      focus: "Glycan analysis",
      description: "Biological age measurement using molecular biomarker assessment.",
      category: "clinical"
    },
    // US Leaders
    {
      name: "Altos Labs",
      location: "United States",
      funding: "$3B",
      founded: "Recent",
      focus: "Cellular rejuvenation",
      description: "Backed by Jeff Bezos, staffed by Nobel Prize winners for cellular programming research.",
      category: "research"
    },
    {
      name: "Function Health",
      location: "United States",
      funding: "$53M Series A",
      founded: "Recent",
      focus: "Biomarker testing",
      description: "Direct-to-consumer comprehensive health dashboards with expert interpretation.",
      category: "consumer"
    },
    {
      name: "InsideTracker",
      location: "United States",
      funding: "Not disclosed",
      founded: "Established",
      focus: "Personalized nutrition",
      description: "Ultra-personalized systems through biomarker analysis, DNA testing, and lifestyle assessment.",
      category: "consumer"
    }
  ];

  const getFundingSize = (funding: string): number => {
    if (funding.includes('$3B')) return 3000;
    if (funding.includes('€60M') || funding.includes('$53M')) return 60;
    if (funding.includes('$32M')) return 32;
    if (funding.includes('€20.7M')) return 20.7;
    if (funding.includes('€14.1M')) return 14.1;
    if (funding.includes('€5.3M')) return 5.3;
    if (funding.includes('€4.2M')) return 4.2;
    if (funding.includes('€1.2M')) return 1.2;
    return 1;
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'clinical': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'consumer': return 'bg-green-100 text-green-800 border-green-200';
      case 'research': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMarketPosition = (funding: string, category: string): { x: number; y: number } => {
    const fundingSize = getFundingSize(funding);
    const baseX = Math.log(fundingSize + 1) * 15;
    const categoryOffset = category === 'clinical' ? 0 : category === 'consumer' ? 100 : 200;
    
    return {
      x: Math.min(baseX + Math.random() * 50, 400),
      y: categoryOffset + Math.random() * 80
    };
  };

  const CompanyBubble = ({ company, region }: { company: Company; region: string }) => {
    const position = getMarketPosition(company.funding, company.category);
    const size = Math.max(Math.log(getFundingSize(company.funding)) * 8, 30);
    
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <div
            className="absolute cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            <div className={`w-full h-full rounded-full border-2 flex items-center justify-center text-xs font-semibold ${getCategoryColor(company.category)}`}>
              {company.name.split(' ')[0]}
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{company.name}</h4>
              <Badge variant="outline" className={getCategoryColor(company.category)}>
                {company.category}
              </Badge>
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Location:</strong> {company.location}</p>
              <p><strong>Founded:</strong> {company.founded}</p>
              <p><strong>Funding:</strong> {company.funding}</p>
              <p><strong>Focus:</strong> {company.focus}</p>
            </div>
            <p className="text-sm">{company.description}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  };

  return (
    <div className="w-full space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Interactive Market Analysis
        </h3>
        <p className="text-slate-600 mb-4">
          Explore the global longevity market landscape by region and company focus
        </p>
        
        <div className="flex justify-center gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Clinical Solutions</Badge>
          <Badge className="bg-green-100 text-green-800 border-green-200">Consumer Health</Badge>
          <Badge className="bg-purple-100 text-purple-800 border-purple-200">Research & Development</Badge>
        </div>
      </div>

      <Tabs defaultValue="german" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="german">German Market</TabsTrigger>
          <TabsTrigger value="european">European Leaders</TabsTrigger>
          <TabsTrigger value="global">Global Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="german" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>German Market Leaders and Emerging Players</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border overflow-hidden">
                <div className="absolute top-4 left-4 text-sm font-medium text-gray-600">
                  Clinical Solutions (Top)
                </div>
                <div className="absolute top-1/2 left-4 text-sm font-medium text-gray-600">
                  Consumer Health (Middle)
                </div>
                <div className="absolute bottom-4 left-4 text-sm font-medium text-gray-600">
                  Funding Size →
                </div>
                
                {germanCompanies.map((company, index) => (
                  <CompanyBubble key={index} company={company} region="german" />
                ))}
              </div>
              
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Technology-Focused Clinical</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Orbem: $32M AI-powered MRI platform</li>
                    <li>• Cellbricks: 3D bioprinting for organs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Consumer Health Optimization</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Aware Health: €14.1M corporate wellness</li>
                    <li>• HealthCaters: €1.2M AI health coaching</li>
                    <li>• Liv Longevity Labs: TruAge testing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="european" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>European Competitive Landscape</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border overflow-hidden">
                {internationalCompanies
                  .filter(company => ['Stockholm', 'Switzerland', 'London', 'Newcastle'].some(city => company.location.includes(city)))
                  .map((company, index) => (
                    <CompanyBubble key={index} company={company} region="european" />
                  ))}
              </div>
              
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Nordic Innovation</h4>
                  <p className="text-sm">Neko Health (€60M) leads with Spotify founder backing</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Swiss Precision</h4>
                  <p className="text-sm">Biolytica & Epiterna focus on biosensors and drug evaluation</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">UK Market Leadership</h4>
                  <p className="text-sm">Bioniq (€20.7M) and GlycanAge lead personalized health</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="global" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-gradient-to-br from-emerald-50 to-yellow-50 rounded-lg border overflow-hidden">
                {[...germanCompanies, ...internationalCompanies].map((company, index) => (
                  <CompanyBubble key={index} company={company} region="global" />
                ))}
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">US Market Dominance</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Altos Labs: $3B (Bezos-backed)</li>
                      <li>• Function Health: $53M Series A</li>
                      <li>• InsideTracker: Personalized nutrition leader</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">German Position</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Strong in clinical AI and bioprinting</li>
                      <li>• Growing consumer health sector</li>
                      <li>• Berlin emerging as longevity hub</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Market Insights</h4>
                  <p className="text-sm">
                    The longevity market shows clear geographic specializations: US leads in funding and research, 
                    Nordic countries excel in consumer platforms, Switzerland focuses on precision medicine, 
                    and Germany develops clinical AI solutions and bioprinting technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketAnalysisChart;
