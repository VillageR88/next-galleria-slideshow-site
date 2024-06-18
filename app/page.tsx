'use client';
import Main from '@/app/home/Main';
import { useEffect, useContext } from 'react';
import { DataContext } from '@/app/_lib/DataContext';

export default function Home() {
  const { setShowSlideshow } = useContext(DataContext);
  useEffect(() => {
    setShowSlideshow(false);
  }, [setShowSlideshow]);

  return (
    <>
      <Main />
    </>
  );
}
