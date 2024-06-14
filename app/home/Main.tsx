import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

export default function Main() {
  return (
    <div className="mt-[40px] grid size-fit grid-cols-4 gap-[40px]">
      <div className="relative flex size-full flex-col gap-[40px]">
        {dataJson.map((data, index) => {
          if ([0, 4, 8, 11].includes(index))
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
      <div className="flex flex-col gap-[40px]">
        {dataJson.map((data, index) => {
          if ([1, 5, 9, 12].includes(index))
            return (
              <Image
                key={index}
                src={data.images.thumbnail}
                width={0}
                height={0}
                className="size-fit object-scale-down"
                alt={data.name}
              />
            );
        })}
      </div>
      <div className="flex flex-col gap-[40px]">
        {dataJson.map((data, index) => {
          if ([2, 6, 13].includes(index))
            return (
              <Image
                key={index}
                src={data.images.thumbnail}
                width={0}
                height={0}
                className="size-fit object-scale-down"
                alt={data.name}
              />
            );
        })}
      </div>
      <div className="flex flex-col gap-[40px]">
        {dataJson.map((data, index) => {
          if ([3, 7, 10, 14].includes(index))
            return (
              <Image
                key={index}
                src={data.images.thumbnail}
                width={0}
                height={0}
                className="size-fit object-scale-down"
                alt={data.name}
              />
            );
        })}
      </div>
    </div>
  );
}
