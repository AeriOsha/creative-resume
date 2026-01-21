// src/pages/Projects.tsx
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All Work' | Project['category']>('All Work');

  const projects: Project[] = [
    {
      id: 'flower-tattoo',
      title: 'Stained Glass Embroidery Tattoo',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/tattooPic.JPG',
    },
    {
      id: 'cups-life',
      title: 'Cups of Life',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/cupsOfLife.jpg',
    },
    {
      id: 'cupcake-bouquet',
      title: 'Tiers of Flower Cupcakes',
      category: 'Baking',
      description: 'Hand-piped buttercream flowers on a tiered display.',
      imageUrl: '/assets/images/tierCupcakes.jpg',
    },
    {
      id: 'corset',
      title: 'Sewed Waist Corset',
      category: 'Fiber Arts',
      description: ' ',
      imageUrl: '/assets/images/corset.jpg',
    },
    {
      id: 'ceramic-mugs',
      title: 'Ceramic Mugs',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/ceramicMugs.jpg',
    },
    {
      id: 'cramped',
      title: 'Cramped',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/cramped.png',
    },
    {
      id: 'fruit-tart',
      title: 'Classic Fruit Tart',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/fruitTart.jpg',
    },
    {
      id: 'tufting-heart',
      title: 'Heart of the Studio',
      category: 'Fiber Arts',
      description: 'A large-scale tufted punch needle rug with bold imagery.',
      imageUrl: '/assets/images/rugTufting.jpg',
    },
    {
      id: 'sunflower',
      title: 'Sunflower Cupcakes',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/sunflowerCupcakes.jpg',
    },
    {
      id: 'quilt',
      title: 'Sewed Pinwheel Quilt Patch',
      category: 'Multimedia',
      description: 'I designed matching memorial tattoos combining watercolor and fiber arts.',
      imageUrl: '/assets/images/quilt.png',
    },
    {
      id: 'floral-bowl',
      title: 'Painted Ceramic Bowl',
      category: 'Ceramics',
      description: 'Hand-painted ceramic mugs exploring floral symmetry.',
      imageUrl: '/assets/images/cermaicBowl.jpg',
    },
    {
      id: 'midnight-vigil',
      title: 'Midnight Vigil',
      category: 'Multimedia',
      description: 'Surreal ink illustration of a winged eyeball over a candle.',
      imageUrl: '/assets/images/midnightVigil.jpg',
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
