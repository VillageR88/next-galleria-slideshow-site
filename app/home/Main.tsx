import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

export default function Main() {
  return (
    <div className="mt-[40px] grid size-fit grid-cols-4 gap-[40px]">
      {dataJson.map((data, index) => {
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
  );
}
