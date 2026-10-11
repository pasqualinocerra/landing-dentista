
function Studio() {
  const features: string[] = [
    "Diagnosi accurata",
    "Tecnologie moderne",
    "Piani personalizzati",
    "Assistenza continua",
  ];

  return (
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
            {features.map((item) => (
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
  );
}

export default Studio;
