import { kanit } from "@/utils/fonts.ts";

interface PaginationButtonProps {
  lastPage: number;
  currentPage: number;
  isPrevBtnDisabled: boolean;
  isPNextBtnDisabled: boolean;
  onPrevBtnClick: () => void;
  onNextBtnClick: () => void;
}

export default function PaginationButton({
  lastPage,
  currentPage,
  isPrevBtnDisabled,
  isNextBtnDisabled,
  onPrevBtnClick,
  onNextBtnClick,
}: PaginationButtonProps) {
  return (
    <div
      className={`${kanit.className} flex items-center space-x-6 w-fit mx-auto`}
    >
      <div className="font-light text-l">
        <span className="after:content-['\00a0']">Showing page</span>
        <span className="font-medium after:content-['\00a0']">
          {currentPage}
        </span>
        <span className="after:content-['\00a0']">of</span>
        <span className="font-medium after:content-['\00a0']">{lastPage}</span>
        <span>Pages</span>
      </div>
      <div className="text-l">
        <button
          disabled={isPrevBtnDisabled}
          onClick={onPrevBtnClick}
          className="disabled:opacity-50 px-6 py-3 bg-tertiary rounded-tl-lg rounded-bl-lg"
        >
          Prev
        </button>
        <button
          disabled={isNextBtnDisabled}
          onClick={onNextBtnClick}
          className="disabled:opacity-50 px-6 py-3 bg-primary text-white rounded-tr-lg rounded-br-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}
