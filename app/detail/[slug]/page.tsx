'use client';
import Gallery from './Gallery';
import Main from './Main';
import Footer from '@/app/detail/[slug]/Footer';
import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { DataContext } from '@/app/_lib/DataContext';

export default function Page() {
  const router = useRouter();
  const { setShowSlideshow, setLoadedImages } = useContext(DataContext);
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [pathname, setPathname] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const titleButtonClose = 'CLOSE';

  useEffect(() => {
    const decodedPathname = decodeURI(window.location.pathname.split('/')[2].replace(/_/g, ' '));
    setPathname(decodedPathname);
  }, []);

  const data = dataJson.find((item) => item.name === pathname);
  const indexProgress = dataJson.findIndex((item) => item.name === pathname);
  const previousIndex = indexProgress - 1;
  const nextIndex = indexProgress + 1;

  useEffect(() => {
    if (dataJson[previousIndex]) {
      router.prefetch(`/detail/${dataJson[previousIndex].name.replace(/ /g, '_')}`);
      if (indexProgress !== -1)
        setLoadedImages((prev) => {
          const newPrev = [...prev];
          newPrev[previousIndex] = (
            <Image
              className="h-[560px] max-w-[475px] xl:absolute"
              width={475}
              height={560}
              key={dataJson[previousIndex].name}
              src={dataJson[previousIndex].images.hero.large.slice(1)}
              alt={dataJson[previousIndex].name}
              priority
            />
          );

          return newPrev;
        });
    }
    if (dataJson[nextIndex]) {
      router.prefetch(`/detail/${dataJson[nextIndex].name.replace(/ /g, '_')}`);
      if (indexProgress !== -1)
        setLoadedImages((prev) => {
          const newPrev = [...prev];
          newPrev[nextIndex] = (
            <Image
              className="h-[560px] max-w-[475px] xl:absolute"
              width={475}
              height={560}
              key={dataJson[nextIndex].name}
              src={dataJson[nextIndex].images.hero.large.slice(1)}
              alt={dataJson[nextIndex].name}
            />
          );

          return newPrev;
        });
    }
  }, [indexProgress, nextIndex, previousIndex, router, setLoadedImages]);

  useEffect(() => {
    setProgress(((indexProgress + 1) / dataJson.length) * 100);
  }, [indexProgress]);

  useEffect(() => {
    setShowSlideshow(true);
  }, [setShowSlideshow]);

  if (!data) return null;

  return (
    <>
      <Gallery
        data={data}
        setShowGallery={setShowGallery}
        showGallery={showGallery}
        titleButtonClose={titleButtonClose}
      />
      <Main data={data} setShowGallery={setShowGallery} />
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
    </>
  );
}
