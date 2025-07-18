import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Target, Award, Phone, 
         Lightbulb, Shield, Zap, Globe, Brain, Heart, Star, CheckCircle, AlertCircle, 
         Trophy, Rocket, BarChart3, PieChart, Cpu, Database, Lock, Microscope } from "lucide-react";
import MarketAnalysisChart from './MarketAnalysisChart';
const BusinessPlan = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const slides = [{
    id: 0,
    title: "Vision & Mission",
    icon: <Target className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              Democratizing Longevity Science
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Mission Symbol */}
            <div className="group bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-blue-900">Mission</h4>
              </div>
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">
                  Transform healthcare from reactive treatment to proactive optimization, extending healthy lifespan through personalized interventions.
                </p>
              </div>
            </div>

            {/* Vision Symbol */}
            <div className="group bg-green-50 p-6 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-green-900">Vision</h4>
              </div>
              <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">
                  A world where everyone has access to personalized longevity protocols, enabling healthier, longer lives through precision health optimization.
                </p>
              </div>
            </div>

            {/* AI Power Symbol */}
            <div className="group bg-purple-50 p-6 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-900">AI-Powered</h4>
              </div>
              <div className="absolute inset-0 bg-purple-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">
                  Advanced algorithms analyze 60+ biomarkers to create truly personalized longevity protocols.
                </p>
              </div>
            </div>

            {/* Science Symbol */}
            <div className="group bg-orange-50 p-6 rounded-lg transition-all duration-300 hover:bg-orange-100 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Microscope className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-orange-900">Evidence-Based</h4>
              </div>
              <div className="absolute inset-0 bg-orange-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">
                  Every recommendation backed by peer-reviewed research with transparent sourcing and continuous updates.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="group bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Cpu className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                <span className="text-xs font-medium">Personalized</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-xs text-center">AI-powered personalized recommendations</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-green-100 to-teal-100 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Database className="w-8 h-8 text-green-600 mx-auto mb-1" />
                <span className="text-xs font-medium">Comprehensive</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-xs text-center">Comprehensive biomarker analysis</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-1" />
                <span className="text-xs font-medium">Tracking</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-xs text-center">Continuous optimization tracking</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
              <div className="text-center">
                <Shield className="w-8 h-8 text-orange-600 mx-auto mb-1" />
                <span className="text-xs font-medium">Protocols</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-xs text-center">Evidence-based protocols</p>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 1,
    title: "Market Analysis",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Market Size Symbol */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <PieChart className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-600">$8.5B</div>
                <div className="text-sm text-blue-800">2024 Investment</div>
              </div>
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col items-center justify-center">
                <h4 className="font-bold mb-2">Global Investment 2024</h4>
                <p className="text-sm text-center">220% increase from 2023, demonstrating explosive market growth</p>
              </div>
            </div>

            {/* Funding Concentration */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Trophy className="w-16 h-16 text-green-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-green-600">$8.1B</div>
                <div className="text-sm text-green-800">Top 50 Companies</div>
              </div>
              <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col items-center justify-center">
                <h4 className="font-bold mb-2">Disclosed Funding</h4>
                <p className="text-sm text-center">$169M average per company in top tier</p>
              </div>
            </div>

            {/* Market Concentration */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Star className="w-16 h-16 text-purple-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-purple-600">91%</div>
                <div className="text-sm text-purple-800">Top 10 Share</div>
              </div>
              <div className="absolute inset-0 bg-purple-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col items-center justify-center">
                <h4 className="font-bold mb-2">Market Concentration</h4>
                <p className="text-sm text-center">$7.4B concentrated in top 10 companies</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-100 to-blue-100 p-4 rounded-lg">
            <MarketAnalysisChart />
          </div>
        </div>
  }, {
    id: 2,
    title: "Problem & Solution",
    icon: <Target className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problems */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                Current Problems
              </h3>
              <div className="grid gap-3">
                <div className="group bg-red-50 p-4 rounded-lg transition-all duration-300 hover:bg-red-100 hover:scale-105 cursor-pointer relative">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-red-500" />
                    <span className="font-medium text-red-900">Reactive Healthcare</span>
                  </div>
                  <div className="absolute inset-0 bg-red-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center">
                    <p className="text-sm">Healthcare systems focus on disease treatment, not prevention</p>
                  </div>
                </div>

                <div className="group bg-red-50 p-4 rounded-lg transition-all duration-300 hover:bg-red-100 hover:scale-105 cursor-pointer relative">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-red-500" />
                    <span className="font-medium text-red-900">Generic Advice</span>
                  </div>
                  <div className="absolute inset-0 bg-red-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center">
                    <p className="text-sm">Generic health advice ignores individual biomarker variations</p>
                  </div>
                </div>

                <div className="group bg-red-50 p-4 rounded-lg transition-all duration-300 hover:bg-red-100 hover:scale-105 cursor-pointer relative">
                  <div className="flex items-center gap-3">
                    <Lock className="w-8 h-8 text-red-500" />
                    <span className="font-medium text-red-900">Inaccessible Science</span>
                  </div>
                  <div className="absolute inset-0 bg-red-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center">
                    <p className="text-sm">Longevity science remains inaccessible to general population</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Our Solutions
              </h3>
              <div className="grid gap-3">
                <div className="group bg-green-50 p-4 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 cursor-pointer relative">
                  <div className="flex items-center gap-3">
                    <Brain className="w-8 h-8 text-green-500" />
                    <span className="font-medium text-green-900">AI Personalization</span>
                  </div>
                  <div className="absolute inset-0 bg-green-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center">
                    <p className="text-sm">Personalized longevity coaching based on biomarkers</p>
                  </div>
                </div>

                <div className="group bg-green-50 p-4 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 cursor-pointer relative">
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-green-500" />
                    <span className="font-medium text-green-900">Smart Recommendations</span>
                  </div>
                  <div className="absolute inset-0 bg-green-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center">
                    <p className="text-sm">AI-driven recommendations from latest research</p>
                  </div>
                </div>

                <div className="group bg-green-50 p-4 rounded-lg transition-all duration-300 hover:bg-green-100 hover:scale-105 cursor-pointer relative">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-green-500" />
                    <span className="font-medium text-green-900">Continuous Monitoring</span>
                  </div>
                  <div className="absolute inset-0 bg-green-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center">
                    <p className="text-sm">Continuous monitoring and protocol optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">$44.2B</div>
                <div className="text-sm text-blue-800">Market by 2030</div>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">15.7%</div>
                <div className="text-sm text-green-800">Annual CAGR</div>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">400M+</div>
                <div className="text-sm text-purple-800">Potential Users</div>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 3,
    title: "Business Model",
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Freemium to Enterprise Strategy</h3>
            <p className="text-slate-600">Tiered access model driving user acquisition and revenue growth</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Free Tier */}
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:border-gray-300 cursor-pointer">
              <div className="text-center mb-4 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-gray-900">Free Tier</h4>
                <p className="text-2xl font-bold text-gray-600 mt-2">€0/month</p>
                <p className="text-sm text-gray-500">Gateway to longevity</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-gray-800">Access Includes:</h5>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Basic biomarker reference values</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>General health articles & resources</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Basic health calculators</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Community forum access</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-2">Limitations:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• No personalized recommendations</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• No biomarker analysis</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• No AI coaching</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Limited content access</li>
                </ul>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300 relative transition-all duration-300 hover:bg-blue-100 hover:scale-105 hover:shadow-lg hover:border-blue-400 cursor-pointer">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-110">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-4 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-blue-900">Premium</h4>
                <p className="text-2xl font-bold text-blue-600 mt-2">€9/month</p>
                <p className="text-sm text-blue-700">Personal optimization</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-blue-800">Everything in Free +</h5>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>AI-powered personalized protocols</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Comprehensive biomarker analysis</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>25% off personal coaching sessions</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Advanced tracking & analytics</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Supplement recommendations</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Lab test interpretations</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300 transition-all duration-300 hover:bg-green-100 hover:scale-105 hover:shadow-lg hover:border-green-400 cursor-pointer">
              <div className="text-center mb-4 transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-green-900">Enterprise</h4>
                <p className="text-2xl font-bold text-green-600 mt-2">€29/month</p>
                <p className="text-sm text-green-700">Complete optimization</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-green-800">Everything in Premium +</h5>
                <ul className="text-sm text-green-800 space-y-2">
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>50% off 1-on-1 expert consultations</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>50% off cutting-edge biomarker testing</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Concierge health coordination</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Custom protocol development</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Direct physician access</span>
                  </li>
                  <li className="flex items-start gap-2 transition-transform duration-200 hover:scale-105 hover:translate-x-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>White-label solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* B2B Revenue Streams */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg transition-all duration-300 hover:from-purple-100 hover:to-indigo-100 hover:scale-105 hover:shadow-lg cursor-pointer">
            <h4 className="text-xl font-semibold text-purple-900 mb-4">B2B Revenue Streams</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-md cursor-pointer">
                <h5 className="font-semibold text-purple-900 mb-2">Corporate Wellness</h5>
                <p className="text-sm text-purple-800 mb-2">€15-50/employee/month</p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Company-wide health optimization</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Executive health programs</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Employee wellness dashboards</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• ROI tracking & reporting</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-md cursor-pointer">
                <h5 className="font-semibold text-purple-900 mb-2">Healthcare Partnerships</h5>
                <p className="text-sm text-purple-800 mb-2">Revenue sharing 20-40%</p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Clinic integration partnerships</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Hospital preventive care programs</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• Insurance premium reductions</li>
                  <li className="transition-transform duration-200 hover:scale-105 hover:translate-x-2">• API licensing to health tech</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conversion Strategy */}
          <div className="bg-yellow-50 p-4 rounded-lg transition-all duration-300 hover:bg-yellow-100 hover:scale-105 hover:shadow-lg cursor-pointer">
            <h4 className="font-semibold text-yellow-900 mb-2">Freemium Conversion Strategy</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/60 hover:scale-105 cursor-pointer">
                <div className="font-medium text-yellow-800">Free → Premium</div>
                <div className="text-yellow-700">Target: 12-15% conversion rate</div>
              </div>
              <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/60 hover:scale-105 cursor-pointer">
                <div className="font-medium text-yellow-800">Premium → Enterprise</div>
                <div className="text-yellow-700">Target: 18-22% upgrade rate</div>
              </div>
              <div className="p-3 rounded-lg transition-all duration-300 hover:bg-white/60 hover:scale-105 cursor-pointer">
                <div className="font-medium text-yellow-800">Average LTV</div>
                <div className="text-yellow-700">€450+ per paid user</div>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 4,
    title: "Competitive Advantage",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-blue-600" />
              Our Competitive Edge
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* AI-Powered Personalization */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-blue-900 text-sm">AI Power</h4>
              </div>
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-sm">AI-Powered Personalization</h4>
                  <p className="text-xs">Our algorithms analyze 60+ biomarkers to create truly personalized longevity protocols, going beyond generic advice.</p>
                </div>
              </div>
            </div>

            {/* Comprehensive Integration */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-green-900 text-sm">Integration</h4>
              </div>
              <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-sm">Comprehensive Integration</h4>
                  <p className="text-xs">We integrate nutrition, exercise, supplementation, and lifestyle factors into one cohesive optimization platform.</p>
                </div>
              </div>
            </div>

            {/* Scientific Rigor */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Microscope className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-900 text-sm">Science</h4>
              </div>
              <div className="absolute inset-0 bg-purple-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-sm">Scientific Rigor</h4>
                  <p className="text-xs">Every recommendation is backed by peer-reviewed research, with transparent sourcing and continuous updates.</p>
                </div>
              </div>
            </div>

            {/* German Engineering */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-orange-900 text-sm">German</h4>
              </div>
              <div className="absolute inset-0 bg-orange-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-sm">German Engineering</h4>
                  <p className="text-xs">Built with German precision and privacy standards, ensuring data security and algorithm reliability.</p>
                </div>
              </div>
            </div>

            {/* Continuous Optimization */}
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                <h4 className="font-bold text-teal-900 text-sm">Learning</h4>
              </div>
              <div className="absolute inset-0 bg-teal-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-sm">Continuous Optimization</h4>
                  <p className="text-xs">Our platform learns and adapts recommendations based on user results, creating effective feedback loops.</p>
                </div>
              </div>
            </div>

            {/* Holistic Approach */}
            <div className="group bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative">
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <h4 className="font-bold text-red-900 text-sm">Holistic</h4>
              </div>
              <div className="absolute inset-0 bg-red-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold mb-2 text-sm">Holistic Approach</h4>
                  <p className="text-xs">Unlike competitors focusing on single aspects, we address all pillars of longevity in an integrated manner.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <Users className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-blue-900 text-sm">Target Market</div>
                <div className="text-xs text-blue-700">Health-conscious consumers</div>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-2" />
                <div className="font-bold text-green-900 text-sm">Price Position</div>
                <div className="text-xs text-green-700">Affordable premium</div>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-110">
                <Lightbulb className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                <div className="font-bold text-purple-900 text-sm">Value Proposition</div>
                <div className="text-xs text-purple-700">Accessible longevity science</div>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 5,
    title: "Financial Projections",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
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
                  <span className="font-bold text-green-600">€12K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Year 1 (2026)</span>
                  <span className="font-bold text-green-600">€68K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Year 2 (2027)</span>
                  <span className="font-bold text-green-600">€285K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Year 3 (2028)</span>
                  <span className="font-bold text-green-600">€920K</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                  <span className="font-medium">Year 4 (2029)</span>
                  <span className="font-bold text-green-700">€2.1M</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-900">User Growth by Tier</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Q3-Q4 2025</span>
                    <span className="font-bold">350 total</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 grid grid-cols-3 gap-2">
                    <div>Free: 280</div>
                    <div>Premium: 60</div>
                    <div>Enterprise: 10</div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 1 (2026)</span>
                    <span className="font-bold">2,100 total</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 grid grid-cols-3 gap-2">
                    <div>Free: 1,680</div>
                    <div>Premium: 360</div>
                    <div>Enterprise: 60</div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 2 (2027)</span>
                    <span className="font-bold">10,500 total</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 grid grid-cols-3 gap-2">
                    <div>Free: 7,875</div>
                    <div>Premium: 2,205</div>
                    <div>Enterprise: 420</div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 3 (2028)</span>
                    <span className="font-bold">35,000 total</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 grid grid-cols-3 gap-2">
                    <div>Free: 24,500</div>
                    <div>Premium: 8,750</div>
                    <div>Enterprise: 1,750</div>
                  </div>
                </div>
                <div className="p-3 bg-blue-100 rounded border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Year 4 (2029)</span>
                    <span className="font-bold">80,000 total</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 grid grid-cols-3 gap-2">
                    <div>Free: 52,000</div>
                    <div>Premium: 24,000</div>
                    <div>Enterprise: 4,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* User Distribution Breakdown */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">User Tier Distribution Strategy</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-gray-900 mb-2">Free Users (65%)</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Primary acquisition channel</li>
                  <li>• Community building focus</li>
                  <li>• Content consumption drivers</li>
                  <li>• Conversion funnel entry point</li>
                </ul>
                <div className="mt-3 text-xs text-gray-600">
                  Target conversion: 12-15% to Premium
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-blue-900 mb-2">Premium Users (30%)</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Core revenue generators</li>
                  <li>• Active platform users</li>
                  <li>• Health optimization focused</li>
                  <li>• Highest engagement rates</li>
                </ul>
                <div className="mt-3 text-xs text-blue-600">
                  Target upgrade: 18-22% to Enterprise
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold text-green-900 mb-2">Enterprise Users (5%)</h5>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Highest value customers</li>
                  <li>• B2B partnerships</li>
                  <li>• Corporate wellness</li>
                  <li>• White-label solutions</li>
                </ul>
                <div className="mt-3 text-xs text-green-600">
                  Highest LTV: €1,200+ per user
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">€3.3M</div>
              <div className="text-sm text-green-800">Cumulative Revenue</div>
              <div className="text-xs text-gray-600 mt-1">4.5-year total</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">70%</div>
              <div className="text-sm text-blue-800">Gross Margin</div>
              <div className="text-xs text-gray-600 mt-1">Year 4 target</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">€500K</div>
              <div className="text-sm text-purple-800">Funding Needed</div>
              <div className="text-xs text-gray-600 mt-1">Seed round target</div>
            </div>
          </div>
          
        </div>
  }, {
    id: 6,
    title: "Team & Expertise",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
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
  }, {
    id: 7,
    title: "Call to Action",
    icon: <Phone className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Longevity Revolution</h3>
            <p className="text-slate-600">Partner with us to transform healthcare and extend healthy human lifespan</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">For Investors</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• €500K Seed funding round opening Q1 2026</li>
                  <li>• Target 10x return within 5 years</li>
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
          
          
        </div>
  }];
  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setDirection(index > currentSlide ? 'next' : 'prev');
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-advance disabled per user request
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!isAnimating) {
  //       nextSlide();
  //     }
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [currentSlide, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key >= '1' && e.key <= String(slides.length)) {
        goToSlide(parseInt(e.key) - 1);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  return (
    <section 
      id="businessplan" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <div className="text-center mb-8 sm:mb-12 animate-scale-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover-scale">
            Business Plan
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Strategic roadmap for democratizing longevity science and building a sustainable health optimization platform
          </p>
          
          {/* Progress indicator */}
          <div className="mt-6 w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main presentation card */}
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
          {/* Header */}
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3 animate-slide-in-right">
                <div className="p-2 rounded-lg bg-white/80 backdrop-blur-sm">
                  {slides[currentSlide].icon}
                </div>
                <CardTitle className="text-xl sm:text-2xl text-slate-900 font-bold">
                  {slides[currentSlide].title}
                </CardTitle>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-slate-500 bg-white/60 px-3 py-1 rounded-full">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </div>
          </CardHeader>
          
          {/* Content with slide animation */}
          <CardContent className="p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
            <div 
              className={`
                transition-all duration-300 ease-in-out
                ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}
                ${direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}
              `}
            >
              {slides[currentSlide].content}
            </div>
          </CardContent>
          
          {/* Enhanced navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t gap-4">
            <Button 
              variant="outline" 
              onClick={prevSlide} 
              disabled={isAnimating}
              className="flex items-center gap-2 hover-scale w-full sm:w-auto transition-all duration-200 disabled:opacity-50"
              title="Previous slide (← arrow key)"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </Button>
            
            {/* Slide indicators with enhanced interactivity */}
            <div className="flex gap-2 order-first sm:order-none">
              {slides.map((slide, index) => (
                <button 
                  key={index} 
                  onClick={() => goToSlide(index)} 
                  disabled={isAnimating}
                  className={`
                    w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover-scale
                    ${index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                    }
                  `}
                  title={slide.title}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              onClick={nextSlide} 
              disabled={isAnimating}
              className="flex items-center gap-2 hover-scale w-full sm:w-auto transition-all duration-200 disabled:opacity-50"
              title="Next slide (→ arrow key or 1-8 number keys)"
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
        </Card>
        
        {/* Mobile-only slide thumbnails */}
        <div className="mt-6 sm:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  flex-shrink-0 p-3 rounded-lg border transition-all duration-200
                  ${index === currentSlide 
                    ? 'bg-blue-50 border-blue-200' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  <div className="text-blue-600">{slide.icon}</div>
                  <span className="text-sm font-medium whitespace-nowrap">{slide.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessPlan;