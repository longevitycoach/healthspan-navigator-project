import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ExternalLink } from "lucide-react";

type Lang = "en" | "de" | "ja";

const content: Record<Lang, {
  title: string;
  subtitle: string;
  generalLabel: string;
  generalDesc: string;
  twobreathLabel: string;
  twobreathDesc: string;
  betaLabel: string;
  betaDesc: string;
  responseNote: string;
}> = {
  en: {
    title: "Contact",
    subtitle: "Get in touch — whether about longevity coaching, TwoBreath, or collaboration.",
    generalLabel: "General & LongevityCoa.ch",
    generalDesc: "Questions about the platform, health data, or partnerships.",
    twobreathLabel: "TwoBreath App",
    twobreathDesc: "Feedback, bug reports, or questions about the couples breathing app.",
    betaLabel: "Join the TwoBreath Public Beta",
    betaDesc: "Available on iOS via TestFlight — free to join, no invite needed.",
    responseNote: "We typically respond within 1–2 business days.",
  },
  de: {
    title: "Kontakt",
    subtitle: "Schreib uns — ob zu Longevity-Coaching, TwoBreath oder Kooperationen.",
    generalLabel: "Allgemein & LongevityCoa.ch",
    generalDesc: "Fragen zur Plattform, Gesundheitsdaten oder Partnerschaften.",
    twobreathLabel: "TwoBreath App",
    twobreathDesc: "Feedback, Fehlerberichte oder Fragen zur Atemübungs-App für Paare.",
    betaLabel: "TwoBreath Public Beta beitreten",
    betaDesc: "Verfügbar auf iOS über TestFlight — kostenlos, keine Einladung erforderlich.",
    responseNote: "Wir antworten in der Regel innerhalb von 1–2 Werktagen.",
  },
  ja: {
    title: "お問い合わせ",
    subtitle: "ロンジェビティコーチング、TwoBreath、またはコラボレーションについてご連絡ください。",
    generalLabel: "一般・LongevityCoa.ch",
    generalDesc: "プラットフォーム、健康データ、またはパートナーシップに関するご質問。",
    twobreathLabel: "TwoBreathアプリ",
    twobreathDesc: "カップル向け呼吸アプリへのフィードバック、バグ報告、またはご質問。",
    betaLabel: "TwoBreath公開ベータに参加",
    betaDesc: "TestFlight経由でiOSで利用可能 — 無料、招待不要。",
    responseNote: "通常1〜2営業日以内にご返答いたします。",
  },
};

const flags: Record<Lang, string> = { en: "🇬🇧", de: "🇩🇪", ja: "🇯🇵" };
const labels: Record<Lang, string> = { en: "English", de: "Deutsch", ja: "日本語" };

const ContactPage = () => {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2 mb-6 justify-end">
            {(["en", "de", "ja"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  lang === l
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-300 hover:border-blue-400"
                }`}
              >
                {flags[l]} {labels[l]}
              </button>
            ))}
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-slate-800">{t.title}</CardTitle>
              <p className="text-slate-500 mt-2">{t.subtitle}</p>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* General contact */}
              <div className="rounded-lg border border-slate-200 p-5 bg-white">
                <h3 className="font-semibold text-slate-800 mb-1">{t.generalLabel}</h3>
                <p className="text-sm text-slate-500 mb-3">{t.generalDesc}</p>
                <a
                  href="mailto:info@mabu.red"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <Mail size={16} /> info@mabu.red
                </a>
              </div>

              {/* TwoBreath contact */}
              <div className="rounded-lg border border-teal-200 p-5 bg-teal-50">
                <h3 className="font-semibold text-slate-800 mb-1">{t.twobreathLabel}</h3>
                <p className="text-sm text-slate-500 mb-3">{t.twobreathDesc}</p>
                <a
                  href="mailto:hello@twobreath.com"
                  className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-medium"
                >
                  <Mail size={16} /> hello@twobreath.com
                </a>
              </div>

              {/* TestFlight CTA */}
              <div className="rounded-lg border border-teal-300 p-5 bg-gradient-to-br from-teal-800 to-teal-600 text-white">
                <h3 className="font-semibold mb-1">{t.betaLabel}</h3>
                <p className="text-teal-100 text-sm mb-4">{t.betaDesc}</p>
                <a
                  href="https://testflight.apple.com/join/ChJc5vVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-teal-800 rounded-md hover:bg-teal-50 transition-colors text-sm font-semibold"
                >
                  <ExternalLink size={14} /> TestFlight
                </a>
              </div>

              <p className="text-xs text-slate-400 text-center">{t.responseNote}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
