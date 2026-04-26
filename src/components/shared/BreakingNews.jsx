import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins the Championship",
  }
]

const BreakingNews = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-between items-center gap-4 bg-gray-100 py-4 px-3'>
      <button className='btn bg-red-500 text-white'>Latest News</button>
      <Marquee pauseOnHover = {true} speed={50}>
        {news.map((n) => (
          <p  key={n._id} className='px-4 text-md font-semibold'>
            ! {n.title}
          </p>
        ))}
      </Marquee>
    </div>
    </div>
   
  );
};

export default BreakingNews;