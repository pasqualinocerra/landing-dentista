
import type { Dispatch, SetStateAction } from "react";

const questions: [string, string][] = [
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
];

type FAQProps = {
  openFaq: number | null;
  setOpenFaq: Dispatch<SetStateAction<number | null>>;
};

function FAQ({ openFaq, setOpenFaq }: FAQProps) {
  return (
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
          {questions.map(([question, answer], index) => (
            <div
              key={question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-900"
                aria-expanded={openFaq === index}
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
  );
}

export default FAQ;
