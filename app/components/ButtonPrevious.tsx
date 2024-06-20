'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import dataJson from '@/public/assets/data.json';
export default function ButtonPrevious({ previousIndex, disabled }: { previousIndex: number; disabled: boolean }) {
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
      title="Previous slide"
      type="button"
    >
      <Link
        className={dataJson[previousIndex] ? 'pointer-events-auto' : 'pointer-events-none'}
        href={dataJson[previousIndex] ? `/detail/${dataJson[previousIndex].name.replace(/ /g, '_')}` : '#'}
      >
        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2" />
            <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
          </g>
        </svg>
      </Link>
    </button>
  );
}
