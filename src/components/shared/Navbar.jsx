import Image from 'next/image';
import React from 'react';
import userAvatar from '@/assets/user.png';
import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-7xl mx-auto mt-6'>
      <div></div>
      <ul className='flex justify-between items-center gap-4'>
        <li className='text-md text-gray-600 font-medium'><NavLink href={'/'}>Home</NavLink></li>
        <li className='text-md text-gray-600 font-medium'><NavLink href={'/about-us'}>About</NavLink></li>
        <li className='text-md text-gray-600 font-medium'><NavLink href={'/career'}>Career</NavLink></li>
      </ul>
      <div className='flex justify-center items-center gap-3'>
        <Image src={userAvatar} alt='User avatar' width={60} height={10} />
        <button className='btn btn-gost bg-purple-500 text-white px-8 py-6 text-lg '><Link href={'/login'}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;