"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Por que existe um valor de mensalidade?",
    a: "A mensalidade (ou plano anual) cobre o Pilar de Crescimento: hospedagem de alta performance, segurança avançada (SSL), manutenção técnica e o suporte humano para evoluir seus resultados continuamente.",
  },
  {
    q: "Quais são as formas de pagamento aceitas?",
    a: "Aceitamos pagamentos via Cartão de Crédito e Débito. No Plano Anual (com desconto), você pode parcelar o valor em até 12 vezes sem comprometer o fluxo de caixa.",
  },
  {
    q: "Atendem qualquer tipo de negócio?",
    a: "Sim. O Método Hub Sumples foi desenhado para qualquer negócio que precise passar autoridade para fechar vendas, de consultores a grandes empresas de serviços.",
  },
  {
    q: "Minha empresa vai aparecer no Google?",
    a: "Sim. Construímos sua estrutura seguindo as regras de SEO do Google para atrair clientes orgânicos na sua região.",
  },
  {
    q: "Qual o tempo para a estrutura ficar pronta?",
    a: "Somos ágeis. Geralmente, em poucos dias úteis após o envio da sua marca e fotos, a primeira versão já está pronta para aprovação.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-black/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-black text-center mb-16">Ainda com dúvidas?</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-main transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
