import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Target, Award, Phone } from "lucide-react";
import MarketAnalysisChart from './MarketAnalysisChart';

const BusinessPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Vision & Mission",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Democratizing Longevity Science
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Making evidence-based health optimization accessible to everyone through personalized coaching and cutting-edge biomarker analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-blue-900">Our Mission</h4>
              <p className="text-blue-800">
                Transform healthcare from reactive treatment to proactive optimization, 
                extending healthy lifespan through personalized, science-based interventions.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3 text-green-900">Our Vision</h4>
              <p className="text-green-800">
                A world where everyone has access to personalized longevity protocols, 
                enabling healthier, longer lives through precision health optimization.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-3">Key Differentiators</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li>• AI-powered personalized recommendations</li>
              <li>• Comprehensive biomarker analysis</li>
              <li>• Evidence-based protocols</li>
              <li>• Continuous optimization tracking</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Market Analysis",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <MarketAnalysisChart />
        </div>
      )
    },
    {
      id: 2,
      title: "Problem & Solution",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <h4 className="text-xl font-semibold mb-4 text-red-900">The Problem</h4>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Healthcare systems focus on disease treatment, not prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Generic health advice ignores individual biomarker variations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Longevity science remains inaccessible to general population</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Lack of personalized optimization protocols</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h4 className="text-xl font-semibold mb-4 text-green-900">Our Solution</h4>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Personalized longevity coaching based on biomarkers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>AI-driven recommendations from latest research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Continuous monitoring and protocol optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Evidence-based interventions for healthspan extension</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-blue-900">Market Opportunity</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">$44.2B</div>
                <div className="text-sm text-blue-800">Global longevity market by 2030</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">15.7%</div>
                <div className="text-sm text-blue-800">Annual growth rate (CAGR)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">400M+</div>
                <div className="text-sm text-blue-800">Potential users in developed markets</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Business Model",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Freemium to Enterprise Strategy</h3>
            <p className="text-slate-600">Tiered access model driving user acquisition and revenue growth</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-gray-900">Free Tier</h4>
                <p className="text-2xl font-bold text-gray-600 mt-2">€0/month</p>
                <p className="text-sm text-gray-500">Gateway to longevity</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-gray-800">Access Includes:</h5>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Basic biomarker reference values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>General health articles & resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Basic health calculators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Community forum access</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-2">Limitations:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• No personalized recommendations</li>
                  <li>• No biomarker analysis</li>
                  <li>• No AI coaching</li>
                  <li>• Limited content access</li>
                </ul>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-blue-900">Premium</h4>
                <p className="text-2xl font-bold text-blue-600 mt-2">€99/month</p>
                <p className="text-sm text-blue-700">Personal optimization</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-blue-800">Everything in Free +</h5>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>AI-powered personalized protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Comprehensive biomarker analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Weekly coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Advanced tracking & analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Supplement recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Lab test interpretations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <div className="text-center mb-4">
                <h4 className="text-xl font-bold text-green-900">Enterprise</h4>
                <p className="text-2xl font-bold text-green-600 mt-2">€299/month</p>
                <p className="text-sm text-green-700">Complete optimization</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-green-800">Everything in Premium +</h5>
                <ul className="text-sm text-green-800 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>1-on-1 expert consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Cutting-edge biomarker testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Concierge health coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Custom protocol development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Direct physician access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>White-label solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* B2B Revenue Streams */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-purple-900 mb-4">B2B Revenue Streams</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-purple-900 mb-2">Corporate Wellness</h5>
                <p className="text-sm text-purple-800 mb-2">€50-200/employee/month</p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• Company-wide health optimization</li>
                  <li>• Executive health programs</li>
                  <li>• Employee wellness dashboards</li>
                  <li>• ROI tracking & reporting</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-purple-900 mb-2">Healthcare Partnerships</h5>
                <p className="text-sm text-purple-800 mb-2">Revenue sharing 20-40%</p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• Clinic integration partnerships</li>
                  <li>• Hospital preventive care programs</li>
                  <li>• Insurance premium reductions</li>
                  <li>• API licensing to health tech</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Strategy */}
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">Freemium Conversion Strategy</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-yellow-800">Free → Premium</div>
                <div className="text-yellow-700">Target: 8-12% conversion rate</div>
              </div>
              <div>
                <div className="font-medium text-yellow-800">Premium → Enterprise</div>
                <div className="text-yellow-700">Target: 15-20% upgrade rate</div>
              </div>
              <div>
                <div className="font-medium text-yellow-800">Average LTV</div>
                <div className="text-yellow-700">€2,000+ per paid user</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Competitive Advantage",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Unique Position</h3>
            <p className="text-slate-600">What sets us apart in the longevity market</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">AI-Powered Personalization</h4>
                <p className="text-sm text-blue-800">
                  Our proprietary algorithms analyze 60+ biomarkers to create truly personalized longevity protocols, 
                  going beyond generic advice to individual optimization.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">Comprehensive Integration</h4>
                <p className="text-sm text-green-800">
                  We integrate nutrition, exercise, supplementation, and lifestyle factors into one cohesive 
                  optimization platform, eliminating the need for multiple apps and services.
                </p>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2">Scientific Rigor</h4>
                <p className="text-sm text-purple-800">
                  Every recommendation is backed by peer-reviewed research, with transparent sourcing 
                  and continuous updates as new studies emerge.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2">German Engineering Excellence</h4>
                <p className="text-sm text-orange-800">
                  Built with German precision and privacy standards, ensuring data security 
                  and algorithm reliability that users can trust.
                </p>
              </div>
              
              <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-400">
                <h4 className="font-semibold text-teal-900 mb-2">Continuous Optimization</h4>
                <p className="text-sm text-teal-800">
                  Our platform learns and adapts recommendations based on user results, 
                  creating a feedback loop for increasingly effective interventions.
                </p>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">Holistic Approach</h4>
                <p className="text-sm text-red-800">
                  Unlike competitors focusing on single aspects (just nutrition or just fitness), 
                  we address all pillars of longevity in an integrated manner.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">Market Positioning</h4>
            <p className="text-sm mb-3">
              We position ourselves as the premium, science-first alternative to generic wellness apps, 
              targeting health-conscious individuals and organizations willing to invest in evidence-based optimization.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="font-semibold">Target Market</div>
                <div>Affluent health optimizers</div>
              </div>
              <div>
                <div className="font-semibold">Price Position</div>
                <div>Premium (top 20%)</div>
              </div>
              <div>
                <div className="font-semibold">Value Proposition</div>
                <div>Personalized longevity</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Financial Projections",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">5-Year Financial Outlook</h3>
            <p className="text-slate-600">Conservative projections starting Q3/2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-900">Revenue Projections</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Q3-Q4 2025</span>
                  <span className="font-bold text-green-600">€125K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Year 1 (2026)</span>
                  <span className="font-bold text-green-600">€750K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Year 2 (2027)</span>
                  <span className="font-bold text-green-600">€2.8M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Year 3 (2028)</span>
                  <span className="font-bold text-green-600">€8.2M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                  <span className="font-medium">Year 4 (2029)</span>
                  <span className="font-bold text-green-700">€18.5M</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-900">User Growth</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Q3-Q4 2025</span>
                    <span className="font-bold">250 users</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">MVP launch, initial beta</div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 1 (2026)</span>
                    <span className="font-bold">1,500 users</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Early adopters, product refinement</div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 2 (2027)</span>
                    <span className="font-bold">7,000 users</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Marketing scale-up, partnerships</div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 3 (2028)</span>
                    <span className="font-bold">22,000 users</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Market expansion, B2B growth</div>
                </div>
                <div className="p-3 bg-blue-100 rounded border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 4 (2029)</span>
                    <span className="font-bold">50,000 users</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">International expansion</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">€30M</div>
              <div className="text-sm text-green-800">Cumulative Revenue</div>
              <div className="text-xs text-gray-600 mt-1">4.5-year total</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">65%</div>
              <div className="text-sm text-blue-800">Gross Margin</div>
              <div className="text-xs text-gray-600 mt-1">Year 4 target</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">€3M</div>
              <div className="text-sm text-purple-800">Funding Needed</div>
              <div className="text-xs text-gray-600 mt-1">Series A target</div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">Key Assumptions</h4>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Average revenue per user (ARPU) of €100/month by Year 2</li>
              <li>• Customer acquisition cost (CAC) decreasing from €180 to €60</li>
              <li>• Customer lifetime value (LTV) increasing to €2,000</li>
              <li>• 12% monthly churn rate improving to 4% by Year 4</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Team & Expertise",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Expert Team & Advisory Board</h3>
            <p className="text-slate-600">Combining scientific expertise with business execution</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Current Team Structure</h4>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-900">Founding Team</h5>
                  <ul className="text-sm text-blue-800 mt-2 space-y-1">
                    <li>• CEO: Business strategy & partnerships</li>
                    <li>• CTO: AI/ML development & platform</li>
                    <li>• CMO: Medical advisory & protocols</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-900">Technical Team (4)</h5>
                  <ul className="text-sm text-green-800 mt-2 space-y-1">
                    <li>• 2 Full-stack developers</li>
                    <li>• 1 Data scientist/ML engineer</li>
                    <li>• 1 UX/UI designer</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-900">Content & Operations (3)</h5>
                  <ul className="text-sm text-purple-800 mt-2 space-y-1">
                    <li>• 1 Scientific content manager</li>
                    <li>• 1 Customer success manager</li>
                    <li>• 1 Marketing specialist</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-blue-900 mb-4">Advisory Board & Expertise</h4>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-900">Medical Advisory</h5>
                  <ul className="text-sm text-orange-800 mt-2 space-y-1">
                    <li>• Longevity medicine physicians</li>
                    <li>• Preventive medicine specialists</li>
                    <li>• Nutritional biochemists</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-teal-900">Technical Advisory</h5>
                  <ul className="text-sm text-teal-800 mt-2 space-y-1">
                    <li>• AI/ML researchers from Max Planck</li>
                    <li>• Healthcare technology veterans</li>
                    <li>• Data privacy & security experts</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-red-900">Business Advisory</h5>
                  <ul className="text-sm text-red-800 mt-2 space-y-1">
                    <li>• Healthcare industry executives</li>
                    <li>• Digital health entrepreneurs</li>
                    <li>• Venture capital partners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">Recruitment Strategy</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium mb-2">Priority Hires (Starting Q3/2025)</h5>
                <ul className="text-sm space-y-1">
                  <li>• Senior Data Scientist (€80-100K)</li>
                  <li>• DevOps Engineer (€70-90K)</li>
                  <li>• Clinical Research Manager (€60-80K)</li>
                  <li>• Business Development Lead (€70-90K)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Talent Sources</h5>
                <ul className="text-sm space-y-1">
                  <li>• German university partnerships</li>
                  <li>• Healthcare technology meetups</li>
                  <li>• International longevity conferences</li>
                  <li>• Competitive recruitment from FAANG</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Call to Action",
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Longevity Revolution</h3>
            <p className="text-slate-600">Partner with us to transform healthcare and extend healthy human lifespan</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">For Investors</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• €3M Series A funding round opening Q1 2026</li>
                  <li>• Target 8x return within 4 years</li>
                  <li>• Growing market with 15.7% CAGR</li>
                  <li>• Experienced team with proven track record</li>
                </ul>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Schedule Investor Meeting
                </Button>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h4 className="text-xl font-semibold text-green-900 mb-3">For Partners</h4>
                <ul className="text-green-800 space-y-2">
                  <li>• Healthcare provider integrations</li>
                  <li>• Corporate wellness partnerships</li>
                  <li>• Laboratory testing collaborations</li>
                  <li>• Research institution alliances</li>
                </ul>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Explore Partnerships
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-xl font-semibold text-purple-900 mb-3">For Talent</h4>
                <ul className="text-purple-800 space-y-2">
                  <li>• Work on cutting-edge longevity science</li>
                  <li>• Competitive compensation + equity</li>
                  <li>• Flexible remote/hybrid work</li>
                  <li>• Make a meaningful impact on human health</li>
                </ul>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                  View Open Positions
                </Button>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <h4 className="text-xl font-semibold text-orange-900 mb-3">For Early Users</h4>
                <ul className="text-orange-800 space-y-2">
                  <li>• Beta access starting Q3/2025</li>
                  <li>• Discounted lifetime membership</li>
                  <li>• Direct input on product development</li>
                  <li>• Community of health optimizers</li>
                </ul>
                <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
                  Join Beta Program
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Ready to Transform Longevity?</h4>
            <p className="text-lg mb-6">
              Contact us today to discuss how we can work together to make healthy longevity accessible to everyone.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                hello@longevitycoach.com
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Schedule a Call
              </Button>
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="businessplan" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Business Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strategic roadmap for democratizing longevity science and building a sustainable health optimization platform
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {slides[currentSlide].icon}
                <CardTitle className="text-2xl text-slate-900">
                  {slides[currentSlide].title}
                </CardTitle>
              </div>
              <div className="text-sm text-slate-500">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 min-h-[600px]">
            {slides[currentSlide].content}
          </CardContent>
          
          <div className="flex items-center justify-between p-6 bg-gray-50 border-t">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? 'bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
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
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BusinessPlan;
