
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-enactus-darkGray text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">ENACTUS</span>
              <span className="text-enactus-gold">EMI</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Pushing Boundaries, Driving Change through entrepreneurial action and engineering innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-enactus-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-enactus-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-enactus-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-enactus-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-enactus-gold mr-2 mt-1" />
                <span className="text-gray-300">
                  École Mohammadia d'Ingénieurs, Avenue Ibn Sina B.P 765, Agdal Rabat, Morocco
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-enactus-gold mr-2" />
                <a href="mailto:contact@enactusemi.org" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  contact@enactusemi.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-enactus-gold mr-2" />
                <a href="tel:+212500000000" className="text-gray-300 hover:text-enactus-gold transition-colors">
                  +212 5 00 00 00 00
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest news and events.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-enactus-gold focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-enactus-gold text-white py-2 px-4 rounded-md font-medium hover:bg-[#e6ae00] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Enactus EMI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-gray-400 text-sm">
            <a href="#" className="hover:text-enactus-gold transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-enactus-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
