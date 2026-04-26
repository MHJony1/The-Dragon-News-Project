import React from 'react';
import { FadeLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className='flex items-center justify-center h-[85vh]'>
      <FadeLoader />
    </div>
  );
};

export default LoadingPage;