import React from 'react';
import Image from 'next/image'; 
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from 'react-icons/fa';
import Link from 'next/link';

const NewsCard = ({ news }) => {
  const { title, author, details, image_url, total_view, rating } = news;

  return (
    <div className="card bg-white border border-gray-200 rounded-lg mb-8 overflow-hidden shadow-sm">
      {/* 1. Author and Date Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <div className="flex items-center gap-3">
          {/* Author Image - Next.js Image component */}
          <div className="relative w-10 h-10">
            <Image
              src={author?.img}
              alt={author?.name || "Author"}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-800">{author?.name || "Unknown"}</h4>
            <p className="text-xs text-gray-500">{author?.published_date?.split(' ')[0]}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <FaRegBookmark className="cursor-pointer hover:text-orange-500 transition-colors" />
          <FaShareAlt className="cursor-pointer hover:text-orange-500 transition-colors" />
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4 leading-tight text-gray-900 hover:text-orange-600 cursor-pointer">
          {title}
        </h2>

        {/* Main News Image - Next.js Image component */}
        <div className="relative w-full h-80 mb-5 rounded-md overflow-hidden bg-gray-100">
          <Image
            src={image_url}
            alt={title}
            fill
            priority={false} 
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Details Text */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.length > 250 ? details.slice(0, 250) + "..." : details}
        </p>
       <Link href={`/news/${news._id}`}>
        <button className="text-orange-500 font-bold text-sm mt-3 cursor-pointer hover:underline">
          Read More
        </button>
       </Link>

        <hr className="my-6 border-gray-100" />

        {/* 3. Footer Section (Rating and Views) */}
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400 gap-0.5">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <span className="text-gray-500 font-bold text-sm">{rating?.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaRegEye className="text-lg" />
            <span className="text-sm font-semibold">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;