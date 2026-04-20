export default function Founder() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-main/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=150&h=150" 
              alt="Diretoria HubSumples" 
              className="w-24 h-24 rounded-full border-4 border-brand-main p-1"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-1">Nosso compromisso com você.</h3>
              <p className="text-brand-main font-black uppercase tracking-widest text-sm">Diretoria HubSumples</p>
            </div>
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed italic">
            <p>"Não construímos apenas sites. Criamos <strong>barreiras de mercado</strong>. O seu suor merece uma vitrine digital que faça as pessoas te respeitarem antes mesmo do primeiro 'olá'."</p>
            <p>"Se você quer parar de brigar por migalhas e começar a jogar o jogo da autoridade real, escolha um dos planos abaixo. Vai ser uma honra blindar sua operação."</p>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
            <div className="text-2xl font-black text-white">Equipe HubSumples</div>
          </div>
        </div>
      </div>
    </section>
  );
}
