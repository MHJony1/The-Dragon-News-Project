import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
  return (
    <div className='text-center py-9 space-y-2'>
    <Image src={logo} width={300} height={100}  alt="logo" className='mx-auto' />
    <p>Journalism Without Fear or Favour</p>
    <p className='font-medium text-md'>{format(new Date(),  "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;