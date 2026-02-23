import { Star, ShieldCheck } from "lucide-react";

export const Testimonials = () => {
    const reviews = [
        {
            name: "James Harrison",
            loc: "Kensington",
            text: "They replaced our entire fuse board and rewired the kitchen. Incredibly tidy — you wouldn't know they'd been there. Fixed-price quote, no extras.",
            job: "Full rewire + consumer unit"
        },
        {
            name: "Sarah Miller",
            loc: "Soho",
            text: "Needed emergency lighting and a full commercial fit-out for our new studio. Delivered on time, on budget, and the lighting design is stunning.",
            job: "Commercial fit-out"
        },
        {
            name: "David Chen",
            loc: "Chelsea",
            text: "Third development they've handled for me. Only electricians I trust with high-end residential. NICEIC certified, always on time, 5-year guarantee is genuine.",
            job: "3x property rewires"
        },
        {
            name: "Emily Watson",
            loc: "Richmond",
            text: "Power outage at 11pm on a Sunday. Here within 45 minutes, found a faulty RCD. Diagnosed, fixed, and tested — all for £120. Lifesavers.",
            job: "Emergency repair"
        },
        {
            name: "Michael O'Brien",
            loc: "Hammersmith",
            text: "Complete electrical installation for our new restaurant — three-phase supply, extraction, emergency lighting, fire alarms. Wouldn't use anyone else.",
            job: "Restaurant fit-out"
        },
        {
            name: "Priya Patel",
            loc: "Ealing",
            text: "Had an EV charger installed. They handled DNO notification, upgraded the consumer unit, installed a smart charger — all in one visit. Very impressed.",
            job: "EV charger install"
        },
    ];

    const googleIcon = (
        <svg className="size-full" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );

    return (
        <section id="reviews" className="py-24 bg-[#050505]" aria-labelledby="reviews-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20 bg-[#0a0a0a] border border-white/5 p-12 rounded-[48px]">
                    <div className="max-w-lg text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <div className="size-12">{googleIcon}</div>
                            <h2 id="reviews-heading" className="text-4xl md:text-6xl font-black tracking-tighter text-white">Rated 5.0</h2>
                        </div>
                        <p className="text-white/40 text-xl font-light">Join 860+ homeowners and businesses who trust Volt & Vibe for flawless electrical execution.</p>
                    </div>

                    <div className="flex flex-col items-center gap-4 py-8 px-12 rounded-[32px] bg-white/5 border border-white/10">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="size-6 text-gold fill-gold" />)}
                        </div>
                        <p className="text-sm font-black uppercase tracking-[0.3em] text-white">Certified Excellence</p>
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="size-10 rounded-full border-2 border-[#050505] bg-gray-800" />
                            ))}
                            <div className="size-10 rounded-full border-2 border-[#050505] bg-gold flex items-center justify-center text-[10px] font-black text-black">+856</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((r, i) => (
                        <div key={i} className="group p-10 rounded-[40px] bg-[#0a0a0a] border border-white/5 flex flex-col justify-between hover:border-gold/30 hover:bg-[#0c0c0c] transition-all duration-500">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div className="size-5">{googleIcon}</div>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, j) => <Star key={j} className="size-3.5 text-gold fill-gold" />)}
                                    </div>
                                </div>

                                <blockquote className="mb-8">
                                    <p className="text-lg font-medium text-white/80 leading-relaxed italic">"{r.text}"</p>
                                </blockquote>

                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-[10px] font-black uppercase tracking-widest text-gold mb-8">
                                    <ShieldCheck className="size-3" />
                                    Verified {r.job}
                                </div>
                            </div>

                            <div>
                                <p className="text-xl font-black text-white">{r.name}</p>
                                <p className="text-sm font-bold text-white/30 uppercase tracking-widest">{r.loc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 leading-none">
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center">
                        <span className="text-sm font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-gold transition-colors">See the full record</span>
                        <div className="h-px w-24 bg-white/10 mt-2 self-stretch mx-auto group-hover:bg-gold transition-all" />
                    </a>
                </div>
            </div>
        </section>
    );
};
