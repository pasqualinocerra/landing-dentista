function ContactInfo() {
  return (
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
            <div className="font-bold text-slate-900">Telefono</div>
            <p className="text-slate-600">+39 000 000 0000</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
            ✉️
          </div>
          <div>
            <div className="font-bold text-slate-900">Email</div>
            <p className="text-slate-600">info@studiodentale.it</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
            📍
          </div>
          <div>
            <div className="font-bold text-slate-900">Indirizzo</div>
            <p className="text-slate-600">
              Via Roma 123
              <br />
              88000 Città, Italia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
