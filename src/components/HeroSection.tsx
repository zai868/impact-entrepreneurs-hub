
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-enactus-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-enactus-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-enactus-darkGray">Pushing Boundaries,</span>
              <br />
              <span className="text-enactus-blue">Driving Change</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              We are Enactus EMI, engineering students who harness entrepreneurial action to create positive impact in our communities and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  Discover Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Join Us
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="aspect-video bg-white p-2 rounded-lg shadow-lg rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xl font-bold text-enactus-blue">Enactus EMI Logo</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-enactus-blue/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 flex justify-center">
          <a href="#about" className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-enactus-blue">
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
