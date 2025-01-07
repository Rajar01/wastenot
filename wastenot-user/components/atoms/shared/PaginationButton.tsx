import { kanit } from "@/utils/fonts.ts";

interface PaginationButtonProps {
  totalItem: number;
  totalPage: number;
  currentPage: number;
}

export default function PaginationButton({
  totalItem,
  totalPage,
  currentPage,
}: PaginationButtonProps) {
  return (
    <div
      className={`${kanit.className} flex items-center space-x-6 w-fit mx-auto`}
    >
      <div className="font-light text-l">
        <span className="after:content-['\00a0']">Showing</span>
        <span className="font-medium after:content-['\00a0']">
          {currentPage} to
        </span>
        <span className="font-medium after:content-['\00a0']">
          {totalPage} of
        </span>
        <span className="font-medium">{totalItem}</span>
      </div>
      <div className="text-l">
        <button className="px-6 py-3 bg-tertiary rounded-tl-lg rounded-bl-lg">
          Prev
        </button>
        <button className="px-6 py-3 bg-primary text-white rounded-tr-lg rounded-br-lg">
          Next
        </button>
      </div>
    </div>
  );
}
