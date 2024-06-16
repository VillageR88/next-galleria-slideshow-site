import Link from 'next/link';

export default function ButtonNext({ nextLink, disabled }: { nextLink: string | undefined; disabled: boolean }) {
  return (
    <button className={`stroke-black disabled:stroke-black/15`} disabled={disabled} title="Next slide" type="button">
      <Link href={nextLink ? nextLink : '#'}>
        <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" strokeWidth="2" />
            <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
          </g>
        </svg>
      </Link>
    </button>
  );
}
