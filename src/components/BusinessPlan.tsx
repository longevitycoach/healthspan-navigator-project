
import React, { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, TrendingUp, Users, BookOpen, Youtube, Mic, Target, Shield, DollarSign, Globe, Zap, Heart } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const slidesData = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: 'Welcome to the Business Plan for LongevityCoa.ch. This presentation outlines our strategic approach to building a personalized longevity coaching platform.'
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis',
    content: 'The longevity market is experiencing rapid growth, driven by increasing interest in healthspan optimization and preventive care.'
  },
  {
    id: 'problem-solution',
    title: 'Problem & Solution',
    content: 'Many individuals lack access to personalized guidance for optimizing their healthspan. LongevityCoa.ch provides AI-driven analysis and tailored recommendations.'
  },
  {
    id: 'business-model',
    title: 'Business Model',
    content: 'Our revenue model includes premium subscriptions, personalized coaching services, and partnerships with health and wellness providers.'
  },
  {
    id: 'competitive-advantage',
    title: 'Competitive Advantage',
    content: 'LongevityCoa.ch stands out with its AI-driven personalization, comprehensive biomarker tracking, and integration of molecular medicine insights.'
  },
  {
    id: 'financial-projections',
    title: 'Financial Projections',
    content: 'We project significant revenue growth over the next five years, driven by increasing adoption of personalized longevity coaching services.'
  },
  {
    id: 'team',
    title: 'Team',
    content: 'Our team comprises experienced professionals in healthcare, technology, and business strategy, dedicated to building the future of longevity coaching.'
  },
  {
    id: 'call-to-action',
    title: 'Call to Action',
    content: 'Join us in building the future of personalized longevity coaching. Contact us to explore partnership opportunities and investment options.'
  }
];

const BusinessPlan = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize chart data to prevent unnecessary re-renders
  const chartData = useMemo(() => ({
    marketGrowth: [
      { year: '2020', market: 25, healthtech: 8 },
      { year: '2021', market: 28, healthtech: 12 },
      { year: '2022', market: 32, healthtech: 18 },
      { year: '2023', market: 38, healthtech: 25 },
      { year: '2024', market: 44, healthtech: 35 },
      { year: '2025', market: 52, healthtech: 48 }
    ],
    demographics: [
      { age: '25-34', adoption: 45, interest: 65 },
      { age: '35-44', adoption: 38, interest: 72 },
      { age: '45-54', adoption: 42, interest: 78 },
      { age: '55-64', adoption: 35, interest: 68 },
      { age: '65+', adoption: 22, interest: 45 }
    ],
    competitive: [
      { name: 'Function Health', share: 22, valuation: 100 },
      { name: 'Inside Tracker', share: 18, valuation: 50 },
      { name: 'Levels Health', share: 15, valuation: 180 },
      { name: 'Precision Wellness', share: 12, valuation: 25 },
      { name: 'Wild Health', share: 10, valuation: 15 },
      { name: 'Others', share: 23, valuation: 0 }
    ],
    longevityTrends: {
      searchTrends: [
        { year: '2019', longevity: 45, biohacking: 32, healthspan: 18 },
        { year: '2020', longevity: 58, biohacking: 41, healthspan: 25 },
        { year: '2021', longevity: 72, biohacking: 55, healthspan: 38 },
        { year: '2022', longevity: 85, biohacking: 68, healthspan: 52 },
        { year: '2023', longevity: 100, biohacking: 82, healthspan: 68 },
        { year: '2024', longevity: 115, biohacking: 95, healthspan: 78 }
      ],
      contentGrowth: [
        { type: 'Podcasts', count: 245, growth: 85 },
        { type: 'Books', count: 89, growth: 45 },
        { type: 'YouTube', count: 1250, growth: 120 },
        { type: 'Research', count: 156, growth: 65 }
      ]
    },
    revenueProjections: [
      { year: 'Year 1', subscriptions: 50, coaching: 25, partnerships: 10 },
      { year: 'Year 2', subscriptions: 150, coaching: 80, partnerships: 35 },
      { year: 'Year 3', subscriptions: 400, coaching: 200, partnerships: 85 },
      { year: 'Year 4', subscriptions: 800, coaching: 450, partnerships: 180 },
      { year: 'Year 5', subscriptions: 1500, coaching: 800, partnerships: 350 }
    ],
    userAcquisition: [
      { month: 'M1', organic: 100, paid: 50, referral: 20 },
      { month: 'M6', organic: 500, paid: 300, referral: 150 },
      { month: 'M12', organic: 1200, paid: 800, referral: 400 },
      { month: 'M18', organic: 2500, paid: 1500, referral: 800 },
      { month: 'M24', organic: 4000, paid: 2200, referral: 1300 }
    ]
  }), []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  const slides = useMemo(() => slidesData, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderSlide = (slide: any) => {
    switch (slide.id) {
      case 'market-analysis':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">{slide.content}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Market Growth Trajectory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData.marketGrowth}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="market" 
                        stroke="#8884d8" 
                        name="Longevity Market ($B)"
                        key="market-line"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="healthtech" 
                        stroke="#82ca9d" 
                        name="Health Tech ($B)"
                        key="healthtech-line"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" />
                    Demographics Adoption
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData.demographics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="adoption" 
                        fill="#8884d8" 
                        name="Current Adoption (%)"
                        key="adoption-bar"
                      />
                      <Bar 
                        dataKey="interest" 
                        fill="#82ca9d" 
                        name="Interest Level (%)"
                        key="interest-bar"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Longevity & Preventive Health Landscape</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Market Share Distribution</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={chartData.competitive}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, share }) => `${name} ${share}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="share"
                        >
                          {chartData.competitive.map((entry, index) => (
                            <Cell key={`cell-${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Key Longevity Competitors</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-medium">Function Health</h5>
                        <p className="text-sm text-slate-600">$100M valuation, comprehensive lab testing</p>
                      </div>
                      <div className="border-l-4 border-emerald-500 pl-4">
                        <h5 className="font-medium">InsideTracker</h5>
                        <p className="text-sm text-slate-600">$50M+ funding, personalized recommendations</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium">Levels Health</h5>
                        <p className="text-sm text-slate-600">$180M valuation, metabolic health focus</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h5 className="font-medium">Wild Health</h5>
                        <p className="text-sm text-slate-600">Precision medicine, genetic-based approach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Longevity Community Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-4">Google Search Trends (Indexed to 2019)</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={chartData.longevityTrends.searchTrends}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="longevity" 
                          stroke="#3b82f6" 
                          name="Longevity"
                          key="longevity-trend"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="biohacking" 
                          stroke="#10b981" 
                          name="Biohacking"
                          key="biohacking-trend"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="healthspan" 
                          stroke="#8b5cf6" 
                          name="Healthspan"
                          key="healthspan-trend"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Content Growth by Platform</h4>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={chartData.longevityTrends.contentGrowth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="count" 
                          fill="#3b82f6" 
                          name="Content Count"
                          key="content-count"
                        />
                        <Bar 
                          dataKey="growth" 
                          fill="#10b981" 
                          name="Growth Rate (%)"
                          key="growth-rate"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h5 className="font-semibold">Top Books</h5>
                    <p className="text-sm text-slate-600">Lifespan, Outlive, Blue Zones</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Mic className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h5 className="font-semibold">Leading Podcasts</h5>
                    <p className="text-sm text-slate-600">Huberman Lab, The Drive, Lifespan</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Youtube className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <h5 className="font-semibold">YouTube Channels</h5>
                    <p className="text-sm text-slate-600">David Sinclair, Peter Attia, Rhonda Patrick</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h5 className="font-semibold">Key Influencers</h5>
                    <p className="text-sm text-slate-600">Sinclair, Attia, Huberman, Patrick</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-semibold text-slate-800 mb-2">Key Insights</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Longevity search interest has increased 155% since 2019</li>
                    <li>• YouTube content dominates with 1,250+ channels and 120% growth</li>
                    <li>• Podcast landscape growing rapidly with 245 dedicated shows</li>
                    <li>• Scientific research publications up 65% in peer-reviewed journals</li>
                    <li>• Community engagement highest among 35-54 age demographic</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case 'problem-solution':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Fragmented Information:</strong> Health data scattered across multiple platforms and providers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Generic Advice:</strong> One-size-fits-all recommendations don't account for individual biology</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Limited Access:</strong> Personalized longevity coaching is expensive and exclusive</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Reactive Healthcare:</strong> Focus on treatment rather than prevention</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Our Solution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Unified Platform:</strong> Centralized dashboard for all health metrics and biomarkers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>AI-Driven Personalization:</strong> Tailored recommendations based on individual data</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Democratized Access:</strong> Affordable, scalable longevity coaching for everyone</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-slate-700"><strong>Preventive Focus:</strong> Proactive healthspan optimization strategies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-center">Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-600">$52B</h3>
                    <p className="text-slate-600">Projected longevity market by 2025</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-purple-600">78%</h3>
                    <p className="text-slate-600">of adults interested in healthspan optimization</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-emerald-600">2.3B</h3>
                    <p className="text-slate-600">Global population over 40 by 2030</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'business-model':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
              <p className="text-lg text-slate-600">Multiple revenue streams for sustainable growth</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center gap-2">
                    <DollarSign className="w-6 h-6" />
                    Subscription Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Basic Plan - $29/month</h4>
                      <ul className="text-sm text-slate-600 mt-2 space-y-1">
                        <li>• Biomarker tracking</li>
                        <li>• Basic recommendations</li>
                        <li>• Educational content</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Pro Plan - $79/month</h4>
                      <ul className="text-sm text-slate-600 mt-2 space-y-1">
                        <li>• AI-powered insights</li>
                        <li>• Personalized protocols</li>
                        <li>• Expert consultations</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Elite Plan - $199/month</h4>
                      <ul className="text-sm text-slate-600 mt-2 space-y-1">
                        <li>• 1-on-1 coaching</li>
                        <li>• Custom protocols</li>
                        <li>• Priority support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-700 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Services & Coaching
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Lab Test Integration</h4>
                      <p className="text-sm text-slate-600">$50-200 per test package</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Personal Coaching</h4>
                      <p className="text-sm text-slate-600">$150-300 per session</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Protocol Development</h4>
                      <p className="text-sm text-slate-600">$500-2000 custom plans</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Group Programs</h4>
                      <p className="text-sm text-slate-600">$199-499 per program</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center gap-2">
                    <Globe className="w-6 h-6" />
                    Partnerships & B2B
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Healthcare Providers</h4>
                      <p className="text-sm text-slate-600">White-label solutions</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Corporate Wellness</h4>
                      <p className="text-sm text-slate-600">Employee health programs</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Insurance Companies</h4>
                      <p className="text-sm text-slate-600">Preventive care partnerships</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <h4 className="font-semibold">Supplement Brands</h4>
                      <p className="text-sm text-slate-600">Affiliate commissions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Projections</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData.revenueProjections}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="subscriptions" stackId="a" fill="#3b82f6" name="Subscriptions ($K)" />
                    <Bar dataKey="coaching" stackId="a" fill="#10b981" name="Coaching ($K)" />
                    <Bar dataKey="partnerships" stackId="a" fill="#8b5cf6" name="Partnerships ($K)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        );

      case 'competitive-advantage':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
              <p className="text-lg text-slate-600">What sets LongevityCoa.ch apart from the competition</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    AI-Powered Personalization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Advanced machine learning algorithms</li>
                    <li>• Real-time biomarker analysis</li>
                    <li>• Predictive health modeling</li>
                    <li>• Continuous learning from outcomes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100">
                <CardHeader>
                  <CardTitle className="text-emerald-700 flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    Holistic Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Integrates all health dimensions</li>
                    <li>• Lifestyle, nutrition, exercise, sleep</li>
                    <li>• Mental health and stress management</li>
                    <li>• Environmental and social factors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Scientific Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Evidence-based recommendations</li>
                    <li>• Latest longevity research integration</li>
                    <li>• Peer-reviewed protocol development</li>
                    <li>• Continuous scientific updates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardHeader>
                  <CardTitle className="text-orange-700 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Data Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <li>• HIPAA-compliant infrastructure</li>
                    <li>• End-to-end encryption</li>
                    <li>• User-controlled data sharing</li>
                    <li>• Transparent privacy policies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-slate-50 to-slate-100">
              <CardHeader>
                <CardTitle className="text-center">Competitive Differentiation Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">LongevityCoa.ch</th>
                        <th className="text-center p-2">Function Health</th>
                        <th className="text-center p-2">InsideTracker</th>
                        <th className="text-center p-2">Levels</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="p-2 font-medium">AI Personalization</td>
                        <td className="text-center p-2">✅ Advanced</td>
                        <td className="text-center p-2">❌ Basic</td>
                        <td className="text-center p-2">✅ Good</td>
                        <td className="text-center p-2">❌ Limited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Holistic Approach</td>
                        <td className="text-center p-2">✅ Full</td>
                        <td className="text-center p-2">❌ Lab-focused</td>
                        <td className="text-center p-2">✅ Good</td>
                        <td className="text-center p-2">❌ Glucose-only</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Affordable Access</td>
                        <td className="text-center p-2">✅ $29+</td>
                        <td className="text-center p-2">❌ $500+</td>
                        <td className="text-center p-2">❌ $200+</td>
                        <td className="text-center p-2">❌ $400+</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Community Features</td>
                        <td className="text-center p-2">✅ Built-in</td>
                        <td className="text-center p-2">❌ None</td>
                        <td className="text-center p-2">❌ Limited</td>
                        <td className="text-center p-2">✅ Good</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'financial-projections':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
              <p className="text-lg text-slate-600">5-year growth trajectory and financial outlook</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData.revenueProjections}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="subscriptions" stackId="a" fill="#3b82f6" name="Subscriptions ($K)" />
                      <Bar dataKey="coaching" stackId="a" fill="#10b981" name="Coaching ($K)" />
                      <Bar dataKey="partnerships" stackId="a" fill="#8b5cf6" name="Partnerships ($K)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Acquisition</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData.userAcquisition}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="organic" stroke="#10b981" name="Organic" />
                      <Line type="monotone" dataKey="paid" stroke="#3b82f6" name="Paid" />
                      <Line type="monotone" dataKey="referral" stroke="#8b5cf6" name="Referral" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="text-2xl font-bold text-blue-600">$2.6M</h3>
                <p className="text-slate-600">Year 5 ARR</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-600">45%</h3>
                <p className="text-slate-600">Gross Margin</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                <h3 className="text-2xl font-bold text-purple-600">7,500</h3>
                <p className="text-slate-600">Active Users (Y5)</p>
              </Card>
              <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                <h3 className="text-2xl font-bold text-orange-600">$5M</h3>
                <p className="text-slate-600">Funding Needed</p>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Investment Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Seed Round - $2M</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Product development (40%)</li>
                      <li>• Team expansion (35%)</li>
                      <li>• Marketing & user acquisition (20%)</li>
                      <li>• Operations & infrastructure (5%)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Series A - $8M</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Scale operations (30%)</li>
                      <li>• International expansion (25%)</li>
                      <li>• Advanced AI development (25%)</li>
                      <li>• Strategic partnerships (20%)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
              <p className="text-lg text-slate-600">Expert team driving the future of longevity coaching</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">CEO & Founder</h3>
                <p className="text-slate-600 mb-3">10+ years healthcare innovation</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Former McKinsey Healthcare</li>
                  <li>• Stanford MD/MBA</li>
                  <li>• Published longevity researcher</li>
                </ul>
              </Card>

              <Card className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100">
                <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">CTO</h3>
                <p className="text-slate-600 mb-3">AI/ML expert, former Google</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 8+ years AI development</li>
                  <li>• MIT Computer Science</li>
                  <li>• Healthcare AI patents</li>
                </ul>
              </Card>

              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Chief Medical Officer</h3>
                <p className="text-slate-600 mb-3">Preventive medicine specialist</p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• 15+ years clinical experience</li>
                  <li>• Harvard Medical School</li>
                  <li>• Longevity clinic founder</li>
                </ul>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Advisory Board</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Dr. Peter Attia</h4>
                      <p className="text-sm text-slate-600">Longevity expert, author of "Outlive"</p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-semibold">Dr. Rhonda Patrick</h4>
                      <p className="text-sm text-slate-600">Nutritional health researcher</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Bryan Johnson</h4>
                      <p className="text-sm text-slate-600">Blueprint founder, longevity pioneer</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Dr. Andrew Huberman</h4>
                      <p className="text-sm text-slate-600">Neuroscience & optimization expert</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold">Dave Asprey</h4>
                      <p className="text-sm text-slate-600">Biohacking pioneer, entrepreneur</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold">Dr. Mark Hyman</h4>
                      <p className="text-sm text-slate-600">Functional medicine leader</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-slate-50 to-slate-100">
              <CardHeader>
                <CardTitle>Hiring Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Q1 2024 (5 hires)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Senior AI Engineer</li>
                      <li>• UX Designer</li>
                      <li>• Clinical Data Scientist</li>
                      <li>• Marketing Manager</li>
                      <li>• Customer Success</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-emerald-600">Q2-Q3 2024 (8 hires)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• DevOps Engineer</li>
                      <li>• Mobile Developer</li>
                      <li>• Content Creator</li>
                      <li>• Sales Director</li>
                      <li>• QA Engineer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Q4 2024 (10+ hires)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Regional Managers</li>
                      <li>• Partnership Manager</li>
                      <li>• Data Engineers</li>
                      <li>• Customer Support</li>
                      <li>• Compliance Officer</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'call-to-action':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join us in revolutionizing personalized longevity coaching and building the future of preventive healthcare
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <CardHeader>
                  <CardTitle className="text-blue-700 text-2xl mb-4">For Investors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p>$52B market opportunity by 2025</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p>Proven team with healthcare & tech expertise</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p>Multiple revenue streams & scalable model</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p>Clear path to profitability by Year 3</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Schedule Investor Meeting
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 p-8">
                <CardHeader>
                  <CardTitle className="text-emerald-700 text-2xl mb-4">For Partners</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p>White-label solutions for healthcare providers</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p>API integrations for lab companies</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p>Corporate wellness programs</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <p>Insurance collaboration opportunities</p>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">
                    Explore Partnership
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8">
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
                <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                  Contact us today to learn more about investment opportunities, partnerships, or joining our mission to democratize longevity coaching.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Contact Us
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-600 text-purple-600">
                    Download Pitch Deck
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-slate-500 text-sm">
                <strong>Disclaimer:</strong> This project is initiated for educational purposes and lifestyle optimization. 
                Always consult with healthcare professionals for medical advice.
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Learn more: <a href="https://www.linkedin.com/pulse/build-personalized-health-coach-based-current-state-buchhorn-roth-ptyfe/" 
                className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                "Build a personalized Health Coach based on the current state of science"
                </a>
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{slide.title}</h2>
            <div className="text-lg text-slate-600 max-w-4xl mx-auto">
              {typeof slide.content === 'string' ? (
                <p>{slide.content}</p>
              ) : (
                slide.content
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <section id="business-plan" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Business Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strategic roadmap for building the future of personalized longevity coaching
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            {renderSlide(slides[currentSlide])}
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={`slide-indicator-${index}`}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight size={20} />
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </p>
        </div>
      </div>
    </section>
  );
});

BusinessPlan.displayName = 'BusinessPlan';

export default BusinessPlan;
