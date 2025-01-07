import PaginationButton from "@/components/atoms/shared/PaginationButton.tsx";

import CauseCardGroup from "@/components/molecules/cause/CauseCardGroup.tsx";

export default function CausesPage() {
  return (
    <div className="bg-white">
      <div className="3xl:container mx-auto px-[312px] py-[100px]">
        <CauseCardGroup />
        <PaginationButton totalItem={100} totalPage={9} currentPage={1} />
      </div>
    </div>
  );
}
