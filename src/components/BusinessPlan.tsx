
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Users, Github, Mail, Heart, Target, TrendingUp, DollarSign } from "lucide-react";

const BusinessPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
      title: "Market Opportunity",
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-6">Growing Market Demand</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">$4.4T</div>
                <div className="text-sm text-slate-600">Global Healthcare Market</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$659B</div>
                <div className="text-sm text-slate-600">Wellness Industry</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">$27B</div>
                <div className="text-sm text-slate-600">Longevity Market by 2030</div>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Key Market Drivers</h4>
            <ul className="space-y-2 text-slate-600">
              <li>• Aging population seeking healthspan optimization</li>
              <li>• Growing interest in preventive healthcare</li>
              <li>• Increased adoption of health tracking devices</li>
              <li>• Rising healthcare costs driving prevention focus</li>
            </ul>
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
              <h4 className="font-semibold text-lg">Core Features</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Biomarker Tracking</div>
                    <div className="text-sm text-slate-600">Comprehensive lab result analysis</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Trend Analysis</div>
                    <div className="text-sm text-slate-600">AI-powered health insights</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Personalized Recommendations</div>
                    <div className="text-sm text-slate-600">Tailored lifestyle guidance</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Differentiators</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="font-medium text-blue-800">Scientific Rigor</div>
                  <div className="text-sm text-blue-600">Evidence-based recommendations</div>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <div className="font-medium text-emerald-800">Holistic Approach</div>
                  <div className="text-sm text-emerald-600">Beyond just tracking</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="font-medium text-purple-800">Community Focus</div>
                  <div className="text-sm text-purple-600">Shared learning platform</div>
                </div>
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
                <CardTitle className="text-blue-600">Freemium Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="font-medium">Free Tier</div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Basic biomarker tracking</li>
                  <li>• Standard reference ranges</li>
                  <li>• Community access</li>
                </ul>
                <div className="font-medium mt-3">Premium Tier ($29/month)</div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Advanced analytics</li>
                  <li>• Personalized recommendations</li>
                  <li>• Expert consultations</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader>
                <CardTitle className="text-emerald-600">Enterprise Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="font-medium">B2B Partnerships</div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Healthcare providers</li>
                  <li>• Corporate wellness</li>
                  <li>• Insurance companies</li>
                </ul>
                <div className="font-medium mt-3">Revenue Streams</div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Licensing fees</li>
                  <li>• Implementation services</li>
                  <li>• Data insights (anonymized)</li>
                </ul>
              </CardContent>
            </Card>
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
              Business Plan
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Building the future of personalized longevity science
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
