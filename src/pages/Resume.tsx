// src/components/Resume.tsx
import React from 'react';
import { Experience } from '../../types';
import resume from '../assets/AeriOshaResume.pdf'
const Resume: React.FC = () => {
  const experience: Experience[] = [
    {
      id: '1',
      role: 'Researcher',
      organization: 'CURIE Project',
      period: '2026',
      description: [
        'On two person team building multi-sensing system in the underground lab using Arduino and RPI.',
        'Synchronizes data to a live online display and records it for offline analysis.'
      ]
    },
    {
      id: '2',
      role: 'IT Service Desk Worker',
      organization: 'Colorado School of Mines',
      period: '2026',
      description: [
        'Providing technical support and hardware troubleshooting for campus students and faculty.'
      ]
    },
    {
      id: '3',
      role: 'Tutor',
      organization: 'Tutor Doctor of Katy',
      period: '2025',
      description: [
        'Provided in-home math and science tutoring for elementary through high school students.'
      ]
    },
    {
      id: '4',
      role: 'Vice President of Safety',
      organization: 'FRC CRyptonite Robotics Team',
      period: '2021 — 2025',
      description: [
        'Led safety training for 60+ team members and implemented safety protocols year-round.',
        'Received FRC All-Star Safety Award (2024).',
        'Organized and led STEM camps for elementary/middle school students.',
        'Shooter Mechanism Sub-team Lead: Oversaw design and execution of a custom robot shooter mechanism; mentored new members.'
      ]
    }
  ];

  const clubs = [
    { name: 'Creative Arts Club, Officer', period: '2025', task: 'Help prepare the art studio for weekly meetings.' },
    { name: 'Volunteer Tutor, Homework Buddies (KCM)', period: '2022 — 2024', task: 'Tutored elementary students in core academic subjects.' },
    { name: 'National Honor Society (NHS)', period: '2023 — 2025', task: 'Contributed 40+ volunteer hours through academic tutoring and service.' },
    { name: 'Future Business Leaders of America (FBLA)', period: '2023 — 2024', task: 'Participated in networking and career focused events' },
    { name: 'Dare to Wear Fashion Club', period: '2021 — 2025', task: 'Treasurer: Managed club funds, helped organize events and meetings.' },
    { name: 'Fiber Arts Club', period: '2021 — 2024', task: 'Assisted in teaching crochet and embroidery during meetings.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-32">
      {/* Header / Contact Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 pb-12 border-b-4 border-emerald-900 border-double">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold serif text-stone-900 tracking-tighter uppercase">Aeri Osha</h1>
          <p className="text-xl text-emerald-800 italic playfair">Computer Science | Colorado School of Mines</p>
        </div>
        <div className="text-right space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-stone-400">832.605.1619</p>
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">aeriosha@gmail.com</p>
          <div className="pt-4">
            <a
              href={resume}
              download="AeriOshaResume.pdf"
              className="inline-block px-6 py-2 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-900 transition-all shadow-xl shadow-stone-900/10 active:scale-95"
            >
              Download Full PDF
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Education & Skills */}
        <div className="lg:col-span-4 space-y-20">
          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900">Education</h2>
              <div className="h-px bg-emerald-100 flex-1"></div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-stone-900">Colorado School of Mines</h3>
                <p className="text-xs text-stone-500 mt-1 italic">Computer Science | Class of 2029</p>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-stone-900">Cinco Ranch High School</h3>
                <p className="text-xs text-stone-500 mt-1 italic">Class of 2025 | 4.4 GPA</p>
              </div>
              <div className="pt-2">
                <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-2">Stanford University</h4>
                <p className="text-[10px] leading-relaxed text-stone-500">Summer 2024: IE40M Intro to Electrical Engineering, MS&E 75 Redefining Creativity.</p>
              </div>
              <div className="pt-2">
                <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-2">Brown University</h4>
                <p className="text-[10px] leading-relaxed text-stone-500">Summer 2023: Visual Art with Quadrotors, Advanced CAD: FEA & Complex Assemblies.</p>
              </div>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900">Skills</h2>
              <div className="h-px bg-emerald-100 flex-1"></div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Programming</p>
                <p className="text-xs text-stone-500 leading-relaxed">Python, Java, HTML, CSS, JavaScript, React/React Native</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Hardware & Fabrication</p>
                <p className="text-xs text-stone-500 leading-relaxed">Experience with mill, lathe, CNC machining, SolidWorks, and 3D printing</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Experience & Clubs */}
        <div className="lg:col-span-8 space-y-20">
          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900">Experience & Leadership</h2>
              <div className="h-px bg-emerald-100 flex-1"></div>
            </div>
            
            <div className="space-y-16">
              {experience.map(exp => (
                <div key={exp.id} className="group relative">
                  <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <div className="md:w-32 shrink-0">
                      <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{exp.period}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-stone-900 serif group-hover:text-emerald-800 transition-colors leading-tight">
                        {exp.role} <span className="text-stone-300 mx-2 font-light">|</span> <span className="text-emerald-700">{exp.organization}</span>
                      </h3>
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-stone-500 leading-relaxed text-sm flex gap-3">
                            <span className="text-emerald-300 font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <div className="flex items-center gap-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-900">Clubs</h2>
              <div className="h-px bg-emerald-100 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {clubs.map((club, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-sm font-bold text-stone-900 serif group-hover:text-emerald-800 transition-colors">{club.name}</h4>
                    <span className="text-[9px] font-black text-stone-300 uppercase shrink-0 pt-1">{club.period}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{club.task}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
