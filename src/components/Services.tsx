import ServiceCard from "./ServiceCard";
import type { ServicesProps } from "../data/services";

function Services({ services, onRequestInfo }: ServicesProps) {
  return (
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
            <ServiceCard
              key={service.title}
              service={service}
              onRequestInfo={onRequestInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
