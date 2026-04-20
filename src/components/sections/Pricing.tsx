"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Site Premium",
    desc: "A presença digital completa para quem quer parar de ser ignorado e começar a ser desejado.",
    monthly: "97",
    annual: "989",
    savings: "R$ 175",
    features: [
      "Site de High-Ticket (Design Premium)",
      "Subdomínio suaempresa.hubsumples.com.br",
      "Infraestrutura Mobile-First de Alta Velocidade",
      "WhatsApp Estratégico com Filtro de Triagem",
      "Certificado de Segurança SSL Incluso",
      "Suporte Técnico Prioritário",
    ],
    highlight: false,
    btnText: "Assinar Estrutura",
  },
  {
    title: "Domínio Master",
    desc: "Independência absoluta para empresas que buscam marca forte e domínio total do próprio mercado.",
    monthly: "150",
    annual: "1.530",
    savings: "2 Meses Grátis",
    features: [
      "Tudo do Plano Premium, mais:",
      "Uso de Domínio Próprio (.com.br)",
      "Indexação Avançada no Google (GSC)",
      "E-mail Profissional (@suaempresa.com.br)",
      "Análise de Desempenho Trimestral",
      "Prioridade Máxima no Ecossistema Hub",
    ],
    highlight: true,
    btnText: "Garantir Domínio Master",
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="planos" className="py-24 px-4 bg-brand-navy">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Construa sua Autoridade Hoje</h2>
          <p className="text-gray-400 text-lg mb-10">Escolha o nível de blindagem ideal para o momento do seu negócio.</p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? "text-white" : "text-gray-500"}`}>Mensal</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-brand-main/20 rounded-full p-1 relative flex items-center transition-all"
            >
              <div className={`w-6 h-6 bg-brand-main rounded-full shadow-lg transform transition-transform duration-300 ${isAnnual ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? "text-white" : "text-gray-500"}`}>
              Anual <span className="bg-brand-main text-white text-[10px] px-2 py-0.5 rounded-full ml-2">-15% OFF</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`glass-card p-10 rounded-[2.5rem] relative flex flex-col ${plan.highlight ? "border-brand-main border-2 shadow-[0_0_50px_rgba(249,115,22,0.15)]" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-main text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                  Autoridade Máxima
                </div>
              )}

              <h3 className="text-3xl font-black mb-4">{plan.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">{plan.desc}</p>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/5 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-brand-main">R$ {isAnnual ? plan.annual : plan.monthly}</span>
                  <span className="text-gray-500 font-bold">{isAnnual ? "/ano" : "/mês"}</span>
                </div>
                <div className="mt-4 text-sm font-bold text-brand-accent">
                  {isAnnual ? `Economia Real: ${plan.savings}` : "Setup: Gratuito"}
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-brand-main shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: feature.replace("<strong>", '<strong class="text-white">') }} />
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-full text-lg font-black transition-all hover:scale-[1.02] ${plan.highlight ? "bg-brand-main text-white shadow-brand-main shadow-lg" : "bg-white/5 text-white border border-white/20 hover:bg-white/10"}`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
