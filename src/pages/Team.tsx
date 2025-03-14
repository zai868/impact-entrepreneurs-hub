
import React from 'react';
import Navbar from '../components/Navbar';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
