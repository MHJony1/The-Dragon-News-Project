import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-semibold text-gray-600 text-lg"> All Category</h2>
      <ul className="flex flex-col gap-3 mt-5">
        {categories.map((category) => (
          <li
            className={`${activeId == category.category_id ? 'bg-slate-300' : ''}  bg-slate-50 shadow-sm rounded-md font-semibold text-md text-center`}
            key={category.category_id}
          >
            <Link href={`/category/${category.category_id}`} className='block py-2'>
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
