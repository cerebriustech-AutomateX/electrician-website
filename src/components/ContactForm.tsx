import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="contact" className="py-24 bg-white text-black" aria-labelledby="contact-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-stretch">
                    <div className="flex flex-col justify-between py-10">
                        <div>
                            <h2 id="contact-heading" className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                                Secure Your <br />Expert Quote
                            </h2>
                            <p className="text-black/50 text-xl font-light mb-12 max-w-md leading-relaxed">
                                Connect with London's premier electrical team. Average response time for quote requests is <strong className="text-black">30 minutes</strong> during business hours.
                            </p>

                            <div className="space-y-8">
                                <a href="tel:02079460000" className="group flex items-center gap-6 cursor-pointer">
                                    <div className="size-14 rounded-2xl bg-black text-white flex items-center justify-center group-hover:bg-gold transition-all duration-300 shadow-xl">
                                        <Phone className="size-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Immediate Assistance</p>
                                        <p className="text-2xl font-black">020 7946 0000</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6">
                                    <div className="size-14 rounded-2xl bg-black/[0.03] border border-black/10 flex items-center justify-center">
                                        <Mail className="size-6 text-black/40" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Email Inquiries</p>
                                        <p className="text-xl font-bold">info@voltandvibe.co.uk</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 text-black/40">
                                    <MapPin className="size-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Serving Greater London · Zones 1-6</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-black/5 grid grid-cols-2 gap-8">
                            <div>
                                <Clock className="size-5 mb-4 text-gold" />
                                <p className="text-sm font-bold">Mon–Sat 7AM–9PM</p>
                                <p className="text-[10px] uppercase font-black tracking-widest text-black/30 leading-relaxed">Office operations</p>
                            </div>
                            <div>
                                <CheckCircle2 className="size-5 mb-4 text-green-600" />
                                <p className="text-sm font-bold">24/7 Support</p>
                                <p className="text-[10px] uppercase font-black tracking-widest text-black/30 leading-relaxed">Emergency team</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white rounded-[48px] p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                        {/* Background design elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 blur-[100px]" />

                        {submitted ? (
                            <div className="text-center py-20 relative z-10">
                                <div className="size-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
                                    <CheckCircle2 className="size-10 text-white" />
                                </div>
                                <h3 className="text-4xl font-black tracking-tight mb-4 text-white">Request Received</h3>
                                <p className="text-white/40 text-lg mb-12">One of our lead engineers will contact you within 30 minutes.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="px-8 py-3 rounded-full bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-gold transition-all"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-6 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Your Name</label>
                                        <input id="name" type="text" required className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="John Smith" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Phone Number</label>
                                        <input id="phone" type="tel" required className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="07xxx xxx xxx" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Email Address</label>
                                    <input id="email" type="email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Required Expertise</label>
                                    <select id="service" required className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold transition-all cursor-pointer appearance-none">
                                        <option value="" className="bg-black">Select service area...</option>
                                        <option className="bg-black">Full Property Rewire</option>
                                        <option className="bg-black">Lighting Design & Install</option>
                                        <option className="bg-black">Consumer Unit Upgrade</option>
                                        <option className="bg-black">Commercial Infrastructure</option>
                                        <option className="bg-black">Emergency Fault Finding</option>
                                        <option className="bg-black">EV Charger Installation</option>
                                        <option className="bg-black">EICR / Testing</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="details" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Project Details</label>
                                    <textarea id="details" rows={3} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none" placeholder="Brief description of requirements..." />
                                </div>

                                <button type="submit" className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-gold transition-all duration-300 mt-6 shadow-2xl flex items-center justify-center gap-3">
                                    <Send className="size-5" /> Request Professional Quote
                                </button>
                                <p className="text-center text-[10px] font-bold text-white/20 uppercase tracking-widest">No obligation · 30-min response guarantee</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
