import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ImpressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-slate-800">
                Impressum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Angaben gemäß § 5 TMG
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p>Matthias Buchhorn</p>
                  <p>Simplonstrasse 56</p>
                  <p>10245 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Kontakt
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p>Telefon: +49 160 7467106</p>
                  <p>E-Mail: info@mabu.red</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h3>
                <div className="space-y-2 text-slate-600">
                  <p>Matthias Buchhorn</p>
                  <p>Simplonstrasse 56</p>
                  <p>10245 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  Haftungsausschluss
                </h3>
                <div className="space-y-4 text-slate-600">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Haftung für Inhalte</h4>
                    <p className="text-sm">
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                      nach den allgemeinen Gesetzen verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Haftung für Links</h4>
                    <p className="text-sm">
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                      Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Urheberrecht</h4>
                    <p className="text-sm">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                      dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                      der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                      Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Medizinischer Haftungsausschluss</h4>
                    <p className="text-sm">
                      Die Informationen auf dieser Website dienen ausschließlich Bildungszwecken und zur 
                      Lifestyle-Erkundung. Sie ersetzen nicht die professionelle medizinische Beratung, 
                      Diagnose oder Behandlung. Konsultieren Sie immer qualifizierte Gesundheitsdienstleister, 
                      bevor Sie Änderungen an Ihrem Gesundheitsregime vornehmen.
                    </p>
                  </div>
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