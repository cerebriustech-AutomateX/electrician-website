import { motion } from "motion/react";
import { Zap, Shield, Star, CheckCircle2, Phone, Menu, X, ArrowRight, MapPin, Clock, Award } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="text-white fill-white size-6" />
          <span className="text-xl font-bold tracking-tighter uppercase">Volt & Vibe</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-white/70 transition-colors">Services</a>
          <a href="#process" className="text-sm font-medium hover:text-white/70 transition-colors">Process</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-white/70 transition-colors">Reviews</a>
          <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="size-6" />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069" 
          alt="Electrician working" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-widest uppercase">
            EST. 2012 • London & Surrounding Areas
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-gradient">
            London's Most Trusted <br /> Electrical Experts
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Precision engineering meets premium service. We bring cinematic lighting and safe, modern power solutions to your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="glow-button px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
              Get a Free Quote <ArrowRight className="size-5" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-semibold text-lg hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const stats = [
    { label: "Years in Business", value: "12+" },
    { label: "Jobs Completed", value: "4,500+" },
    { label: "Google Rating", value: "5.0", icon: Star },
    { label: "Certified Engineers", value: "15" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-3xl font-bold tracking-tighter">{stat.value}</span>
                {stat.icon && <stat.icon className="size-5 text-yellow-500 fill-yellow-500" />}
              </div>
              <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Residential Lighting",
      description: "Bespoke recessed lighting, smart home integration, and cinematic kitchen illumination.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Commercial Systems",
      description: "Full-scale electrical infrastructure for modern offices, retail spaces, and industrial units.",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Emergency Repairs",
      description: "24/7 rapid response for power outages, consumer unit failures, and safety hazards.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Premium Solutions</h2>
            <p className="text-white/60 text-lg font-light">We don't just fix wires; we craft environments. Every project is handled with surgical precision and aesthetic care.</p>
          </div>
          <a href="#" className="text-sm font-semibold uppercase tracking-widest flex items-center gap-2 hover:text-white/70 transition-colors">
            All Services <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass-card"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-6">{service.description}</p>
                <button className="w-full py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold hover:bg-white text-black transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Consultation", desc: "Expert assessment of your needs and space." },
    { title: "Design", desc: "Detailed planning and aesthetic layout." },
    { title: "Execution", desc: "Clean, efficient, and safe installation." },
    { title: "Certification", desc: "Full safety testing and documentation." },
  ];

  return (
    <section id="process" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">How It Works</h2>
          <p className="text-black/60 text-lg font-light">A seamless experience from the first spark to the final switch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-black/10 z-0" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="size-24 rounded-full bg-black text-white flex items-center justify-center text-3xl font-bold mb-6 shadow-xl">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-black/60 text-sm font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "James Harrison", role: "Homeowner, Kensington", text: "The lighting design in our kitchen is transformative. Professional, clean, and incredibly detailed work." },
    { name: "Sarah Miller", role: "Studio Director", text: "Rare to find tradespeople who care as much about the aesthetic as the technical. Simply the best in London." },
    { name: "David Chen", role: "Property Developer", text: "Reliable, certified, and always on time. They've handled three of my major developments now." },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Trusted by London</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="size-5 text-yellow-500 fill-yellow-500" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-3xl glass-card flex flex-col justify-between">
              <p className="text-lg font-light italic text-white/80 mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-xs uppercase tracking-widest text-white/40 font-semibold">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="text-white fill-white size-6" />
              <span className="text-xl font-bold tracking-tighter uppercase">Volt & Vibe</span>
            </div>
            <p className="text-white/40 text-sm font-light max-w-sm leading-relaxed">
              Providing premium electrical services across London. Fully insured, NICEIC certified, and committed to excellence.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li className="flex items-center gap-2"><Phone className="size-4" /> 020 7946 0000</li>
              <li className="flex items-center gap-2"><MapPin className="size-4" /> Mayfair, London</li>
              <li className="flex items-center gap-2"><Clock className="size-4" /> 24/7 Emergency Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">© 2026 Volt & Vibe Electrical Services Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Award className="size-8 text-white/20" />
            <Shield className="size-8 text-white/20" />
            <CheckCircle2 className="size-8 text-white/20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}
