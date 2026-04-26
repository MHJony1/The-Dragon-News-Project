'use client';
import Image from 'next/image';
import React from 'react';
import userAvatar from '@/assets/user.png';
import Link from 'next/link';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="max-w-7xl mx-auto mt-5 flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-700 to-gray-400"
        >
          Dragon News
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8">
        <li className="text-sm text-gray-500 hover:text-indigo-600 font-semibold transition-colors">
          <NavLink href={'/'}>Home</NavLink>
        </li>
        <li className="text-sm text-gray-500 hover:text-indigo-600 font-semibold transition-colors">
          <NavLink href={'/about-us'}>About</NavLink>
        </li>
        <li className="text-sm text-gray-500 hover:text-indigo-600 font-semibold transition-colors">
          <NavLink href={'/career'}>Career</NavLink>
        </li>
        <li className="text-sm text-gray-500 hover:text-indigo-600 font-semibold transition-colors">
          <NavLink href={'/register'}>SignUp</NavLink>
        </li>
      </ul>

      {/* Right Side: Auth Logic */}
      <div className="flex items-center gap-4 min-w-30 justify-end">
        <div className="avatar">
          <div className="w-10 rounded-full ring-2 ring-indigo-100 ring-offset-2">
            <Image
              src={user?.image || userAvatar}
              alt="User"
              width={40}
              height={40}
            />
          </div>
        </div>

        {isPending ? (
          <span className="loading loading-spinner loading-md text-indigo-600"></span>
        ) : user ? (
          <div className="flex items-center gap-4">
            <span className="hidden lg:block text-sm font-semibold text-gray-700">
              Hi, {user?.name?.split(' ')[0]}
            </span>
            <button
              onClick={() => authClient.signOut()}
              className="btn btn-sm h-10 border-none bg-gray-300 hover:bg-gray-100 text-gray-800 px-5 rounded-xl font-bold transition-all"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="btn btn-sm h-10 border-none bg-linear-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:scale-105 text-white px-8 rounded-xl font-bold transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
