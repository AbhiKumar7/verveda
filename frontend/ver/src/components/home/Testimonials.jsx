import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The craftsmanship is unparalleled. I felt the connection to nature the moment I wore my Veveda necklace. Truly slow luxury at its finest.",
      name: "Eleanor Vance",
      title: "Conscious Collector",
      rating: 5,
    },
    {
      id: 2,
      quote: "Finding jewelry that aligns with my values without compromising on aesthetic was impossible until VERVEDA. Every piece is a masterpiece.",
      name: "Marcus Thorne",
      title: "Architect",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-sage-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Voices of Elegance
            </h2>
            <div className="flex justify-center md:justify-start space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold-300 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-charcoal/60 font-sans">
              Read about the experiences of our patrons who value the
              intersection of sustainability and luxury.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-ivory p-8 shadow-sm rounded-sm">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold-300 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic text-charcoal/80 mb-6 leading-relaxed font-serif">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-200 to-gold-400"></div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider font-bold text-charcoal">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-charcoal/50">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;