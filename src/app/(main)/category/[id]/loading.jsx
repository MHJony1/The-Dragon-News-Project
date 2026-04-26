import React from 'react';
import { ScaleLoader } from 'react-spinners';

const CategoryLoading = () => {
  return (
    <div className='flex justify-center items-center h-[50vh]'>
      <ScaleLoader  color="#331ad7" size={10} />
    </div>
  );
};

export default CategoryLoading;