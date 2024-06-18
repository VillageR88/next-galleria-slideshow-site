import Logo from '@/app/components/Logo';
import ButtonSlideshow from '@/app/components/ButtonSlideshow';
import { ReactNode } from 'react';

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <div
      className={`z-0 flex min-h-dvh flex-col items-center justify-start pb-[17px] pt-[24px] font-libreBaskerville md:min-h-screen md:py-[40px] xl:p-[40px]`}
    >
      <nav className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between px-[40px] xl:px-0">
          <Logo />
          <ButtonSlideshow />
        </div>
        <div className="mt-[30px] w-full border-b border-[#E5E5E5] md:mt-[40px]"></div>
      </nav>
      {children}
    </div>
  );
}
