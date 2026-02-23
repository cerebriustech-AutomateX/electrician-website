import { motion, useReducedMotion } from "motion/react";
import { CircuitBoard, Lightbulb, Building2, AlertTriangle, BatteryCharging, Plug, ArrowUpRight } from "lucide-react";

export const Services = () => {
    const rm = useReducedMotion();

    const services = [
        {
            title: "Full Property Rewires",
            desc: "Complete modernization of your home's electrical pulse. BS 7671 certified, dust-free installation.",
            price: "From £2,400",
            icon: CircuitBoard,
            img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000",
            features: ["Copper Wiring", "Consumer Unit", "Full Testing"]
        },
        {
            title: "Lighting Design",
            desc: "Architectural lighting that transforms spaces. Smart integration, bespoke LED solutions, and mood automation.",
            price: "From £150/room",
            icon: Lightbulb,
            img: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1000",
            features: ["Smart Control", "LED Specialists", "Bespoke Plans"]
        },
        {
            title: "EV Infrastructure",
            desc: "Turn-key charging solutions for homes and offices. OZEV-approved installers for all major charger brands.",
            price: "From £850",
            icon: Plug,
            img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
            features: ["OZEV Approved", "Fast Charge", "App Control"]
        },
        {
            title: "Commercial Systems",
            desc: "High-performance electrical infrastructure for London's businesses. Offices, restaurants, and retail specialist.",
            price: "Custom Quote",
            icon: Building2,
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
            features: ["3-Phase Power", "Emergency Exit", "Compliance"]
        },
        {
            title: "Consumer Unit Pros",
            desc: "Replace dangerous outdated fuse boxes with modern safety boards. Full RCD protection and certification.",
            price: "From £350",
            icon: BatteryCharging,
            img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
            features: ["RCD Protection", "MCB Upgrades", "Certified"]
        },
        {
            title: "24/7 Rapid Response",
            desc: "Power outage or burning smell? Our emergency team is London's fastest response. Available 365, night or day.",
            price: "From £90/hr",
            icon: AlertTriangle,
            img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1000",
            features: ["1hr Average", "Fault Finding", "No Call Out*"]
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#0a0a0a]" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 id="services-heading" className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-white leading-tight">Expertise <br />Without Compromise</h2>
                        <p className="text-white/50 text-xl font-light leading-relaxed">We provide a full spectrum of electrical services, each backed by a 5-year guarantee and delivered by London's top-tier engineers.</p>
                    </div>
                    <a href="#contact" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-gold transition-colors duration-300 border-b border-white group pb-1">
                        Browse All Services <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={rm ? {} : { y: -10 }}
                            className="group relative bg-[#111] rounded-[32px] overflow-hidden border border-white/5 flex flex-col hover:border-white/20 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent" />
                                <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                                    {s.price}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1 relative z-10">
                                <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold group-hover:text-black transition-all duration-500 text-gold">
                                    <s.icon className="size-6" aria-hidden="true" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                                <p className="text-white/40 text-sm font-light leading-relaxed mb-8 flex-1">
                                    {s.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {s.features.map((f, j) => (
                                        <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-white/30 border border-white/5 px-2 py-1 rounded-md">
                                            {f}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="#contact"
                                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-center text-sm font-bold text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
                                >
                                    Book Service
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
