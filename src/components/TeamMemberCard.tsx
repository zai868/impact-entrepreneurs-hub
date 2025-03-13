
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  department: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const TeamMemberCard = ({ 
  name, 
  role, 
  department, 
  image, 
  linkedin, 
  email 
}: TeamMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-enactus-gold">{name}</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="text-enactus-gold font-medium">{role}</p>
        <p className="text-gray-600 text-sm">{department}</p>
        
        <div className="mt-3 flex space-x-2">
          {linkedin && (
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-enactus-gold transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a 
              href={`mailto:${email}`}
              className="p-2 text-gray-600 hover:text-enactus-gold transition-colors"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
