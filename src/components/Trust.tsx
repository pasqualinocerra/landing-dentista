
function Trust() {
  const benefits = [
    "Tecnologie moderne",
    "Personale qualificato",
    "Ambiente confortevole",
    "Assistenza personalizzata",
  ];

  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {benefits.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2 text-center text-sm font-medium text-slate-600"
          >
            <span className="text-cyan-600">✓</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trust;
