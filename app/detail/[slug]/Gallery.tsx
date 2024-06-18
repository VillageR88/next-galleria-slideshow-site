import Image from 'next/image';
import { DataContext } from '@/app/_lib/DataContext';
import { useContext } from 'react';
import type { DataJson } from '@/app/_lib/interfaces';

export default function Gallery({ titleButtonClose, data }: { titleButtonClose: string; data: DataJson }) {
  const { showGallery, setShowGallery } = useContext(DataContext);
  return (
    <>
      <div
        className={`${showGallery ? 'flex' : 'hidden'} fixed top-0 z-10 size-full flex-col items-center bg-black/[85.39%] text-end`}
      ></div>
      <div
        className={`${showGallery ? 'flex' : 'hidden'} absolute top-0 z-10 mt-[127px] flex flex-col items-end gap-[41px] px-[49px]`}
      >
        <button
          onClick={() => {
            setShowGallery(false);
          }}
          type="button"
          className="text-[14px] font-bold tracking-[3px] text-white transition-colors duration-[50ms] hover:text-white/25"
        >
          {titleButtonClose}
        </button>
        <Image
          priority
          className="size-fit"
          width={10000}
          height={1}
          src={data.images.gallery.slice(1)}
          alt={data.name}
        />
      </div>
    </>
  );
}
