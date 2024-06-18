import Logo from '@/app/components/Logo';
import ButtonSlideshow from '@/app/components/ButtonSlideshow';
import { ReactNode } from 'react';

export default function Navbar({ children }: { children: ReactNode }) {
  return (
    <div
      className={`z-0 flex min-h-dvh flex-col items-center justify-start p-[40px] font-libreBaskerville md:min-h-screen`}
    >
      <nav className="flex w-full flex-col">
        <div className="flex w-full items-center justify-between">
          <Logo />
          <ButtonSlideshow />
        </div>
        <div className="mt-[40px] w-full border-b border-[#E5E5E5]"></div>
      </nav>
      {children}
    </div>
  );
}
