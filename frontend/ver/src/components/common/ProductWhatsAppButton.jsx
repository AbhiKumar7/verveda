import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const ProductWhatsAppButton = ({ product }) => {
  const phoneNumber = "919876543210";
  const message = `Hello VERVEDA, I would like to inquire about the ${product.name}.`;
  
  return (
    <WhatsAppButton 
      phoneNumber={phoneNumber}
      message={message}
      position="bottom-right"
      size="medium"
      showTooltip={true}
      tooltipText="Ask about this product 💎"
      prefillProduct={true}
      productName={product.name}
      productPrice={product.price}
      productUrl={window.location.href}
    />
  );
};

export default ProductWhatsAppButton;