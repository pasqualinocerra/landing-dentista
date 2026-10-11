type HeroProps = {
  scrollTo: (id: string) => void;
};

function Hero({ scrollTo }: HeroProps) {
  return (
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
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-500">anni esperienza</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-sm text-slate-500">valutazione</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-slate-900">1000+</div>
                <div className="text-sm text-slate-500">pazienti</div>
              </div>
            </div>
          </div>

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
                  <div className="font-bold text-slate-900">Prima visita</div>
                  <div className="text-sm text-slate-500">
                    Consulenza personalizzata
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;