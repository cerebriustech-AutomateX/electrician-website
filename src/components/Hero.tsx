import { motion, useReducedMotion } from "motion/react";
import { Star, ArrowRight, Phone } from "lucide-react";

export const Hero = () => {
    const rm = useReducedMotion();

    return (
        <section className="relative h-[110vh] flex items-center justify-center overflow-hidden" aria-label="Hero">
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
                        alt="Professional electrician at work"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />

                {/* Animated background glows */}
                <div className="absolute top-1/4 left-1/4 size-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 size-96 bg-white/5 rounded-full blur-[120px] animate-pulse delay-700" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={rm ? { opacity: 1 } : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-gold">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                        </span>
                        London's Most Reviewed Electrical Team
                    </div>

                    <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[0.85] mb-8 text-white">
                        Excellence <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gold/50">In Every Wire</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Premium residential and commercial electrical solutions. From London's most intricate lighting designs to 24/7 emergency saves. Certified, Insured, Unmatched.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                        <a
                            href="#contact"
                            className="group px-10 py-5 rounded-full bg-white text-black font-extrabold text-xl hover:bg-gold transition-all duration-300 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-3"
                        >
                            Get Expert Quote
                            <ArrowRight className="size-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </a>
                        <a
                            href="tel:02079460000"
                            className="px-10 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold text-xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center gap-3"
                        >
                            <Phone className="size-6 text-gold" aria-hidden="true" />
                            020 7946 0000
                        </a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="size-5 text-gold fill-gold" aria-hidden="true" />
                                ))}
                            </div>
                            <p className="text-sm text-white/40"><strong className="text-white text-base">860+</strong> Google Reviews</p>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-white/10" />

                        <div className="flex gap-8">
                            <div className="text-center md:text-left">
                                <p className="text-2xl font-bold text-white mb-0.5">NICEIC</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Approved Contractor</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-2xl font-bold text-white mb-0.5">£2M</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Public Liability</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-2xl font-bold text-white mb-0.5">24/7</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Emergency Saves</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
