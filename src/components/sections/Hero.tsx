"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      <div className="hero-glow" />
      
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-brand-accent mb-8">
            <ShieldCheck className="w-4 h-4" />
            A base digital dos líderes de mercado
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Sua autoridade não pode depender de um <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-light">site amador.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Construímos infraestruturas digitais de alta conversão que separam você da concorrência e transformam visitantes em clientes prontos para fechar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#planos" className="btn-primary w-full sm:w-auto">
              Blindar meu Negócio
            </a>
            <a href="#metodo" className="btn-outline w-full sm:w-auto">
              Ver o Método
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?fit=crop&w=100&h=100`}
                  alt={`Avatar ${i}`}
                  className="w-10 h-10 rounded-full border-2 border-brand-navy"
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-brand-main">
              <div className="flex">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
              <span className="text-white text-sm">Eleve sua operação para o <strong className="text-brand-light">próximo nível</strong> digital.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
