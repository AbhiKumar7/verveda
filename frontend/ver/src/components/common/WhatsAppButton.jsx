import React, { useState, useEffect } from 'react';

const WhatsAppButton = ({ 
  phoneNumber = "919876543210", // Default: India country code + number without +
  message = "Hello VERVEDA, I would like to inquire about your jewellery collection.",
  position = "bottom-right",
  size = "medium",
  showTooltip = true,
  tooltipText = "Chat with us on WhatsApp",
  autoShow = false,
  autoShowDelay = 5000,
  prefillProduct = false,
  productName = "",
  productPrice = "",
  productUrl = "",
  askUserNumber = true // New prop to enable/disable number input
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(autoShow);
  const [isHovered, setIsHovered] = useState(false);
  const [showNumberModal, setShowNumberModal] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [countryCode, setCountryCode] = useState('91');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Auto-show tooltip after delay
  useEffect(() => {
    if (autoShow) {
      const timer = setTimeout(() => {
        setIsTooltipVisible(false);
      }, autoShowDelay);
      return () => clearTimeout(timer);
    }
  }, [autoShow, autoShowDelay]);

  // Common country codes
  const countryCodes = [
    { code: '91', name: 'India (+91)' },
    { code: '1', name: 'USA/Canada (+1)' },
    { code: '44', name: 'UK (+44)' },
    { code: '61', name: 'Australia (+61)' },
    { code: '81', name: 'Japan (+81)' },
    { code: '86', name: 'China (+86)' },
    { code: '49', name: 'Germany (+49)' },
    { code: '33', name: 'France (+33)' },
    { code: '39', name: 'Italy (+39)' },
    { code: '34', name: 'Spain (+34)' },
    { code: '55', name: 'Brazil (+55)' },
    { code: '7', name: 'Russia (+7)' },
    { code: '82', name: 'South Korea (+82)' },
    { code: '31', name: 'Netherlands (+31)' },
    { code: '46', name: 'Sweden (+46)' },
    { code: '41', name: 'Switzerland (+41)' },
    { code: '971', name: 'UAE (+971)' },
    { code: '966', name: 'Saudi Arabia (+966)' },
    { code: '65', name: 'Singapore (+65)' },
    { code: '60', name: 'Malaysia (+60)' },
  ];

  // Build the WhatsApp URL with message
  const buildWhatsAppUrl = (phone) => {
    let fullMessage = message;
    
    // Add product details if prefill is enabled
    if (prefillProduct && productName) {
      fullMessage = `${message}\n\nProduct: ${productName}`;
      if (productPrice) fullMessage += `\nPrice: ${productPrice}`;
      if (productUrl) fullMessage += `\nView: ${productUrl}`;
      fullMessage += `\n\nI would like to know more about this piece.`;
    }

    const encodedMessage = encodeURIComponent(fullMessage);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    if (askUserNumber) {
      setShowNumberModal(true);
    } else {
      // If not asking for number, use default
      window.open(buildWhatsAppUrl(phoneNumber), '_blank');
    }
  };

  // Validate phone number
  const validatePhoneNumber = (number) => {
    // Remove all non-digit characters
    const cleaned = number.replace(/\D/g, '');
    if (cleaned.length < 10) {
      setError('Please enter a valid phone number (minimum 10 digits)');
      return false;
    }
    if (cleaned.length > 15) {
      setError('Phone number is too long');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Clean the phone number
    const cleanedNumber = userPhone.replace(/\D/g, '');
    
    if (!validatePhoneNumber(cleanedNumber)) {
      setIsSubmitting(false);
      return;
    }

    // Build full phone number with country code
    const fullPhoneNumber = `${countryCode}${cleanedNumber}`;
    
    // Open WhatsApp with the user's number
    window.open(buildWhatsAppUrl(fullPhoneNumber), '_blank');
    
    // Close modal after a short delay
    setTimeout(() => {
      setShowNumberModal(false);
      setIsSubmitting(false);
      setUserPhone('');
    }, 500);
  };

  // Close modal
  const closeModal = () => {
    setShowNumberModal(false);
    setUserPhone('');
    setError('');
    setIsSubmitting(false);
  };

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    // Only allow digits
    const cleaned = value.replace(/\D/g, '');
    
    // Format as XXX-XXX-XXXX for better readability
    if (cleaned.length <= 3) {
      return cleaned;
    } else if (cleaned.length <= 6) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    } else {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  // Size classes
  const sizeClasses = {
    small: "w-10 h-10 text-lg",
    medium: "w-14 h-14 text-2xl",
    large: "w-16 h-16 text-3xl"
  };

  // Position classes
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showNumberModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showNumberModal]);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div 
        className={`fixed z-50 ${positionClasses[position]} transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && isTooltipVisible && (
          <div className="absolute bottom-full right-0 mb-3 w-48 bg-charcoal text-ivory text-xs px-4 py-2 rounded-sm shadow-lg animate-fadeIn">
            {tooltipText}
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-charcoal transform rotate-45"></div>
          </div>
        )}

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full animate-ping bg-green-500/30"></div>

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className={`block ${sizeClasses[size]} bg-green-500 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 relative`}
          onMouseEnter={() => {
            setIsHovered(true);
            setIsTooltipVisible(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            if (!autoShow) setIsTooltipVisible(false);
          }}
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg 
            className="w-2/3 h-2/3 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

        {/* Hover Tooltip */}
        {isHovered && showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 w-48 bg-charcoal text-ivory text-xs px-4 py-2 rounded-sm shadow-lg animate-fadeIn">
            Chat with us on WhatsApp
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-charcoal transform rotate-45"></div>
          </div>
        )}
      </div>

      {/* Number Input Modal */}
      {showNumberModal && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center bg-charcoal/50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-ivory rounded-sm shadow-2xl max-w-md w-full mx-4 p-8 animate-slideUp relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button - Top Right Corner */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-sage-100 transition-all duration-300 flex items-center justify-center text-charcoal/60 hover:text-charcoal group"
              aria-label="Close modal"
            >
              <svg 
                className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Chat with Us</h3>
              <p className="text-charcoal/60 text-sm font-sans mt-1">
                Enter your phone number to start a WhatsApp conversation
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Country Code Selector */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                  Country Code
                </label>
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full px-4 py-3 border border-sage-200 focus:border-gold-300 focus:ring-2 focus:ring-gold-300/20 outline-none transition-all duration-300 font-sans bg-white rounded-sm"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-charcoal mb-1 font-sans">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal/40 font-sans">
                    +{countryCode}
                  </span>
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setUserPhone(formatted);
                      setError('');
                    }}
                    placeholder="98765 43210"
                    className={`w-full pl-16 pr-4 py-3 border ${
                      error ? 'border-red-300' : 'border-sage-200'
                    } focus:border-gold-300 focus:ring-2 focus:ring-gold-300/20 outline-none transition-all duration-300 font-sans bg-white rounded-sm`}
                    required
                    autoFocus
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-xs font-sans mt-1">{error}</p>
                )}
              </div>

              {/* Product Preview (if prefill is enabled) */}
              {prefillProduct && productName && (
                <div className="bg-sage-50 p-4 rounded-sm mb-4">
                  <p className="text-xs uppercase tracking-wider text-charcoal/40 font-sans mb-1">
                    You're inquiring about:
                  </p>
                  <p className="text-sm text-charcoal font-serif">{productName}</p>
                  {productPrice && (
                    <p className="text-sm text-gold-400 font-sans">{productPrice}</p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-3 border border-sage-200 text-charcoal text-sm uppercase tracking-wider font-sans hover:border-gold-300 hover:text-gold-400 transition-all duration-300 rounded-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-4 py-3 bg-green-500 text-white text-sm uppercase tracking-wider font-sans hover:bg-green-600 transition-all duration-300 rounded-sm ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Start Chat 💬'
                  )}
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-center text-xs text-charcoal/40 font-sans mt-4">
                We'll use your number only for this conversation. Your privacy matters.
              </p>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;