'use client';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { newLineHardCoder } from '@/app/_lib/functions';

const Column = ({ array, classExtension }: { array: number[]; classExtension?: string }) => {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-[40px]">
      {dataJson.map((data, index) => {
        const GalleryImage = () => (
          <Image
            priority
            src={data.images.thumbnail.slice(1)}
            width={10000}
            height={1}
            className="relative -z-10 size-fit"
            alt={data.name}
          />
        );

        if (array.includes(index))
          return (
            <button
              onClick={() => {
                router.push(`/detail/${data.name.replace(/ /g, '_')}`);
              }}
              key={index}
              type="button"
              className={`relative size-full ${classExtension ? classExtension : ''}`}
            >
              <GalleryImage />
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="to pointer-events-none absolute inset-0 flex min-h-[170px] w-full flex-col items-start justify-end gap-[7px] self-end bg-gradient-to-b from-[#000000]/0 to-[#000000]/[84%] px-[32px] pb-[32px] text-start">
                <h2 className="whitespace-pre-wrap text-[24px] font-bold leading-[30px] text-white xl:text-pretty">
                  {newLineHardCoder(data.name)}
                </h2>
                <p className="text-[13px] text-white/75">{data.artist.name}</p>
              </div>
            </button>
          );
      })}
    </main>
  );
};
export default function Main() {
  const [array1, setArray1] = useState<number[]>([0, 4, 8, 11]);
  const [array2, setArray2] = useState<number[]>([1, 5, 9, 12]);
  const array3 = [2, 6, 13];
  const array4 = [3, 7, 10, 14];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setArray1(dataJson.map((_, index) => index));
      } else if (window.innerWidth < 1280) {
        setArray1([0, 4, 8, 11, 2, 6, 13]);
        setArray2([1, 5, 9, 12, 3, 7, 10, 14]);
      } else {
        setArray1([0, 4, 8, 11]);
        setArray2([1, 5, 9, 12]);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-[40px] grid size-fit gap-[40px] sm:grid-cols-2 xl:grid-cols-4">
      <Column array={array1}></Column>
      <Column classExtension="sm:block hidden" array={array2}></Column>
      <Column classExtension="xl:block hidden" array={array3}></Column>
      <Column classExtension="xl:block hidden" array={array4}></Column>
    </div>
  );
}
