import type { Dispatch, SetStateAction } from "react";

type NavbarProps = {
  scrollTo: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

function Navbar({
  scrollTo,
  menuOpen,
  setMenuOpen,
}: NavbarProps) {
  return (
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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
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
  );
}

export default Navbar;