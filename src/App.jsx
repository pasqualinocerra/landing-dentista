import { useState } from "react";

const services = [
  {
    title: "Implantologia",
    description:
      "Soluzioni implantari moderne per recuperare funzionalità ed estetica del sorriso.",
    icon: "🦷",
  },
  {
    title: "Estetica dentale",
    description:
      "Trattamenti personalizzati per migliorare forma, colore e armonia del sorriso.",
    icon: "✨",
  },
  {
    title: "Ortodonzia",
    description:
      "Percorsi ortodontici personalizzati per bambini, ragazzi e adulti.",
    icon: "😁",
  },
  {
    title: "Igiene dentale",
    description:
      "Prevenzione e igiene professionale per mantenere denti e gengive sani.",
    icon: "🪥",
  },
  {
    title: "Conservativa",
    description:
      "Cure conservative moderne per preservare il più possibile i denti naturali.",
    icon: "🔬",
  },
  {
    title: "Prima visita",
    description:
      "Una valutazione completa per capire insieme il percorso più adatto.",
    icon: "👨‍⚕️",
  },
];

const reviews = [
  {
    name: "Marco R.",
    text: "Studio moderno, personale professionale e grande attenzione al paziente.",
  },
  {
    name: "Giulia M.",
    text: "Mi sono trovata molto bene. Tutto spiegato con chiarezza e senza mettere pressione.",
  },
  {
    name: "Francesco L.",
    text: "Professionalità e disponibilità. Esperienza molto positiva.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-600 text-2xl font-bold text-white">
              +
            </div>

            <div className="text-left">
              <div className="text-lg font-bold leading-none text-slate-900">
                Studio<span className="text-cyan-600">Dentale</span>
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Salute & Sorriso
              </div>
            </div>
          </button>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("servizi")}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600"
            >
              Servizi
            </button>

            <button
              onClick={() => scrollTo("studio")}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600"
            >
              Lo studio
            </button>

            <button
              onClick={() => scrollTo("recensioni")}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600"
            >
              Recensioni
            </button>

            <button
              onClick={() => scrollTo("faq")}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600"
            >
              FAQ
            </button>
          </nav>

          <button
            onClick={() => scrollTo("contatti")}
            className="hidden rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-0.5 hover:bg-cyan-700 md:block"
          >
            Prenota una visita
          </button>

          {/* MOBILE */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollTo("servizi")}
                className="text-left font-medium"
              >
                Servizi
              </button>

              <button
                onClick={() => scrollTo("studio")}
                className="text-left font-medium"
              >
                Lo studio
              </button>

              <button
                onClick={() => scrollTo("recensioni")}
                className="text-left font-medium"
              >
                Recensioni
              </button>

              <button
                onClick={() => scrollTo("faq")}
                className="text-left font-medium"
              >
                FAQ
              </button>

              <button
                onClick={() => scrollTo("contatti")}
                className="rounded-full bg-cyan-600 px-5 py-3 font-semibold text-white"
              >
                Prenota una visita
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}

      <main id="home">
        <section className="relative overflow-hidden bg-slate-50 pt-32">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-2 lg:pb-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-medium text-cyan-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Prenditi cura del tuo sorriso
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Il tuo sorriso,
                <span className="block text-cyan-600">
                  la nostra priorità.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Odontoiatria moderna, tecnologie avanzate e un approccio
                personalizzato per offrirti cure dentali efficaci e un sorriso
                sano nel tempo.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollTo("contatti")}
                  className="rounded-full bg-cyan-600 px-7 py-4 font-semibold text-white shadow-xl shadow-cyan-600/20 transition hover:-translate-y-1 hover:bg-cyan-700"
                >
                  Prenota una visita
                </button>

                <button
                  onClick={() => scrollTo("servizi")}
                  className="rounded-full border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
                >
                  Scopri i servizi
                </button>
              </div>

              <div className="mt-10 grid grid-cols-3 border-t border-slate-200 pt-7">
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    15+
                  </div>
                  <div className="text-sm text-slate-500">
                    anni esperienza
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    4.9/5
                  </div>
                  <div className="text-sm text-slate-500">
                    valutazione
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    1000+
                  </div>
                  <div className="text-sm text-slate-500">
                    pazienti
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE PLACEHOLDER */}

            <div className="relative">
              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-100 to-blue-100 p-3 shadow-2xl">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-white">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-cyan-50 text-6xl">
                      🦷
                    </div>

                    <p className="mt-5 text-sm font-medium text-slate-400">
                      FOTO DELLO STUDIO
                    </p>

                    <p className="mt-1 text-xs text-slate-300">
                      Inserire immagine reale
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-xl">
                    ✓
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      Prima visita
                    </div>

                    <div className="text-sm text-slate-500">
                      Consulenza personalizzata
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}

        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
            {[
              "Tecnologie moderne",
              "Personale qualificato",
              "Ambiente confortevole",
              "Assistenza personalizzata",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 text-center text-sm font-medium text-slate-600"
              >
                <span className="text-cyan-600">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* SERVIZI */}

        <section id="servizi" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                I nostri servizi
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Tutto ciò che serve per il tuo sorriso
              </h2>

              <p className="mt-4 text-slate-600">
                Prevenzione, cura ed estetica dentale in un unico studio.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
                    {service.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <button
                    onClick={() => scrollTo("contatti")}
                    className="mt-5 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    Richiedi informazioni →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STUDIO */}

        <section id="studio" className="bg-slate-50 py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
            <div>
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-200 to-cyan-100 p-3">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-white">
                  <div className="text-center">
                    <div className="text-6xl">🏥</div>

                    <p className="mt-4 text-sm font-medium text-slate-400">
                      FOTO DELLO STUDIO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Lo studio
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Professionalità e attenzione in ogni trattamento
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Il nostro studio nasce con l'obiettivo di offrire
                un'odontoiatria moderna, basata sull'ascolto del paziente,
                sulla prevenzione e sull'utilizzo di tecnologie aggiornate.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Ogni paziente è diverso. Per questo costruiamo un percorso
                personalizzato sulla base delle sue esigenze.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Diagnosi accurata",
                  "Tecnologie moderne",
                  "Piani personalizzati",
                  "Assistenza continua",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-medium text-slate-700"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-cyan-600">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 py-16 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white">
                È il momento di pensare al tuo sorriso?
              </h2>

              <p className="mt-2 text-cyan-100">
                Contattaci e fissiamo insieme la tua prima visita.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contatti")}
              className="rounded-full bg-white px-8 py-4 font-bold text-cyan-700 shadow-xl transition hover:-translate-y-1"
            >
              Prenota una visita
            </button>
          </div>
        </section>

        {/* RECENSIONI */}

        <section id="recensioni" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Recensioni
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Le persone prima di tutto
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-7"
                >
                  <div className="text-lg tracking-widest text-amber-400">
                    ★★★★★
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    "{review.text}"
                  </p>

                  <div className="mt-6 font-bold text-slate-900">
                    {review.name}
                  </div>

                  <div className="text-sm text-slate-400">
                    Paziente
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section id="faq" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                FAQ
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Domande frequenti
              </h2>
            </div>

            <div className="mt-12 space-y-3">
              {[
                [
                  "Come posso prenotare una visita?",
                  "Puoi compilare il modulo di contatto oppure chiamare direttamente lo studio.",
                ],
                [
                  "La prima visita è dolorosa?",
                  "La prima visita consiste principalmente in una valutazione dello stato di salute orale e nella definizione del percorso più adatto.",
                ],
                [
                  "Vi occupate anche di bambini?",
                  "Sì. Lo studio offre percorsi dedicati anche ai pazienti più giovani.",
                ],
                [
                  "È possibile richiedere un preventivo?",
                  "Certamente. Dopo la valutazione possiamo spiegarti le possibili soluzioni e i relativi costi.",
                ],
              ].map(([question, answer], index) => (
                <div
                  key={question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-900"
                  >
                    {question}

                    <span className="text-xl text-cyan-600">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4 leading-7 text-slate-600">
                      {answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}

        <section id="contatti" className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                Contatti
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Prenota la tua visita
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Compila il modulo e ti ricontatteremo per concordare insieme
                giorno e orario.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    📞
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      Telefono
                    </div>

                    <p className="text-slate-600">
                      +39 000 000 0000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    ✉️
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      Email
                    </div>

                    <p className="text-slate-600">
                      info@studiodentale.it
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    📍
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      Indirizzo
                    </div>

                    <p className="text-slate-600">
                      Via Roma 123
                      <br />
                      88000 Città, Italia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/60 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-3xl text-green-600">
                    ✓
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    Richiesta inviata
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Ti ricontatteremo il prima possibile.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 font-semibold text-cyan-600"
                  >
                    Invia un'altra richiesta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Nome e cognome
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Mario Rossi"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="mario@email.it"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold">
                        Telefono
                      </label>

                      <input
                        type="tel"
                        required
                        placeholder="+39 333 1234567"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Di cosa hai bisogno?
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10">
                      <option>Prima visita</option>
                      <option>Igiene dentale</option>
                      <option>Implantologia</option>
                      <option>Estetica dentale</option>
                      <option>Ortodonzia</option>
                      <option>Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Messaggio
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Scrivi qui la tua richiesta..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                    />
                  </div>

                  <label className="flex items-start gap-3 text-sm text-slate-500">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4"
                    />

                    <span>
                      Acconsento al trattamento dei dati personali secondo la
                      privacy policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-cyan-600 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-0.5 hover:bg-cyan-700"
                  >
                    Richiedi una visita
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-xl font-bold">
                Studio<span className="text-cyan-400">Dentale</span>
              </div>

              <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
                Odontoiatria moderna e attenzione alla persona.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Navigazione</h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
                <button
                  onClick={() => scrollTo("servizi")}
                  className="text-left hover:text-white"
                >
                  Servizi
                </button>

                <button
                  onClick={() => scrollTo("studio")}
                  className="text-left hover:text-white"
                >
                  Lo studio
                </button>

                <button
                  onClick={() => scrollTo("faq")}
                  className="text-left hover:text-white"
                >
                  FAQ
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Contatti</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>+39 000 000 0000</p>
                <p>info@studiodentale.it</p>
                <p>Via Roma 123, Italia</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-7 text-xs text-slate-500">
            © {new Date().getFullYear()} Studio Dentale — Tutti i diritti
            riservati.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;