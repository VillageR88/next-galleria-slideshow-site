'use client';
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
    const ArtistImage = ({ propClass }: { propClass: string }) => {
      return (
        <Image
          width={128}
          height={128}
          className={propClass}
          alt={data.artist.name + ' image'}
          src={data.artist.image.slice(1)}
          priority
        />
      );
    };
    const Block1 = () => {
      const HeroImage = () => {
        return (
          <Image
            className="h-[560px] max-w-[475px] xl:absolute"
            width={475}
            height={560}
            src={data.images.hero.large.slice(1)}
            alt={data.name}
            priority
          />
        );
      };
      const ButtonViewImage = () => {
        return (
          <button
            onClick={() => {
              setShowGallery(true);
            }}
            type="button"
            className="absolute bottom-[16px] left-[16px] flex h-[40px] w-[152px] items-center justify-center gap-[14px] bg-black/[75.46%] text-white xl:bottom-[80px]"
          >
            <Image className="size-fit" width={12} height={12} src={imageView as string} alt={titleViewImage} />
            <span className="text-[10px] font-bold leading-3 tracking-[2.14px]">{titleViewImage}</span>
          </button>
        );
      };
      return (
        <div className="relative size-full max-w-[475px]">
          <div className="relative flex size-full max-w-[475px] items-end xl:items-stretch">
            <HeroImage />
            <ArtistImage propClass="bottom-0 left-[calc(30px+475px)] size-[128px] absolute xl:block hidden" />
            <ButtonViewImage />
          </div>
        </div>
      );
    };
    const Block2 = () => {
      return (
        <div className="flex h-full flex-col justify-between xl:w-fit">
          <div className="relative ml-[-150px] flex h-fit max-w-[445px] flex-col gap-[24px] bg-white pb-[67px] pl-[65px] xl:ml-[-65px]">
            <h1 className="whitespace-pre-wrap text-balance text-[56px] font-bold leading-[64px] text-black">
              {newLineHardCoder(data.name)}
            </h1>
            <p className="text-[15px] text-[#7D7D7D]">{data.artist.name}</p>
          </div>
          <ArtistImage propClass="size-[128px] mr-[230px] xl:hidden block ml-[30px]" />
        </div>
      );
    };
    return (
      <div className="flex w-full max-w-[868px] justify-between xl:max-w-full xl:justify-stretch">
        <Block1 />
        <Block2 />
      </div>
    );
  };

  const SecondComponent = () => {
    return (
      <div className="flex w-full max-w-[850px] flex-row justify-center xl:w-fit xl:max-w-fit xl:flex-col xl:justify-between xl:pl-[40px]">
        <h2 className="-z-10 flex w-full text-[200px] font-bold leading-[150px] text-[#F3F3F3] xl:ml-0 xl:text-[14vw] screen1440:text-[200px]">
          {data.year}
        </h2>
        <div className="ml-[-450px] flex h-full w-[457px] flex-col justify-between gap-[81px] xl:ml-0 xl:min-w-fit xl:gap-0">
          <p className="mt-[75px] w-full text-[14px] font-bold leading-[28px] text-[#7D7D7D] xl:ml-0 xl:mt-[-35px] xl:max-w-[350px]">
            {data.description}
          </p>
          <Link
            href={data.source}
            className="size-fit text-[9px] font-bold tracking-[1.93px] text-[#7D7D7D] underline decoration-[#7D7D7D] xl:mb-[53px]"
          >
            {title_goToSource}
          </Link>
        </div>
      </div>
    );
  };
  return (
    <main className="mt-[100px] flex min-h-[624px] w-full max-w-full flex-col items-center justify-between gap-[64px] xl:flex-row xl:items-stretch xl:gap-0">
      <FirstComponent />
      <SecondComponent />
    </main>
  );
}
