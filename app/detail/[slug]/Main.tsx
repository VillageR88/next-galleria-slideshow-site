import Image from 'next/image';
import Link from 'next/link';
import { newLineHardCoder } from '@/app/_lib/functions';
import imageView from '@/public/assets/shared/icon-view-image.svg';
import { Dispatch, SetStateAction } from 'react';
import type { DataJson } from '@/app/_lib/interfaces';

export default function Main({
  data,
  setShowGallery,
}: {
  data: DataJson;
  setShowGallery: Dispatch<SetStateAction<boolean>>;
}) {
  const titleViewImage = 'VIEW IMAGE';
  const title_goToSource = 'GO TO SOURCE';
  return (
    <main className="mt-[100px] flex h-[624px] min-w-full justify-between">
      <div className="flex w-full">
        <div className="relative size-fit">
          <Image
            className="h-[560px] max-w-[475px]"
            width={475}
            height={560}
            src={'/' + data.images.hero.large}
            alt={data.name}
            priority
          />
          <button
            onClick={() => {
              setShowGallery(true);
            }}
            type="button"
            className="absolute bottom-[16px] left-[16px] flex h-[40px] w-[152px] items-center justify-center gap-[14px] bg-black/[75.46%] text-white"
          >
            <Image className="size-fit" width={12} height={12} src={imageView as string} alt={titleViewImage} />
            <span className="text-[10px] font-bold leading-3 tracking-[2.14px]">{titleViewImage}</span>
          </button>
        </div>
        <div className="flex h-full flex-col justify-between">
          <div className="relative ml-[-65px] flex h-fit max-w-[445px] flex-col gap-[24px] bg-white pb-[67px] pl-[65px]">
            <h1 className="whitespace-pre-wrap text-balance text-[56px] font-bold leading-[64px] text-black">
              {newLineHardCoder(data.name)}
            </h1>
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
      <div className="flex min-w-fit flex-col justify-between">
        <div className="relative pr-[125px] pt-[150px]">
          <h2 className="absolute right-0 top-0 -z-10 text-[200px] font-bold leading-[150px] text-[#F3F3F3]">
            {data.year}
          </h2>
          <p className="mt-[-35px] w-[350px] text-[14px] font-bold leading-[28px] text-[#7D7D7D]">{data.description}</p>
        </div>
        <Link
          href={data.source}
          className="mb-[53px] size-fit text-[9px] font-bold tracking-[1.93px] text-[#7D7D7D] underline decoration-[#7D7D7D]"
        >
          {title_goToSource}
        </Link>
      </div>
    </main>
  );
}
