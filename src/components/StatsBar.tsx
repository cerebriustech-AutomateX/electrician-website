export const StatsBar = () => {
    const stats = [
        { value: "12+", label: "Years of Mastery", sub: "Since 2012" },
        { value: "4.5k+", label: "Projects Completed", sub: "London Wide" },
        { value: "5.0 ★", label: "Client Satisfaction", sub: "860+ Reviews" },
        { value: "45min", label: "Response Average", sub: "Emergency Jobs" }
    ];

    return (
        <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden" aria-label="Quick metrics">
            <div className="absolute inset-0 bg-gold/5 opacity-50 flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((s, i) => (
                        <div key={i} className="group">
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white group-hover:text-gold transition-colors duration-300">
                                    {s.value}
                                </span>
                                <span className="text-sm font-bold uppercase tracking-[0.2em] mt-2 text-white/50">
                                    {s.label}
                                </span>
                                <span className="text-[10px] uppercase font-medium tracking-widest text-white/20 mt-1">
                                    {s.sub}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
