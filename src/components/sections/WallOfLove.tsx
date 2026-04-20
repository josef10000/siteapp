const testimonials = [
  {
    text: "Pensei que era apenas um site, mas em um mês a nova base digital do meu negócio trouxe dois investidores novos que nos acharam direto no Google.",
    author: "Paulo S.",
    role: "Diretor Comercial",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150",
  },
  {
    text: "O melhor foi o fim das mensagens de curiosos no WhatsApp. A filtragem deles funciona e só chega quem realmente quer fechar negócio.",
    author: "Marcos Silva",
    role: "CEO - Consultoria X",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=150&h=150",
  },
  {
    text: "A página que criaram para nossa estruturação de serviços valeu por 10 vendedores na rua. O método funciona muito.",
    author: "Roberto Junior",
    role: "JM Serviços Digitais",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=150&h=150",
  },
  {
    text: "Rápido, sem burocracia. O papo com a equipe da HubSumples é direto e eles entendem que tempo é dinheiro.",
    author: "Eduardo B.",
    role: "Consultor Estratégico",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150",
  },
];

export default function WallOfLove() {
  return (
    <section className="py-24 overflow-hidden bg-white/5">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-black mb-4">Quem confiou, nunca se arrepende.</h2>
        <p className="text-gray-400">Resultados reais de quem investiu em posicionamento e autoridade.</p>
      </div>

      <div className="flex gap-6 animate-marquee">
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl min-w-[350px] max-w-[350px] shadow-xl">
            <div className="text-brand-main mb-4">★★★★★</div>
            <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full ring-2 ring-brand-main/20" />
              <div>
                <div className="font-bold text-white leading-none">{t.author}</div>
                <div className="text-xs text-gray-500 mt-1">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
