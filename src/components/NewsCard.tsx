
import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  image: string;
  category: string;
  url?: string;
}

const NewsCard = ({ 
  title, 
  date, 
  summary, 
  image, 
  category,
  url = '#' 
}: NewsCardProps) => {
  return (
    <a 
      href={url}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-video bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-medium text-enactus-gold">{title}</span>
        </div>
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-medium bg-enactus-gold text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <h4 className="font-bold text-xl mb-2 line-clamp-2">{title}</h4>
        <p className="text-gray-600 text-sm line-clamp-3">{summary}</p>
        
        <div className="mt-4 inline-flex items-center text-enactus-gold font-medium">
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
