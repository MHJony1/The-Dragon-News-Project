import React from 'react';
import Image from 'next/image';

const projectName = 'Dragon News';

export const metadata = {
  title: `${projectName} || About Us - Your Trusted Source for Global & Local News`,
  description: `Learn about ${projectName}, our mission to provide accurate news, and the dedicated team behind the headlines.`,
};

const teamMembers = [
  {
    name: 'Mahbubur Rahman',
    role: 'Editor-in-Chief',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Fahmida Khan',
    role: 'Senior Tech Reporter',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Md. Al-Amin',
    role: 'Political Analyst',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const values = [
  {
    icon: '⚖️',
    title: 'Unbiased Integrity',
    desc: 'We report facts as they are, without fear or favor, maintaining the highest standard of journalistics ethics.',
  },
  {
    icon: '⚡',
    title: 'Instant Verification',
    desc: 'Our speed is matched by our rigor. Every piece of news is fact-checked before it reaches your screen.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    desc: 'We bridge the gap between global events and local impacts, empowering our readers with knowledge.',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50/50 text-gray-800">
      {/* 1. Hero Section (Premium Look) */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-600"></span>
            </span>
            Our Story, Your Voice
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 leading-tight tracking-tighter">
            We are <span className="text-slate-700">{projectName}</span>. <br />{' '}
            Your Window to the World.
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            From breaking global events to hyper-local stories, {projectName} is
            committed to bringing you the truth, verified and unbiased. We
            believe knowledge is power, and we exist to empower you.
          </p>
        </div>
      </section>

      {/* 2. Key Pillars/Values Section (Scalable Structure) */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase text-slate-600 tracking-widest">
            Our Core Foundation
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
            Built on Trust and Integrity
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-5xl mb-6 bg-slate-50 inline-block p-4 rounded-2xl group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Team Section (Dynamic Team Grid) */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-4">
            <div>
              <h2 className="text-sm font-bold uppercase text-slate-600 tracking-widest">
                The Faces Behind the Headlines
              </h2>
              <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                Meet Our Dedicated Editorial Team
              </p>
            </div>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors text-sm whitespace-nowrap">
              Join Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-slate-200 hover:bg-white transition-all"
              >
                <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md transition-transform group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-950 tracking-tight">
                  {member.name}
                </h4>
                <p className="text-base text-gray-500 font-medium mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact/Scalability Hook Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="bg-slate-950 p-12 md:p-16 rounded-[2rem] text-center text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Want to contribute to {projectName}?
          </h3>
          <p className="mt-6 text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate voices, freelance reporters,
            and fact-checkers. If you believe in unbiased journalism, let&apos;s
            connect.
          </p>
          <div className="mt-10 flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-slate-950 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Contact Editor
            </button>
            <button className="bg-transparent border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
              Submit a Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
