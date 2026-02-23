import { Zap, Phone, Mail, MapPin, Clock, Award, Shield, CheckCircle2 } from "lucide-react";

export const Footer = () => (
    <footer className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-16 mb-20">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="size-10 rounded-xl bg-white flex items-center justify-center">
                            <Zap className="text-black fill-black size-6" aria-hidden="true" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter uppercase text-white">Volt & Vibe</span>
                    </div>
                    <p className="text-white/30 text-lg font-light max-w-sm leading-relaxed mb-10">
                        Pioneering electrical excellence across London since 2012. NICEIC Gold Standard contractor dedicated to safety, precision, and architectural design.
                    </p>
                    <div className="flex gap-4">
                        {["Instagram", "Facebook", "LinkedIn"].map((s, i) => (
                            <a
                                key={i}
                                href="#"
                                className="size-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300 shadow-xl"
                                aria-label={s}
                            >
                                <div className="text-[10px] font-black uppercase tracking-widest">{s[0]}</div>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white/20 mb-10">Navigation</h4>
                    <ul className="space-y-5">
                        {["Services", "Pricing", "Reviews", "FAQ", "Contact"].map((l, i) => (
                            <li key={i}>
                                <a href={`#${l.toLowerCase()}`} className="text-sm font-bold text-white/40 hover:text-white transition-colors duration-200">
                                    {l}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] font-black text-white/20 mb-10">Connect</h4>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <Phone className="size-4 text-gold mt-1" />
                            <div>
                                <a href="tel:02079460000" className="text-lg font-black text-white block leading-none mb-1">020 7946 0000</a>
                                <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">24/7 Emergency Line</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Mail className="size-4 text-white/20 mt-1" />
                            <a href="mailto:info@voltandvibe.co.uk" className="text-sm font-bold text-white/40 hover:text-white transition-colors">info@voltandvibe.co.uk</a>
                        </li>
                        <li className="flex items-start gap-4">
                            <MapPin className="size-4 text-white/20 mt-1" />
                            <span className="text-sm font-bold text-white/40">Greater London Unit</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Certified Professionals</p>
                    <div className="flex items-center gap-8 opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <Award className="size-10" aria-label="NICEIC" />
                        <Shield className="size-10" aria-label="Insured" />
                        <CheckCircle2 className="size-10" aria-label="Verified" />
                        <Clock className="size-10" aria-label="24/7" />
                    </div>
                </div>

                <div className="text-center lg:text-right">
                    <p className="text-[10px] font-bold text-white/10 uppercase tracking-widest">
                        © 2026 Volt & Vibe Electrical Services Ltd. <br className="md:hidden" />
                        Registered in England & Wales. Part P Building Regulations Compliant.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);
