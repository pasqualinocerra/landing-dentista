type FooterProps = {
  scrollTo: (id: string) => void;
};

function Footer({ scrollTo }: FooterProps) {
  return (
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
  );
}

export default Footer;