import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import ContactUs from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';

// Collection Pages
import STimonds from './components/collections/STimonds';
import Veveda from './components/collections/Veveda';
import Selaveda from './components/collections/Selaveda';

// Service Pages
import Customisation from './components/services/Customisation';
import OnlineOrder from './components/services/OnlineOrder';
import Wholesale from './components/services/Wholesale';
import GlobalDelivery from './components/services/GlobalDelivery';
import Renovation from './components/services/Renovation';
import GiftVoucher from './components/services/GiftVoucher';

// About Pages
import AboutUs from './components/about/AboutUs';

const App = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/stimonds" element={<STimonds />} />
          <Route path="collections/veveda" element={<Veveda />} />
          <Route path="collections/selaveda" element={<Selaveda />} />
          
          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/customisation" element={<Customisation />} />
          <Route path="services/online-order" element={<OnlineOrder />} />
          <Route path="services/wholesale" element={<Wholesale />} />
          <Route path="services/global-delivery" element={<GlobalDelivery />} />
          <Route path="services/renovation" element={<Renovation />} />
          <Route path="services/gift-voucher" element={<GiftVoucher />} />
          
          {/* Appointment Routes */}
          <Route path="appointment" element={<Appointment />} />
          
          {/* About Routes */}
          <Route path="about" element={<AboutUs />} />
          
          {/* Contact Routes */}
          <Route path="contact" element={<ContactUs />} />
          
          {/* Product Detail */}
          <Route path="product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    
  );
};

export default App;