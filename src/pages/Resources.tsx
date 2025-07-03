
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { Book, Youtube, Link, ExternalLink } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Resources = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'english';

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: value });
  };

  // Update URL on tab change
  useEffect(() => {
    if (activeTab !== 'english' && activeTab !== 'german') {
      setSearchParams({ tab: 'english' });
    }
  }, [activeTab, setSearchParams]);

const englishBooks = [
  {
    "title": "Lifespan: Why We Age―and Why We Don't Have To",
    "author": "David A. Sinclair",
    "description": "Harvard geneticist's groundbreaking research on aging and longevity",
    "url": "https://www.amazon.com/dp/1501191977"
  },
  {
    "title": "The Longevity Diet",
    "author": "Valter Longo",
    "description": "Science-based approach to eating for longevity and health",
    "url": "https://www.amazon.com/dp/0525534075"
  },
  {
    "title": "Outlive: The Science and Art of Longevity",
    "author": "Peter Attia",
    "description": "Comprehensive guide to extending healthspan through precision medicine",
    "url": "https://www.amazon.com/dp/0593236599"
  },
  {
    "title": "The Blue Zones Solution",
    "author": "Dan Buettner",
    "description": "Lessons from the world's longest-lived populations",
    "url": "https://www.amazon.com/dp/1426216130"
  },
  {
    "title": "Super Human: The Bulletproof Plan to Age Backward and Maybe Even Live Forever",
    "author": "Dave Asprey",
    "description": "Bulletproof plan for aging backward and maybe even living forever",
    "url": "https://www.amazon.com/dp/006285325X"
  },
  {
    "title": "Breath: The New Science of a Lost Art",
    "author": "James Nestor",
    "description": "Revolutionary insights into the science of breathing and its impact on health",
    "url": "https://www.amazon.com/dp/0735213615"
  },
  {
    "title": "The Wim Hof Method",
    "author": "Wim Hof",
    "description": "Activate your full human potential through breathing, cold therapy, and commitment",
    "url": "https://www.amazon.com/dp/1683644766"
  }
];

const germanBooks = [
  {
    "title": "Blut – Das Geheimnis unseres flüssigen Organs",
    "author": "Dr. Ulrich Strunz",
    "description": "Umfassende Analyse der Bedeutung von Blut für unsere Gesundheit",
    "url": "https://www.amazon.de/dp/3453201108"
  },
  {
    "title": "Der Schlüssel zur Gesundheit",
    "author": "Dr. Ulrich Strunz",
    "description": "Grundlagen der Präventionsmedizin und Gesundheitsoptimierung",
    "url": "https://www.amazon.de/dp/3453201973"
  },
  {
    "title": "Ab morgen jünger!",
    "author": "Nina Ruge",
    "description": "Neueste Erkenntnisse der Longevity-Forschung praktisch angewandt",
    "url": "https://www.amazon.de/Ab-morgen-j%C3%BCnger-bleiben-Longevity/dp/3453218817"
  },
  {
    "title": "Die Amino-Revolution",
    "author": "Dr. Ulrich Strunz",
    "description": "Wie Aminosäuren den Alterungsprozess beeinflussen können",
    "url": "https://www.audible.de/pd/Die-Amino-Revolution-Hoerbuch/B0BB8BVQCF"
  },
  {
    "title": "Nährstoff-Therapie",
    "author": "Dr. med. Helena Orfanos-Boeckel",
    "description": "Orthomolekulare Medizin in der praktischen Anwendung",
    "url": "https://www.audible.de/pd/Naehrstoff-Therapie-Hoerbuch/"
  },
  {
    "title": "Nährstoff-Therapie - Der Praxisleitfaden",
    "author": "Dr. med. Helena Orfanos-Boeckel",
    "description": "Orthomolekulare Medizin richtig dosieren und anwenden. Vorbeugen und heilen mit Vitaminen, Mineralstoffen & Co.",
    "url": "https://www.thalia.de/shop/home/artikeldetails/A1068364946"
  },
  {
    "title": "Der Glukose-Trick",
    "author": "Jessie Inchauspé",
    "description": "Praktische Strategien für stabilen Blutzucker und bessere Gesundheit",
    "url": "https://www.audible.de/pd/Der-Glukose-Trick-Hoerbuch/B0C62882BF"
  },
  {
    "title": "Darm mit Charme",
    "author": "Giulia Enders",
    "description": "Alles über ein unterschätztes Organ und seine Bedeutung für die Gesundheit",
    "url": "https://www.audible.de/pd/Darm-mit-Charme-Hoerbuch/3844921346"
  }
];

const englishPodcasts = [
  {
    "title": "The Drive with Dr. Peter Attia",
    "host": "Dr. Peter Attia",
    "description": "Deep insights into nutrition, exercise, sleep, and disease prevention",
    "url": "https://peterattiamd.com/podcast/"
  },
  {
    "title": "Huberman Lab",
    "host": "Dr. Andrew Huberman",
    "description": "Stanford neuroscientist explores science-based tools for everyday life",
    "url": "https://hubermanlab.com/podcast/"
  },
  {
    "title": "FoundMyFitness",
    "host": "Dr. Rhonda Patrick",
    "description": "Science-focused discussions on nutrition, aging, and health optimization",
    "url": "https://open.spotify.com/show/5QjpaU0o1Q2MkVZwwG3y7d"
  },
  {
    "title": "Longevity by Design",
    "host": "Dr. Gil Blander",
    "description": "Conversations with leading scientists about aging research and practical strategies",
    "url": "https://open.spotify.com/show/04NcUniuNSDObfUpY8aiPO"
  }
];

const germanPodcasts = [
  {
    "title": "Healthwise",
    "host": "Nils Behrens",
    "description": "Gespräche über moderne Gesundheit mit Experten aus Medizin und Wellness",
    "url": "https://open.spotify.com/show/2QiCahwZCkhDbR6zWvGpzc"
  },
  {
    "title": "Flowgrade Show",
    "host": "Max Gotzler",
    "description": "Biohacking, Performance und Gesundheitsoptimierung auf höchstem Niveau",
    "url": "https://www.flowgrade.de/podcasts/"
  },
  {
    "title": "staYoung – Der Longevity-Podcast",
    "host": "Nina Ruge",
    "description": "Expertengespräche über Ernährung, Epigenetik und Fitness für Langlebigkeit",
    "url": "https://open.spotify.com/show/0iqqRlExC9vTovYJejxNlI"
  },
  {
    "title": "Lifestyle of Longevity",
    "host": "Dr. Kati Ernst & Kristine Zeller",
    "description": "Praktische Tipps und Routinen für ein längeres, gesünderes Leben",
    "url": "https://open.spotify.com/show/5oN3i53N1AvBdfXtrmPURl"
  },
  {
    "title": "Bio360 - Gesundheit, Biohacking & Selbstoptimierung",
    "host": "Unkas Gemmeker",
    "description": "Ganzheitliche Gesundheit und Performance-Optimierung",
    "url": "https://open.spotify.com/show/3Ld04M8HiptuS4gsTIP1jp?si=c5vn3g0nTaKeINGzPTTKKQ&nd=1&dlsi=8a34d0b950824b79"
  }
];

const englishYouTube = [
  {
    "title": "David Sinclair",
    "description": "Harvard longevity researcher sharing latest anti-aging science",
    "handle": "@davidsinclairpodcast",
    "url": "https://www.youtube.com/@davidsinclairpodcast"
  },
  {
    "title": "Peter Attia MD",
    "description": "Longevity medicine and health optimization strategies",
    "handle": "@PeterAttiaMD",
    "url": "https://www.youtube.com/@PeterAttiaMD"
  },
  {
    "title": "FoundMyFitness",
    "description": "Dr. Rhonda Patrick's nutrition science and healthspan research",
    "handle": "@FoundMyFitness",
    "url": "https://www.youtube.com/@FoundMyFitness"
  },
  {
    "title": "Ben Greenfield Life",
    "description": "Biohacking and performance optimization content",
    "handle": "@BenGreenfieldLife",
    "url": "https://www.youtube.com/@BenGreenfieldLife"
  },
  {
    "title": "Thomas DeLauer",
    "description": "Intermittent fasting, keto, and metabolic health education",
    "handle": "@ThomasDeLauer",
    "url": "https://www.youtube.com/@ThomasDeLauer"
  },
  {
    "title": "Huberman Lab Clips",
    "description": "Key insights from the Huberman Lab podcast",
    "handle": "@HubermanLabClips",
    "url": "https://www.youtube.com/@HubermanLabClips"
  },
  {
    "title": "The Diary of a CEO",
    "description": "Health and longevity conversations with leading experts",
    "handle": "@TheDiaryOfACEO",
    "url": "https://www.youtube.com/playlist?list=PL22egh3ok4cNCQxTjydDfUxDtX5mMj4l8"
  }
];

const germanYouTube = [
  {
    "title": "Flowgrade",
    "description": "Max Gotzler teilt Biohacking-Strategien und Gesundheitstipps",
    "handle": "@FlowgradeDE",
    "url": "https://www.youtube.com/@FlowgradeDE"
  },
  {
    "title": "Dr. med. Petra Bracht",
    "description": "Gesundheitstipps und Präventionsmedizin von der Ärztin",
    "handle": "@DrPetraBracht",
    "url": "https://www.youtube.com/@DrPetraBracht"
  },
  {
    "title": "Prof. Dr. Spitz",
    "description": "Vitamin D und Präventionsmedizin vom Experten",
    "handle": "@ProfDrSpitz",
    "url": "https://www.youtube.com/@ProfDrSpitz"
  },
  {
    "title": "Bio360",
    "description": "Unkas Gemmeker über ganzheitliche Gesundheit und Biohacking",
    "handle": "@Bio360",
    "url": "https://www.youtube.com/@Bio360"
  },
  {
    "title": "Healthwise",
    "description": "Nils Behrens diskutiert moderne Gesundheitsansätze",
    "handle": "@HealthwiseDE",
    "url": "https://www.youtube.com/@Sunday_Natural"
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
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
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
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
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

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
