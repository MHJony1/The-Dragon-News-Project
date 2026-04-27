import RighSidebar from '@/components/homepage/news/RighSidebar';
import { getNewsDetaisById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await getNewsDetaisById(id);
  return {
    title: newsDetails.title,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const newsDetails = await getNewsDetaisById(id);
  console.log(newsDetails);

  if (!newsDetails) {
    return (
      <div className="max-w-7xl mx-auto my-12 p-10 text-center border rounded-md">
        <h1 className="text-2xl font-bold text-gray-700">News not found!</h1>
        <Link
          href="/"
          className="btn bg-[#D72050] text-white mt-5 hover:bg-[#D72050]"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9">
          <h1 className="text-2xl font-semibold mb-6 text-gray-800">
            Dragon News
          </h1>

          <div className="card bg-base-100 border border-gray-200 rounded-md p-7 shadow-sm">
            {/* 1. Main News Image */}
            <div className="relative w-full h-96 mb-8 rounded-md overflow-hidden bg-gray-100">
              <Image
                src={newsDetails.image_url}
                alt={newsDetails.title || 'News details'}
                fill
                priority={true}
                className="object-cover object-center"
              />
            </div>

            {/* 2. News Title */}
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight">
              {newsDetails.title}
            </h2>

            {/* 3. News Details Text */}
            <div className="space-y-4 mb-10 text-gray-600 text-base leading-relaxed">
              <p>{newsDetails.details}</p>
            </div>

            {/* 4. Button */}
            <div className="flex justify-start">
              <Link href={`/category/${newsDetails.category_id}`}>
                <button className="flex items-center gap-2.5 px-6 py-3 bg-[#D72050] text-white rounded-md text-base font-semibold hover:bg-red-700 transition-colors">
                  <FaArrowLeft size={18} />
                  All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <RighSidebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
