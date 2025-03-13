
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'EcoGrow',
      description: 'Sustainable urban agriculture solution using hydroponic techniques to grow crops with 90% less water.',
      image: '',
      category: 'Environment',
      impact: 'Helped 15 communities establish sustainable food sources and reduced water usage by 65,000 liters.'
    },
    {
      title: 'SolarTech',
      description: 'Affordable solar power solutions for rural communities without access to the electrical grid.',
      image: '',
      category: 'Energy',
      impact: 'Provided electricity to 500+ households and reduced carbon emissions by 120 tons annually.'
    },
    {
      title: 'EduAccess',
      description: 'Digital education platform providing resources and mentorship to underprivileged students.',
      image: '',
      category: 'Education',
      impact: 'Reached 2,000+ students across 15 schools and improved academic performance by 30%.'
    },
    {
      title: 'MediConnect',
      description: 'Telemedicine solution connecting rural patients with urban healthcare providers.',
      image: '',
      category: 'Healthcare',
      impact: 'Facilitated 1,200+ medical consultations and reduced travel time by an average of 5 hours per patient.'
    },
    {
      title: 'WasteValue',
      description: 'Waste management system that converts organic waste into compost for agricultural use.',
      image: '',
      category: 'Environment',
      impact: 'Processed 50 tons of organic waste and generated income for 25 local farmers.'
    },
    {
      title: 'WaterPure',
      description: 'Low-cost water filtration system using locally sourced materials for communities with contaminated water.',
      image: '',
      category: 'Water',
      impact: 'Provided clean drinking water to 3,000+ people and reduced waterborne illnesses by 40%.'
    }
  ];

  const categories = ['All', 'Environment', 'Energy', 'Education', 'Healthcare', 'Water'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-enactus-darkGray">Our</span> <span className="text-enactus-gold">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed by engineering students to address real-world challenges.
          </p>
        </div>

        <div className="mt-10 flex justify-center flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-enactus-gold text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              impact={project.impact}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="primary" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
