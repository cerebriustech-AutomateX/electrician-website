import { CheckCircle2 } from "lucide-react";

export const Pricing = () => {
    const tiers = [
        {
            name: "Essential Repairs",
            tag: "Small fixes & diagnostics",
            price: "£90",
            unit: "/hr",
            pop: false,
            features: ["Fault finding & diagnosis", "Socket or switch renewal", "Emergency call-outs", "Minor circuit repairs", "1-Year Guarantee", "App Store Integration"]
        },
        {
            name: "Prime Upgrades",
            tag: "Room modernization",
            price: "£350",
            unit: "fixed price*",
            pop: true,
            features: ["Consumer unit upgrades", "Full room rewiring", "Smart home conversion", "Certification included", "3-Year Guarantee", "Dedicated manager"]
        },
        {
            name: "Elite Property",
            tag: "Commercial & Whole Home",
            price: "Bespoke",
            unit: "quote only",
            pop: false,
            features: ["Whole property rewires", "Commercial fit-outs", "EV fleet charging", "3-Phase installation", "5-Year Guarantee", "Priority response"]
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-[#050505]" aria-labelledby="pricing-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 id="pricing-heading" className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-white">Transparent Value</h2>
                    <p className="text-white/40 text-xl font-light max-w-2xl mx-auto leading-relaxed">Luxury service doesn't mean mystery billing. We provide precise, fixed-rate pricing so you can budget with confidence.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((t, i) => (
                        <div
                            key={i}
                            className={`relative p-10 rounded-[40px] flex flex-col transition-all duration-500 hover:scale-[1.02] ${t.pop
                                    ? "bg-white text-black ring-4 ring-gold/20"
                                    : "bg-[#0a0a0a] border border-white/5 text-white"
                                }`}
                        >
                            {t.pop && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gold text-black text-xs font-black uppercase tracking-widest shadow-xl">
                                    Most Requested
                                </div>
                            )}

                            <div className="mb-8">
                                <span className={`text-[10px] uppercase tracking-[0.2em] font-black px-3 py-1 rounded-full border mb-4 inline-block ${t.pop ? "border-black/10 text-black/40" : "border-white/10 text-white/40"
                                    }`}>
                                    {t.name}
                                </span>
                                <p className={`text-sm font-medium ${t.pop ? "text-black/60" : "text-white/40"}`}>{t.tag}</p>
                            </div>

                            <div className="flex items-baseline gap-2 mb-10">
                                <span className="text-6xl font-black tracking-tighter">{t.price}</span>
                                <span className={`text-sm font-bold uppercase tracking-widest ${t.pop ? "text-black/40" : "text-white/30"}`}>{t.unit}</span>
                            </div>

                            <div className={`w-full h-px mb-10 ${t.pop ? "bg-black/5" : "bg-white/5"}`} />

                            <ul className="space-y-4 mb-12 flex-1">
                                {t.features.map((f, j) => (
                                    <li key={j} className="flex items-start gap-4 text-sm font-medium">
                                        <CheckCircle2 className={`size-5 flex-shrink-0 ${t.pop ? "text-gold" : "text-gold"}`} />
                                        <span className={t.pop ? "text-black/70" : "text-white/60"}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-5 rounded-2xl text-center text-sm font-black uppercase tracking-widest transition-all duration-300 ${t.pop
                                        ? "bg-black text-white hover:bg-gold hover:text-black shadow-lg"
                                        : "bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black"
                                    }`}
                            >
                                {t.price === "Bespoke" ? "Request Consultation" : "Schedule Service"}
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-12 text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
                    *Fixed pricing applies to standard installs. Full survey required for detailed quotes.
                </p>
            </div>
        </section>
    );
};
