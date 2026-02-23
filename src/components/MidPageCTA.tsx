import { Phone, ArrowRight } from "lucide-react";

export const MidPageCTA = () => (
    <section className="py-24 bg-gold relative overflow-hidden" aria-label="Call to action">
        {/* Abstract lightning bolt background shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 L20 40 L40 60 L60 0 L80 100" stroke="black" strokeWidth="0.5" fill="none" />
                <path d="M20 0 L40 60 L60 40 L80 100 L100 0" stroke="black" strokeWidth="0.5" fill="none" />
            </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center text-black">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                Safety Shouldn't <br /> Be A Luxury.
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto opacity-80 leading-relaxed">
                Don't ignore the warning signs. From flickering lights to total power failures, we're on standby to protect your home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                    href="#contact"
                    className="w-full sm:w-auto px-12 py-5 rounded-full bg-black text-white font-black text-xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl flex items-center justify-center gap-3"
                >
                    Secure Your Home <ArrowRight className="size-6" />
                </a>
                <a
                    href="tel:02079460000"
                    className="w-full sm:w-auto px-12 py-5 rounded-full border-2 border-black/20 text-black font-black text-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
                >
                    <Phone className="size-6" /> 020 7946 0000
                </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                    <span className="text-sm font-black uppercase tracking-widest">1 Hour</span>
                    <span className="text-[10px] font-bold opacity-60">Avg Response</span>
                </div>
                <div className="w-px h-8 bg-black/10" />
                <div className="flex flex-col items-center">
                    <span className="text-sm font-black uppercase tracking-widest">£0</span>
                    <span className="text-[10px] font-bold opacity-60">Call-Out Fee*</span>
                </div>
            </div>
        </div>
    </section>
);
