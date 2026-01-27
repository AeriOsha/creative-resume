// filename: src/App.tsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen text-stone-900 selection:bg-emerald-900 selection:text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        
        <footer className="border-t border-stone-200 bg-emerald-950 text-emerald-100 py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold serif mb-2">Aeri Osha</h2>
              <p className="text-emerald-400 font-light">Colorado School of Mines Student</p>
            </div>
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
              <a
                href="https://www.linkedin.com/in/aeri-osha-bb1b7a323"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AeriOsha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:aeriosha@gmail.com"
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-emerald-700">
            <p>© 2025 Portfolio Site</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
