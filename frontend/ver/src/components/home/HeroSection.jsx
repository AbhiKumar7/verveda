import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ onExploreClick }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_08_G_City_04_preview.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
        {/* Gold Accent Line */}
        <div className="w-16 h-px bg-gold-300/80 mb-8 animate-pulse"></div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-wide leading-tight">
          Crafted For
          <span className="block text-gold-300">Timeless Elegance</span>
        </h1>

        {/* Subheading */}
        <p className="text-ivory/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Discover heirloom-quality jewellery where nature's beauty meets
          masterful artistry. Each piece tells a story of sustainable luxury.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={onExploreClick}
            className="group relative px-8 py-4 bg-transparent border-2 border-ivory text-ivory uppercase tracking-wider text-sm font-medium hover:bg-ivory hover:text-charcoal transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Explore Collections</span>
          </button>
          <Link
            to="/appointment"
            className="px-8 py-4 bg-gold-300/90 backdrop-blur-sm text-ivory uppercase tracking-wider text-sm font-medium hover:bg-gold-400 transition-all duration-300 border border-gold-300/50"
          >
            Book Appointment
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-ivory/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;