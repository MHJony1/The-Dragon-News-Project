'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import fbIcon from '@/assets/fb.png';
import twitterIcon from '@/assets/twitter.png';
import instaIcon from '@/assets/instagram.png';
import swimmingImg from '@/assets/swimming.png';
import classImg from '@/assets/class.png';
import playgroundImg from '@/assets/playground.png';
import bgImage from '@/assets/bg.png';

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

  const socialPlatforms = [
    { name: 'Facebook', icon: fbIcon, border: true },
    { name: 'Twitter', icon: twitterIcon, border: true },
    { name: 'Instagram', icon: instaIcon, border: false },
  ];

  const qZoneImages = [
    { id: 1, img: swimmingImg, alt: 'Swimming' },
    { id: 2, img: classImg, alt: 'Class' },
    { id: 3, img: playgroundImg, alt: 'Play Ground' },
  ];

  return (
    // login with form section
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

      {/* social media section */}
      <div className="mt-7">
        <h2 className="text-xl font-semibold text-slate-700 mb-5">
          Find Us On
        </h2>
        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
          {socialPlatforms.map((platform, index) => (
            <button
              key={index}
              className={`btn btn-ghost gap-3 flex justify-start items-center p-4 h-auto rounded-none transition-all capitalize font-medium text-slate-600 hover:bg-slate-50 ${
                platform.border ? 'border-b border-gray-200' : 'border-none'
              }`}
            >
              <span className="bg-slate-100 p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                <Image
                  src={platform.icon}
                  alt={platform.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </span>
              <span className="text-base">{platform.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Q-Zone section */}
      <div className="mt-4 bg-gray-100 p-3 rounded-lg">
        <h2 className="text-xl font-semibold text-slate-700 mb-5">Q-Zone</h2>

        <div className="flex flex-col gap-6 items-center">
          {qZoneImages.map((item) => (
            <div key={item.id} className="relative w-full">
              <Image
                src={item.img}
                alt={item.alt}
                className="w-full h-auto object-contain"
                style={{
                  filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Image
          src={bgImage}
          alt={bgImage}
          className="w-full h-auto object-contain rounded-md"
          style={{
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))',
          }}
        />
      </div>
    </div>
  );
};

export default RighSidebar;
