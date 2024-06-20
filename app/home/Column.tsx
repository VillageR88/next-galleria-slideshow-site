import dataJson from '@/public/assets/data.json';
import Image from 'next/image';
import { newLineHardCoder } from '@/app/_lib/functions';
import Link from 'next/link';
import { DataContext } from '../_lib/DataContext';
import { useContext } from 'react';

const Column = ({ array, classExtension }: { array: number[]; classExtension?: string }) => {
  const { setShowSlideshow } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-[40px]">
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
              key={index}
              type="button"
              onClick={() => {
                setShowSlideshow(true);
              }}
              className={`relative size-full transition-colors duration-100 hover:bg-white/50 ${classExtension ? classExtension : ''}`}
            >
              <Link prefetch={false} href={`/detail/${data.name.replace(/ /g, '_')}`}>
                <GalleryImage />
                <div
                  className={`pointer-events-none invisible absolute inset-0 flex size-fit min-h-[170px] w-full flex-col items-start justify-end gap-[7px] self-end bg-gradient-to-b from-[#000000]/0 to-[#000000]/[84%] px-[32px] pb-[32px] text-start group-[&:not(.hidden)]:visible`}
                >
                  <h2 className="whitespace-pre-wrap text-[24px] font-bold leading-[30px] text-white xl:text-pretty">
                    {newLineHardCoder(data.name)}
                  </h2>
                  <p className="text-[13px] text-white/75">{data.artist.name}</p>
                </div>
              </Link>
            </button>
          );
      })}
    </div>
  );
};

export default Column;
