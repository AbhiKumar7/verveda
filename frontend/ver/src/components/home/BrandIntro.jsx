import React from 'react';

const BrandIntro = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-ivory text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
          Nature's Elegance, Forged in Gold
        </h2>
        <div className="w-16 h-px bg-gold-300 mx-auto"></div>
        <p className="text-charcoal/70 text-lg leading-relaxed font-sans">
          VERVEDA jewellery is born from the harmony of nature and the
          precision of master artisans. We craft sustainable luxury that
          honors the earth's most precious materials, ensuring every piece
          tells a story of heritage and ecological respect.
        </p>
      </div>
    </section>
  );
};

export default BrandIntro;