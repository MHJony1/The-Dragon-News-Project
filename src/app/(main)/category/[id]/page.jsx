import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RighSidebar from '@/components/homepage/news/RighSidebar';
import { getCatagories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;

  const categories = await getCatagories();
  const news = await getNewsByCategoryId(id);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <LeftSidebar categories={categories} activeId={id} />
        </div>

        <div className="col-span-6 font-semibold text-gray-600 text-lg">
          Dragon News Home
          <div className="space-y-4 mt-5">
            {news && news.length > 0 ? (
              news.map((n) => <NewsCard news={n} key={n._id}></NewsCard>)
            ) : (
              <h1 className="text-center flex justify-center items-center font-bold text-xl mt-10">
                No news found
              </h1>
            )}
          </div>
        </div>

        <div className="col-span-3 ">
          <RighSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
