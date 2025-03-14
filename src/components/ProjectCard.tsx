
import React from 'react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  impact?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  category,
  impact 
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-enactus-blue">{title}</span>
        </div>
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-medium bg-enactus-blue text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-600 text-sm flex-1">{description}</p>
        
        {impact && (
          <div className="mt-4 mb-4 p-3 bg-gray-50 rounded-md border-l-4 border-enactus-blue">
            <p className="text-sm font-medium">Impact:</p>
            <p className="text-sm text-gray-600">{impact}</p>
          </div>
        )}
        
        <Button variant="outline" size="sm" className="mt-2 self-start">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
