'use client';
import { useContext } from 'react';
import { DataContext } from '@/app/_lib/DataContext';
import Column from './home/Column';

export default function Home() {
  const { array1, array2, array3, array4 } = useContext(DataContext);
  return (
    <main
      onLoad={() => {
        document.documentElement.classList.remove('preload');
      }}
      className="mt-[40px] grid size-fit gap-[40px] group-[.preload]:hidden md:grid-cols-2 xl:grid-cols-4"
    >
      <Column array={array1} />
      <Column classExtension="md:block hidden" array={array2} />
      <Column classExtension="xl:block hidden" array={array3} />
      <Column classExtension="xl:block hidden" array={array4} />
    </main>
  );
}
