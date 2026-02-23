import { Shield, Award, CheckCircle2, Zap, Clock, MapPin } from "lucide-react";

export const TrustAndAreas = () => {
    const areas = ["Kensington", "Chelsea", "Mayfair", "Marylebone", "Richmond", "Chiswick", "Ealing", "Fulham", "Hammersmith", "Islington", "Camden", "Wandsworth", "Clapham", "Battersea", "Wimbledon", "Hampstead"];

    const features = [
        { icon: Shield, t: "£5M Public Liability", d: "Exceeding industry standards for complete commercial and residential protection." },
        { icon: Award, t: "NICEIC Gold Standard", d: "The highest accreditation tier. We self-certify all work under Part P." },
        { icon: CheckCircle2, t: "6-Year Warranty", d: "Industry-leading labor guarantee on all new installations and upgrades." },
        { icon: Clock, t: "London Response Unit", d: "Dedicated fleet positioned across the city for <1h emergency arrival." },
        { icon: Zap, t: "Direct Pricing Model", d: "No brokers, no middlemen. You deal with the experts, at the expert price." },
    ];

    return (
        <section className="py-24 bg-[#050505] overflow-hidden" aria-labelledby="trust-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <h2 id="trust-heading" className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-12">Total <br /> Confidence</h2>
                        <div className="space-y-10">
                            {features.map((f, i) => (
                                <div key={i} className="group flex gap-8 items-start">
                                    <div className="size-14 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-all duration-300">
                                        <f.icon className="size-6 text-gold group-hover:text-black transition-colors" />
                                    </div>
                                    <div className="py-1">
                                        <h3 className="text-xl font-bold text-white mb-2 leading-none">{f.t}</h3>
                                        <p className="text-white/40 text-base font-light leading-relaxed">{f.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-white/5 p-12 rounded-[48px] relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 size-64 bg-gold/10 rounded-full blur-[100px]" />
                        <h3 className="text-3xl font-black text-white tracking-tighter mb-8 leading-none">Service Domain</h3>
                        <p className="text-white/40 text-lg font-light mb-10 leading-relaxed">
                            Our specialists are deployed strategically across London to ensure same-day coverage, from Central hubs to the outermost zones.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {areas.map((a, i) => (
                                <div key={i} className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 text-xs font-bold text-white/60 hover:text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                    <MapPin className="size-3 opacity-30" />
                                    {a}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 rounded-3xl bg-gold text-black">
                            <p className="text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-60">Don't see your zone?</p>
                            <p className="text-xl font-black mb-6 leading-tight">We likely have an engineer <br />near you right now.</p>
                            <a href="tel:02079460000" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-100 opacity-80 transition-opacity">
                                Verify Coverage <Clock className="size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
