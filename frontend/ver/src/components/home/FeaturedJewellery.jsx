import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const FeaturedJewellery = () => {
  const scrollContainerRef = useRef(null);

  const featuredProducts = [
    {
      id: 1,
      name: 'Verdant Bloom Ring',
      price: '$2,450',
      category: 'Ring',
      path: '/product/verdant-bloom-ring',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL7Sk3aI0KpUBg2UXuCMEEJzQdS7cg7f5kTcCgNNgMPsgCIptUK8oX1rLKFcHvjANJxq0OE0_SwgKoDNwoEMthmDhgIwMcXPj0YflRsaMRiicG2tfdu5JK58ksGR7QKAlPamWxlZTtiB0avaOGrv-9pwrXmY5JRnPRyL9dOBB61b0w-KESQmU8IqTS-SHGf74xuBBwE9cBPdSGceuUvOQqVUWUPpYNfy9h0JJAjZPXTj8e_xa1XHyEWzT80bjVFnSJlEDjFHGbwy_-',
    },
    {
      id: 2,
      name: 'Solar Flare Pendant',
      price: '$1,890',
      category: 'Necklace',
      path: '/product/solar-flare-pendant',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeRXUGgHcKnUpZwU-Z2doroOZ-BrqF-U2Jxxj5DMSoXPbkEXSGLZD68LuMgwHbMPCKKxEEQLDjtbQHVaM4HhFodT0oOyK6wMDyrsXlNLWe15knrkcK5aH-N3PKjsn1kabo6GcFkpfnkJDSTBrC3a84s8WV1R8Z_HdvPosrcSy70-b1slah_DZsTCA7Pzub_lux7kju4vIW7zMgOLflTNRUyt2fIRjDPb6b1j-zpVNAo7uFW2xycQy0NyvMYm_HBnBmVCL2YpkfY8ae',
    },
    {
      id: 3,
      name: 'Celestial Studs',
      price: '$3,200',
      category: 'Earrings',
      path: '/product/celestial-studs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOl-t6TMp8oYlueWmkHhGMYmb_NTKvio0XlmZZ5T4UePiU1MQZKyeo6ynSuM3BR0s7RiwgaJN48gxqT81tiRiDpNmx0-vXIZXQBxZ0oGFT_VUYy80ReuGPGzFxrdGjHSCeKX6pDt1wqAFUfBQP0_x4nq00C_9uwU1gj4S8nmvnnkMJPekNmUirsYiT6JptsFnLD8twG8Oh-wSAHQICOhHkzaV5Hh1p_dGPbc-eK-IKEHYSqXYfshVtPZPYIKZWHBy-S_uMbmjV3Pjr',
    },
    {
      id: 4,
      name: 'Eden Cuff',
      price: '$2,100',
      category: 'Bracelet',
      path: '/product/eden-cuff',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM9BZue3LXvZfo2FiC4N0b7APDfyzyvRZJa2qQBXSPOnC4VPLByOkBaqHj0aCNgv0xsbOlI-KxzlRXflEwVWH2tWtB7158_R45yms2P4FyYKgEecHSuIlnYnqrLHM25ZeRCfNHaVaP3Rk-PS0BZJgjK0DKuFwyyO51jgRE1L2ftzF_eWhpZP9mO7MxpvTBcKAZFVTjmWOKT_OCI6ol4YCIXWVfxPALZ9f14ctNhJCDbsrRXkZ9qms0kZT54PoN3EED1D3OQX8s01Kl',
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 block mb-2">
              Curated Pieces
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Featured Collections
            </h2>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-charcoal/20 rounded-full hover:bg-charcoal hover:border-charcoal hover:text-ivory transition"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-charcoal/20 rounded-full hover:bg-charcoal hover:border-charcoal hover:text-ivory transition"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar space-x-6 px-6 md:px-12 pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featuredProducts.map((product) => (
          <div key={product.id} className="min-w-[280px] md:min-w-[320px] group flex-shrink-0">
            <div className="aspect-square bg-sage-100 mb-4 relative overflow-hidden">
              <img
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={product.image}
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Link
                  to={product.path}
                  className="bg-ivory text-charcoal px-6 py-2 text-xs uppercase tracking-wider hover:bg-charcoal hover:text-ivory transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <h4 className="text-xl font-serif text-charcoal">{product.name}</h4>
            <p className="text-charcoal/60 text-sm font-sans">{product.category}</p>
            <p className="text-gold-400 font-semibold mt-1">{product.price}</p>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedJewellery;