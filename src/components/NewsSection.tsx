
import React from 'react';
import NewsCard from './NewsCard';
import Button from './Button';

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Enactus EMI Wins National Competition 2023',
      date: 'June 15, 2023',
      summary: 'Our team has been crowned the national champion at the Enactus Morocco National Competition, securing our spot at the Enactus World Cup.',
      image: '',
      category: 'Competition',
      url: '#'
    },
    {
      title: 'EcoGrow Project Featured in Forbes Africa',
      date: 'May 3, 2023',
      summary: 'Our flagship sustainable agriculture initiative has been highlighted in Forbes Africa as one of the most innovative student-led projects.',
      image: '',
      category: 'Media',
      url: '#'
    },
    {
      title: 'Partnership with Ministry of Environment Announced',
      date: 'April 12, 2023',
      summary: 'Enactus EMI has signed a partnership agreement with the Ministry of Environment to scale up our sustainable projects nationally.',
      image: '',
      category: 'Partnership',
      url: '#'
    },
    {
      title: 'Annual Recruitment Drive Now Open',
      date: 'March 1, 2023',
      summary: 'Join our team of change-makers! We are looking for passionate engineering students to help drive our social impact initiatives.',
      image: '',
      category: 'Announcement',
      url: '#'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-enactus-darkGray">Actu</span><span className="text-enactus-gold">alités</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and achievements from our team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              date={item.date}
              summary={item.summary}
              image={item.image}
              category={item.category}
              url={item.url}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
