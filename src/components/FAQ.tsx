import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    const faqs = [
        { q: "How quickly can you respond to an emergency?", a: "We operate a 24/7 rapid-response team. Our average arrival time in Greater London is under 45 minutes for priority emergencies like total power loss or burning smells." },
        { q: "Do you provide fixed-price quotes?", a: "Yes. For 95% of our work, we provide a fixed-price quote upfront. No hidden costs, no hourly 'surprises'. You approve the bill before we start." },
        { q: "Are your electricians NICEIC registered?", a: "Absolutely. We are NICEIC Approved Contractors — the UK's highest standard. We self-certify all work and notify Building Control for you." },
        { q: "What does the 5-year guarantee include?", a: "It covers all our labor and any materials we've supplied. If a socket we've installed fails or a circuit we've rewired trips due to our work, we fix it free of charge." },
        { q: "Can you help with commercial fit-outs and EICRs?", a: "Yes. We handle large-scale commercial infrastructure, 3-phase power, and statutory EICR testing for landlords and business owners across the city." }
    ];

    return (
        <section id="faq" className="py-24 bg-[#0a0a0a]" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 id="faq-heading" className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">Expert <br /> Insights</h2>
                    <p className="text-white/40 text-xl font-light">Transparency is the core of our business. If you have more questions, our team is a call away.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className={`rounded-[24px] transition-all duration-300 ${open === i ? 'bg-white/10 ring-1 ring-white/10' : 'bg-white/[0.03] border border-white/5'}`}>
                            <button
                                className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer group"
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                            >
                                <div className="flex items-center gap-6">
                                    <span className={`text-xs font-black uppercase tracking-widest ${open === i ? 'text-gold' : 'text-white/20'}`}>0{i + 1}</span>
                                    <span className="text-lg font-bold text-white group-hover:text-gold transition-colors">{f.q}</span>
                                </div>
                                <div className={`p-2 rounded-full ${open === i ? 'bg-gold text-black' : 'bg-white/5 text-white/30'}`}>
                                    {open === i ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 pl-[4.5rem] text-lg text-white/50 font-light leading-relaxed">
                                            {f.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
