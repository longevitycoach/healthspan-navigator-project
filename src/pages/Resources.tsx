import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { Book, Youtube, Link, ExternalLink } from "lucide-react";

const Resources = () => {
  const englishBooks = [
    {
      title: "Lifespan: Why We Age―and Why We Don't Have To",
      author: "David A. Sinclair",
      description: "Harvard geneticist's groundbreaking research on aging and longevity",
      url: "https://www.amazon.com/Lifespan-Why-Age-Dont-Have/dp/1501191977"
    },
    {
      title: "The Longevity Diet",
      author: "Valter Longo",
      description: "Science-based approach to eating for longevity and health",
      url: "https://www.amazon.com/Longevity-Diet-Discover-Activation-Regeneration/dp/0525534075"
    },
    {
      title: "Outlive: The Science and Art of Longevity",
      author: "Peter Attia",
      description: "Comprehensive guide to extending healthspan through precision medicine",
      url: "https://www.amazon.com/Outlive-Science-Art-Longevity-ebook/dp/B0B1BTJLJW"
    },
    {
      title: "The Blue Zones Solution",
      author: "Dan Buettner",
      description: "Lessons from the world's longest-lived populations",
      url: "https://www.amazon.com/Blue-Zones-Solution-Eating-Longest/dp/1426216130"
    },
    {
      title: "Super Human",
      author: "Dave Asprey",
      description: "Bulletproof plan for aging backward and maybe even living forever",
      url: "https://www.amazon.com/Super-Human-Bulletproof-Backward-Forever/dp/006285325X"
    },
    {
      title: "Breath: The New Science of a Lost Art",
      author: "James Astor",
      description: "Breath turns the conventional wisdom of what we thought we knew about our most basic biological function on its head (2020)",
      url: "https://www.amazon.com/Breath-New-Science-Lost-Art/dp/0735213615"
    },
    {
      title: "Wim Hof Method",
      author: "Wim Hof",
      description: "The inspired Tummo meditation offers a unique combination of physical strengthening, emotional cleansing. It can help to find inner balance and at the same time prepare the body for extreme conditions (2022)",
      url: "https://www.amazon.com/Wim-Hof-Method-Activate-Potential/dp/1683644766"
    }
  ];

  const germanBooks = [
    {
      title: "Blut – Das Geheimnis unseres flüssigen Organs",
      author: "Dr. Ulrich Strunz",
      description: "Audiable incl. in membership (2016)",
      url: "https://www.amazon.de/Blut-Das-Geheimnis-unseres-fl%C3%BCssigen/dp/3453201892"
    },
    {
      title: "Der Schlüssel zur Gesundheit",
      author: "Dr. Ulrich Strunz",
      description: "Grundlagen der Präventionsmedizin (2016)",
      url: "https://www.amazon.de/Schl%C3%BCssel-zur-Gesundheit-Ulrich-Strunz/dp/3453201973"
    },
    {
      title: "Ab morgen jünger!",
      author: "Nina Ruge",
      description: "Neueste Erkenntnisse der Longevity-Forschung (2025)",
      url: "https://www.amazon.de/Ab-morgen-j%C3%BCnger-Erkenntnisse-Longevity-Forschung/dp/3442178827"
    },
    {
      title: "Die Amino-Revolution: Der Alters-Code entschlüsselt",
      author: "Dr. Ulrich Strunz",
      description: "Wissenschaftliche Ansätze zur Zellregeneration (2021)",
      url: "https://www.amazon.de/Amino-Revolution-Alters-Code-entschl%C3%BCsselt-Strunz/dp/3453207793"
    },
    {
      title: "Nährstoff-Therapie",
      author: "Dr. med. Helena Orfanos-Boeckel",
      description: "Orthomolekulare Medizin in der Praxis (2021)",
      url: "https://www.amazon.de/N%C3%A4hrstoff-Therapie-Orthomolekulare-Medizin-Praxis/dp/3432114524"
    },
    {
      title: "Nährstoff-Therapie Praxis",
      author: "Dr. med. Helena Orfanos-Boeckel",
      description: "Praktische Anwendung der orthomolekularen Medizin (2023)",
      url: "https://www.amazon.de/N%C3%A4hrstoff-Therapie-Praxis-Helena-Orfanos-Boeckel/dp/3432117515"
    },
    {
      title: "Neue Wege der Heilung",
      author: "Dr. Ulrich Strunz",
      description: "Innovative Ansätze in der Präventivmedizin",
      url: "https://www.amazon.de/Neue-Wege-Heilung-Ulrich-Strunz/dp/3453605756"
    },
    {
      title: "Stoffwechsel-Kompass",
      author: "Ingo Frohböse",
      description: "Wissenschaftlich fundierter Leitfaden für optimalen Stoffwechsel",
      url: "https://www.amazon.de/Stoffwechsel-Kompass-wissenschaftlich-fundierter-Leitfaden/dp/3833885181"
    },
    {
      title: "Verjünge deine Gene",
      author: "Prof. Dr. med. Bernd Kleine-Gunk & Bernhard Hobelsberger",
      description: "Epigenetische Ansätze für gesundes Altern (2023)",
      url: "https://www.amazon.de/Verj%C3%BCnge-deine-Gene-Kleine-Gunk/dp/3833885203"
    },
    {
      title: "Der Glukose-Trick – Das Praxisbuch",
      author: "Jessie Inchauspé",
      description: "Praktische Strategien für stabilen Blutzucker (2023)",
      url: "https://www.amazon.de/Glukose-Trick-Praxisbuch-Jessie-Inchausp%C3%A9/dp/3453218558"
    },
    {
      title: "Darm mit Charme",
      author: "Giulia Enders",
      description: "Alles über ein unterschätztes Organ (2017)",
      url: "https://www.amazon.de/Darm-mit-Charme-untersch%C3%A4tztes-Organ/dp/3548376959"
    }
  ];

  const englishPodcasts = [
    {
      title: "Lifespan",
      host: "Dr. David Sinclair",
      description: "Harvard professor dives into the science of aging and interventions that may slow or reverse it",
      url: "https://podcasts.apple.com/us/podcast/lifespan-with-dr-david-sinclair/id1517529374"
    },
    {
      title: "The Drive",
      host: "Dr. Peter Attia",
      description: "Deep insights into nutrition, exercise, and disease prevention with health leaders",
      url: "https://peterattiamd.com/podcast/"
    },
    {
      title: "Huberman Lab",
      host: "Dr. Andrew Huberman",
      description: "Stanford neuroscientist explores how neuroscience and lifestyle factors affect healthspan",
      url: "https://hubermanlab.com/"
    },
    {
      title: "FoundMyFitness",
      host: "Rhonda Patrick, Ph.D.",
      description: "Micronutrients, exercise, and evidence-based health optimization",
      url: "https://www.foundmyfitness.com/podcast"
    },
    {
      title: "Longevity by Design",
      host: "Dr. Gil Blander",
      description: "Leading scientists discuss the latest in aging research and practical strategies",
      url: "https://www.insidetracker.com/blog/category/longevity-by-design-podcast"
    }
  ];

  const germanPodcasts = [
    {
      title: "Healthwise",
      host: "Nils Behrens",
      description: "Explores what true health means today, featuring conversations with specialists across medicine, therapy, and wellness",
      url: "https://open.spotify.com/show/healthwise"
    },
    {
      title: "Flowgrade",
      host: "Max Gotzler",
      description: "Expert interviews, how-to videos, recipes, and motivational clips to help you achieve your happiest and most powerful flow state",
      url: "https://flowgrade.de/podcast/"
    },
    {
      title: "Modern Medicine",
      host: "Alessandro Falcone",
      description: "Science-based longevity strategies with top experts, covering nutrition, fitness, and medical innovations",
      url: "https://open.spotify.com/show/modern-medicine"
    },
    {
      title: "staYoung – Der Longevity-Podcast",
      host: "Nina Ruge",
      description: "Expert interviews and practical advice on nutrition, epigenetics, and fitness for lifelong health and vitality",
      url: "https://stayoung-podcast.de/"
    },
    {
      title: "Lifestyle of Longevity",
      host: "Dr. Kati Ernst and Kristine Zeller",
      description: "Personal longevity journey, offering routines, checklists, and actionable tips for a longer, healthier life",
      url: "https://lifestyle-of-longevity.com/podcast/"
    },
    {
      title: "ERCM Medizin",
      host: "Alexander Muacevic",
      description: "Medizinische Expertise und innovative Behandlungsansätze",
      url: "https://open.spotify.com/show/ercm-medizin"
    }
  ];

  const englishYouTube = [
    {
      title: "David Sinclair",
      description: "Harvard longevity researcher sharing latest anti-aging science",
      handle: "@DavidSinclairPodcast",
      url: "https://www.youtube.com/@DavidSinclairPodcast"
    },
    {
      title: "Peter Attia MD",
      description: "Longevity medicine and health optimization strategies",
      handle: "@PeterAttiaMD",
      url: "https://www.youtube.com/@PeterAttiaMD"
    },
    {
      title: "Rhonda Patrick",
      description: "Nutrition science and healthspan research",
      handle: "@FoundMyFitness",
      url: "https://www.youtube.com/@FoundMyFitness"
    },
    {
      title: "Ben Greenfield Life",
      description: "Biohacking and performance optimization",
      handle: "@BenGreenfieldLife",
      url: "https://www.youtube.com/@BenGreenfieldLife"
    },
    {
      title: "Thomas DeLauer",
      description: "Intermittent fasting and metabolic health",
      handle: "@ThomasDeLauer",
      url: "https://www.youtube.com/@ThomasDeLauer"
    }
  ];

  const germanYouTube = [
    {
      title: "Healthwise",
      description: "Nils Behrens explores what true health means today, featuring conversations with specialists across medicine, therapy, and wellness",
      url: "https://www.youtube.com/@HealthwiseDE"
    },
    {
      title: "Flowgrade",
      description: "Max Gotzler shared in expert interviews, how-to videos, recipes, and motivational clips to help you achieve your happiest and most powerful flow state",
      url: "https://www.youtube.com/@FlowgradeDE"
    },
    {
      title: "Modern Medicine",
      description: "Alessandro Falcone discusses science-based longevity strategies with top experts, covering everything from nutrition and fitness to medical innovations",
      url: "https://www.youtube.com/@ModernMedicineDE"
    },
    {
      title: "Dr. med. Petra Bracht",
      description: "Gesundheitstipps und Präventionsmedizin",
      handle: "@DrPetraBracht",
      url: "https://www.youtube.com/@DrPetraBracht"
    },
    {
      title: "Max Gotzler",
      description: "Biohacking und Gesundheitsoptimierung",
      handle: "@MaxGotzler",
      url: "https://www.youtube.com/@MaxGotzler"
    },
    {
      title: "Flowgrade",
      description: "Performance und Longevity auf Deutsch",
      handle: "@FlowgradeDE",
      url: "https://www.youtube.com/@FlowgradeDE"
    },
    {
      title: "Prof. Dr. Spitz",
      description: "Vitamin D und Präventionsmedizin",
      handle: "@ProfDrSpitz",
      url: "https://www.youtube.com/@ProfDrSpitz"
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
