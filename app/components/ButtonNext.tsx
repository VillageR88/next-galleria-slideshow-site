'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import dataJson from '@/public/assets/data.json';
export default function ButtonNext({ nextIndex, disabled }: { nextIndex: number; disabled: boolean }) {
  useEffect(() => {
    const move = () => buttonRef.current?.classList.add('transition-colors');
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={buttonRef}
      className={`scale-75 stroke-black disabled:stroke-black/15 md:scale-100 [&:not(:disabled)]:hover:stroke-black/50`}
      disabled={disabled}
      title="Next slide"
      type="button"
    >
      <Link
        className={dataJson[nextIndex] ? 'pointer-events-auto' : 'pointer-events-none'}
        href={dataJson[nextIndex] ? `/detail/${dataJson[nextIndex].name.replace(/ /g, '_')}` : '#'}
      >
        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2" />
            <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
          </g>
        </svg>
      </Link>
    </button>
  );
}
