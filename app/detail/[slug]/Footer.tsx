import ButtonNext from '@/app/components/ButtonNext';
import ButtonPrevious from '@/app/components/ButtonPrevious';
import type { DataJson } from '@/app/_lib/interfaces';

export default function Footer({
  progress,
  data,
  nextDisabled,
  previousDisabled,
  previousClicked,
  nextClicked,
}: {
  progress: number;
  data: DataJson;
  nextDisabled: boolean;
  previousDisabled: boolean;
  previousClicked(): void;
  nextClicked(): void;
}) {
  return (
    <footer className="mt-[75px] flex w-full flex-col">
      <div className="h-[2px] w-full bg-[#E5E5E5] xl:ml-[-40px] xl:w-[calc(100%+80px)]">
        <div style={{ width: `${progress.toString()}%` }} className="h-full bg-black"></div>
      </div>
      <div className="flex items-center justify-between px-[40px] py-[28px]">
        <div className="flex h-[47px] flex-col gap-[8px]">
          <h2 className="text-[18px] font-bold text-black">{data.name}</h2>
          <p className="text-[13px] text-black/[75.28%]">{data.artist.name}</p>
        </div>
        <div className="flex gap-[40px]">
          <ButtonPrevious disabled={previousDisabled} clicked={previousClicked} />
          <ButtonNext disabled={nextDisabled} clicked={nextClicked} />
        </div>
      </div>
    </footer>
  );
}
