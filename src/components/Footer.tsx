import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center gap-10 mb-20">
          <div className="flex flex-col items-center gap-4">
            <img src="https://i.imgur.com/WVOsHDW.png" alt="HubSumples Logo" className="w-16 h-16" />
            <span className="text-3xl font-black text-white tracking-tighter">HubSumples</span>
          </div>
          
          <p className="max-w-md text-gray-400">
            A infraestrutura digital de elite que separa você da concorrência e transforma sua empresa em autoridade inquestionável.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-300">
            <a href="#planos" className="hover:text-brand-main transition-colors">Planos de Blindagem</a>
            <a href="#metodo" className="hover:text-brand-main transition-colors">O Método</a>
            <a href="mailto:hubsymples@gmail.com" className="flex items-center gap-2 hover:text-brand-main transition-colors">
              <Mail className="w-4 h-4" /> hubsymples@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/5 text-xs text-gray-600 font-medium">
          <p>© 2024 HubSumples. Todos os direitos reservados.</p>
          <p>Design & Estratégia por <span className="text-gray-400">HubSumples Digital Authority</span>.</p>
        </div>
      </div>
    </footer>
  );
}
