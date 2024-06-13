import Navbar from '@/app/home/Navbar';
import Main from '@/app/home/Main';

export default function Home() {
  return (
    <div
      className={`z-0 flex min-h-dvh flex-col items-center justify-start p-[40px] font-libreBaskerville sm:min-h-screen`}
    >
      <Navbar />
      <Main />
    </div>
  );
}
