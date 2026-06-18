import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
// Choose one of these:
import WhatsAppButton from '../common/WhatsAppButton'; // Simple button
// OR
import FloatingWhatsApp from '../common/FloatingWhatsApp'; // Multi-option

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      
      {/* Single WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="919876543210"
        message="Hello VERVEDA, I would like to inquire about your jewellery."
        position="bottom-right"
        size="medium"
      />
      
      {/* OR Multi-Option Floating Button */}
      {/* <FloatingWhatsApp /> */}
    </div>
  );
};

export default Layout;