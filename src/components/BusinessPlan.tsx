import React, { memo, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, TrendingUp, Users, BookOpen, Youtube, Mic } from "lucide-react";
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
      { name: 'Oura', share: 25, valuation: 2800 },
      { name: 'Whoop', share: 20, valuation: 3600 },
      { name: 'Fitbit', share: 15, valuation: 2100 },
      { name: 'Apple Health', share: 12, valuation: 0 },
      { name: 'Garmin', share: 10, valuation: 1800 },
      { name: 'Others', share: 18, valuation: 0 }
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
    }
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
                <CardTitle>Competitive Landscape Analysis</CardTitle>
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
                    <h4 className="font-semibold mb-4">Key Competitors Analysis</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-medium">Oura Ring</h5>
                        <p className="text-sm text-slate-600">$2.8B valuation, focus on sleep & recovery</p>
                      </div>
                      <div className="border-l-4 border-emerald-500 pl-4">
                        <h5 className="font-medium">Whoop</h5>
                        <p className="text-sm text-slate-600">$3.6B valuation, subscription-based fitness</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium">Fitbit (Google)</h5>
                        <p className="text-sm text-slate-600">$2.1B acquisition, mass market wearables</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h5 className="font-medium">Apple Health</h5>
                        <p className="text-sm text-slate-600">Integrated ecosystem, comprehensive tracking</p>
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
