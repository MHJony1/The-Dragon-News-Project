import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col '>
      <h2 className='font-bold text-5xl text-purple-500 mb-4'>This Page is Not Found.</h2>
     <Link href={'/'}>
     <Button>Go Home</Button>
     </Link>
    </div>
  );
};

export default NotFoundPage;