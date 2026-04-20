"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, ArrowRight, Zap } from "lucide-react";
import { captureLead } from "@/app/actions/leads";

const steps = [
  {
    id: 1,
    question: "Sua empresa é a primeira opção que vem à mente do cliente quando ele busca o seu serviço?",
    options: [
      { text: "Sim, somos referência", value: "ok" },
      { text: "Poderia ser melhor", value: "warning" },
    ],
  },
  {
    id: 2,
    question: "Os contatos que chegam no seu WhatsApp hoje estão prontos para fechar ou são apenas curiosos?",
    options: [
      { text: "Chegam Prontos", value: "ok" },
      { text: "Apenas Curiosos", value: "danger" },
    ],
  },
  {
    id: 3,
    question: "Seu site atual justifica o seu preço ou ele parece um 'cartão de visitas' comum?",
    options: [
      { text: "Justifica bem", value: "ok" },
      { text: "Parece Comum", value: "critical" },
    ],
  },
];

export default function InteractiveQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: "", whatsapp: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOption = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await captureLead({
        name: contactInfo.name,
        whatsapp: contactInfo.whatsapp,
        quizAnswers: answers,
      });

      // Redirecionamento para WhatsApp
      const msg = encodeURIComponent(`Olá! Acabei de fazer o diagnóstico HubSumples e minha operação está vulnerável. Quero blindar meu negócio! Meu nome é ${contactInfo.name}`);
      window.location.href = `https://api.whatsapp.com/send?phone=5511952924208&text=${msg}`;
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-brand-navy/50 relative">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between text-brand-accent text-sm font-bold uppercase tracking-widest">
                  <span>Diagnóstico de Autoridade</span>
                  <span>{currentStep + 1} de {steps.length}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {steps[currentStep].question}
                </h3>
                
                <div className="grid gap-4">
                  {steps[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOption(option.value)}
                      className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-brand-main/10 hover:border-brand-main transition-all group text-left"
                    >
                      <span className="font-semibold">{option.text}</span>
                      <ArrowRight className="w-5 h-5 text-brand-main opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-2" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="inline-flex p-4 rounded-full bg-red-500/10 text-red-500 mb-4 animate-pulse">
                  <AlertTriangle className="w-12 h-12" />
                </div>
                
                <h3 className="text-3xl font-black text-white">Sua operação está <span className="text-red-500">Vulnerável.</span></h3>
                
                <p className="text-gray-400">
                  A competição não é por quem é o melhor, mas por quem parece o melhor. Sem uma base digital de autoridade, você continuará perdendo os melhores contratos.
                </p>

                <div className="bg-brand-main/5 border border-brand-main/20 rounded-2xl p-6 text-left">
                  <p className="text-sm text-brand-main font-bold mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> RECOMENDAÇÃO IMEDIATA:
                  </p>
                  <p className="text-sm text-gray-300">
                    Migrar do modelo de "procura" para o modelo de "referência desejada". Sua estrutura atual não sustenta o preço que você quer cobrar.
                  </p>
                </div>

                <form onSubmit={handleSubmitLead} className="space-y-4 pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider text-left">Get your full strategy report</p>
                  <input
                    type="text"
                    placeholder="Seu Nome Completo"
                    required
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-main transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Seu WhatsApp (11) 99999-9999"
                    required
                    value={contactInfo.whatsapp}
                    onChange={(e) => setContactInfo({...contactInfo, whatsapp: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-brand-main transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-lg"
                  >
                    {isSubmitting ? "Blindando sua Operação..." : "Quero Meu Diagnóstico & Consultoria"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
