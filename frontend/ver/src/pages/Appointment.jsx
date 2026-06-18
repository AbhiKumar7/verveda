import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Appointment = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    appointmentType: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    appointmentFor: 'self'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.appointmentType) {
      alert('Please select an appointment type');
      return;
    }
    if (step === 2 && (!formData.date || !formData.time)) {
      alert('Please select date and time');
      return;
    }
    if (step === 3 && (!formData.name || !formData.email || !formData.phone)) {
      alert('Please fill in all required fields');
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Appointment booked:', formData);
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    setFormData({
      appointmentType: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredContact: 'email',
      appointmentFor: 'self'
    });
  };

  // Available time slots
  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM'
  ];

  // Available dates (next 7 days)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      const dayNum = date.getDate();
      dates.push({
        value: date.toISOString().split('T')[0],
        display: `${day}, ${month} ${dayNum}`,
        fullDate: date,
        isToday: i === 0
      });
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  // Appointment type options
  const appointmentTypes = [
    {
      id: 'virtual',
      title: 'Virtual Appointment',
      icon: '💻',
      description: 'Video consultation from anywhere',
      duration: '30 min',
      color: 'border-blue-200 hover:border-blue-400'
    },
    {
      id: 'store',
      title: 'Store Appointment',
      icon: '🏛️',
      description: 'In-person consultation at our showroom',
      duration: '45 min',
      color: 'border-green-200 hover:border-green-400'
    },
    {
      id: 'custom',
      title: 'Custom Design Consultation',
      icon: '✧',
      description: 'Personalized design discussion',
      duration: '1 hour',
      color: 'border-purple-200 hover:border-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold font-sans">Book Your Experience</span>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mt-3 mb-4">
            Book an Appointment
          </h1>
          <div className="w-20 h-px bg-gold-300 mx-auto"></div>
          <p className="text-charcoal/60 mt-6 max-w-2xl mx-auto font-sans text-lg leading-relaxed">
            Experience the VERVEDA difference with a personalized consultation. 
            Our experts are here to guide you through our collections and help 
            you find or create the perfect piece.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <React.Fragment key={num}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold font-sans transition-all duration-300 ${
                    step >= num 
                      ? 'bg-gold-300 text-charcoal' 
                      : 'bg-sage-100 text-charcoal/40'
                  }`}>
                    {step > num ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : num}
                  </div>
                  <span className={`text-xs mt-2 font-sans ${
                    step >= num ? 'text-charcoal font-medium' : 'text-charcoal/40'
                  }`}>
                    {num === 1 ? 'Type' : num === 2 ? 'Time' : num === 3 ? 'Details' : 'Confirm'}
                  </span>
                </div>
                {num < 4 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    step > num ? 'bg-gold-300' : 'bg-sage-100'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="bg-white rounded-sm shadow-lg p-8 md:p-12 text-center animate-fadeIn">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Appointment Confirmed! ✨</h2>
            <p className="text-charcoal/60 font-sans mb-6 max-w-md mx-auto">
              Thank you for booking an appointment with VERVEDA. We'll send a confirmation 
              to your email with all the details. Our team will reach out shortly to confirm.
            </p>
            <div className="bg-sage-50 p-6 rounded-sm mb-8 text-left max-w-md mx-auto">
              <h4 className="font-semibold text-sm text-charcoal mb-3 font-sans uppercase tracking-wider">
                Appointment Details
              </h4>
              <div className="space-y-2 text-sm text-charcoal/70 font-sans">
                <p className="flex justify-between">
                  <span className="font-medium">Type:</span>
                  <span>{appointmentTypes.find(t => t.id === formData.appointmentType)?.title}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{availableDates.find(d => d.value === formData.date)?.display}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>{formData.time}</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">With:</span>
                  <span>{formData.name}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-8 py-3 bg-gold-300 text-charcoal text-sm uppercase tracking-wider font-sans hover:bg-gold-400 transition-all duration-300 rounded-sm"
              >
                Book Another
              </button>
              <Link
                to="/"
                className="px-8 py-3 border border-charcoal/20 text-charcoal text-sm uppercase tracking-wider font-sans hover:bg-charcoal hover:text-ivory transition-all duration-300 rounded-sm"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-lg p-8 md:p-12">
            {/* Step 1: Appointment Type */}
            {step === 1 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal">Select Appointment Type</h2>
                  <p className="text-charcoal/60 font-sans text-sm mt-1">Choose the consultation that best suits your needs.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {appointmentTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleInputChange({ target: { name: 'appointmentType', value: type.id } })}
                      className={`p-6 border-2 rounded-sm text-left transition-all duration-300 hover:shadow-md ${
                        formData.appointmentType === type.id
                          ? 'border-gold-300 bg-gold-50 shadow-md'
                          : 'border-sage-100 hover:border-gold-200'
                      }`}
                    >
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <h3 className="font-serif text-lg text-charcoal mb-1">{type.title}</h3>
                      <p className="text-charcoal/60 text-sm font-sans">{type.description}</p>
                      <p className="text-gold-400 text-xs font-sans mt-2">⏱️ {type.duration}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal">Select Date & Time</h2>
                  <p className="text-charcoal/60 font-sans text-sm mt-1">Choose a convenient date and time for your appointment.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3 font-sans">Select Date</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {availableDates.map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        onClick={() => handleInputChange({ target: { name: 'date', value: date.value } })}
                        className={`p-3 border-2 rounded-sm text-center transition-all duration-300 ${
                          formData.date === date.value
                            ? 'border-gold-300 bg-gold-50'
                            : 'border-sage-100 hover:border-gold-200'
                        }`}
                      >
                        <p className={`text-sm font-sans ${
                          formData.date === date.value ? 'text-charcoal font-medium' : 'text-charcoal/60'
                        }`}>
                          {date.display}
                        </p>
                        {date.isToday && (
                          <span className="text-xs text-gold-400 font-sans">Today</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-3 font-sans">Select Time</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleInputChange({ target: { name: 'time', value: time } })}
                        className={`p-3 border-2 rounded-sm text-center transition-all duration-300 ${
                          formData.time === time
                            ? 'border-gold-300 bg-gold-50'
                            : 'border-sage-100 hover:border-gold-200'
                        }`}
                      >
                        <p className={`text-sm font-sans ${
                          formData.time === time ? 'text-charcoal font-medium' : 'text-charcoal/60'
                        }`}>
                          {time}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal">Your Details</h2>
                  <p className="text-charcoal/60 font-sans text-sm mt-1">Please provide your contact information so we can reach you.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-sage-200 focus:border-gold-300 focus:ring-2 focus:ring-gold-300/20 outline-none transition-all duration-300 font-sans bg-transparent rounded-sm"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-sage-200 focus:border-gold-300 focus:ring-2 focus:ring-gold-300/20 outline-none transition-all duration-300 font-sans bg-transparent rounded-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-sage-200 focus:border-gold-300 focus:ring-2 focus:ring-gold-300/20 outline-none transition-all duration-300 font-sans bg-transparent rounded-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                      Appointment For
                    </label>
                    <div className="flex gap-4">
                      {['self', 'partner', 'gift'].map((option) => (
                        <label key={option} className="flex items-center gap-2 font-sans text-sm text-charcoal/70 cursor-pointer">
                          <input
                            type="radio"
                            name="appointmentFor"
                            value={option}
                            checked={formData.appointmentFor === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-gold-300 focus:ring-gold-300 border-sage-200"
                          />
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {['email', 'phone', 'whatsapp'].map((method) => (
                        <label key={method} className="flex items-center gap-2 font-sans text-sm text-charcoal/70 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-gold-300 focus:ring-gold-300 border-sage-200"
                          />
                          {method.charAt(0).toUpperCase() + method.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                      Additional Notes <span className="text-charcoal/40">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us about your preferences, special requests, or what you're looking for..."
                      className="w-full px-4 py-3 border border-sage-200 focus:border-gold-300 focus:ring-2 focus:ring-gold-300/20 outline-none transition-all duration-300 font-sans bg-transparent resize-none rounded-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="font-serif text-2xl text-charcoal">Review & Confirm</h2>
                  <p className="text-charcoal/60 font-sans text-sm mt-1">Please review your appointment details before confirming.</p>
                </div>

                <div className="bg-sage-50 p-6 rounded-sm space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Appointment Type</p>
                      <p className="text-charcoal font-sans font-medium">
                        {appointmentTypes.find(t => t.id === formData.appointmentType)?.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Duration</p>
                      <p className="text-charcoal font-sans font-medium">
                        {appointmentTypes.find(t => t.id === formData.appointmentType)?.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Date</p>
                      <p className="text-charcoal font-sans font-medium">
                        {availableDates.find(d => d.value === formData.date)?.display || formData.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Time</p>
                      <p className="text-charcoal font-sans font-medium">{formData.time}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Name</p>
                      <p className="text-charcoal font-sans font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Contact</p>
                      <p className="text-charcoal font-sans font-medium">{formData.email}</p>
                    </div>
                  </div>
                  {formData.message && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans">Notes</p>
                      <p className="text-charcoal/70 font-sans text-sm">{formData.message}</p>
                    </div>
                  )}
                </div>

                <div className="bg-gold-50 border border-gold-200 p-4 rounded-sm">
                  <p className="text-sm text-charcoal/70 font-sans flex items-start gap-2">
                    <span className="text-gold-400 mt-0.5">📋</span>
                    <span>By confirming, you agree to our <Link to="/terms" className="text-gold-400 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-gold-400 hover:underline">Privacy Policy</Link>.</span>
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-4 justify-between mt-8 pt-8 border-t border-sage-100">
              <div>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2.5 border border-sage-200 text-charcoal text-sm uppercase tracking-wider font-sans hover:border-gold-300 hover:text-gold-400 transition-all duration-300 rounded-sm"
                  >
                    ← Back
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-2.5 bg-gold-300 text-charcoal text-sm uppercase tracking-wider font-sans hover:bg-gold-400 transition-all duration-300 rounded-sm"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-2.5 bg-gold-300 text-charcoal text-sm uppercase tracking-wider font-sans hover:bg-gold-400 transition-all duration-300 rounded-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Confirm Appointment
                  </button>
                )}
              </div>
            </div>
          </form>
        )}

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-white p-6 rounded-sm shadow-sm">
            <div className="text-3xl mb-2">📞</div>
            <h4 className="font-serif text-sm text-charcoal">Phone</h4>
            <p className="text-charcoal/60 text-sm font-sans">+91 98765 43210</p>
          </div>
          <div className="text-center bg-white p-6 rounded-sm shadow-sm">
            <div className="text-3xl mb-2">✉️</div>
            <h4 className="font-serif text-sm text-charcoal">Email</h4>
            <p className="text-charcoal/60 text-sm font-sans">appointments@verveda.com</p>
          </div>
          <div className="text-center bg-white p-6 rounded-sm shadow-sm">
            <div className="text-3xl mb-2">📍</div>
            <h4 className="font-serif text-sm text-charcoal">Location</h4>
            <p className="text-charcoal/60 text-sm font-sans">Virtual or In-Store</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Appointment;