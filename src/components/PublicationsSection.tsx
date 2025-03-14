
import React from 'react';
import { ExternalLink } from 'lucide-react';
import Button from './Button';

interface Publication {
  id: number;
  title: string;
  publisher: string;
  date: string;
  image: string;
  link: string;
  description: string;
}

const PublicationsSection = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "L'initiative d'innovation sociale d'Enactus EMI reconnue",
      publisher: "Aujourd'hui Le Maroc",
      date: "12 Mai 2023",
      image: "",
      link: "#",
      description: "Un article détaillant notre projet primé au concours national et l'impact social qu'il a créé."
    },
    {
      id: 2,
      title: "Enactus EMI: Entrepreneuriat au service de la société",
      publisher: "L'Économiste",
      date: "3 Avril 2023",
      image: "",
      link: "#",
      description: "Une analyse approfondie des projets innovants développés par notre équipe."
    },
    {
      id: 3,
      title: "Les ingénieurs d'EMI transforment l'agriculture durable",
      publisher: "Médias24",
      date: "18 Février 2023",
      image: "",
      link: "#",
      description: "Notre projet EcoGrow fait l'objet d'un reportage spécial sur l'agriculture durable."
    },
    {
      id: 4,
      title: "Enactus EMI représente le Maroc à la compétition mondiale",
      publisher: "2M",
      date: "29 Septembre 2022",
      image: "",
      link: "#",
      description: "Reportage sur notre participation à l'Enactus World Cup et nos innovations présentées."
    }
  ];

  return (
    <section id="publications" className="py-20 bg-enactus-gold/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-enactus-darkGray">La Presse qui nous </span>
            <span className="text-enactus-gold">Publient</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les articles et reportages qui mettent en lumière nos projets et réalisations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="h-40 bg-gray-100 relative">
                {pub.image ? (
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-enactus-gold/30 to-enactus-gold/10">
                    <span className="text-xl font-semibold text-enactus-darkGray">{pub.publisher}</span>
                  </div>
                )}
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <span className="text-sm text-enactus-gold font-medium mb-2">{pub.date}</span>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{pub.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pub.description}</p>
                <div className="mt-auto">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-enactus-gold hover:text-enactus-gold/80 transition-colors"
                  >
                    Lire l'article <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline">
            Voir Toutes les Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
