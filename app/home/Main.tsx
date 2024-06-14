import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

const Column = ({ array }: { array: number[] }) => (
  <div className="flex flex-col gap-[40px]">
    {dataJson.map((data, index) => {
      if (array.includes(index))
        return (
          <div className="relative" key={index}>
            <Image src={data.images.thumbnail} width={10} height={10} className="size-fit" alt={data.name} />
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className="to absolute inset-0 flex min-h-[170px] w-full flex-col justify-end gap-[7px] self-end bg-gradient-to-b from-[#000000]/0 to-[#000000]/[84%] px-[32px] pb-[32px]">
              <h2 className="whitespace-pre-wrap text-pretty text-[24px] font-bold leading-[30px] text-white">
                {data.name}
              </h2>
              <p className="text-[13px] text-white/75">{data.artist.name}</p>
            </div>
          </div>
        );
    })}
  </div>
);
export default function Main() {
  return (
    <div className="mt-[40px] grid size-fit grid-cols-4 gap-[40px]">
      <Column array={[0, 4, 8, 11]}></Column>
      <Column array={[1, 5, 9, 12]}></Column>
      <Column array={[2, 6, 13]}></Column>
      <Column array={[3, 7, 10, 14]}></Column>
    </div>
  );
}
