import { Zap, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl border ${isScrolled
                    ? "bg-black/80 backdrop-blur-xl border-white/10 py-3"
                    : "bg-transparent border-transparent py-5"
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-3 cursor-pointer group" aria-label="Volt & Vibe - Home">
                    <div className="size-10 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="text-black fill-black size-6" aria-hidden="true" />
                    </div>
                    <span className="text-xl font-bold tracking-tighter uppercase text-white">Volt & Vibe</span>
                </a>

                <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                        <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-white/60">Live Response:</span>
                        <a href="tel:02079460000" className="text-white hover:text-gold transition-colors duration-200 font-bold">020 7946 0000</a>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Services", "Pricing", "Reviews", "FAQ"].map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase()}`}
                            className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 cursor-pointer relative group"
                        >
                            {l}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gold hover:text-black transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                        Get a Free Quote
                    </a>
                </div>

                <button
                    className="md:hidden cursor-pointer p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X className="size-6 text-white" /> : <Menu className="size-6 text-white" />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300" role="menu">
                    <div className="flex flex-col gap-2">
                        <a href="tel:02079460000" className="flex items-center justify-between bg-white/5 p-4 rounded-xl text-gold font-bold mb-2">
                            <span>Emergency 24/7</span>
                            <div className="flex items-center gap-2">
                                <Phone className="size-4" />
                                <span>020 7946 0000</span>
                            </div>
                        </a>
                        {["Services", "Pricing", "Reviews", "FAQ", "Contact"].map((l) => (
                            <a
                                key={l}
                                href={`#${l.toLowerCase()}`}
                                className="p-4 text-lg font-bold text-white/80 border-b border-white/5 last:border-0"
                                role="menuitem"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
