import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, Users, DollarSign, Target, Award, Phone, 
         Lightbulb, Shield, Zap, Globe, Brain, Heart, Star, CheckCircle, AlertCircle, 
         Trophy, Rocket, BarChart3, PieChart, Cpu, Database, Lock, Microscope, Linkedin, 
         MessageCircle, Github } from "lucide-react";
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* AI-Powered Personalization */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[200px]">
              <div className="text-center">
                <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-blue-900 text-lg">AI-Powered Personalization</h4>
              </div>
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">Our algorithms analyze 60+ biomarkers to create truly personalized longevity protocols, going beyond generic advice.</p>
              </div>
            </div>

            {/* Comprehensive Integration */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[200px]">
              <div className="text-center">
                <Zap className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-green-900 text-lg">Integration</h4>
              </div>
              <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">We integrate nutrition, exercise, supplementation, and lifestyle factors into one cohesive optimization platform.</p>
              </div>
            </div>

            {/* Scientific Rigor */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[200px]">
              <div className="text-center">
                <Microscope className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-purple-900 text-lg">Science</h4>
              </div>
              <div className="absolute inset-0 bg-purple-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">Every recommendation is backed by peer-reviewed research, with transparent sourcing and continuous updates.</p>
              </div>
            </div>

            {/* German Engineering */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[200px]">
              <div className="text-center">
                <Shield className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-orange-900 text-lg">German</h4>
              </div>
              <div className="absolute inset-0 bg-orange-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">Built with German precision and privacy standards, ensuring data security and algorithm reliability.</p>
              </div>
            </div>

            {/* Continuous Optimization */}
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[200px]">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h4 className="font-bold text-teal-900 text-lg">Learning</h4>
              </div>
              <div className="absolute inset-0 bg-teal-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">Our platform learns and adapts recommendations based on user results, creating effective feedback loops.</p>
              </div>
            </div>

            {/* Holistic Approach */}
            <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[200px]">
              <div className="text-center">
                <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-red-900 text-lg">Holistic</h4>
              </div>
              <div className="absolute inset-0 bg-red-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center">
                <p className="text-sm text-center">Unlike competitors focusing on single aspects, we address all pillars of longevity in an integrated manner.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-blue-900 text-lg mb-2">Target Market</div>
                <div className="text-sm text-blue-700">Health-conscious consumers seeking scientific approaches to longevity and wellness</div>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="font-bold text-green-900 text-lg mb-2">Price Position</div>
                <div className="text-sm text-green-700">Affordable premium - making advanced longevity science accessible to middle class</div>
              </div>
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60">
                <Lightbulb className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="font-bold text-purple-900 text-lg mb-2">Value Proposition</div>
                <div className="text-sm text-purple-700">Accessible longevity science with personalized recommendations and continuous optimization</div>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              Financial Projections
            </h3>
            <p className="text-slate-600">Hover for details • Click for comprehensive breakdown</p>
          </div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Revenue Growth */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[312px]">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">€2.1M</div>
                <div className="text-sm text-green-800 font-medium">Year 4 Revenue Target</div>
                <div className="text-xs text-green-700 mt-1">+328% growth</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-3 text-center text-lg">Revenue Trajectory</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-green-400 pb-1">
                    <span>Q3-Q4 2025:</span><span className="font-semibold">€12K</span>
                  </div>
                  <div className="flex justify-between border-b border-green-400 pb-1">
                    <span>Year 1 (2026):</span><span className="font-semibold">€68K</span>
                  </div>
                  <div className="flex justify-between border-b border-green-400 pb-1">
                    <span>Year 2 (2027):</span><span className="font-semibold">€285K</span>
                  </div>
                  <div className="flex justify-between border-b border-green-400 pb-1">
                    <span>Year 3 (2028):</span><span className="font-semibold">€920K</span>
                  </div>
                  <div className="flex justify-between bg-green-500 p-2 rounded mt-2">
                    <span><strong>Year 4 (2029):</strong></span><span><strong>€2.1M</strong></span>
                  </div>
                  <div className="mt-3 pt-2 border-t border-green-400 text-xs">
                    <div>• Monthly recurring revenue model</div>
                    <div>• 15% month-over-month growth</div>
                    <div>• 70% from Premium & Enterprise</div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Growth */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[312px]">
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600">80K</div>
                <div className="text-sm text-blue-800 font-medium">Total Users Year 4</div>
                <div className="text-xs text-blue-700 mt-1">229x growth</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-3 text-center text-lg">User Growth Journey</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Q3-Q4 2025:</span><span>350 users</span>
                    </div>
                    <div className="text-xs mt-1 grid grid-cols-3 gap-1">
                      <div>Free: 280</div>
                      <div>Premium: 60</div>
                      <div>Enterprise: 10</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Year 1 (2026):</span><span>2,100 users</span>
                    </div>
                    <div className="text-xs mt-1 grid grid-cols-3 gap-1">
                      <div>Free: 1,680</div>
                      <div>Premium: 360</div>
                      <div>Enterprise: 60</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Year 4 (2029):</span><span>80,000 users</span>
                    </div>
                    <div className="text-xs mt-1 grid grid-cols-3 gap-1">
                      <div>Free: 52K</div>
                      <div>Premium: 24K</div>
                      <div>Enterprise: 4K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profitability Metrics */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[312px]">
              <div className="text-center">
                <PieChart className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-600">70%</div>
                <div className="text-sm text-purple-800 font-medium">Gross Margin Target</div>
                <div className="text-xs text-purple-700 mt-1">SaaS efficiency</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-purple-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-3 text-center text-lg">Profitability Model</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-purple-500 p-2 rounded">
                    <div className="font-semibold mb-1">Cost Structure:</div>
                    <div className="text-xs space-y-1">
                      <div>• Server & Infrastructure: 15%</div>
                      <div>• Payment Processing: 3%</div>
                      <div>• Third-party APIs: 7%</div>
                      <div>• Customer Support: 5%</div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500 p-2 rounded">
                    <div className="font-semibold mb-1">Revenue Breakdown:</div>
                    <div className="text-xs space-y-1">
                      <div>• Premium Subscriptions: 65%</div>
                      <div>• Enterprise Licenses: 25%</div>
                      <div>• Coaching Services: 8%</div>
                      <div>• Partnership Revenue: 2%</div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-400 p-2 rounded">
                    <div className="font-semibold text-center">Break-even: Month 18</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Funding & Investment */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[312px]">
              <div className="text-center">
                <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-orange-600">€500K</div>
                <div className="text-sm text-orange-800 font-medium">Seed Funding Target</div>
                <div className="text-xs text-orange-700 mt-1">18-month runway</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-3 text-center text-lg">Funding Allocation</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-orange-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Product Development:</span><span>€200K (40%)</span>
                    </div>
                    <div className="text-xs mt-1">
                      AI development, platform features, mobile app
                    </div>
                  </div>
                  
                  <div className="bg-orange-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Marketing & Growth:</span><span>€150K (30%)</span>
                    </div>
                    <div className="text-xs mt-1">
                      User acquisition, content marketing, partnerships
                    </div>
                  </div>
                  
                  <div className="bg-orange-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Team Expansion:</span><span>€100K (20%)</span>
                    </div>
                    <div className="text-xs mt-1">
                      Engineering, data science, customer success
                    </div>
                  </div>
                  
                  <div className="bg-orange-500 p-2 rounded">
                    <div className="flex justify-between font-semibold">
                      <span>Operations & Legal:</span><span>€50K (10%)</span>
                    </div>
                    <div className="text-xs mt-1">
                      Legal, compliance, administrative costs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Tier Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[338px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">65%</span>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Free Users</h4>
                <div className="text-sm text-gray-600">52,000 by Year 4</div>
                <div className="text-xs text-gray-500 mt-1">Acquisition focus</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gray-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                <h4 className="font-bold mb-3 text-center text-lg">Free Tier Strategy</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-500 p-2 rounded">
                    <div className="font-semibold mb-1">Core Functions:</div>
                    <div className="text-xs space-y-1">
                      <div>• Basic biomarker reference values</div>
                      <div>• Health articles & resources</div>
                      <div>• Community forum access</div>
                      <div>• Basic health calculators</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-500 p-2 rounded">
                    <div className="font-semibold mb-1">Conversion Goals:</div>
                    <div className="text-xs space-y-1">
                      <div>• 12-15% conversion to Premium</div>
                      <div>• Average time to convert: 90 days</div>
                      <div>• CAC: €8 (Year 4)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[338px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">30%</span>
                </div>
                <h4 className="font-bold text-blue-900 text-lg">Premium Users</h4>
                <div className="text-sm text-blue-600">24,000 by Year 4</div>
                <div className="text-xs text-blue-500 mt-1">€9/month revenue</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                <h4 className="font-bold mb-3 text-center text-lg">Premium Value Proposition</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="font-semibold mb-1">Advanced Features:</div>
                    <div className="text-xs space-y-1">
                      <div>• AI-powered personalized protocols</div>
                      <div>• Comprehensive biomarker analysis</div>
                      <div>• Advanced tracking & analytics</div>
                      <div>• Priority support</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="font-semibold mb-1">Business Impact:</div>
                    <div className="text-xs space-y-1">
                      <div>• 65% of total revenue</div>
                      <div>• 18-22% upgrade to Enterprise</div>
                      <div>• Average LTV: €450</div>
                      <div>• 3% monthly churn (Year 4)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[338px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">5%</span>
                </div>
                <h4 className="font-bold text-green-900 text-lg">Enterprise</h4>
                <div className="text-sm text-green-600">4,000 by Year 4</div>
                <div className="text-xs text-green-500 mt-1">€29/month revenue</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                <h4 className="font-bold mb-3 text-center text-lg">Enterprise Excellence</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-500 p-2 rounded">
                    <div className="font-semibold mb-1">Premium Services:</div>
                    <div className="text-xs space-y-1">
                      <div>• 50% off expert consultations</div>
                      <div>• Concierge health coordination</div>
                      <div>• Custom protocol development</div>
                      <div>• White-label solutions</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500 p-2 rounded">
                    <div className="font-semibold mb-1">High Value Impact:</div>
                    <div className="text-xs space-y-1">
                      <div>• 25% of total revenue</div>
                      <div>• Average LTV: €1,200+</div>
                      <div>• 1% monthly churn</div>
                      <div>• B2B partnerships & corporate wellness</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
            <h4 className="text-xl font-bold text-center mb-8">Financial Summary & Milestones</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110 p-4 rounded-lg hover:bg-white/80">
                <DollarSign className="w-10 h-10 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">€3.3M</div>
                <div className="text-sm text-green-700 font-medium">Cumulative Revenue</div>
                <div className="text-xs text-green-600 mt-1">4.5-year projection</div>
              </div>
              
              <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110 p-4 rounded-lg hover:bg-white/80">
                <BarChart3 className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">18 Mo</div>
                <div className="text-sm text-blue-700 font-medium">Break-even Timeline</div>
                <div className="text-xs text-blue-600 mt-1">Conservative estimate</div>
              </div>
              
              <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110 p-4 rounded-lg hover:bg-white/80">
                <Target className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">15%</div>
                <div className="text-sm text-purple-700 font-medium">Monthly Growth</div>
                <div className="text-xs text-purple-600 mt-1">Sustainable rate</div>
              </div>
              
              <div className="group text-center cursor-pointer transition-all duration-300 hover:scale-110 p-4 rounded-lg hover:bg-white/80">
                <Lightbulb className="w-10 h-10 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">€450</div>
                <div className="text-sm text-orange-700 font-medium">Average LTV</div>
                <div className="text-xs text-orange-600 mt-1">Customer lifetime value</div>
              </div>
            </div>
          </div>
        </div>
  }, {
    id: 6,
    title: "Team & Expertise",
    icon: <Users className="w-8 h-8 text-blue-600" />,
    content: <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Team & Expertise
            </h3>
            <p className="text-slate-600">Hover to explore our team • Click for detailed expertise</p>
          </div>
          
          {/* Core Team Structure */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {/* Founding Team */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative min-h-[180px]">
              <div className="text-center">
                <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <h4 className="font-bold text-blue-900 text-sm">Founders</h4>
                <div className="text-xs text-blue-700">3 Leaders</div>
              </div>
              <div className="absolute inset-0 bg-blue-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-2 text-center text-base">Founding Team</h4>
                <div className="space-y-1 text-xs">
                  <div className="bg-blue-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">CEO</div>
                    <div className="text-xs">Business strategy & partnerships</div>
                  </div>
                  <div className="bg-blue-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">CTO</div>
                    <div className="text-xs">AI/ML development & platform</div>
                  </div>
                  <div className="bg-blue-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">CMO</div>
                    <div className="text-xs">Medical advisory & protocols</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Team */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative min-h-[180px]">
              <div className="text-center">
                <Cpu className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <h4 className="font-bold text-green-900 text-sm">Tech Team</h4>
                <div className="text-xs text-green-700">4 Engineers</div>
              </div>
              <div className="absolute inset-0 bg-green-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-2 text-center text-base">Technical Expertise</h4>
                <div className="space-y-1 text-xs">
                  <div className="bg-green-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">Development (2)</div>
                    <div className="text-xs">Full-stack engineers</div>
                  </div>
                  <div className="bg-green-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">Data Science (1)</div>
                    <div className="text-xs">ML engineer & analytics</div>
                  </div>
                  <div className="bg-green-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">Design (1)</div>
                    <div className="text-xs">UX/UI specialist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operations Team */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative min-h-[180px]">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-900 text-sm">Operations</h4>
                <div className="text-xs text-purple-700">3 Specialists</div>
              </div>
              <div className="absolute inset-0 bg-purple-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-2 text-center text-base">Content & Operations</h4>
                <div className="space-y-1 text-xs">
                  <div className="bg-purple-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">Scientific Content</div>
                    <div className="text-xs">Research & content manager</div>
                  </div>
                  <div className="bg-purple-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">Customer Success</div>
                    <div className="text-xs">User experience & support</div>
                  </div>
                  <div className="bg-purple-500 p-1.5 rounded">
                    <div className="font-semibold text-xs">Marketing</div>
                    <div className="text-xs">Growth & acquisition specialist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Team Size */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer relative min-h-[180px]">
              <div className="text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <h4 className="font-bold text-orange-900 text-sm">Team Size</h4>
                <div className="text-xs text-orange-700">10 Total</div>
              </div>
              <div className="absolute inset-0 bg-orange-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-2 text-center text-base">Current Structure</h4>
                <div className="space-y-1 text-xs">
                  <div className="bg-orange-500 p-1.5 rounded">
                    <div className="flex justify-between text-xs">
                      <span>Founders:</span><span>3</span>
                    </div>
                  </div>
                  <div className="bg-orange-500 p-1.5 rounded">
                    <div className="flex justify-between text-xs">
                      <span>Technical:</span><span>4</span>
                    </div>
                  </div>
                  <div className="bg-orange-500 p-1.5 rounded">
                    <div className="flex justify-between text-xs">
                      <span>Operations:</span><span>3</span>
                    </div>
                  </div>
                  <div className="bg-orange-400 p-1.5 rounded mt-1">
                    <div className="font-semibold text-center text-xs">Lean & Efficient</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Medical Advisory */}
            <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[220px]">
              <div className="text-center">
                <Heart className="w-16 h-16 text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-red-900 text-lg">Medical Advisory</h4>
                <div className="text-sm text-red-700">Clinical Expertise</div>
              </div>
              <div className="absolute inset-0 bg-red-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                <h4 className="font-bold mb-3 text-center text-lg">Medical Experts</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-red-500 p-2 rounded">
                    <div className="font-semibold">Longevity Medicine</div>
                    <div className="text-xs">Specialized physicians in aging science</div>
                  </div>
                  <div className="bg-red-500 p-2 rounded">
                    <div className="font-semibold">Preventive Medicine</div>
                    <div className="text-xs">Healthcare optimization specialists</div>
                  </div>
                  <div className="bg-red-500 p-2 rounded">
                    <div className="font-semibold">Nutritional Biochemistry</div>
                    <div className="text-xs">Biomarker analysis experts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Advisory */}
            <div className="group bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[220px]">
              <div className="text-center">
                <Brain className="w-16 h-16 text-teal-600 mx-auto mb-3" />
                <h4 className="font-bold text-teal-900 text-lg">Technical Advisory</h4>
                <div className="text-sm text-teal-700">AI & Technology</div>
              </div>
              <div className="absolute inset-0 bg-teal-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                <h4 className="font-bold mb-3 text-center text-lg">Tech Advisors</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-teal-500 p-2 rounded">
                    <div className="font-semibold">AI/ML Research</div>
                    <div className="text-xs">Max Planck Institute researchers</div>
                  </div>
                  <div className="bg-teal-500 p-2 rounded">
                    <div className="font-semibold">HealthTech Veterans</div>
                    <div className="text-xs">Industry experience & scaling</div>
                  </div>
                  <div className="bg-teal-500 p-2 rounded">
                    <div className="font-semibold">Security & Privacy</div>
                    <div className="text-xs">GDPR compliance & data protection</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Advisory */}
            <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative min-h-[220px]">
              <div className="text-center">
                <Target className="w-16 h-16 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-bold text-indigo-900 text-lg">Business Advisory</h4>
                <div className="text-sm text-indigo-700">Strategy & Growth</div>
              </div>
              <div className="absolute inset-0 bg-indigo-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                <h4 className="font-bold mb-3 text-center text-lg">Business Experts</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-indigo-500 p-2 rounded">
                    <div className="font-semibold">Healthcare Executives</div>
                    <div className="text-xs">Industry leadership & connections</div>
                  </div>
                  <div className="bg-indigo-500 p-2 rounded">
                    <div className="font-semibold">Digital Health Entrepreneurs</div>
                    <div className="text-xs">Startup scaling & product-market fit</div>
                  </div>
                  <div className="bg-indigo-500 p-2 rounded">
                    <div className="font-semibold">VC Partners</div>
                    <div className="text-xs">Funding strategy & investor relations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment Strategy */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
              <Rocket className="w-6 h-6 text-blue-600" />
              Growth Strategy
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Priority Hires */}
              <div className="group bg-white p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                <div className="text-center">
                  <Lightbulb className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-blue-900 text-sm">Priority Hires</div>
                  <div className="text-xs text-blue-700">Q3/2025</div>
                </div>
                <div className="absolute inset-0 bg-blue-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                  <h4 className="font-bold mb-2 text-sm text-center">Next Hires</h4>
                  <div className="space-y-1 text-xs">
                    <div>• Senior Data Scientist (€80-100K)</div>
                    <div>• DevOps Engineer (€70-90K)</div>
                    <div>• Clinical Research Manager (€60-80K)</div>
                    <div>• Business Development Lead (€70-90K)</div>
                  </div>
                </div>
              </div>

              {/* Talent Sources */}
              <div className="group bg-white p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                <div className="text-center">
                  <Globe className="w-10 h-10 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-green-900 text-sm">Talent Sources</div>
                  <div className="text-xs text-green-700">Global Network</div>
                </div>
                <div className="absolute inset-0 bg-green-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                  <h4 className="font-bold mb-2 text-sm text-center">Recruitment</h4>
                  <div className="space-y-1 text-xs">
                    <div>• German university partnerships</div>
                    <div>• Healthcare technology meetups</div>
                    <div>• International longevity conferences</div>
                    <div>• Competitive recruitment from FAANG</div>
                  </div>
                </div>
              </div>

              {/* Team Growth */}
              <div className="group bg-white p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                <div className="text-center">
                  <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-purple-900 text-sm">Growth Plan</div>
                  <div className="text-xs text-purple-700">15 by Year 2</div>
                </div>
                <div className="absolute inset-0 bg-purple-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                  <h4 className="font-bold mb-2 text-sm text-center">Scaling</h4>
                  <div className="space-y-1 text-xs">
                    <div>• Current: 10 team members</div>
                    <div>• Year 1: 12 members (+2)</div>
                    <div>• Year 2: 15 members (+3)</div>
                    <div>• Focus: Technical & customer success</div>
                  </div>
                </div>
              </div>

              {/* Culture */}
              <div className="group bg-white p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative">
                <div className="text-center">
                  <Shield className="w-10 h-10 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-orange-900 text-sm">Culture</div>
                  <div className="text-xs text-orange-700">German Quality</div>
                </div>
                <div className="absolute inset-0 bg-orange-600 text-white p-3 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center">
                  <h4 className="font-bold mb-2 text-sm text-center">Values</h4>
                  <div className="space-y-1 text-xs">
                    <div>• Scientific rigor & precision</div>
                    <div>• Data privacy & security first</div>
                    <div>• User-centric innovation</div>
                    <div>• Sustainable growth mindset</div>
                  </div>
                </div>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <Rocket className="w-8 h-8 text-blue-600" />
              Join Our Mission
            </h3>
            <p className="text-slate-600">Hover for opportunities • Click for detailed information</p>
          </div>
          
          {/* Main Action Cards */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Investors */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative aspect-[10/7] flex flex-col justify-center items-center">
              <div className="text-center">
                <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-blue-900 text-xl">Investors</h4>
                <div className="text-base text-blue-700 font-medium">€500K Seed Round</div>
                <div className="text-sm text-blue-600 mt-1">Q1 2026 Opening</div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                <h4 className="font-bold mb-3 text-center text-lg">Investment Opportunity</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="font-semibold">Funding Details:</div>
                    <div className="text-xs space-y-1">
                      <div>• €500K Seed funding round</div>
                      <div>• Opening Q1 2026</div>
                      <div>• Target 10x return within 5 years</div>
                      <div>• Growing market 15.7% CAGR</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500 p-2 rounded">
                    <div className="font-semibold">Opportunity:</div>
                    <div className="text-xs space-y-1">
                      <div>• Experienced founding team</div>
                      <div>• Proven market demand</div>
                      <div>• Strong advisory board</div>
                      <div>• Clear path to profitability</div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-xs py-2">
                    Schedule Investor Meeting
                  </Button>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative aspect-[10/7] flex flex-col justify-center items-center">
              <div className="text-center">
                <Users className="w-16 h-16 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-green-900 text-xl">Partners</h4>
                <div className="text-base text-green-700 font-medium">Strategic Alliances</div>
                <div className="text-sm text-green-600 mt-1">Healthcare Ecosystem</div>
              </div>
              
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-green-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                 <h4 className="font-bold mb-3 text-center text-lg">Partnership Opportunities</h4>
                 <div className="space-y-2 text-sm">
                   <div className="bg-green-500 p-2 rounded">
                     <div className="font-semibold">Healthcare Providers:</div>
                     <div className="text-xs space-y-1">
                       <div>• Clinic integrations</div>
                       <div>• Provider dashboards</div>
                       <div>• Patient programs</div>
                     </div>
                   </div>
                   
                   <div className="bg-green-500 p-2 rounded">
                     <div className="font-semibold">Corporate Wellness:</div>
                     <div className="text-xs space-y-1">
                       <div>• Employee programs</div>
                       <div>• Executive packages</div>
                       <div>• ROI reports</div>
                     </div>
                   </div>
                   
                   <div className="bg-green-500 p-2 rounded">
                     <div className="font-semibold">Research & Labs:</div>
                     <div className="text-xs space-y-1">
                       <div>• Testing collaborations</div>
                       <div>• Research alliances</div>
                       <div>• Data partnerships</div>
                     </div>
                   </div>
                   
                   <Button className="w-full mt-3 bg-green-700 hover:bg-green-800 text-xs py-2">
                     Explore Partnerships
                   </Button>
                 </div>
               </div>
            </div>

            {/* Talent */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative aspect-[10/7] flex flex-col justify-center items-center">
              <div className="text-center">
                <Star className="w-16 h-16 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-purple-900 text-xl">Talent</h4>
                <div className="text-base text-purple-700 font-medium">Join Our Team</div>
                <div className="text-sm text-purple-600 mt-1">Remote Friendly</div>
              </div>
              
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-purple-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                 <h4 className="font-bold mb-3 text-center text-lg">Career Opportunities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-500 p-2 rounded">
                      <div className="font-semibold">What We Offer:</div>
                      <div className="text-xs space-y-1">
                        <div>• Longevity science work</div>
                        <div>• Competitive pay + equity</div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-500 p-2 rounded">
                      <div className="font-semibold">Culture:</div>
                      <div className="text-xs space-y-1">
                        <div>• Scientific innovation</div>
                        <div>• Collaborative team</div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-3 bg-purple-700 hover:bg-purple-800 text-xs py-2">
                      Join Our Team
                    </Button>
                 </div>
               </div>
            </div>

            {/* Early Users */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative aspect-[10/7] flex flex-col justify-center items-center">
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-orange-900 text-xl">Early Users</h4>
                <div className="text-base text-orange-700 font-medium">Beta Program</div>
                <div className="text-sm text-orange-600 mt-1">Q3/2025 Launch</div>
              </div>
              
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-orange-600 text-white p-4 rounded-lg opacity-0 group-hover:opacity-95 transition-all duration-300 flex flex-col justify-center overflow-y-auto">
                 <h4 className="font-bold mb-3 text-center text-lg">Beta Program Benefits</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-orange-500 p-2 rounded">
                      <div className="font-semibold">Exclusive Access:</div>
                      <div className="text-xs space-y-1">
                        <div>• Beta access Q3/2025</div>
                        <div>• Priority support</div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-500 p-2 rounded">
                      <div className="font-semibold">Special Benefits:</div>
                      <div className="text-xs space-y-1">
                        <div>• Lifetime discounts</div>
                        <div>• Beta features</div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-500 p-2 rounded">
                      <div className="font-semibold">Community:</div>
                      <div className="text-xs space-y-1">
                        <div>• Expert webinars</div>
                        <div>• Early research access</div>
                      </div>
                    </div>
                   
                   <Button className="w-full mt-3 bg-orange-700 hover:bg-orange-800 text-xs py-2">
                     Join Beta Program
                   </Button>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-center mb-6 flex items-center justify-center gap-2">
              <Phone className="w-6 h-6 text-blue-600" />
              Get in Touch
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60" onClick={() => window.open('https://www.longevitycoa.ch', '_blank')}>
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="font-bold text-blue-900 text-lg">Website</div>
                <div className="text-xs text-blue-700">www.longevitycoa.ch</div>
              </div>
              
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60" onClick={() => window.open('mailto:info@mabu.red', '_blank')}>
                <Phone className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="font-bold text-green-900 text-lg">Contact</div>
                <div className="text-xs text-green-700">info@mabu.red</div>
              </div>
              
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="font-bold text-purple-900 text-lg">Location</div>
                <div className="text-xs text-purple-700">Berlin, Germany</div>
              </div>
              
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60" onClick={() => window.open('https://linkedin.com/in/mbuchhorn', '_blank')}>
                <Linkedin className="w-12 h-12 text-blue-700 mx-auto mb-3" />
                <div className="font-bold text-blue-900 text-lg">LinkedIn</div>
                <div className="text-xs text-blue-700">mbuchhorn</div>
              </div>
              
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60" onClick={() => window.open('https://bsky.app/profile/m43u.bsky.social', '_blank')}>
                <MessageCircle className="w-12 h-12 text-sky-600 mx-auto mb-3" />
                <div className="font-bold text-sky-900 text-lg">Bluesky</div>
                <div className="text-xs text-sky-700">m43u.bsky.social</div>
              </div>
              
              <div className="group cursor-pointer transition-all duration-300 hover:scale-105 p-6 rounded-lg hover:bg-white/60" onClick={() => window.open('https://github.com/longevitycoach/', '_blank')}>
                <Github className="w-12 h-12 text-gray-700 mx-auto mb-3" />
                <div className="font-bold text-gray-900 text-lg">GitHub</div>
                <div className="text-xs text-gray-700">longevitycoach</div>
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