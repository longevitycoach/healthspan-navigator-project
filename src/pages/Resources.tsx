
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { Book, Youtube, Link } from "lucide-react";

const Resources = () => {
  const englishBooks = [
    {
      title: "Lifespan: Why We Age―and Why We Don't Have To",
      author: "David A. Sinclair",
      description: "Harvard geneticist's groundbreaking research on aging and longevity"
    },
    {
      title: "The Longevity Diet",
      author: "Valter Longo",
      description: "Science-based approach to eating for longevity and health"
    },
    {
      title: "Outlive: The Science and Art of Longevity",
      author: "Peter Attia",
      description: "Comprehensive guide to extending healthspan through precision medicine"
    },
    {
      title: "The Blue Zones Solution",
      author: "Dan Buettner",
      description: "Lessons from the world's longest-lived populations"
    },
    {
      title: "Super Human",
      author: "Dave Asprey",
      description: "Bulletproof plan for aging backward and maybe even living forever"
    }
  ];

  const germanBooks = [
    {
      title: "Gesund älter werden",
      author: "Dr. Ulrich Strunz",
      description: "Molekularmedizinische Ansätze für gesundes Altern"
    },
    {
      title: "Forever Young",
      author: "Dr. Ulrich Strunz",
      description: "Das Geheimnis der Telomere für ein langes Leben"
    },
    {
      title: "Die Heilkraft der Natur",
      author: "Dr. med. Helena Orfanos-Boeckel",
      description: "Naturheilkundliche Ansätze für Langlebigkeit"
    },
    {
      title: "Zellverjüngung",
      author: "Dr. med. Petra Bracht",
      description: "Wissenschaftliche Methoden zur Zellregeneration"
    }
  ];

  const englishPodcasts = [
    {
      title: "The Peter Attia Drive",
      host: "Peter Attia",
      description: "Deep dives into longevity, health optimization, and precision medicine"
    },
    {
      title: "FoundMyFitness",
      host: "Rhonda Patrick",
      description: "Science-based discussions on nutrition, aging, and healthspan"
    },
    {
      title: "The Tim Ferriss Show",
      host: "Tim Ferriss",
      description: "Interviews with world-class performers on health optimization"
    },
    {
      title: "Ben Greenfield Life",
      host: "Ben Greenfield",
      description: "Biohacking, longevity, and performance optimization"
    },
    {
      title: "The Longevity Podcast",
      host: "Various Experts",
      description: "Latest research and strategies for extending lifespan"
    }
  ];

  const germanPodcasts = [
    {
      title: "Gesundheit to go",
      host: "Dr. med. Petra Bracht",
      description: "Gesundheitstipps und Longevity-Strategien auf Deutsch"
    },
    {
      title: "Strunz Podcast",
      host: "Dr. Ulrich Strunz",
      description: "Molekularmedizin und Präventionsmedizin"
    },
    {
      title: "Biohacking Podcast",
      host: "Max Gotzler",
      description: "Optimierung von Gesundheit und Leistungsfähigkeit"
    },
    {
      title: "Flowgrade Show",
      host: "Max Gotzler",
      description: "Performance und Gesundheitsoptimierung"
    }
  ];

  const englishYouTube = [
    {
      title: "David Sinclair",
      description: "Harvard longevity researcher sharing latest anti-aging science",
      handle: "@DavidSinclairPodcast"
    },
    {
      title: "Peter Attia MD",
      description: "Longevity medicine and health optimization strategies",
      handle: "@PeterAttiaMD"
    },
    {
      title: "Rhonda Patrick",
      description: "Nutrition science and healthspan research",
      handle: "@FoundMyFitness"
    },
    {
      title: "Ben Greenfield Life",
      description: "Biohacking and performance optimization",
      handle: "@BenGreenfieldLife"
    },
    {
      title: "Thomas DeLauer",
      description: "Intermittent fasting and metabolic health",
      handle: "@ThomasDeLauer"
    }
  ];

  const germanYouTube = [
    {
      title: "Dr. med. Petra Bracht",
      description: "Gesundheitstipps und Präventionsmedizin",
      handle: "@DrPetraBracht"
    },
    {
      title: "Max Gotzler",
      description: "Biohacking und Gesundheitsoptimierung",
      handle: "@MaxGotzler"
    },
    {
      title: "Flowgrade",
      description: "Performance und Longevity auf Deutsch",
      handle: "@FlowgradeDE"
    },
    {
      title: "Prof. Dr. Spitz",
      description: "Vitamin D und Präventionsmedizin",
      handle: "@ProfDrSpitz"
    }
  ];

  const ResourceCard = ({ icon: Icon, title, items, type }: any) => (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-blue-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item: any, index: number) => (
            <div key={index} className="border-l-4 border-blue-200 pl-4">
              <h4 className="font-semibold text-slate-900">{item.title}</h4>
              {item.author && (
                <p className="text-sm text-slate-600 mb-1">by {item.author}</p>
              )}
              {item.host && (
                <p className="text-sm text-slate-600 mb-1">hosted by {item.host}</p>
              )}
              {item.handle && (
                <p className="text-sm text-slate-600 mb-1">{item.handle}</p>
              )}
              <p className="text-sm text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Longevity Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Curated collection of books, podcasts, and YouTube channels to deepen your understanding of longevity science and health optimization
            </p>
          </div>

          <Tabs defaultValue="english" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="english">English Resources</TabsTrigger>
              <TabsTrigger value="german">German Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="english" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <ResourceCard
                  icon={Book}
                  title="Essential Books"
                  items={englishBooks}
                  type="books"
                />
                <ResourceCard
                  icon={Link}
                  title="Top Podcasts"
                  items={englishPodcasts}
                  type="podcasts"
                />
                <ResourceCard
                  icon={Youtube}
                  title="YouTube Channels"
                  items={englishYouTube}
                  type="youtube"
                />
              </div>
            </TabsContent>

            <TabsContent value="german" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <ResourceCard
                  icon={Book}
                  title="Wichtige Bücher"
                  items={germanBooks}
                  type="books"
                />
                <ResourceCard
                  icon={Link}
                  title="Top Podcasts"
                  items={germanPodcasts}
                  type="podcasts"
                />
                <ResourceCard
                  icon={Youtube}
                  title="YouTube Kanäle"
                  items={germanYouTube}
                  type="youtube"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  The field of longevity science is rapidly evolving. Follow these resources to stay current with the latest research and recommendations.
                </p>
                <Button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
                >
                  Back to Top
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
