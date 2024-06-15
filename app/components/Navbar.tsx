import Logo from '@/app/components/Logo';
import ButtonSlideshow from '@/app/components/ButtonSlideshow';

export default function Navbar() {
  return (
    <nav className="flex w-full flex-col">
      <div className="flex w-full justify-between">
        <Logo />
        <ButtonSlideshow />
      </div>
      <div className="mt-[40px] w-full border-b border-[#E5E5E5]"></div>
    </nav>
  );
}
