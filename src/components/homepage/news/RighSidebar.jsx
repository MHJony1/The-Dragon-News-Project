'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RighSidebar = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  const handleGithubsignIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'github',
    });
  };

  return (
    <div>
      <h2 className="font-semibold text-gray-600 text-lg mb-5">Login With</h2>

      <div className="flex flex-col gap-2 ">
        <button
          className="btn border-blue-500 text-blue-500"
          onClick={handleGoogleSignin}
        >
          <FaGoogle />
          Login With Google
        </button>
        <button
          onClick={handleGithubsignIn}
          className="btn border-black text-black"
        >
          <FaGithub />
          Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default RighSidebar;
