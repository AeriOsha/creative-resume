
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Portfolio' },
    { path: '/resume', label: 'Resume' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfdfa]/90 backdrop-blur-md border-b border-stone-200 py-6 px-6 md:px-12 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-white text-sm font-black transition-all group-hover:bg-emerald-800 group-hover:rotate-6">AO</div>
        <span className="text-2xl font-bold text-emerald-950 serif tracking-tighter">Aeri Osha</span>
      </Link>
      <div className="flex gap-8 md:gap-14">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-xs font-black tracking-[0.2em] uppercase transition-all relative py-1 ${
              location.pathname === link.path 
                ? 'text-emerald-900' 
                : 'text-stone-400 hover:text-emerald-700'
            }`}
          >
            {link.label}
            {location.pathname === link.path && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-800 rounded-full animate-in fade-in zoom-in duration-300"></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
