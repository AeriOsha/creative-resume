import React from 'react';
import { Link } from 'react-router-dom';

import roboticsImg from '../assets/images/robotics.jpg';
import greenSkiImg from '../assets/images/greenSki.jpg';
import whiteSkiImg from '../assets/images/whiteSki.jpg';

const Home: React.FC = () => {
  const skillGroups = [
    { title: 'Programming', items: ['Python', 'Java', 'C++', 'HTML/CSS', 'JavaScript', 'React/React Native'] },
    { title: 'Tools & Fabrication', items: ['CAD/SolidWorks', '3D printing', 'Machining', 'Arduino'] },
    { title: 'Data & Visualization', items: ['Matplotlib', 'Sensor Integration (Qwiic)', 'Real-time Monitoring'] },
    { title: 'Collaboration', items: ['Outreach Leadership', 'Tutoring', 'Safety Training', 'Communication'] },
    { title: 'Creative', items: ['Multimedia Art', 'Ceramics', 'Fiber Arts', 'Baking', 'Design Thinking', 'Rapid Prototyping'] },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-32 py-20 md:py-32">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-900 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Colorado School of Mines • First Year CS
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-emerald-950 serif leading-[0.85] tracking-tighter">
            I'm <span className="text-emerald-800 italic playfair font-medium">Aeri</span>.
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-xl font-light">
            Bridging the gap between <span className="text-emerald-900 font-medium">technical code</span> and{' '}
            <span className="text-emerald-900 font-medium">artistic craft</span>.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              to="/projects"
              className="group relative px-12 py-5 bg-emerald-900 text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-emerald-900/20"
            >
              <span className="relative z-10">Explore My Gallery</span>
              <div className="absolute inset-0 bg-emerald-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              to="/resume"
              className="px-12 py-5 border-2 border-emerald-900 text-emerald-900 rounded-2xl font-bold hover:bg-emerald-50 transition-all flex items-center gap-2"
            >
              The Resume
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] rounded-[3rem] overflow-hidden bg-emerald-50 border-8 border-white shadow-2xl transition-transform duration-700 hover:rotate-2">
            <img
              src={roboticsImg}
              alt="robotics"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 bg-emerald-900 text-white rounded-[2rem] shadow-2xl max-w-[220px] hidden md:block">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Location</p>
            <p className="text-sm font-medium serif italic leading-relaxed">
              FRC Robotics World Championship — Houston, TX
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-white border border-emerald-100 p-12 md:p-24 rounded-[4rem] shadow-xl shadow-emerald-900/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="space-y-8 relative">
          <div className="space-y-2">
            <h2 className="text-5xl md:text-6xl font-bold serif text-emerald-950">About Me</h2>
          </div>
          <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
            <p>
              Hi! I’m Aeri, a first-year computer science student at <strong>Colorado School of Mines </strong>who splits time between code, craft, and community. I’m happiest when a project brings my science and artistic sides together. I love building things: whether that’s a React app, a CAD model, or a hand-knit beanie. One of my favorite extracurriculars is editing High Grade, Mines’ art journal. When I’m not debugging for class, you’ll probably find me baking with friends, crocheting on the dorm floor, or exploring new ways to turn ideas into something you can hold, see, or use.
This semester I’m kicking off undergraduate research in the <strong>Edgar Mine and working at the Mines IT Service Desk.</strong> My research involves deploying a multi-sensing system in the underground lab using Arduino and Raspberry Pi to stream live data online and log it for offline analysis. At the IT desk, I help students and faculty troubleshoot hardware and software issues.
My favorite class this year is Thorson Honors, where I get to explore design and engineering ethics in an art-forward way. I’m also enjoying my computer science course, where I’m learning C++ for the first time and expanding the technical side of the projects I love to build.

            </p>
            <p>
              My favorite class is Thorson honors, where I get to learn basic design and engineering ethics in an
              art-forward way. I love building things, whether that’s a React app, a CAD model, or a hand-knit beanie.
            </p>
            <p>
              I’m happiest when a project brings my science and artistic sides together. When I’m not debugging for
              class, you’ll find me baking with friends, crocheting on the dorm floor, or exploring new ways to turn
              ideas into something you can hold, see, or use.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 relative">
          <img
            src={greenSkiImg}
            className="rounded-3xl shadow-lg w-full aspect-square object-cover hover:scale-[1.02] transition-transform"
            alt="skiing"
          />
          <img
            src={whiteSkiImg}
            className="rounded-3xl shadow-lg w-full aspect-square object-cover hover:scale-[1.02] transition-transform"
            alt="skiing"
          />
          <div className="bg-emerald-900 text-white p-8 rounded-3xl col-span-2 text-center shadow-xl">
            <p className="text-emerald-100 font-bold serif italic text-xl"></p>
          </div>
        </div>
      </section>

      {/* Currently & Looking Ahead Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-12 rounded-[3rem] bg-emerald-900 text-emerald-50 shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold serif">Currently</h2>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-emerald-400 font-bold shrink-0">01</span>
              <p className="font-light">
                Undergraduate research in the <span className="font-semibold text-white">Edgar Mine</span> with CURIE/QTSF
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-emerald-400 font-bold shrink-0">02</span>
              <p className="font-light">
                Working at the <span className="font-semibold text-white">Mines IT Service Desk</span>
              </p>
            </li>
            <li className="flex gap-4">
              <span className="text-emerald-400 font-bold shrink-0">03</span>
              <p className="font-light">
                Balancing honors classes, research, and creative projects; all while enjoying the Colorado outdoors
              </p>
            </li>
          </ul>
        </div>

        <div className="p-12 rounded-[3rem] border-4 border-emerald-900 border-dotted space-y-6 bg-white/40">
          <h2 className="text-3xl font-bold serif text-emerald-950">Looking Ahead</h2>
          <ul className="space-y-4 text-stone-600">
            <li className="flex gap-4 items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-emerald-600 shrink-0" />
              <p className="font-light">
                Exploring Mines new <span className="font-semibold text-emerald-900">Quantum Engineering</span> major & McBride honors
                minor
              </p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-emerald-600 shrink-0" />
              <p className="font-light">Deeper involvement in undergraduate research</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-emerald-600 shrink-0" />
              <p className="font-light">Finding a career that suits my passions</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-16 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-emerald-100 pb-10">
          <div className="space-y-4">
            <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">Capabilities</span>
            <h2 className="text-5xl font-bold serif text-stone-900">Skillset</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="space-y-6 p-8 rounded-[2rem] bg-emerald-50/30 border border-emerald-100/50 hover:bg-white hover:shadow-xl transition-all group"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800 border-b border-emerald-100 pb-2">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white rounded-full text-[11px] font-bold text-stone-700 border border-stone-100 shadow-sm group-hover:border-emerald-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
