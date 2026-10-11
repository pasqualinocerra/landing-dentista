
import type { FormEvent, Dispatch, SetStateAction } from "react";

type ContactsProps = {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function Contacts({
  submitted,
  setSubmitted,
  handleSubmit,
}: ContactsProps) {
  return (
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
                  rows={4}
                  placeholder="Scrivi qui la tua richiesta..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-slate-500">
                <input type="checkbox" required className="mt-1 h-4 w-4" />
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
  );
}

export default Contacts;
