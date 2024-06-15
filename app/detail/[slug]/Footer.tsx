import ButtonNext from '@/app/components/ButtonNext';
import ButtonPrevious from '@/app/components/ButtonPrevious';

export default function Footer({
  progress,
  data,
  previousClicked,
  nextClicked,
}: {
  progress: number;
  data: {
    name: string;
    year: number;
    description: string;
    source: string;
    artist: {
      image: string;
      name: string;
    };
    images: {
      thumbnail: string;
      hero: {
        small: string;
        large: string;
      };
      gallery: string;
    };
  };
  previousClicked(): void;
  nextClicked(): void;
}) {
  return (
    <div className="mt-[75px] flex flex-col">
      <div className="ml-[-40px] h-[2px] w-[calc(100%+80px)] bg-[#E5E5E5]">
        <div style={{ width: `${progress.toString()}%` }} className="h-full bg-black"></div>
      </div>
      <div className="flex items-center justify-between px-[40px] py-[28px]">
        <div className="flex h-[47px] flex-col gap-[8px]">
          <h2 className="text-[18px] font-bold text-black">{data.name}</h2>
          <p className="text-[13px] text-black/[75.28%]">{data.artist.name}</p>
        </div>
        <div className="flex gap-[40px]">
          <ButtonPrevious clicked={previousClicked} />
          <ButtonNext clicked={nextClicked} />
        </div>
      </div>
    </div>
  );
}
