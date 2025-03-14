
import React from 'react';
import Navbar from '../components/Navbar';
import PublicationsSection from '../components/PublicationsSection';
import Footer from '../components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <PublicationsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
