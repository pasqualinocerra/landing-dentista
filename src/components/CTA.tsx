
type CTAProps = {
  scrollTo: (id: string) => void;
};

function CTA({ scrollTo }: CTAProps) {
  return (
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
  );
}

export default CTA;
