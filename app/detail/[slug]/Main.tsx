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

  const FirstComponent = () => {
    const Block1 = () => {
      return (
        <div className="relative size-full max-w-[475px]">
          <div className="relative size-full max-w-[475px]">
            <Image
              className="absolute h-[560px] max-w-[475px]"
              width={475}
              height={560}
              src={'/' + data.images.hero.large}
              alt={data.name}
              priority
            />
            <Image
              width={128}
              height={128}
              className="absolute bottom-0 left-[calc(30px+475px)] size-[128px]"
              alt={data.artist.name + ' image'}
              src={'/' + data.artist.image}
            />
            <button
              onClick={() => {
                setShowGallery(true);
              }}
              type="button"
              className="absolute bottom-[80px] left-[16px] flex h-[40px] w-[152px] items-center justify-center gap-[14px] bg-black/[75.46%] text-white"
            >
              <Image className="size-fit" width={12} height={12} src={imageView as string} alt={titleViewImage} />
              <span className="text-[10px] font-bold leading-3 tracking-[2.14px]">{titleViewImage}</span>
            </button>
          </div>
        </div>
      );
    };
    const Block2 = () => {
      return (
        <div className="flex h-full w-fit flex-col justify-between">
          <div className="relative ml-[-65px] flex h-fit max-w-[445px] flex-col gap-[24px] bg-white pb-[67px] pl-[65px]">
            <h1 className="whitespace-pre-wrap text-balance text-[56px] font-bold leading-[64px] text-black">
              {newLineHardCoder(data.name)}
            </h1>
            <p className="text-[15px] text-[#7D7D7D]">{data.artist.name}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="flex w-full">
        <Block1 />
        <Block2 />
      </div>
    );
  };

  const SecondComponent = () => {
    return (
      <div className="flex w-fit flex-col justify-between pl-[40px]">
        <div className="flex flex-col">
          <h2 className="-z-10 flex text-[13vw] font-bold leading-[150px] text-[#F3F3F3] screen1440:text-[200px]">
            {data.year}
          </h2>
          <p className="mt-[-35px] w-full max-w-[350px] text-[14px] font-bold leading-[28px] text-[#7D7D7D]">
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
    );
  };
  return (
    <main className="mt-[100px] flex h-[624px] w-full max-w-full justify-between">
      <FirstComponent />
      <SecondComponent />
    </main>
  );
}
