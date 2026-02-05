
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import FounderSection from './components/FounderSection';
import ContactForm from './components/ContactForm';
import WhyChooseUs from './components/WhyChooseUs';
import { SERVICE_PILLARS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* PHILOSOPHY SECTION */}
        <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="afro-pattern absolute inset-0 opacity-[0.03]"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[10px] uppercase tracking-[0.5em] text-earth-ochre mb-6 lg:mb-8 block font-semibold">Our Ethos</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl serif text-earth-dark mb-8 lg:mb-10 leading-tight">
                Transformation happens when you are <span className="italic">truly held.</span>
              </h2>
              <p className="text-lg lg:text-xl text-earth-dark/70 font-light leading-relaxed mb-10 lg:mb-12">
                At Karevia Group, we believe Kenya is more than a destination—it is a sanctuary for the soul. We move away from transactional tourism towards deeply human-centered, safe, and emotionally intelligent concierge services.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pt-10 lg:pt-12 border-t border-earth-dark/10">
                {[
                  { label: "Human", icon: "♥" },
                  { label: "Discreet", icon: "◈" },
                  { label: "Safe", icon: "🛡" },
                  { label: "Personal", icon: "✨" }
                ].map((item) => (
                  <div key={item.label} className="text-center group">
                    <span className="text-xl lg:text-2xl text-earth-ochre mb-2 block group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                    <span className="text-[9px] lg:text-[10px] uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 lg:py-32 bg-earth-sand relative overflow-hidden">
          <div className="afro-pattern absolute inset-0 opacity-[0.06]"></div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="max-w-xl">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-earth-ochre mb-4 lg:mb-6 font-semibold">Our Five Pillars</h2>
                <h3 className="text-4xl sm:text-5xl md:text-7xl serif text-earth-dark leading-tight sm:leading-none">The Karevia <br /> <span className="italic">Ecosystem</span></h3>
              </div>
              <p className="text-earth-dark/60 font-light italic text-base lg:text-lg max-w-xs">
                Each service is a thread in the tapestry of your transformation.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-12">
              {SERVICE_PILLARS.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 lg:py-32 bg-white border-y border-earth-dark/5 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
                {TESTIMONIALS.map((t, idx) => (
                  <div key={t.id} className="relative group p-6 sm:p-8 -m-6 sm:-m-8 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:bg-earth-sand/30">
                    <span className="text-6xl sm:text-7xl serif text-earth-ochre/10 absolute -top-4 -left-2 group-hover:text-earth-ochre/40 transition-all duration-700 pointer-events-none">“</span>
                    <p className="text-xl sm:text-2xl serif italic text-earth-dark leading-relaxed mb-8 relative z-10">
                      {t.quote}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 lg:w-10 h-px bg-earth-ochre group-hover:w-16 transition-all duration-700"></div>
                      <div>
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-earth-dark">{t.author}</p>
                        <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-earth-dark/50">{t.context}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US - COMPREHENSIVE SECTION */}
        <WhyChooseUs />

        {/* FOUNDER HIGHLIGHT */}
        <FounderSection />

        {/* CONTACT SECTION */}
        <ContactForm />

      </main>

      {/* FOOTER MINI */}
      <footer className="bg-earth-dark py-12 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-white/30 text-[9px] lg:text-[10px] uppercase tracking-[0.3em]">
          <div className="font-medium text-center md:text-left">Karevia Group &mdash; Nairobi, Kenya</div>
          <div className="mt-8 md:mt-0 flex space-x-6 lg:space-x-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:inquiry@kareviagroup.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
