import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
export default function Gallery({
  showGallery,
  setShowGallery,
  titleButtonClose,
  data,
}: {
  showGallery: boolean;
  setShowGallery: Dispatch<SetStateAction<boolean>>;
  titleButtonClose: string;
  data: {
    name: string;
    year: number;
    description: string;
    source: string;
    artist: {
      image: string;
      name: string;
    };
    images: {
      thumbnail: string;
      hero: {
        small: string;
        large: string;
      };
      gallery: string;
    };
  };
}) {
  return (
    <>
      <div
        className={`${showGallery ? 'flex' : 'hidden'} fixed top-0 z-10 size-full flex-col items-center bg-black/[85.39%] text-end`}
      ></div>
      <div
        className={`${showGallery ? 'flex' : 'hidden'} absolute top-0 z-10 mt-[127px] flex flex-col items-end gap-[41px]`}
      >
        <button
          onClick={() => {
            setShowGallery(false);
          }}
          type="button"
          className="text-[14px] font-bold tracking-[3px] text-white"
        >
          {titleButtonClose}
        </button>
        <Image className="size-fit" width={1} height={1} src={'/' + data.images.gallery} alt={data.name} />
      </div>
    </>
  );
}
