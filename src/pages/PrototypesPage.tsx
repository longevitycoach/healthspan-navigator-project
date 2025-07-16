import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import StrunzChatWidget from "@/components/StrunzChatWidget";

const PrototypesPage = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Current Prototypes
            </h1>
            <div className="w-full bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-6 border border-slate-200/50">
              <p className="text-lg text-slate-700 leading-relaxed">
                These MVP prototypes validate core hypotheses about personalized health optimization through AI-powered analysis, habit formation, and knowledge integration. Our goal is to identify which approaches deliver the highest impact for longevity enthusiasts in the discovery phase.
              </p>
            </div>
          </div>

          {/* Modern Horizontal Navigation */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/50 p-4">
            <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="#blood-test-oracle" 
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 border border-transparent hover:border-emerald-200"
                  >
                    Blood Test Oracle
                  </a>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p><strong>Hypothesis:</strong> AI-powered analysis of blood test results can provide more personalized and actionable supplement recommendations than generic health advice</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="#habit-builder" 
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200"
                  >
                    Habit Builder
                  </a>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p><strong>Hypothesis:</strong> Gamified habit tracking with science-based formation strategies leads to better long-term health behavior adoption</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="#educational-healthspan" 
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 border border-transparent hover:border-emerald-200"
                  >
                    Educational Healthspan
                  </a>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p><strong>Hypothesis:</strong> Evidence-based longevity education in native language increases user engagement and knowledge retention</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="#blood-test-mcp" 
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 border border-transparent hover:border-purple-200"
                  >
                    Blood Test MCP
                  </a>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p><strong>Hypothesis:</strong> AI agents with specialized health knowledge can provide more accurate and personalized health analysis than general-purpose AI</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="#strunz-knowledge" 
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 border border-transparent hover:border-indigo-200"
                  >
                    Dr. Strunz Knowledge
                  </a>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p><strong>Hypothesis:</strong> Access to orthomolecular medicine expertise through AI agents can bridge the gap between complex medical knowledge and practical application</p>
                </TooltipContent>
              </Tooltip>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Blood Test Oracle */}
            <div id="blood-test-oracle" className="space-y-6 scroll-mt-32">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Blood Test Oracle</h3>
                <p className="text-slate-600 text-sm mb-4">
                  An AI-powered tool that analyzes blood test results and provides personalized health insights based on reference values and longevity research. Upload your lab results to get actionable recommendations for optimal health.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-emerald-50"
                >
                  <a href="https://mabu.red/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo Blood Test
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/22aee038-5083-49ea-be98-a5a007fc656d.png" 
                  alt="Blood Test Oracle Interface - Blood Test Analysis Form"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://github.com/ma3u/blood-test/" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    First Prototype (GitHub)
                  </a>
                </Button>
              </div>
            </div>
            
            
            {/* Habit Builder Prototype */}
            <div id="habit-builder" className="space-y-6 scroll-mt-32">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Habit Builder</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A comprehensive habit tracking and building platform designed to help users develop sustainable healthy behaviors. Features daily tracking, progress visualization, and science-based habit formation strategies.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://longevity-coach-et8m506.public.builtwithrocket.new/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Habit Builder Prototype
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/cd68eedd-9546-47a8-bf00-a772884954f2.png" 
                  alt="Habit Builder Interface - Daily Health Tracking Dashboard"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
            </div>
            
            
            {/* Educational Healthspan */}
            <div id="educational-healthspan" className="space-y-6 scroll-mt-32">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Educational Healthspan</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A German-language educational platform focused on healthspan optimization and longevity science. Provides evidence-based information about aging, health metrics, and lifestyle interventions for extending healthy lifespan.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-emerald-50"
                >
                  <a href="https://gesund.longevitycoa.ch/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Educational Healthspan (German)
                  </a>
                </Button>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/60e01b13-c72b-42e1-8663-eb59a7779ffd.png" 
                  alt="Health Longevity Dashboard - Aging Statistics and Health Insights"
                  className="rounded-lg shadow-lg border border-slate-200 w-full"
                />
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://github.com/longevitycoach/gesund-deutschland-jetzt" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub Repository
                  </a>
                </Button>
              </div>
            </div>
            
            
            {/* Blood Test MCP Server */}
            <div id="blood-test-mcp" className="space-y-6 scroll-mt-32">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Blood Test MCP Server</h3>
                <p className="text-slate-600 text-sm mb-4">
                  An MCP (Model Context Protocol) server for AI agents that provides blood test analysis capabilities. Features multi-format support, access to modern Epi-genetic and Molecular medicine expert knowledge, and personalized supplement recommendations through API endpoints.
                </p>
              </div>
              
              
              <Dialog>
                <Tooltip>
                  <DialogTrigger asChild>
                    <TooltipTrigger asChild>
                      <div className="cursor-pointer">
                        <img 
                          src="/lovable-uploads/ClaudeDesktop-Bloodtest-MCP.gif" 
                          alt="Claude Desktop MCP Integration - Animated demonstration of supplement_therapy tool"
                          className="rounded-lg shadow-lg border border-slate-200 w-full hover:opacity-90 transition-opacity"
                        />
                      </div>
                    </TooltipTrigger>
                  </DialogTrigger>
                  <TooltipContent>
                    <p>Click here to get the result of the MCP Server.</p>
                  </TooltipContent>
                </Tooltip>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Blood Test Analysis Results</DialogTitle>
                    <DialogDescription>
                      Personalized supplement recommendations based on your blood work
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 text-sm">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">SUMMARY OF FINDINGS:</h3>
                      <p className="text-blue-800">
                        Your blood work reveals several areas that are within "normal" laboratory ranges but not optimal for health and longevity. Key concerns include elevated cholesterol levels, elevated fasting glucose suggesting early insulin resistance, low DHA omega-3 levels, and reduced immune function (low IgG). Your TSH is also in the upper normal range, which isn't optimal for energy and metabolism.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">PERSONALIZED SUPPLEMENT PLAN:</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 text-xs">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="border border-gray-300 p-2 text-left">Supplement</th>
                              <th className="border border-gray-300 p-2 text-left">Recommended Dose</th>
                              <th className="border border-gray-300 p-2 text-left">Form</th>
                              <th className="border border-gray-300 p-2 text-left">When to Take</th>
                              <th className="border border-gray-300 p-2 text-left">Rationale</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 p-2 font-medium">Omega-3 (EPA/DHA)</td>
                              <td className="border border-gray-300 p-2">2,000-3,000 mg daily</td>
                              <td className="border border-gray-300 p-2">Fish oil or algae oil</td>
                              <td className="border border-gray-300 p-2">With meals</td>
                              <td className="border border-gray-300 p-2">DHA low (15.93 mg/l vs optimal greater than 61 mg/l). Reduces inflammation, supports cardiovascular health.</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-2 font-medium">Chromium</td>
                              <td className="border border-gray-300 p-2">200 µg daily</td>
                              <td className="border border-gray-300 p-2">Chromium picolinate</td>
                              <td className="border border-gray-300 p-2">With breakfast</td>
                              <td className="border border-gray-300 p-2">Fasting glucose elevated (6.38 mmol/l). Enhances insulin sensitivity.</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2 font-medium">Selenium</td>
                              <td className="border border-gray-300 p-2">200 µg daily</td>
                              <td className="border border-gray-300 p-2">Sodium selenite</td>
                              <td className="border border-gray-300 p-2">With breakfast</td>
                              <td className="border border-gray-300 p-2">Supports immune function (IgG low at 6.5 g/l) and thyroid optimization.</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-2 font-medium">Vitamin D3 + K2</td>
                              <td className="border border-gray-300 p-2">2,000-4,000 IU D3 + 100 µg K2</td>
                              <td className="border border-gray-300 p-2">D3 with K2 MK-7</td>
                              <td className="border border-gray-300 p-2">With breakfast</td>
                              <td className="border border-gray-300 p-2">Supports immune function and cardiovascular health.</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 p-2 font-medium">Zinc</td>
                              <td className="border border-gray-300 p-2">15-25 mg daily</td>
                              <td className="border border-gray-300 p-2">Zinc bisglycinate</td>
                              <td className="border border-gray-300 p-2">Evening, away from meals</td>
                              <td className="border border-gray-300 p-2">Supports immune function and low IgG levels. Critical for B-cell function.</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 p-2 font-medium">Magnesium</td>
                              <td className="border border-gray-300 p-2">400-600 mg daily</td>
                              <td className="border border-gray-300 p-2">Magnesium glycinate</td>
                              <td className="border border-gray-300 p-2">Before bed</td>
                              <td className="border border-gray-300 p-2">Supports cardiovascular health, insulin sensitivity, and stress reduction.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2">DIETARY RECOMMENDATIONS:</h3>
                        <ul className="space-y-1 text-xs">
                          <li><strong>Cholesterol:</strong> Increase soluble fiber, nuts, reduce refined carbs</li>
                          <li><strong>Glucose:</strong> Low-glycemic foods, protein with meals, intermittent fasting</li>
                          <li><strong>Omega-3:</strong> Fatty fish 2-3x/week, flax/chia seeds</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">LIFESTYLE RECOMMENDATIONS:</h3>
                        <ul className="space-y-1 text-xs">
                          <li><strong>Cardio:</strong> 30-45 min exercise, 4-5x/week</li>
                          <li><strong>Stress:</strong> Meditation, yoga, adequate sleep (7-9h)</li>
                          <li><strong>Immune:</strong> Quality sleep, stress management, sauna</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2">MONITORING (3-Month Follow-up):</h3>
                      <p className="text-amber-800 text-xs">
                        Complete lipid panel, fasting glucose, HbA1c, Omega-3 index, IgG levels, TSH/T3/T4, comprehensive metabolic panel
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800 text-xs">
                        <strong>Disclaimer:</strong> This analysis is for educational purposes based on specialized literature about optimal nutrient levels. Not a substitute for medical advice. Consult your healthcare professional before starting new supplements.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="bg-slate-100 rounded-lg p-4 text-sm">
                <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Blood test analysis with optimal ranges</li>
                  <li>• Multi-format support (PDF, JPG, PNG)</li>
                  <li>• Access to modern Epi-genetic and Molecular medicine expert knowledge</li>
                  <li>• Personalized supplement recommendations</li>
                  <li>• API endpoints for AI agent integration</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-2">
                    <strong>API Base:</strong>{" "}
                    <a 
                      href="https://supplement-therapy.up.railway.app/sse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://supplement-therapy.up.railway.app/sse
                    </a>
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Claude Desktop Setup:</strong> Simply add the SSE URL to the MCP Integration dialog
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://github.com/ma3u/Bloodtest-mcp-server" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    MCP Server (Github)
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Dr. Strunz Knowledge MCP Server */}
            <div id="strunz-knowledge" className="space-y-6 scroll-mt-32">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Dr. Strunz Knowledge MCP</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Advanced MCP (Model Context Protocol) client that connects to Dr. Ulrich Strunz's knowledge base server via SSE. Combines real-time access to his comprehensive research with Gemini AI for enhanced responses on orthomolecular medicine and health optimization.
                </p>
              </div>
              
              <StrunzChatWidget />
              
              <div className="bg-slate-100 rounded-lg p-4 text-sm">
                <h4 className="font-semibold text-slate-800 mb-3">MCP Client Features:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Real-time MCP client with SSE connectivity</li>
                  <li>• Direct access to Dr. Strunz's knowledge server</li>
                  <li>• Gemini AI enhancement for comprehensive responses</li>
                  <li>• Orthomolecular medicine protocol queries</li>
                  <li>• Evidence-based supplement recommendations</li>
                  <li>• Model Context Protocol implementation</li>
                </ul>
                <div className="mt-4 pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-2">
                    <strong>MCP Server:</strong>{" "}
                    <a 
                      href="https://strunz.up.railway.app/sse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      https://strunz.up.railway.app/sse
                    </a>
                  </p>
                  <p className="text-xs text-slate-500">
                    <strong>Architecture:</strong> MCP Client → SSE → Knowledge Base → Gemini AI Enhancement
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-blue-50"
                >
                  <a href="https://github.com/longevitycoach/StrunzKnowledge" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Strunz Knowledge (GitHub)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </TooltipProvider>
  );
};

export default PrototypesPage;