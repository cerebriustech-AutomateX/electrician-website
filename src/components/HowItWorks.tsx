export const HowItWorks = () => {
    const steps = [
        { num: "01", title: "The Discovery", desc: "Brief us on your requirements via phone or our portal. We'll provide an immediate expert perspective and estimate." },
        { num: "02", title: "Precision Survey", desc: "For complex jobs, our senior lead engineer visits to assess, measure, and design a custom solution with a fixed-price quote." },
        { num: "03", title: "Masters at Work", desc: "Our team executes the installation with obsession over detail. We protect your property and leave it cleaner than we found it." },
        { num: "04", title: "The Certification", desc: "Rigorous testing precedes sign-off. We issue NICEIC certification and activate your 5-year guarantee on the spot." }
    ];

    return (
        <section className="py-32 bg-white text-black overflow-hidden" aria-labelledby="how-it-works-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <h2 id="how-it-works-heading" className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Seamless <br />From Start <br />To Finish</h2>
                        <p className="text-black/50 text-xl font-light leading-relaxed mb-8">We've removed all friction from electrical maintenance. No guesswork, no hidden fees, just expert execution.</p>
                        <div className="flex items-center gap-4 py-6 border-t border-black/10">
                            <div className="size-3 rounded-full bg-gold" />
                            <p className="font-bold">Estimated Quote in <span className="text-gold">15 Minutes</span></p>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-12">
                        {steps.map((s, i) => (
                            <div key={i} className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-black/5 last:border-0 relative">
                                <div className="text-8xl md:text-9xl font-black text-black/[0.03] absolute -top-8 -left-4 select-none pointer-events-none group-hover:text-gold/10 transition-colors duration-500">
                                    {s.num}
                                </div>
                                <div className="relative z-10 flex-1">
                                    <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
                                        <span className="size-8 rounded-full bg-black text-white text-sm flex items-center justify-center font-bold">{i + 1}</span>
                                        {s.title}
                                    </h3>
                                    <p className="text-black/60 text-lg font-light leading-relaxed max-w-xl">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
