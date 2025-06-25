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
      description: "Started tracking basic health metrics after realizing the importance of preventive care. 
      Start daily habits: morning sport, running, cycling to work, always take the stairs, cold shower, one time gym, Wim Hof Breathing.",
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
      year: "2020",
      title: "Advanced Biomarkers",
      description: "Expanded testing to include advanced longevity and metabolic health markers.",
      status: "completed",
      metrics: ["APOE Genotype", "Homocysteine", "Advanced Lipids", "Micronutrients"]
    },
    {
      year: "2021",
      title: "Lifestyle Optimization",
      description: "Implemented targeted interventions based on biomarker insights and genetic data.",
      status: "completed",
      metrics: ["Exercise Protocol", "Nutrition Plan", "Supplement Regimen"]
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Integrated wearables and continuous monitoring for real-time health insights.",
      status: "completed",
      metrics: ["CGM", "HRV Monitoring", "Sleep Tracking", "Recovery Metrics"]
    },
    {
      year: "2023",
      title: "Platform Development",
      description: "Started building LongevityCoa.ch to share insights and help others optimize their healthspan.",
      status: "current",
      metrics: ["Platform Design", "Data Integration", "User Experience"]
    },
    {
      year: "2024",
      title: "Community Launch",
      description: "Launch platform for early adopters and begin building a community of health optimizers.",
      status: "planned",
      metrics: ["Beta Testing", "User Feedback", "Feature Development"]
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
            My daily habits form the foundation of longevity: morning sports to kickstart metabolism, running and cycling to work for cardiovascular health, always taking the stairs for functional movement, cold showers for hormetic stress and resilience, and regular gym sessions for strength and muscle preservation. These atomic habits compound into exponential health benefits over time.
          </p>
          
          <p className="text-slate-600 mb-4">
            Start daily habits: morning sport, running, cycling to work, always take the stairs, cold shower, gym, Wim Hof Breathing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            <Button 
              asChild
              variant="outline" 
              className="flex items-center gap-2 hover:bg-emerald-50"
            >
              <a href="https://mabu.red/" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Live Demo
              </a>
            </Button>
          </div>
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
      </div>
    </section>
  );
};

export default PersonalJourney;
