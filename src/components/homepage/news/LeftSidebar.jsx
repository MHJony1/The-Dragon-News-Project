import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';

const LeftSidebar = ({ categories, activeId }) => {
  const sideNews = [
    {
      id: 1,
      title: 'Global Cycling Championship: Record Participation This Year',
      category: 'Sports',
      date: 'Jan 4, 2022',
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=500&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Unforgettable Journeys: Best Student Travel Destinations',
      category: 'Travel',
      date: 'Jan 4, 2022',
      img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Historic Music Festival Draws Record Crowds to Stadium',
      category: 'Entertainment',
      date: 'Jan 4, 2022',
      img: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=500&auto=format&fit=crop',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Category Section */}
      <div>
        <h2 className="font-semibold text-gray-800 text-xl mb-5">
          All Category
        </h2>
        <div className="flex flex-col">
          {categories.map((category) => (
            <Link
              key={category.category_id}
              href={`/category/${category.category_id}`}
              className={`py-4 px-8 text-lg font-medium transition-all rounded-md ${
                activeId == category.category_id
                  ? 'bg-[#E7E7E7] text-[#403F3F]'
                  : 'text-[#9F9F9F] hover:text-[#403F3F]'
              }`}
            >
              {category.category_name}
            </Link>
          ))}
        </div>
      </div>

      {/* Side News Section */}
      <div className="flex flex-col gap-8">
        {sideNews.map((news) => (
          <div key={news.id} className="space-y-4">
            <div className="relative w-full h-44 rounded-lg overflow-hidden">
              <Image
                src={news.img}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-slate-800 text-lg leading-snug">
              {news.title}
            </h3>
            <div className="flex items-center gap-5 text-sm font-semibold">
              <span className="text-slate-900">{news.category}</span>
              <div className="flex items-center gap-2 text-slate-400">
                <FaCalendarAlt />
                <span>{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
