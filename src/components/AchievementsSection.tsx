
import React from 'react';
import { Award, Trophy, Medal, Globe } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      year: '2023',
      title: 'National Champions',
      description: 'First place at the Enactus Morocco National Competition',
      icon: <Trophy className="h-8 w-8 text-enactus-gold" />,
    },
    {
      year: '2022',
      title: 'Global Top 20',
      description: 'Finalist at the Enactus World Cup in Puerto Rico',
      icon: <Globe className="h-8 w-8 text-enactus-gold" />,
    },
    {
      year: '2022',
      title: 'Sustainability Award',
      description: 'Recognition for our EcoGrow project at the African Innovation Summit',
      icon: <Award className="h-8 w-8 text-enactus-gold" />,
    },
    {
      year: '2021',
      title: 'Technical Innovation Prize',
      description: 'Awarded by the Ministry of Higher Education for the WaterPure project',
      icon: <Medal className="h-8 w-8 text-enactus-gold" />,
    },
  ];

  const stats = [
    { value: '15+', label: 'Projects Launched' },
    { value: '10K+', label: 'Lives Impacted' },
    { value: '50+', label: 'Team Members' },
    { value: '20+', label: 'Awards Won' },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-enactus-darkGray">Pal</span><span className="text-enactus-gold">marès</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating our journey of excellence and recognition.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
            >
              <div className="p-3 rounded-full bg-gray-50">{achievement.icon}</div>
              <div>
                <span className="text-sm font-medium text-enactus-gold">{achievement.year}</span>
                <h4 className="text-xl font-bold mt-1">{achievement.title}</h4>
                <p className="text-gray-600 mt-2">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-enactus-darkGray mb-12">Our Impact By Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="block text-4xl font-bold text-enactus-gold">{stat.value}</span>
                <span className="block mt-2 text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
