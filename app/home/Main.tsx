import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

const Column = ({ array }: { array: number[] }) => (
  <div className="flex flex-col gap-[40px]">
    {dataJson.map((data, index) => {
      if (array.includes(index))
        return (
          <div className="relative" key={index}>
            <Image src={data.images.thumbnail} width={10} height={10} className="size-fit" alt={data.name} />
            <div className="absolute inset-0 flex size-full flex-col justify-end px-[32px] pb-[33px] text-white">
              <h2>{data.name}</h2>
              <p>{data.artist.name}</p>
            </div>
          </div>
        );
    })}
  </div>
);
//[0, 4, 8, 11]
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
