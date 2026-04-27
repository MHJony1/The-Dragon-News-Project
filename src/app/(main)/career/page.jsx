import React from 'react';

export const metadata = {
  title: 'Dragon News || Careers - Join Our Global Newsroom',
  description:
    'Discover career opportunities at Dragon News. Join our mission to deliver verified journalism and innovative media solutions.',
};

// Scalable Job Data
const jobOpenings = [
  {
    id: 1,
    title: 'Senior Investigative Journalist',
    department: 'Editorial',
    location: 'Dhaka, Bangladesh (Hybrid)',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'MERN Stack Developer',
    department: 'Technology',
    location: 'Remote',
    type: 'Contract',
  },
  {
    id: 3,
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
  },
];

const perks = [
  {
    title: 'Global Reach',
    desc: 'Your work will influence and inform millions of readers across international borders.',
    icon: '🌐',
  },
  {
    title: 'Professional Growth',
    desc: 'Access to exclusive journalism workshops and advanced tech certification programs.',
    icon: '📈',
  },
  {
    title: 'Modern Workplace',
    desc: 'We promote a healthy work-life balance with a flexible hybrid culture.',
    icon: '🏠',
  },
  {
    title: 'Full Benefits',
    desc: 'Comprehensive health, dental, and wellness insurance for you and your dependents.',
    icon: '🏥',
  },
];

const CareerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Work With Us
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Build the Future of <br />{' '}
            <span className="text-blue-600">Digital Journalism</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Dragon News, we don&apos;t just report stories— আমরা truth খুঁজি।
            If you are a passionate storyteller, a tech innovator, or a media
            enthusiast, your journey starts here.
          </p>
        </div>
      </section>

      {/* 2. Why Dragon News (Perks) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Why Join Dragon News?
          </h2>
          <p className="mt-4 text-slate-500">
            We provide the environment for you to do your best work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl mb-4">{perk.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {perk.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Job List Section */}
      <section className="max-w-5xl mx-auto px-6 py-10 mb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Current Openings
          </h2>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-slate-600 font-medium text-sm">
              {jobOpenings.length} Positions Available
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="group flex flex-col md:flex-row md:items-center justify-between p-7 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-white"
            >
              <div className="mb-4 md:mb-0">
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h4>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                  <span className="bg-slate-100 px-3 py-1 rounded-md">
                    📂 {job.department}
                  </span>
                  <span className="bg-slate-100 px-3 py-1 rounded-md">
                    📍 {job.location}
                  </span>
                  <span className="bg-slate-100 px-3 py-1 rounded-md">
                    ⌛ {job.type}
                  </span>
                </div>
              </div>
              <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-sm">
                Apply Position
              </button>
            </div>
          ))}
        </div>

        {/* 4. Contact / Talent Pool Section */}
        <div className="mt-16 p-10 bg-slate-950 rounded-[2.5rem] text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Didn&apos;t find the right role?
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm">
            Send us your CV and a cover letter. We&apos;re always looking for
            talented individuals to join our talent pool.
          </p>
          <a
            href="mailto:careers@dragonnews.com"
            className="inline-block text-blue-400 font-bold text-lg hover:text-blue-300 transition-colors underline underline-offset-8"
          >
            careers@dragonnews.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
