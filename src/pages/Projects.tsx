// src/pages/Projects.tsx
import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import { Project } from '../../types';

import tattooPic from '../assets/images/tattooPic.jpg';
import cupsOfLife from '../assets/images/cupsOfLife.jpg';
import tierCupcakes from '../assets/images/tierCupcakes.jpg';
import corsetImg from '../assets/images/corset.jpg';
import ceramicMugs from '../assets/images/ceramicMugs.jpg';
import cramped from '../assets/images/cramped.png';
import fruitTart from '../assets/images/fruitTart.jpg';
import rugTufting from '../assets/images/rugTufting.jpg';
import sunflowerCupcakes from '../assets/images/sunflowerCupcakes.jpg';
import quilt from '../assets/images/quilt.png';
import ceramicBowl from '../assets/images/cermaicBowl.jpg';
import midnightVigil from '../assets/images/midnightVigil.jpg';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All Work' | Project['category']>('All Work');

  const projects: Project[] = [
    {
      id: 'flower-tattoo',
      title: 'Stained Glass Embroidery Tattoo',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: tattooPic,
    },
    {
      id: 'cups-life',
      title: 'Cups of Life',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: cupsOfLife,
    },
    {
      id: 'cupcake-bouquet',
      title: 'Tiers of Flower Cupcakes',
      category: 'Baking',
      description: 'Hand-piped buttercream flowers on a tiered display.',
      imageUrl: tierCupcakes,
    },
    {
      id: 'corset',
      title: 'Sewed Waist Corset',
      category: 'Fiber Arts',
      description: ' ',
      imageUrl: corsetImg,
    },
    {
      id: 'ceramic-mugs',
      title: 'Ceramic Mugs',
      category: 'Ceramics',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: ceramicMugs,
    },
    {
      id: 'cramped',
      title: 'Cramped',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: cramped,
    },
    {
      id: 'fruit-tart',
      title: 'Classic Fruit Tart',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: fruitTart,
    },
    {
      id: 'tufting-heart',
      title: 'Heart of the Studio',
      category: 'Fiber Arts',
      description: 'A large-scale tufted punch needle rug with bold imagery.',
      imageUrl: rugTufting,
    },
    {
      id: 'sunflower',
      title: 'Sunflower Cupcakes',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: sunflowerCupcakes,
    },
    {
      id: 'quilt',
      title: 'Sewed Pinwheel Quilt Patch',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: quilt,
    },
    {
      id: 'floral-bowl',
      title: 'Painted Ceramic Bowl',
      category: 'Ceramics',
      description: 'Hand-painted ceramic mugs exploring floral symmetry.',
      imageUrl: ceramicBowl,
    },
    {
      id: 'midnight-vigil',
      title: 'Midnight Vigil',
      category: 'Multimedia',
      description: 'Surreal ink illustration of a winged eyeball over a candle.',
      imageUrl: midnightVigil,
    },
  ];

  const filters: Array<'All Work' | Project['category']> = ['All Work', 'Baking', 'Ceramics', 'Multimedia', 'Fiber Arts'];

  const filteredProjects =
    activeFilter === 'All Work'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b pb-16">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold serif text-emerald-950 tracking-tighter">
            The Gallery.
          </h1>
          <p className="text-xl text-stone-500 italic">
            Some of my favorite tidbits of art
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full border transition
                ${
                  activeFilter === filter
                    ? 'border-emerald-700 text-emerald-700'
                    : 'border-stone-200 hover:border-emerald-600 hover:text-emerald-700'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
