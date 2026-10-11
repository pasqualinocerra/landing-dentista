
type ServiceCardProps = {
  service: {
    icon: string;
    title: string;
    description: string;
  };
  onRequestInfo: () => void;
};

function ServiceCard({ service, onRequestInfo }: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-2xl">
        {service.icon}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {service.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {service.description}
      </p>

      <button
        onClick={onRequestInfo}
        className="mt-5 text-sm font-semibold text-cyan-600 hover:text-cyan-700"
      >
        Richiedi informazioni →
      </button>
    </div>
  );
}

export default ServiceCard;
