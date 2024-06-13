import dataJson from '@/public/assets/data.json';
import Image from 'next/image';

export default function Main() {
  return (
    <div className="mt-[40px] grid size-full grid-cols-4 gap-[40px]">
      {dataJson.map((data, index) => {
        return (
          <div key={index} className="relative flex size-[400px] flex-col items-center justify-center gap-[20px]">
            <Image className="absolute object-scale-down" src={data.images.thumbnail} fill alt={data.name} />
            <h2 className="z-10 text-center text-lg text-white">{data.name}</h2>
            <p className="z-10 text-white">{data.artist.name}</p>
          </div>
        );
      })}
    </div>
  );
}
