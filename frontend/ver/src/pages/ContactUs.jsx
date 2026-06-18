import React from 'react';

const ContactUs = () => {
  const phoneNumber = "919876543210";
  
  const departments = [
    {
      name: "Sales & Inquiries",
      icon: "💎",
      message: "Hello VERVEDA, I would like to inquire about your jewellery collections.",
      description: "For product inquiries and purchases"
    },
    {
      name: "Custom Orders",
      icon: "✧",
      message: "Hello VERVEDA, I would like to discuss a custom jewellery design.",
      description: "For bespoke and custom jewellery"
    },
    {
      name: "Support & Service",
      icon: "🛠️",
      message: "Hello VERVEDA, I need assistance with my existing order.",
      description: "For order support and after-sales service"
    }
  ];

  return (
    <div className="min-h-screen bg-ivory pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-4">
            Contact Us
          </h1>
          <div className="w-20 h-px bg-gold-300 mx-auto"></div>
          <p className="text-charcoal/60 mt-6 max-w-2xl mx-auto font-sans text-lg">
            We're here to assist you. Choose a department to start a conversation on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {departments.map((dept, index) => (
            <a
              key={index}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(dept.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 text-center hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {dept.icon}
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-gold-400 transition-colors">
                {dept.name}
              </h3>
              <p className="text-charcoal/60 text-sm font-sans">{dept.description}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-400 border-b border-gold-400 pb-1 group-hover:border-gold-500 group-hover:text-gold-500 transition-colors">
                Chat on WhatsApp
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Alternative Contact Options */}
        <div className="mt-20 text-center">
          <p className="text-sm text-charcoal/40 font-sans mb-4">Or reach us directly</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 text-charcoal/70 font-sans">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-charcoal/70 font-sans">
              <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@verveda.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;