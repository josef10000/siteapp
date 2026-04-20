"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-navy/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="https://i.imgur.com/WVOsHDW.png" alt="HubSumples Logo" className="w-10 h-10" />
          <span className="text-2xl font-black text-white tracking-tighter">HubSumples</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#metodo" className="text-sm font-semibold hover:text-brand-main transition-colors">O Método</a>
          <a href="#faq" className="text-sm font-semibold hover:text-brand-main transition-colors">Dúvidas</a>
          <a href="#planos" className="btn-primary py-2 px-6 text-sm">Blindar meu Negócio</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card absolute top-full left-0 right-0 p-4 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <a href="#metodo" className="text-lg font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>O Método</a>
            <a href="#faq" className="text-lg font-semibold py-2" onClick={() => setIsMobileMenuOpen(false)}>Dúvidas</a>
            <a href="#planos" className="btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>Blindar meu Negócio</a>
          </div>
        </div>
      )}
    </nav>
  );
}
