
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const PersonalJourney = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "Health Awakening",
      description: "Started tracking basic health metrics after realizing the importance of preventive care. Start daily habits: morning sport, running, cycling to work, always take the stairs, cold shower, one time gym, Wim Hof Breathing.",
      status: "completed",
      metrics: ["Health Tracking", "Exercise Habits"]
    },
    {
      year: "2019",
      title: "Comprehensive Testing",
      description: "Began annual comprehensive blood panels to establish baseline health markers. Corona, daily 5k run or 10k walks",
      status: "completed", 
      metrics: ["Biomarker Testing", "Cardiovascular Health", "Metabolic Health", "Nutrition Tracking"]
    },
    {
      year: "2024",
      title: "Advanced Biomarkers",
      description: "Expanded testing to include advanced longevity and metabolic health markers.",
      status: "completed",
      metrics: ["Advanced Testing", "Microbiome Analysis", "Metabolic Health", "Nutrition Optimization"]
    },
    {
      year: "2024",
      title: "Lifestyle Optimization",
      description: (
        <>
          Listening to podcasts, watching YouTube channels, and reading books from leading epigenetic and molecular medicine experts. Implemented targeted interventions based on biomarker insights and genetic data. Started 16:8 intermittent fasting protocol for metabolic optimization.{" "}
          <a 
            href="/resources" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            View detailed insights and tools in the resources section
          </a>
          .
        </>
      ),
      status: "completed",
      metrics: ["Education", "Research", "Exercise Protocol", "Nutrition Protocol", "Supplementation"]
    },
    {
      year: "Q1/2025",
      title: "Nutrition & Technology Integration",
      description: (
        <>
          Transitioned to a ketogenic nutrition protocol for metabolic optimization and enhanced fat adaptation. Implemented continuous health monitoring using Apple Watch for comprehensive biometric tracking alongside specialized glucose and ketone monitoring devices for real-time metabolic insights.
          
          <br /><br />
          
          Established a structured weekly training protocol combining High-Intensity Interval Training (HIIT) for metabolic conditioning, strength training for muscle preservation and power development, endurance sessions for cardiovascular adaptation, and dedicated recovery protocols for optimal adaptation and injury prevention.
          
          <br /><br />
          
          This integrated approach to nutrition and training optimization is detailed in my LinkedIn article:{" "}
          <a 
            href="https://www.linkedin.com/pulse/build-personalized-health-coach-based-current-state-buchhorn-roth-ptyfe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            "Build a Personalized Health Coach Based on Current State"
          </a>
          , which outlines the systematic approach to creating data-driven health optimization strategies.
        </>
      ),
      status: "completed",
      metrics: ["Nutrition Protocol", "Health Monitoring", "Sleep Optimization", "Recovery Tracking", "Performance Metrics"]
    },
    {
      year: "Q2/2025",
      title: "Technology & AI Platform Evaluation",
      description: "Comprehensive evaluation of cutting-edge technologies and AI agent platforms for personalized health optimization. Testing various monitoring devices, advanced blood testing protocols, and building knowledge bases in epigenetic and molecular medicine to create the foundation for precision longevity interventions.",
      status: "completed",
      metrics: ["AI Systems", "Knowledge Base", "Research", "Technology Testing", "Protocol Development"]
    },
    {
      year: "Q3/2025",
      title: "Platform Launch & Athletic Performance Convergence",
      description: (
        <>
          <p className="mb-4">
            Launched the first functional prototype at{" "}
            <a 
              href="https://mabu.red/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              mabu.red
            </a>
            , marking the transition from research to real-world application. This MVP demonstrates the power of combining comprehensive health data analysis with AI-driven insights, serving as both a validation of the platform concept and a personal tool for optimizing my own health journey.
          </p>
          
          <p className="mb-4">
            Applied cutting-edge AI development methodologies following Springer's Advanced Software Engineering frameworks, implementing the BMAD (Build-Measure-Analyze-Deploy) method integrated into the SDLC process. Leveraged Windsurf for collaborative development, Lovable for rapid prototyping, Claude Code for AI-assisted programming, and MCP Servers for scalable backend architecture.
          </p>
          
          <p className="mb-4">
            <strong>Personal Health Optimization Through Platform Development:</strong> Used my triathlon preparation as the ultimate real-world testing ground for the platform. Conducted comprehensive performance assessments including VO2 max testing, Heart Rate Variability (HRV) analysis, pre-seasonal lung function evaluation, and body plethysmography for respiratory assessment. This created a powerful feedback loop where my personal health optimization directly informed platform development, ensuring the tools built are grounded in real athlete needs and validated through personal experience.
          </p>
          
          <p>
            The convergence of building technology and personal athletic performance created invaluable insights: every feature developed was immediately tested on my own training data, every algorithm refined through personal biomarker tracking, and every user interface decision validated through my daily health optimization routine.
          </p>
        </>
      ),
      status: "completed",
      metrics: ["AI Development", "Platform Building", "Research", "Technology Integration", "Performance Training", "BMAD Method", "SDLC Integration", "VO2 Max Testing", "HRV Analysis", "Respiratory Assessment", "MVP Launch", "Real-world Validation"]
    },
    {
      year: "Q3/2025",
      title: "Community Launch",
      description: (
        <>
          <p className="mb-4">
            Launch comprehensive community engagement strategy combining thought leadership and platform development. Publishing LinkedIn articles and speaking at conferences to establish expertise while launching the platform for early adopters and building a community of health optimizers.
          </p>
          
          <p className="mb-6">
            Active participation in established communities like the{" "}
            <a 
              href="https://www.linkedin.com/company/livlongevitylabs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Liv longevity community
            </a>{" "}
            and{" "}
            <a 
              href="https://newzapiens.com/community/users/matthias-buchhorn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              New Zapiens community
            </a>{" "}
            provides valuable insights and networks while focusing on user onboarding, feedback collection, and iterative feature development based on real-world usage patterns.
          </p>
          
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-3">Strategic Berlin Longevity Ecosystem Integration</h4>
              <p className="text-sm mb-3">
                Berlin's emerging longevity ecosystem offers unique partnership opportunities. The city hosts Germany's first longevity clinic (
                <a href="https://aiva-institut.de/aesthetik-longevity-center-berlin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">AIVA</a>
                ) alongside key organizations: 
                 <a href="https://zelar.city" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"> Zelar.city</a> (permanent longevity hub), 
                 <a href="https://www.lifesummit.berlin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"> Life Summit</a> (premier events), and 
                 <a href="https://www.antispaces.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"> ANTI</a> (holistic health community on Telegram). This ecosystem provides the perfect foundation for collaborative innovation in personalized health optimization.
              </p>
              
              <p className="text-sm mb-3">
                <strong>International Expansion:</strong> Join the <a href="https://www.planetir.org/the-gathering-2025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Planitir event in Prague</a> to exchange with other entrepreneurs and discuss data sharing concepts, expanding the network beyond Berlin to create a pan-European longevity innovation community.
              </p>
            </div>
            
            <div>
              <h5 className="font-medium text-slate-800 mb-2">Premier Clinical Partnership: Charité Collaboration</h5>
              <p className="text-sm">
                The <a href="https://fs-cpc.de/en/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Friede Springer Cardiovascular Prevention Center</a> (€70M initiative) represents a premier collaboration opportunity. Their focus on personalized prevention, digital health, and patient adherence creates perfect synergy with AI-powered longevity coaching. Strategic positioning of coaching as the behavioral change and lifestyle optimization component that complements their advanced clinical protocols and research capabilities.
              </p>
            </div>
          </div>
        </>
      ),
      status: "current",
      metrics: ["Beta Testing", "User Feedback", "Platform Development", "Community Building", "Partnership Networks"]
    },
    {
      year: "Q4/2024",
      title: "Platform Development",
      description: "Full Lifestyle and Longevity platform development with advanced features, AI-powered insights, and comprehensive health optimization MCP Servers.",
      status: "planned",
      metrics: ["AI Integration", "Advanced Analytics", "Platform Development", "Technology Integration"]
    }
  ];

  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarImage 
                src="/lovable-uploads/4f589e6f-b895-43dc-a65f-33125c1abb17.png" 
                alt="Founder Profile"
                className="object-cover"
              />
              <AvatarFallback className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
                LC
              </AvatarFallback>
            </Avatar>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            My Personal Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            From basic health tracking to building a comprehensive longevity platform
          </p>
          
          <p className="text-slate-600 mb-4">
            My daily habits form the foundation of longevity: morning sports to kickstart metabolism, running and cycling to work for cardiovascular health, always taking the stairs for functional movement, cold showers for hormetic stress and resilience, and one time per week gym sessions for strength and muscle preservation. These atomic habits compound into exponential health benefits over time.
          </p>
          
          <p className="text-slate-600 mb-4">
            Start daily habits: morning sport, running, cycling to work, always take the stairs, cold shower, one time per week gym, Wim Hof Breathing.
          </p>
          
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden md:block"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 border-4 border-white shadow-lg z-10"></div>
                
                {/* Content card */}
                <Card className={`ml-0 md:ml-16 w-full transition-all duration-300 hover:shadow-lg ${
                  event.status === 'current' ? 'ring-2 ring-blue-500 bg-blue-50/50' : 
                  event.status === 'planned' ? 'bg-slate-50/50' : 'bg-white'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-slate-800">
                        {event.year} - {event.title}
                      </CardTitle>
                      <Badge 
                        variant={
                          event.status === 'completed' ? 'default' : 
                          event.status === 'current' ? 'secondary' : 'outline'
                        }
                        className={
                          event.status === 'completed' ? 'bg-emerald-500' :
                          event.status === 'current' ? 'bg-blue-500' : ''
                        }
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-slate-600 mb-4">
                      {typeof event.description === 'string' ? (
                        <p>{event.description}</p>
                      ) : (
                        <div>
                          {event.year === "Q2/2025" && event.title === "Technology & AI Platform Evaluation" && (
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                              <h4 className="font-semibold text-slate-800 mb-3">Community Building & Open Standards Leadership Journey</h4>
                              <div className="space-y-3 text-sm">
                                <p>
                                  <strong>Open Source Foundation:</strong> My journey as a community builder began with recognizing that sustainable health technology requires open standards and collaborative development. Health data should be interoperable, accessible, and built on transparent protocols that serve users, not vendor lock-in.
                                </p>
                                <p>
                                  <strong>Standards Leadership:</strong> Leading initiatives to establish open standards for health data exchange, biomarker protocols, and AI model transparency in longevity research. Advocating for FHIR-compliant health records, standardized biomarker ranges, and open APIs that enable seamless integration between health platforms.
                                </p>
                                <p>
                                  <strong>Community Catalysis:</strong> Building bridges between traditionally siloed communities - longevity researchers, open source developers, health practitioners, and biohackers. Creating shared knowledge bases, collaborative research protocols, and open-source tools that accelerate innovation while maintaining scientific rigor.
                                </p>
                                <p>
                                  <strong>Democratizing Health Tech:</strong> Championing the principle that advanced health optimization shouldn't be exclusive to the wealthy. Open source approaches enable global accessibility, peer review, and continuous improvement of health technologies and protocols.
                                </p>
                                <p>
                                  <strong>Future Vision:</strong> Establishing a federated network of health optimization communities where data, insights, and protocols flow freely while respecting privacy. Creating the infrastructure for collaborative longevity research that transcends institutional boundaries.
                                </p>
                              </div>
                            </div>
                          )}
                          {event.description}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.metrics.map((metric, metricIndex) => (
                        <Badge key={metricIndex} variant="outline" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Prototypes Teaser */}
        <div id="prototypes" className="mt-16 pt-16 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
              Current Prototypes
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
              Exploring what brings the most benefit for health and longevity enthusiasts in the discovery phase.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold"
            >
              <a href="/prototypes">
                View All Prototypes →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalJourney;
