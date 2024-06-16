'use client';
import { useContext } from 'react';
import { DataContext } from '../_lib/DataContext';

export default function ButtonSlideshow() {
  const { showSlideshow } = useContext(DataContext);
  const buttonTitle = showSlideshow ? 'STOP SLIDESHOW' : 'START SLIDESHOW';
  return (
    <button
      onClick={() => {
        console.log('START SLIDESHOW');
      }}
      className="text-[12px] font-bold tracking-[2.57px] text-[#7D7D7D]"
      type="button"
    >
      {buttonTitle}
    </button>
  );
}
