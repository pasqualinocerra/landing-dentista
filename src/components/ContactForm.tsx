import type { FormEvent, Dispatch, SetStateAction } from "react";

type ContactFormProps = {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function ContactForm({
  submitted,
  setSubmitted,
  handleSubmit,
}: ContactFormProps) {
  return (
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
              Acconsento al trattamento dei dati personali secondo la privacy
              policy.
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
  );
}

export default ContactForm;
