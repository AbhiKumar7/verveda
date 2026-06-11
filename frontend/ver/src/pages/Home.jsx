import React, { useRef } from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandIntro from '../components/home/BrandIntro';
import CollectionsPreview from '../components/home/CollectionsPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedJewellery from '../components/home/FeaturedJewellery';
import Testimonials from '../components/home/Testimonials';
import AppointmentCTA from '../components/home/AppointmentCTA';

const Home = () => {
  const collectionsRef = useRef(null);

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections-section');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <HeroSection onExploreClick={scrollToCollections} />
      <BrandIntro />
      <div id="collections-section">
        <CollectionsPreview />
      </div>
      <ServicesPreview />
      <FeaturedJewellery />
      <Testimonials />
      <AppointmentCTA />
    </div>
  );
};

export default Home;