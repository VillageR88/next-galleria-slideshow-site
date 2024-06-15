'use client';
import Navbar from '@/app/home/Navbar';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [pathname, setPathname] = useState('');
  console.log(pathname);
  useEffect(() => {
    const decodedPathname = decodeURIComponent(window.location.pathname.split('/')[2]);
    setPathname(decodedPathname);
  }, []);

  const data = dataJson.find((item) => item.name === pathname);
  if (!data) return null;

  return (
    <div
      className={`z-0 flex min-h-dvh flex-col items-center justify-start p-[40px] font-libreBaskerville sm:min-h-screen`}
    >
      <Navbar />
      <div className="mt-[100px] flex h-[624px] w-full">
        <Image
          className="h-[560px] w-[475px]"
          width={475}
          height={560}
          src={'/' + data.images.hero.large}
          alt={data.name}
        />
        <div className="ml-[-65px] flex h-fit w-[445px] flex-col gap-[24px] bg-white pb-[67px] pl-[65px]">
          <h1 className="text-balance text-[56px] font-bold leading-[64px] text-black">{data.name}</h1>
          <p className="text-[15px] text-[#7D7D7D]">{data.artist.name}</p>
        </div>
      </div>
    </div>
  );
}
