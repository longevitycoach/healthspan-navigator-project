import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Lang = "en" | "de" | "ja";

const content: Record<Lang, {
  title: string;
  legalHeading: string;
  contactHeading: string;
  responsibleHeading: string;
  disclaimerHeading: string;
  liabilityContentTitle: string;
  liabilityContent: string;
  liabilityLinksTitle: string;
  liabilityLinks: string;
  copyrightTitle: string;
  copyright: string;
  medicalTitle: string;
  medical: string;
}> = {
  en: {
    title: "Legal Notice",
    legalHeading: "Information according to § 5 TMG",
    contactHeading: "Contact",
    responsibleHeading: "Responsible for content according to § 55 Para. 2 RStV",
    disclaimerHeading: "Disclaimer",
    liabilityContentTitle: "Liability for Content",
    liabilityContent:
      "The contents of our pages were created with the greatest care. However, we cannot guarantee the accuracy, completeness, or topicality of the content. As a service provider, we are responsible for our own content on these pages under general law pursuant to § 7 Para. 1 TMG.",
    liabilityLinksTitle: "Liability for Links",
    liabilityLinks:
      "Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of those pages.",
    copyrightTitle: "Copyright",
    copyright:
      "The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.",
    medicalTitle: "Medical Disclaimer",
    medical:
      "The information on this website is for educational and lifestyle exploration purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers before making changes to your health regimen.",
  },
  de: {
    title: "Impressum",
    legalHeading: "Angaben gemäß § 5 TMG",
    contactHeading: "Kontakt",
    responsibleHeading: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    disclaimerHeading: "Haftungsausschluss",
    liabilityContentTitle: "Haftung für Inhalte",
    liabilityContent:
      "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
    liabilityLinksTitle: "Haftung für Links",
    liabilityLinks:
      "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    copyrightTitle: "Urheberrecht",
    copyright:
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
    medicalTitle: "Medizinischer Haftungsausschluss",
    medical:
      "Die Informationen auf dieser Website dienen ausschließlich Bildungszwecken und zur Lifestyle-Erkundung. Sie ersetzen nicht die professionelle medizinische Beratung, Diagnose oder Behandlung. Konsultieren Sie immer qualifizierte Gesundheitsdienstleister, bevor Sie Änderungen an Ihrem Gesundheitsregime vornehmen.",
  },
  ja: {
    title: "法的通知",
    legalHeading: "§ 5 TMGに基づく情報",
    contactHeading: "お問い合わせ",
    responsibleHeading: "§ 55第2項RStVに基づくコンテンツ責任者",
    disclaimerHeading: "免責事項",
    liabilityContentTitle: "コンテンツの責任",
    liabilityContent:
      "当サイトのコンテンツは細心の注意を払って作成されています。しかし、内容の正確性、完全性、最新性について保証することはできません。サービス提供者として、§ 7第1項TMGに基づき、当サイトの独自コンテンツについて一般法に従い責任を負います。",
    liabilityLinksTitle: "リンクの責任",
    liabilityLinks:
      "当サイトには、内容に影響を与えられない第三者の外部サイトへのリンクが含まれています。そのため、外部コンテンツについては責任を負いかねます。リンク先のページのコンテンツについては、各プロバイダーまたは運営者が責任を負います。",
    copyrightTitle: "著作権",
    copyright:
      "当サイト運営者が作成したコンテンツおよび著作物は、ドイツ著作権法に基づきます。著作権法の範囲外での複製、編集、配布、その他の使用には、著者または作成者の書面による同意が必要です。",
    medicalTitle: "医療免責事項",
    medical:
      "本ウェブサイトの情報は、教育およびライフスタイル探索のみを目的としています。専門的な医療アドバイス、診断、または治療の代替にはなりません。健康習慣を変更する前に、必ず資格のある医療専門家にご相談ください。",
  },
};

const flags: Record<Lang, string> = { en: "🇬🇧", de: "🇩🇪", ja: "🇯🇵" };
const labels: Record<Lang, string> = { en: "English", de: "Deutsch", ja: "日本語" };

const ImpressPage = () => {
  const [lang, setLang] = useState<Lang>("de");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.legalHeading}</h3>
                <div className="space-y-1 text-slate-600">
                  <p>Matthias Buchhorn</p>
                  <p>Simplonstrasse 56</p>
                  <p>10245 Berlin</p>
                  <p>Deutschland / Germany</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.contactHeading}</h3>
                <div className="space-y-1 text-slate-600">
                  <p>
                    LongevityCoa.ch:{" "}
                    <a href="mailto:info@mabu.red" className="text-blue-600 hover:text-blue-800 underline">
                      info@mabu.red
                    </a>
                  </p>
                  <p>
                    TwoBreath:{" "}
                    <a href="mailto:hello@twobreath.com" className="text-blue-600 hover:text-blue-800 underline">
                      hello@twobreath.com
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.responsibleHeading}</h3>
                <div className="space-y-1 text-slate-600">
                  <p>Matthias Buchhorn</p>
                  <p>Simplonstrasse 56</p>
                  <p>10245 Berlin</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{t.disclaimerHeading}</h3>
                <div className="space-y-4 text-slate-600">
                  {[
                    { title: t.liabilityContentTitle, body: t.liabilityContent },
                    { title: t.liabilityLinksTitle, body: t.liabilityLinks },
                    { title: t.copyrightTitle, body: t.copyright },
                    { title: t.medicalTitle, body: t.medical },
                  ].map(({ title, body }) => (
                    <div key={title}>
                      <h4 className="font-semibold text-slate-700 mb-1">{title}</h4>
                      <p className="text-sm">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ImpressPage;
