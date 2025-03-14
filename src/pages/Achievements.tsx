
import React from 'react';
import Navbar from '../components/Navbar';
import AchievementsSection from '../components/AchievementsSection';
import Footer from '../components/Footer';

const Achievements = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <AchievementsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Achievements;
