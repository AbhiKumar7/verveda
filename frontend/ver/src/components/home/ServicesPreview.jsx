import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    { icon: '🎨', name: 'Customisation', description: 'Personalized design', path: '/services/customisation' },
    { icon: '🛍️', name: 'Online Order', description: 'Easy ordering', path: '/services/online-order' },
    { icon: '🏪', name: 'Wholesale', description: 'Bulk inquiries', path: '/services/wholesale' },
    { icon: '🌍', name: 'Global Delivery', description: 'Worldwide shipping', path: '/services/global-delivery' },
    { icon: '🔧', name: 'Renovation', description: 'Restoration service', path: '/services/renovation' },
    { icon: '🎁', name: 'Gift Voucher', description: 'Perfect gifting', path: '/services/gift-voucher' },
  ];

  return (
    <section className="py-32 bg-sage-100 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Our Bespoke Services
          </h2>
          <div className="w-16 h-px bg-gold-300 mx-auto"></div>
          <p className="text-charcoal/60 mt-6 max-w-xl mx-auto font-sans">
            Experience personalized luxury through our dedicated artisan
            services tailored to your unique journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="text-center p-6 bg-ivory hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-sm"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xs uppercase tracking-wider text-charcoal font-semibold">
                {service.name}
              </h4>
              <p className="text-charcoal/40 text-xs mt-1">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;