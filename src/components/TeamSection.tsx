
import React, { useState } from 'react';
import TeamMemberCard from './TeamMemberCard';
import Button from './Button';

const TeamSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const teamMembers = [
    {
      name: 'Mohamed Ahmed',
      role: 'President',
      department: 'Civil Engineering',
      image: '',
      linkedin: '#',
      email: 'mohamed@example.com',
      category: 'Leadership'
    },
    {
      name: 'Salma Bennis',
      role: 'Vice President',
      department: 'Computer Science',
      image: '',
      linkedin: '#',
      email: 'salma@example.com',
      category: 'Leadership'
    },
    {
      name: 'Youssef Larbi',
      role: 'Project Manager',
      department: 'Mechanical Engineering',
      image: '',
      linkedin: '#',
      email: 'youssef@example.com',
      category: 'Project Management'
    },
    {
      name: 'Amina Tazi',
      role: 'Marketing Lead',
      department: 'Electrical Engineering',
      image: '',
      linkedin: '#',
      email: 'amina@example.com',
      category: 'Marketing'
    },
    {
      name: 'Karim El Fasi',
      role: 'Technical Lead',
      department: 'Computer Science',
      image: '',
      linkedin: '#',
      email: 'karim@example.com',
      category: 'Technical'
    },
    {
      name: 'Nada Benmoussa',
      role: 'Financial Officer',
      department: 'Industrial Engineering',
      image: '',
      linkedin: '#',
      email: 'nada@example.com',
      category: 'Finance'
    },
    {
      name: 'Omar Rachidi',
      role: 'Member',
      department: 'Civil Engineering',
      image: '',
      linkedin: '#',
      email: 'omar@example.com',
      category: 'Members'
    },
    {
      name: 'Leila Mahmoud',
      role: 'Member',
      department: 'Environmental Engineering',
      image: '',
      linkedin: '#',
      email: 'leila@example.com',
      category: 'Members'
    }
  ];

  const categories = ['All', 'Leadership', 'Project Management', 'Marketing', 'Technical', 'Finance', 'Members'];
  
  const filteredMembers = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-enactus-darkGray">Our</span> <span className="text-enactus-gold">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the passionate engineering students driving innovation and social impact.
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              department={member.department}
              image={member.image}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline">
            View All Team Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
