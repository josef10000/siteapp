import { LayoutGrid, ShieldCheck, Zap, TrendingUp, Target } from "lucide-react";

const pillars = [
  {
    icon: <Target className="w-10 h-10 text-brand-main" />,
    step: "01. Posicionamento",
    title: "Pilar Estratégico",
    desc: "Alinhamos sua fala e oferta para atrair o público que reconhece valor e não questiona preço.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-accent" />,
    step: "02. Infraestrutura",
    title: "Pilar de Autoridade",
    desc: "Design e engenharia premium que fazem sua empresa parecer — e ser — a líder do segmento.",
  },
  {
    icon: <Zap className="w-10 h-10 text-brand-main" />,
    step: "03. Aquisição",
    title: "Pilar de Tráfego",
    desc: "Sistemas de anúncios que trazem pessoas qualificadas para a sua nova base digital.",
  },
  {
    icon: <LayoutGrid className="w-10 h-10 text-brand-accent" />,
    step: "04. Conversão",
    title: "Pilar Comercial",
    desc: "Filtros e triagens que garantem que seu WhatsApp só receba orçamentos reais.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-brand-main" />,
    step: "05. Crescimento",
    title: "Pilar de Escala",
    desc: "Hospedagem, manutenção e evolução contínua para você focar apenas no fechamento.",
  },
];

export default function Method() {
  return (
    <section id="metodo" className="py-24 px-4 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-light font-bold uppercase tracking-widest text-sm mb-4 block">Metodologia de Elite</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">O Ecossistema Hub Sumples</h2>
          <p className="text-gray-400 text-lg">Nós não entregamos arquivos. Nós entregamos a base digital que sustenta o crescimento inquestionável do seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl group hover:border-brand-main/50 transition-all duration-500">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
              <div className="text-xs font-bold text-brand-accent uppercase tracking-tighter mb-2">{pillar.step}</div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
