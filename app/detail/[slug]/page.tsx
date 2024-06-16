'use client';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/detail/[slug]/Footer';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { newLineHardCoder } from '@/app/_lib/functions';
import imageView from '@/public/assets/shared/icon-view-image.svg';

export default function Page() {
  const titleViewImage = 'VIEW IMAGE';
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const titleButtonClose = 'CLOSE';
  const router = useRouter();
  const [pathname, setPathname] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const title_goToSource = 'GO TO SOURCE';
  useEffect(() => {
    const decodedPathname = decodeURI(window.location.pathname.split('/')[2].replace(/_/g, ' '));
    setPathname(decodedPathname);
  }, []);

  const data = dataJson.find((item) => item.name === pathname);
  const indexProgress = dataJson.findIndex((item) => item.name === pathname);
  const previousIndex = indexProgress - 1;
  const nextIndex = indexProgress + 1;

  useEffect(() => {
    if (dataJson[previousIndex]) router.prefetch(`/detail/${dataJson[previousIndex].name.replace(/ /g, '_')}`);
    if (dataJson[nextIndex]) router.prefetch(`/detail/${dataJson[nextIndex].name.replace(/ /g, '_')}`);
  }, [nextIndex, previousIndex, router]);

  useEffect(() => {
    setProgress(((indexProgress + 1) / dataJson.length) * 100);
  }, [indexProgress]);
  if (!data) return null;

  return (
    <div className={`z-0 flex min-h-dvh flex-col justify-start p-[40px] font-libreBaskerville sm:min-h-screen`}>
      <div
        className={`${showGallery ? 'flex' : 'hidden'} absolute left-0 top-0 z-10 size-full flex-col items-center gap-[41px] bg-black/[85.39%] text-end`}
      >
        <div className="flex flex-col items-end gap-[41px]">
          <button
            onClick={() => {
              setShowGallery(false);
            }}
            type="button"
            className="mt-[127px] text-[14px] font-bold tracking-[3px] text-white"
          >
            {titleButtonClose}
          </button>
          <Image className="size-fit" width={1} height={1} src={'/' + data.images.gallery} alt={data.name} />
        </div>
      </div>
      <Navbar />
      <div className="mt-[100px] flex h-[624px] min-w-full justify-between">
        <div className="flex">
          <div className="relative size-fit">
            <Image
              className="h-[560px] w-[475px]"
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
        previousDisabled={indexProgress === 0}
        previousClicked={() => {
          if (dataJson[previousIndex]) {
            router.push(`/detail/${dataJson[previousIndex].name.replace(/ /g, '_')}`);
          }
        }}
        nextDisabled={indexProgress === dataJson.length - 1}
        nextClicked={() => {
          if (dataJson[nextIndex]) {
            router.push(`/detail/${dataJson[nextIndex].name.replace(/ /g, '_')}`);
          }
        }}
      />
    </div>
  );
}
