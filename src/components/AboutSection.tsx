
import React from 'react';
import { Lightbulb, Target, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-enactus-gold" />,
      title: 'Innovation',
      description: 'We foster creative solutions to address real-world challenges through entrepreneurial action.'
    },
    {
      icon: <Target className="h-8 w-8 text-enactus-gold" />,
      title: 'Impact',
      description: 'We measure success by the sustainable positive change we create in our communities.'
    },
    {
      icon: <Heart className="h-8 w-8 text-enactus-gold" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, fairness, and transparency in all our actions.'
    },
    {
      icon: <Users className="h-8 w-8 text-enactus-gold" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, bringing together diverse perspectives to achieve common goals.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-enactus-darkGray">Who</span> <span className="text-enactus-gold">We Are</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unleashing the power of engineering and entrepreneurship to address pressing social challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-enactus-darkGray">Our Story</h3>
            <p className="text-gray-600">
              Enactus EMI is a chapter of Enactus Morocco based at École Mohammadia d'Ingénieurs (EMI), 
              bringing together engineering students from diverse disciplines who are passionate about 
              creating positive social impact through entrepreneurial action.
            </p>
            <p className="text-gray-600">
              Founded with the vision of leveraging our technical expertise to solve real-world problems, 
              our team designs and implements innovative projects that address social, environmental, and 
              economic challenges in our communities.
            </p>
            <p className="text-gray-600">
              As future engineers, we believe in the power of technology and entrepreneurship to drive 
              sustainable change and improve the quality of life for people around us.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white p-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xl font-bold text-enactus-gold">Team Image</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-enactus-gold/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-enactus-darkGray mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-center mb-3">{value.title}</h4>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
