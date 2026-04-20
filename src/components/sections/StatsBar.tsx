export default function StatsBar() {
  const stats = [
    { label: "Bases Ativas", value: "+55" },
    { label: "Conversão", value: "100%" },
    { label: "Autoridade", value: "24/7" },
    { label: "Satisfação", value: "5.0" },
  ];

  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 glass-card rounded-[2rem] shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-brand-main mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
