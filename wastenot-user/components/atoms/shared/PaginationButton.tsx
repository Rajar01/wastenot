import { kanit } from "@/utils/fonts.ts";

interface PaginationButtonProps {
  totalPage: number;
  currentPage: number;
}

export default function PaginationButton({
  totalPage,
  currentPage,
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
        <span className="font-medium after:content-['\00a0']">{totalPage}</span>
        <span>Pages</span>
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
