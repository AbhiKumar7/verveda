import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentCTA = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-ivory">
      <div className="max-w-7xl mx-auto bg-charcoal text-ivory p-12 md:p-20 rounded-sm text-center relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 0 L100 100 M100 0 L0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl">
            Refined Personalization
          </h2>
          <p className="text-ivory/70 text-lg leading-relaxed font-sans">
            Our private consultations offer an exclusive journey into bespoke
            design. Join our master artisans to create a piece that is uniquely yours.
          </p>
          <Link
            to="/appointment"
            className="inline-block mt-6 px-8 py-3 border border-gold-300 text-gold-300 uppercase tracking-wider text-sm hover:bg-gold-300 hover:text-charcoal transition-all duration-300"
          >
            Schedule Your Private Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;