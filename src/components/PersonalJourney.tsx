
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
      metrics: ["Weight", "Blood Pressure"]
    },
    {
      year: "2019",
      title: "Comprehensive Testing",
      description: "Began annual comprehensive blood panels to establish baseline health markers. Corona, daily 5k run or 10k walks",
      status: "completed", 
      metrics: ["Lipid Panel", "HbA1c", "Vitamin D", "Inflammatory Markers"]
    },
    {
      year: "2024",
      title: "Advanced Biomarkers",
      description: "Expanded testing to include advanced longevity and metabolic health markers.",
      status: "completed",
      metrics: ["Microbiom Analysis", "Amminogramm", "Homocysteine", "Advanced Lipids", "Micronutrients"]
    },
    {
      year: "2024",
      title: "Lifestyle Optimization",
      description: "Listening Podcasts, Watching YouTube channels, and reading books of leading epi-genetic and molecular medicine experts. Implemented targeted interventions based on biomarker insights and genetic data. Start intermediate fasten.",
      status: "completed",
      metrics: ["Podcasts", "Expert Books", "Exercise Protocol", "Nutrition Plan", "Supplement Regimen"]
    },
    {
      year: "Q1/2025",
      title: "Nutration and Technology Integration",
      description: "Change to ketogene Nutrition, continuous monitoring for real-time health insights with Apple watch and glycose and keto device. Weekly habbit of a mix of HIIT, Strenght, endurance, recovery",
      status: "completed",
      metrics: ["Nutation", "HRV Monitoring", "Sleep Tracking", "Recovery Metrics", "Vo2Max", "No Sugar", "Low Carb"]
    },
    {
      year: "Q2/2025",
      title: "Technology & AI Platform Evaluation",
      description: "Comprehensive evaluation of cutting-edge technologies and AI agent platforms for personalized health optimization. Testing various monitoring devices, advanced blood testing protocols, and building knowledge bases in epigenetic and molecular medicine to create the foundation for precision longevity interventions.",
      status: "current",
      metrics: ["AI Agent Systems", "Epigenetic Knowledge Base", "Molecular Medicine", "Device Testing", "Blood Test Protocols"]
    },
    {
      year: "Q3/2025",
      title: "First MVP on Mabu.red",
      description: "Evaluating AI Development Cycle with Windsurf, Lovable, Claude Code and MCP Servers. Preparing for Triathlon",
      status: "current",
      metrics: ["AI Agent Systems", "Epigenetic Knowledge Base", "Molecular Medicine", "Device Testing", "Blood Test Protocols"]
    },
    {
      year: "Q3/2025",
      title: "Community Launch",
      description: "Publish LinkedIn articles. Public Speaking on conferences. Launch platform for early adopters and begin building a community of health optimizers. Focus on user onboarding, feedback collection, and iterative feature development based on real-world usage patterns.",
      status: "current",
      metrics: ["Beta Testing", "User Feedback", "Feature Development", "Community Building"]
    },
    {
      year: "Q4/2024",
      title: "Platform Development",
      description: "Full Lifestyle and Longevity platform development with advanced features, AI-powered insights, and comprehensive health optimization MCP Servers.",
      status: "planned",
      metrics: ["AI Integration", "Advanced Analytics", "User Dashboard", "Mobile App"]
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
                    <p className="text-slate-600 mb-4">{event.description}</p>
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
