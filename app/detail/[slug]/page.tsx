'use client';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/detail/[slug]/Footer';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [pathname, setPathname] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const title_goToSource = 'GO TO SOURCE';
  useEffect(() => {
    const decodedPathname = window.location.pathname.split('/')[2].replace(/_/g, ' ');
    setPathname(decodedPathname);
  }, []);

  const data = dataJson.find((item) => item.name === pathname);
  const indexProgress = dataJson.findIndex((item) => item.name === pathname);
  useEffect(() => {
    setProgress(((indexProgress + 1) / dataJson.length) * 100);
  }, [indexProgress]);
  if (!data) return null;

  return (
    <div className={`z-0 flex min-h-dvh flex-col justify-start p-[40px] font-libreBaskerville sm:min-h-screen`}>
      <Navbar />
      <div className="mt-[100px] flex h-[624px] w-full justify-between">
        <div className="flex">
          <Image
            className="h-[560px] w-[475px]"
            width={475}
            height={560}
            src={'/' + data.images.hero.large}
            alt={data.name}
            priority
          />
          <div className="flex h-full flex-col justify-between">
            <div className="ml-[-65px] flex h-fit w-[445px] flex-col gap-[24px] bg-white pb-[67px] pl-[65px]">
              <h1 className="text-balance text-[56px] font-bold leading-[64px] text-black">{data.name}</h1>
              <p className="text-[15px] text-[#7D7D7D]">{data.artist.name}</p>
            </div>
            <Image
              width={128}
              height={128}
              className="ml-[30px] size-[128px]"
              alt={data.artist.name + ' image'}
              src={'/' + data.artist.image}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[200px] font-bold leading-[150px] text-[#F3F3F3]">{data.year}</h2>
            <p className="mt-[-35px] w-[350px] text-[14px] font-bold leading-[28px] text-[#7D7D7D]">
              {data.description}
            </p>
          </div>
          <Link
            href={data.source}
            className="mb-[53px] size-fit text-[9px] font-bold tracking-[1.93px] text-[#7D7D7D] underline decoration-[#7D7D7D]"
          >
            {title_goToSource}
          </Link>
        </div>
      </div>
      <Footer
        data={data}
        progress={progress}
        nextClicked={() => {
          const nextIndex = indexProgress + 1;
          const nextData = dataJson[nextIndex];
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (nextData) {
            router.push(`/detail/${nextData.name.replace(/ /g, '_')}`);
          }
        }}
        previousClicked={() => {
          const previousIndex = indexProgress - 1;
          const previousData = dataJson[previousIndex];
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (previousData) {
            router.push(`/detail/${previousData.name.replace(/ /g, '_')}`);
          }
        }}
      />
    </div>
  );
}
