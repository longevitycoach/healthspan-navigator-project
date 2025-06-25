import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Users, Github, Mail, Heart, Target, TrendingUp, DollarSign, Lightbulb, Shield, Globe } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const BusinessPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Market trend data
  const marketGrowthData = [
    { year: "2020", healthcare: 3.8, wellness: 450, longevity: 8 },
    { year: "2021", healthcare: 4.0, wellness: 480, longevity: 12 },
    { year: "2022", healthcare: 4.2, wellness: 520, longevity: 16 },
    { year: "2023", healthcare: 4.4, wellness: 570, longevity: 20 },
    { year: "2024", healthcare: 4.6, wellness: 620, longevity: 24 },
    { year: "2025", healthcare: 4.8, wellness: 659, longevity: 27 }
  ];

  const demographicTrendsData = [
    { age: "25-34", adoption: 68, growth: 12 },
    { age: "35-44", adoption: 74, growth: 15 },
    { age: "45-54", adoption: 62, growth: 18 },
    { age: "55-64", adoption: 48, growth: 22 },
    { age: "65+", adoption: 32, growth: 28 }
  ];

  const competitiveData = [
    { company: "Apple Health", marketShare: 45, valuation: 3000 },
    { company: "Oura Ring", marketShare: 12, valuation: 2800 },
    { company: "Whoop", marketShare: 8, valuation: 3600 },
    { company: "Fitbit/Google", marketShare: 25, valuation: 2100 },
    { company: "InsideTracker", marketShare: 3, valuation: 300 },
    { company: "Function Health", marketShare: 2, valuation: 800 },
    { company: "Levels Health", marketShare: 1, valuation: 180 },
    { company: "Bioage Labs", marketShare: 1, valuation: 290 },
    { company: "Opportunity Gap", marketShare: 30, valuation: 0 }
  ];

  const directCompetitors = [
    {
      name: "InsideTracker",
      focus: "Biomarker Analysis",
      strengths: "Strong science, personalized recommendations",
      weaknesses: "Expensive, limited AI features",
      marketPosition: "Premium B2C"
    },
    {
      name: "Function Health",
      focus: "Comprehensive Lab Testing",
      strengths: "Extensive biomarker panel, clinical quality",
      weaknesses: "High price point, US-only",
      marketPosition: "Ultra-premium"
    },
    {
      name: "Levels Health",
      focus: "Metabolic Health",
      strengths: "CGM integration, metabolic focus",
      weaknesses: "Narrow focus, limited biomarkers",
      marketPosition: "Specialized B2C"
    },
    {
      name: "WellnessFX",
      focus: "Lab Testing & Coaching",
      strengths: "Health coaching, lab partnerships",
      weaknesses: "Outdated platform, limited AI",
      marketPosition: "Mid-market B2C"
    }
  ];

  const chartConfig = {
    healthcare: {
      label: "Healthcare Market",
      color: "hsl(var(--chart-1))",
    },
    wellness: {
      label: "Wellness Industry",
      color: "hsl(var(--chart-2))",
    },
    longevity: {
      label: "Longevity Market",
      color: "hsl(var(--chart-3))",
    },
    adoption: {
      label: "Current Adoption",
      color: "hsl(var(--chart-4))",
    },
    growth: {
      label: "Growth Rate",
      color: "hsl(var(--chart-5))",
    },
    marketShare: {
      label: "Market Share (%)",
      color: "hsl(var(--chart-1))",
    },
    valuation: {
      label: "Valuation ($M)",
      color: "hsl(var(--chart-2))",
    }
  };

  const slides = [
    {
      title: "Vision & Mission",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Democratizing Longevity Science
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Empowering individuals to optimize their healthspan through data-driven insights and personalized recommendations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Make longevity science accessible to everyone by providing comprehensive health tracking, 
                  trend analysis, and personalized recommendations based on cutting-edge research.
                </p>
              </CardContent>
            </Card>
            <Card className="border-emerald-200">
              <CardHeader>
                <CardTitle className="text-emerald-600">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  A world where everyone has the tools and knowledge to live a longer, healthier life 
                  through preventive care and optimized lifestyle choices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      title: "Market Analysis",
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      content: (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-6">Market Opportunity & Competitive Analysis</h3>
          
          {/* Market Size Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-blue-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$4.4T</div>
                <div className="text-sm text-slate-600 mb-2">Global Healthcare Market</div>
                <div className="text-xs text-slate-500">Growing 5.4% annually</div>
              </CardContent>
            </Card>
            <Card className="text-center border-emerald-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$659B</div>
                <div className="text-sm text-slate-600 mb-2">Wellness Industry</div>
                <div className="text-xs text-slate-500">Expected 7.8% CAGR</div>
              </CardContent>
            </Card>
            <Card className="text-center border-purple-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">$27B</div>
                <div className="text-sm text-slate-600 mb-2">Longevity Market by 2030</div>
                <div className="text-xs text-slate-500">44% compound growth</div>
              </CardContent>
            </Card>
          </div>

          {/* Market Growth Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Market Growth Trajectory (Trillions/Billions USD)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="healthcare"
                      stackId="1"
                      stroke="var(--color-healthcare)"
                      fill="var(--color-healthcare)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="wellness"
                      stackId="2"
                      stroke="var(--color-wellness)"
                      fill="var(--color-wellness)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="longevity"
                      stackId="3"
                      stroke="var(--color-longevity)"
                      fill="var(--color-longevity)"
                      fillOpacity={0.8}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Competitive Landscape with Real Companies */}
          <Card>
            <CardHeader>
              <CardTitle>Competitive Landscape - Market Share & Valuations</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={competitiveData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="company" type="category" width={120} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="marketShare" fill="var(--color-marketShare)" />
                    <Bar dataKey="valuation" fill="var(--color-valuation)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Direct Competitors Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Direct Competitors in Longevity Space</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {directCompetitors.map((competitor, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-lg">{competitor.name}</h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{competitor.marketPosition}</span>
                    </div>
                    <div className="text-sm text-slate-600">
                      <strong>Focus:</strong> {competitor.focus}
                    </div>
                    <div className="text-sm">
                      <span className="text-green-600">Strengths:</span> {competitor.strengths}
                    </div>
                    <div className="text-sm">
                      <span className="text-red-600">Weaknesses:</span> {competitor.weaknesses}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Demographics & Market Drivers */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Target Demographics Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={demographicTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="adoption" fill="var(--color-adoption)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-800">Market Drivers</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Aging global population (2.1B people 60+ by 2050)</li>
                  <li>• Rising healthcare costs driving prevention focus</li>
                  <li>• Increased adoption of wearable health devices</li>
                  <li>• Growing awareness of personalized medicine</li>
                  <li>• COVID-19 accelerated health consciousness</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-800">Our Competitive Advantage</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• <strong>30% market opportunity gap</strong> in personalized longevity</li>
                  <li>• Focus on actionable insights vs. just tracking</li>
                  <li>• European market entry with GDPR compliance</li>
                  <li>• Scientific rigor with peer-reviewed sources</li>
                  <li>• Community-driven approach to health optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Product Strategy",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">Comprehensive Health Platform</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Core Platform Features</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Biomarker Tracking</div>
                    <div className="text-sm text-slate-600">Comprehensive lab result analysis with trends</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">AI-Powered Insights</div>
                    <div className="text-sm text-slate-600">Machine learning trend analysis and predictions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Personalized Recommendations</div>
                    <div className="text-sm text-slate-600">Tailored lifestyle and supplement guidance</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Expert Network</div>
                    <div className="text-sm text-slate-600">Access to longevity specialists and coaches</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Competitive Advantages</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <div className="font-medium text-blue-800">Scientific Rigor</div>
                  <div className="text-sm text-blue-600">Evidence-based recommendations from peer-reviewed research</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                  <div className="font-medium text-emerald-800">Holistic Approach</div>
                  <div className="text-sm text-emerald-600">Beyond tracking - actionable lifestyle optimization</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <div className="font-medium text-purple-800">Community Driven</div>
                  <div className="text-sm text-purple-600">Peer learning and shared success stories</div>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                  <div className="font-medium text-pink-800">Data Privacy</div>
                  <div className="text-sm text-pink-600">User-controlled data with transparent policies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technology & Innovation",
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">Technical Architecture & Innovation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-600">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">Frontend</div>
                  <div className="text-sm text-slate-600">React, TypeScript, Tailwind CSS</div>
                </div>
                <div>
                  <div className="font-medium">Backend</div>
                  <div className="text-sm text-slate-600">Supabase, PostgreSQL, Edge Functions</div>
                </div>
                <div>
                  <div className="font-medium">AI/ML</div>
                  <div className="text-sm text-slate-600">TensorFlow, Python, ML pipelines</div>
                </div>
                <div>
                  <div className="font-medium">Integrations</div>
                  <div className="text-sm text-slate-600">Lab APIs, Wearable devices, Health platforms</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="text-emerald-600">Innovation Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium">Predictive Analytics</div>
                  <div className="text-sm text-slate-600">AI models predicting health trends</div>
                </div>
                <div>
                  <div className="font-medium">Personalization Engine</div>
                  <div className="text-sm text-slate-600">Individual optimization algorithms</div>
                </div>
                <div>
                  <div className="font-medium">Real-time Monitoring</div>
                  <div className="text-sm text-slate-600">Continuous biomarker tracking</div>
                </div>
                <div>
                  <div className="font-medium">Research Platform</div>
                  <div className="text-sm text-slate-600">Contribute to longevity science</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-yellow-800">Development Roadmap</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <div className="font-medium text-sm text-yellow-700">Phase 1 (Q1-Q2 2024)</div>
                <ul className="text-xs text-slate-600 mt-1 space-y-1">
                  <li>• MVP launch with core tracking</li>
                  <li>• Basic AI recommendations</li>
                  <li>• Community features</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-sm text-yellow-700">Phase 2 (Q3-Q4 2024)</div>
                <ul className="text-xs text-slate-600 mt-1 space-y-1">
                  <li>• Advanced analytics</li>
                  <li>• Expert consultations</li>
                  <li>• Mobile app launch</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-sm text-yellow-700">Phase 3 (2025)</div>
                <ul className="text-xs text-slate-600 mt-1 space-y-1">
                  <li>• B2B partnerships</li>
                  <li>• Research collaborations</li>
                  <li>• International expansion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Revenue Model",
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">Sustainable Business Model</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-blue-600">Consumer Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-green-600">Free Tier</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Basic biomarker tracking</li>
                    <li>• Standard reference ranges</li>
                    <li>• Community access</li>
                    <li>• Educational content</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-600">Premium ($29/month)</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Advanced AI analytics</li>
                    <li>• Personalized recommendations</li>
                    <li>• Trend predictions</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-purple-600">Pro ($99/month)</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Expert consultations</li>
                    <li>• Custom protocols</li>
                    <li>• Lab ordering integration</li>
                    <li>• Research participation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="text-emerald-600">B2B Revenue Streams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-emerald-700">Enterprise Solutions</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Corporate wellness programs</li>
                    <li>• Healthcare provider licensing</li>
                    <li>• Insurance partnerships</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Data & Research</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Anonymized health insights</li>
                    <li>• Research collaborations</li>
                    <li>• Pharmaceutical partnerships</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Platform Services</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• White-label solutions</li>
                    <li>• API access licensing</li>
                    <li>• Custom integrations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-green-800">Financial Projections</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">Year 1</div>
                <div className="text-sm text-slate-600">$500K ARR</div>
                <div className="text-xs text-slate-500">1K+ users</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">Year 2</div>
                <div className="text-sm text-slate-600">$2.5M ARR</div>
                <div className="text-xs text-slate-500">10K+ users</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">Year 3</div>
                <div className="text-sm text-slate-600">$8M ARR</div>
                <div className="text-xs text-slate-500">50K+ users</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-emerald-600">Year 5</div>
                <div className="text-sm text-slate-600">$25M ARR</div>
                <div className="text-xs text-slate-500">200K+ users</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Risk Management",
      icon: <Shield className="w-8 h-8 text-red-600" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">Risk Assessment & Mitigation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-red-700">Key Risks</h4>
              <div className="space-y-3">
                <Card className="border-l-4 border-l-red-400 bg-red-50">
                  <CardContent className="p-4">
                    <div className="font-medium text-red-800">Regulatory Changes</div>
                    <div className="text-sm text-red-600 mt-1">
                      Healthcare regulations could impact operations
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange-400 bg-orange-50">
                  <CardContent className="p-4">
                    <div className="font-medium text-orange-800">Data Privacy</div>
                    <div className="text-sm text-orange-600 mt-1">
                      Strict requirements for health data handling
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-yellow-400 bg-yellow-50">
                  <CardContent className="p-4">
                    <div className="font-medium text-yellow-800">Competition</div>
                    <div className="text-sm text-yellow-600 mt-1">
                      Large tech companies entering the space
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-green-700">Mitigation Strategies</h4>
              <div className="space-y-3">
                <Card className="border-l-4 border-l-green-400 bg-green-50">
                  <CardContent className="p-4">
                    <div className="font-medium text-green-800">Compliance First</div>
                    <div className="text-sm text-green-600 mt-1">
                      Built-in HIPAA, GDPR compliance from day one
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-400 bg-blue-50">
                  <CardContent className="p-4">
                    <div className="font-medium text-blue-800">Strategic Partnerships</div>
                    <div className="text-sm text-blue-600 mt-1">
                      Healthcare institutions and research organizations
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-400 bg-purple-50">
                  <CardContent className="p-4">
                    <div className="font-medium text-purple-800">Innovation Focus</div>
                    <div className="text-sm text-purple-600 mt-1">
                      Continuous R&D and feature differentiation
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Risk Monitoring Framework</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-slate-700">Monthly Reviews</div>
                <div className="text-slate-600">Regulatory landscape monitoring</div>
              </div>
              <div>
                <div className="font-medium text-slate-700">Quarterly Assessments</div>
                <div className="text-slate-600">Competitive analysis and positioning</div>
              </div>
              <div>
                <div className="font-medium text-slate-700">Annual Audits</div>
                <div className="text-slate-600">Security and compliance reviews</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Global Expansion",
      icon: <Globe className="w-8 h-8 text-indigo-600" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">International Growth Strategy</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-indigo-600">
              <CardHeader>
                <CardTitle className="text-indigo-600">Market Expansion Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-indigo-700">Phase 1: DACH Region</div>
                  <div className="text-sm text-slate-600">Germany, Austria, Switzerland</div>
                  <div className="text-xs text-slate-500 mt-1">Strong health consciousness, regulatory alignment</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Phase 2: EU Expansion</div>
                  <div className="text-sm text-slate-600">Netherlands, Nordics, UK</div>
                  <div className="text-xs text-slate-500 mt-1">High digital adoption, preventive care focus</div>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Phase 3: Global Markets</div>
                  <div className="text-sm text-slate-600">US, Canada, Australia, Japan</div>
                  <div className="text-xs text-slate-500 mt-1">Large addressable markets, premium positioning</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="text-emerald-600">Localization Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-emerald-700">Cultural Adaptation</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Local health practices integration</li>
                    <li>• Regional dietary recommendations</li>
                    <li>• Cultural wellness approaches</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Regulatory Compliance</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Local data protection laws</li>
                    <li>• Healthcare regulations</li>
                    <li>• Medical device certifications</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Partnership Network</div>
                  <ul className="text-sm text-slate-600 space-y-1 mt-1">
                    <li>• Local healthcare providers</li>
                    <li>• Regional lab networks</li>
                    <li>• Distribution partnerships</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3 text-indigo-800">Market Entry Timeline</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">DACH Market Entry</span>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">Q2 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">EU Regulatory Approval</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Q4 2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">US Market Research</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Q1 2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Global Platform Launch</span>
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Q3 2025</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="business-plan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Comprehensive Business Plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building the future of personalized longevity science through strategic planning and innovation
          </p>
        </div>

        {/* Interactive Presentation */}
        <Card className="mb-12 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {slides[currentSlide].icon}
                <CardTitle className="text-xl">{slides[currentSlide].title}</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevSlide}
                  className="text-white hover:bg-white/20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm px-3 py-1 bg-white/20 rounded-full">
                  {currentSlide + 1} / {slides.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextSlide}
                  className="text-white hover:bg-white/20"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {slides[currentSlide].content}
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {slides.map((slide, index) => (
            <Button
              key={index}
              variant={currentSlide === index ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentSlide(index)}
              className="text-xs"
            >
              {slide.title}
            </Button>
          ))}
        </div>

        {/* Call for Contributors */}
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <CardTitle className="text-2xl mb-2">Join Our Mission</CardTitle>
            <p className="text-slate-600">
              We're looking for passionate contributors to help build the future of longevity science
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="developers" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="developers">Developers</TabsTrigger>
                <TabsTrigger value="researchers">Researchers</TabsTrigger>
                <TabsTrigger value="designers">Designers</TabsTrigger>
                <TabsTrigger value="advisors">Advisors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="developers" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Software Developers</h3>
                  <p className="text-slate-600">
                    Help us build a robust, scalable platform using React, TypeScript, and modern web technologies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Frontend Developers</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• React/TypeScript expertise</li>
                        <li>• UI/UX implementation</li>
                        <li>• Data visualization</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Backend Developers</h4>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>• API development</li>
                        <li>• Database optimization</li>
                        <li>• Security implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="researchers" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Health & Longevity Researchers</h3>
                  <p className="text-slate-600">
                    Contribute your expertise in longevity science, biomarkers, and health optimization.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">We're looking for:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Longevity researchers and scientists</li>
                      <li>• Healthcare professionals</li>
                      <li>• Nutritionists and lifestyle coaches</li>
                      <li>• Data scientists with health focus</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="designers" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">UX/UI Designers</h3>
                  <p className="text-slate-600">
                    Help create intuitive, beautiful interfaces that make complex health data accessible.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Design Opportunities:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Health dashboard design</li>
                      <li>• Data visualization concepts</li>
                      <li>• Mobile app interface</li>
                      <li>• Brand and marketing materials</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="advisors" className="mt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Strategic Advisors</h3>
                  <p className="text-slate-600">
                    Share your business expertise to help shape our strategy and growth.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Advisory Roles:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Healthcare industry experts</li>
                      <li>• Technology and startup advisors</li>
                      <li>• Regulatory and compliance specialists</li>
                      <li>• Business development leaders</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 text-center space-y-4">
              <p className="text-slate-600">
                Ready to contribute to the future of personalized health?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BusinessPlan;
