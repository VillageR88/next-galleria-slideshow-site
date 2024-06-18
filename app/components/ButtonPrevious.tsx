export default function ButtonPrevious({ clicked, disabled }: { clicked(): void; disabled: boolean }) {
  return (
    <button
      className={`stroke-black transition-colors disabled:stroke-black/15 [&:not(:disabled)]:hover:stroke-black/50`}
      disabled={disabled}
      onClick={clicked}
      title="Previous slide"
      type="button"
    >
      <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" strokeWidth="2" />
          <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
        </g>
      </svg>
    </button>
  );
}
