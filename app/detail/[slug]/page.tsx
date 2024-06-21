import Gallery from './Gallery';
import Main from './Main';
import Footer from '@/app/detail/[slug]/Footer';
import dataJson from '@/public/assets/data.json';

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const titleButtonClose = 'CLOSE';
  const pathname = decodeURI(slug.replace(/_/g, ' '));
  const data = dataJson.find((item) => item.name === pathname);
  const indexProgress = dataJson.findIndex((item) => item.name === pathname);
  const previousIndex = indexProgress - 1;
  const nextIndex = indexProgress + 1;
  const progress = ((indexProgress + 1) / dataJson.length) * 100;
  if (!data) return null;
  return (
    <div className="size-full">
      <Gallery data={data} titleButtonClose={titleButtonClose} />
      <Main data={data} />
      <Footer
        data={data}
        progress={progress}
        previousDisabled={indexProgress === 0}
        previousIndex={previousIndex}
        nextIndex={nextIndex}
        nextDisabled={indexProgress === dataJson.length - 1}
      />
    </div>
  );
}

export function generateStaticParams() {
  return dataJson.map((item) => ({ params: { slug: item.name.replace(/ /g, '_') } }));
}
