'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import dataJson from '@/public/assets/data.json';

export const DataContext = createContext(
  {} as {
    showSlideshow: boolean;
    setShowSlideshow: Dispatch<SetStateAction<boolean>>;
    showGallery: boolean;
    setShowGallery: Dispatch<SetStateAction<boolean>>;
    array1: number[];
    array2: number[];
    array3: number[];
    array4: number[];
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [showGallery, setShowGallery] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      document.documentElement.classList.remove('hidden');
      if (path === '/') {
        setShowSlideshow(false);
      } else {
        setShowSlideshow(true);
      }
    }
  }, []);

  const [array1, setArray1] = useState<number[]>([0, 4, 8, 11]);
  const [array2, setArray2] = useState<number[]>([1, 5, 9, 12]);
  const array3 = [2, 6, 13];
  const array4 = [3, 7, 10, 14];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
    <DataContext.Provider
      value={{
        showSlideshow,
        setShowSlideshow,
        showGallery,
        setShowGallery,
        array1,
        array2,
        array3,
        array4,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
