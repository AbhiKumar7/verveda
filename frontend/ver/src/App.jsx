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
// STimonds Sub-Category Pages

import StudEarrings from './components/collections/stimonds/StudEarrings';
import HoopEarrings from './components/collections/stimonds/HoopEarrings';
import SolitaireRings from './components/collections/stimonds/SolitaireRings';
import EngagementRings from './components/collections/stimonds/EngagementRings';
import WeddingBands from './components/collections/stimonds/WeddingBands';
import PendantNecklaces from './components/collections/stimonds/PendantNecklaces';
import TennisNecklaces from './components/collections/stimonds/TennisNecklaces';

// Veveda Sub-Category Pages
import FloralCollection from './components/veveda/FloralCollection';
import LeafCollection from './components/veveda/LeafCollection';
import OrganicCollection from './components/veveda/OrganicCollection';



// Selaveda Sub-Category Pages
import HeritagePieces from './components/selaveda/HeritagePieces';
import VintageCollection from './components/selaveda/VintageCollection';
import BridalCollection from './components/selaveda/BridalCollection';

// About Pages
import AboutUs from './components/about/AboutUs';
import SolitaireEarrings from './components/collections/stimonds/SolitaireEarrings';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Main Pages */}
        <Route index element={<Home />} />
        <Route path="collections" element={<Collections />} />
        
        {/* STIMAONDS Routes */}
        <Route path="collections/stimonds" element={<STimonds />} />
        <Route path="collections/stimonds/earrings/solitaire" element={<SolitaireEarrings />} />
        <Route path="collections/stimonds/earrings/stud" element={<StudEarrings />} />
        <Route path="collections/stimonds/earrings/hoop" element={<HoopEarrings />} />
        <Route path="collections/stimonds/rings/solitaire" element={<SolitaireRings />} />
        <Route path="collections/stimonds/rings/engagement" element={<EngagementRings />} />
        <Route path="collections/stimonds/rings/wedding" element={<WeddingBands />} />
        <Route path="collections/stimonds/necklaces/pendant" element={<PendantNecklaces />} />
        <Route path="collections/stimonds/necklaces/tennis" element={<TennisNecklaces />} />
        
        {/* VEVADA Routes */}
        <Route path="collections/veveda" element={<Veveda />} />
        <Route path="collections/veveda/floral" element={<FloralCollection />} />
        <Route path="collections/veveda/leaf" element={<LeafCollection />} />
        <Route path="collections/veveda/organic" element={<OrganicCollection />} />
        
        {/* SELAVADA Routes */}
        <Route path="collections/selaveda" element={<Selaveda />} />
        <Route path="collections/selaveda/heritage" element={<HeritagePieces />} />
        <Route path="collections/selaveda/vintage" element={<VintageCollection />} />
        <Route path="collections/selaveda/bridal" element={<BridalCollection />} />
        
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